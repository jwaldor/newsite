import { createContext, useContext, useRef } from "react";



export const AppContext = createContext<{ state: Record<string, Record<string, string>>, setState: (state: Record<string, Record<string, string>>) => void }>({ state: {}, setState: () => { } });
export const useAppContext = () => useContext(AppContext);


// Add a state for the text box
// const { name, aNumber } = useControls({ name: 'World', aNumber: 0 })

// Leva panel configuration



// Modify the generateTags function
export const useGenerateTags = (component: string, state: Record<string, Record<string, string>>) => {
    const compref = useRef(null);
    return {
        style: state[component],
        ref: compref,
        'data-component-name': component // Add this line
    };
};