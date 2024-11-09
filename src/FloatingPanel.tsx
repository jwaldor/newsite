import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
// import OpenAI from 'openai';
import ReactDOMServer from 'react-dom/server';
import _ from 'lodash';
import { useAppContext } from './ContextHelpers';



// Updated FloatingPanel component
export const FloatingPanel = ({ visible, children }: { visible: boolean, children: React.ReactNode }) => {
    // const client = new OpenAI({
    //     apiKey: import.meta.env["VITE_OPENAI_API_KEY"], dangerouslyAllowBrowser: true  // This is the default and can be omitted
    // });
    // New function to convert object to CSS
    // interface CSSObject {
    //     [key: string]: string | CSSObject;
    // }
    // const convertObjectToCSS = (obj: CSSObject): string => {
    //     let css = '';
    //     for (const [key, value] of Object.entries(obj)) {
    //         if (typeof value === 'object') {
    //             css += `${key} {\n`;
    //             css += convertObjectToCSS(value);
    //             css += '}\n';
    //         } else {
    //             css += `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};\n`;
    //         }
    //     }
    //     return css;
    // };
    const [waiting, setWaiting] = useState(false);
    const [lastSentInputs, setLastSentInputs] = useState<string[]>([]);
    function addToLastSentInputs(input: string) {
        setLastSentInputs((prev) => [...prev, input].slice(0, 5));
    }

    function buildComponentTree(html: string): string {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');


        let elements = Array.from(doc.body.getElementsByTagName('*'));


        if (elements.length === 0) {
            console.warn("No elements found in the body. Checking entire document.");
            elements = Array.from(doc.documentElement.getElementsByTagName('*'));
            console.log("Number of elements after including entire document:", elements.length);
        }


        interface RecursiveRecord {
            [key: string]: RecursiveRecord;
        }
        const componentTree: RecursiveRecord = {};

        elements.forEach((element) => {
            const componentName = element.getAttribute('data-component-name');
            if (componentName) {
                const parentElement = element.parentElement;
                const parentComponentName = parentElement?.getAttribute('data-component-name');

                if (parentComponentName) {
                    if (!componentTree[parentComponentName]) {
                        componentTree[parentComponentName] = {};
                    }
                    componentTree[parentComponentName][componentName] = {};
                } else {
                    componentTree[componentName] = {};
                }
            }
        });


        const treeToString = (tree: RecursiveRecord, indent: string = ''): string => {
            let result = '';
            for (const [key, value] of Object.entries(tree)) {
                result += `${indent}${key}\n`;
                if (Object.keys(value).length > 0) {
                    result += treeToString(value, indent + '  ');
                }
            }
            return result;
        };

        const treeString = treeToString(componentTree);
        // console.log("Component Tree Structure:\n", treeString);

        return treeString;
    }
    const appOutputWithAttributes = buildComponentTree(ReactDOMServer.renderToString(children));

    // console.log(appOutputWithAttributes)
    // console.log("appOutputWithAttributes", appOutputWithAttributes);

    const { state, setState } = useAppContext(); // Access context

    const [floatingInput, setFloatingInput] = useState('');

    // Add these new state variables
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredComponents, setHoveredComponents] = useState<string[]>([]);
    // console.log("CSS", convertObjectToCSS(state));


    // Move handleMouseMove here
    const handleMouseMove = useCallback((event: React.MouseEvent) => {
        // setMousePosition({ x: event.clientX, y: event.clientY });

        const elements = document.elementsFromPoint(event.clientX, event.clientY);
        const componentNames = elements
            .map(el => el.getAttribute('data-component-name'))
            .filter((name): name is string => name !== null);

        setHoveredComponents(componentNames);
    }, []);


    function parseStringAsObject(str: string | undefined | null): Record<string, Record<string, string>> | undefined {
        if (!str || str === undefined || str === null) {
            console.error('Undefined passed to parseStringAsObject', str);
            return undefined;
        }
        try {
            if (str.startsWith('```json')) {
                str = str.replace("```json", "```").trim(); // Remove 'json' from the start and trim any whitespace
            }
            // Find the content between triple backticks
            const match = str.match(/```([\s\S]*?)```/);
            console.log("topparse", str);
            if (match && match[1]) {
                // Parse the content within the backticks
                return JSON.parse(match[1]);
            }
            throw new Error("no match between triple backticks found");
        } catch (error) {
            console.error('Failed to parse string as object:', error);
            return undefined;
        }
    }

    async function callStylerAPI({ input, state }: { input: string, state: Record<string, Record<string, string>> }) {
        const apiUrl = import.meta.env["VITE_STYLER_API_URL"];

        // Define your request payload
        const payload = {
            input,
            state
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST", // or use "GET", "PUT", etc., depending on your API setup
                headers: {
                    "Content-Type": "application/json",
                    // Include this if you have an API key configured
                    // "x-api-key": "YOUR_API_KEY"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Response from StylerAI:", data);
            return data.response; // Optional: return the data if you need to use it elsewhere
        } catch (error) {
            console.error("Error calling StylerAI API:", error);
        }
    }





    const handleSubmit = async () => {
        setWaiting(true);
        setFloatingInput('');
        console.log("User input: " + floatingInput + ", \n\n For context, here are the last 2 inputs from user: " + lastSentInputs.slice(-2).join('\n '));
        const mod = await callStylerAPI({ input: "User input: " + floatingInput + ", \n\n For context, last 2 inputs from user: \n" + lastSentInputs.slice(-2).join('\n '), state: state });
        console.log("mod", mod);
        const parsedObject = parseStringAsObject(mod);

        if (parsedObject) {
            const filteredObject = Object.keys(parsedObject)
                .filter(key => key in state)
                .reduce((obj: Record<string, Record<string, string>>, key) => {
                    obj[key] = parsedObject[key];
                    return obj;
                }, {});
            // Use Lodash's merge function for deep merging
            setState(_.merge({}, state, filteredObject));
        }
        addToLastSentInputs(floatingInput);
        // Example of using setState to update context state
        // setState(prevState => ({ ...prevState, newValue: floatingInput }));
        setWaiting(false);
    };

    return (
        <div onMouseMove={handleMouseMove}>
            {children}
            {visible && (
                <motion.div
                    drag
                    dragMomentum={false}
                    className="fixed top-5 right-5 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col gap-2 w-64"
                >
                    <textarea
                        value={floatingInput}
                        onChange={(e) => setFloatingInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault(); // Prevents new line on Enter
                                handleSubmit();
                            }
                        }}
                        placeholder="Enter styling instructions... e.g. make it retro, make the image transparent"
                        className="p-2 bg-gray-700 text-white rounded resize-none"
                        rows={2}
                    />
                    <button
                        onClick={handleSubmit}
                        className={`py-2 rounded ${waiting ? 'bg-gray-600 text-gray-400' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                        disabled={waiting}
                    >
                        Submit
                    </button>
                    <div
                        style={{ whiteSpace: 'pre-wrap', fontSize: '12px', color: '#388e3c', cursor: 'pointer' }}
                    >
                        {appOutputWithAttributes.split('\n').map((line, index) => (
                            <div
                                key={index}
                                onClick={() => setFloatingInput(prev => prev + ' ' + line.trim())}
                            >
                                {line}
                            </div>
                        ))}
                    </div>
                    {/* <div className="mt-1 min-h-8 text-[10px]">
                    To protect your app from exposing your OpenAI API key, remove this component before deploying.
                </div> */}
                    {hoveredComponents.length > 0 && (
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                color: 'white',
                                padding: '5px',
                                borderRadius: '3px',
                                fontSize: '12px',
                                pointerEvents: 'none',
                                zIndex: 9999,
                            }}
                        >
                            {hoveredComponents.join(', ')}
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};