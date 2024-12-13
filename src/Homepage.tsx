import { useState } from "react";
import headshot from "./assets/FT.headshots_180824_jacob-17.jpg";
import linkedin from "./assets/LI-In-Bug.png";
import { FloatingPanel } from "./FloatingPanel";
import { AppContext, useGenerateTags } from "./ContextHelpers";

function App() {
  const initialState = {
    mainContainerStyle: {
      maxWidth: '48rem',
      margin: 'auto',
      padding: '2rem 1rem',
      fontFamily: 'sans-serif',
    },
    welcomeHeadingStyle: {
      fontSize: '1.25rem',
      fontWeight: '600',
    },
    aboutMeHeadingStyle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    projectsHeadingStyle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    projectTitleStyle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    projectDescriptionStyle: {
      marginBottom: '0.5rem',
    },
    linksHeadingStyle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    paragraphStyle: {
      marginBottom: '1rem',
    },
    listStyle: {
      listStyleType: 'none',
      paddingLeft: '2px',
    },
  };

  const [state, setState] = useState<Record<string, Record<string, string>>>(initialState);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <FloatingPanel visible={isToggled}>
        <div {...useGenerateTags("mainContainerStyle", state)}>
          <header className="mb-8">
            <nav className="flex justify-between items-center">
              <h1 {...useGenerateTags("welcomeHeadingStyle", state)}>Jacob Waldor</h1>
            </nav>
          </header>

          <main>
            <section className="flex items-start space-x-8 mb-8">
              <div>
                <h2 {...useGenerateTags("aboutMeHeadingStyle", state)}>About Me</h2>
                <div className="flex items-start space-x-8">
                  <img
                    src={headshot}
                    alt="Jacob Waldor"
                    className="rounded-full w-[20%] h-[10%] float-left mr-8"
                    {...useGenerateTags("imageStyle", state)}
                  />
                  <div>
                    <p {...useGenerateTags("paragraphStyle", state)}>
                      I'm a software developer with a passion for AI and machine learning. I've worked across various roles combining software development with AI innovations.
                    </p>
                    <p {...useGenerateTags("paragraphStyle", state)}>
                      My experience spans from building LLM-powered chatbots and text classification models to Jackbox-style party games and real-time UI copilots.
                    </p>
                    <p {...useGenerateTags("paragraphStyle", state)}>
                      I love building, imagining, creating, and diving into problems that I am not sure I can solve.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="mb-8">
              <h2 {...useGenerateTags("projectsHeadingStyle", state)}>Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="p-4 rounded-lg">
                  <h3 {...useGenerateTags("projectTitleStyle", state)}>
                    <a href="https://algorithms.jacobwaldor.com" className="inline-block">
                      Algorithms in Motion
                    </a>
                    <a href="https://algorithms.jacobwaldor.com" className="ml-2 inline-block align-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative -top-[2px]">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </h3>
                  <p {...useGenerateTags("projectDescriptionStyle", state)} className="mb-2">Visual demonstration of common computer science algorithms</p>
                </div>
                <div className="p-4 rounded-lg">
                  <h3 {...useGenerateTags("projectTitleStyle", state)}>
                    StylingWiz
                    <label className="inline-flex items-center cursor-pointer ml-2">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isToggled} // Bind checked state
                        onChange={() => setIsToggled(!isToggled)} // Toggle state on change
                      />
                      <div className={`toggle-bg w-10 h-6 rounded-full shadow-inner bg-gray-300 relative ${isToggled ? 'bg-green-500' : ''}`}>
                        <div className={`absolute toggle-dot w-6 h-6 bg-white rounded-full shadow inset-y-0 transition ${isToggled ? 'right-0' : 'left-0'}`}></div>
                      </div>
                    </label>
                  </h3>
                  <p {...useGenerateTags("projectDescriptionStyle", state)} className="mb-2">Style with AI ;)</p>
                </div>
                <div className="p-4 rounded-lg">
                  <h3 {...useGenerateTags("projectTitleStyle", state)}>
                    <a href="https://quipai.onrender.com" className="inline-block">
                      Quipai
                    </a>
                    <a href="https://quipai.onrender.com" className="ml-2 inline-block align-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative -top-[2px]">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </h3>
                  <p {...useGenerateTags("projectDescriptionStyle", state)} className="mb-2">An AI-powered party game</p>
                </div>
                <div className="p-4 rounded-lg">
                  <h3 {...useGenerateTags("projectTitleStyle", state)}>
                    <a href="https://arxiv.org/abs/2209.11389" className="inline-block">
                      Probability Paper
                    </a>
                    <a href="https://arxiv.org/abs/2209.11389" className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </h3>
                  <p {...useGenerateTags("projectDescriptionStyle", state)} className="mb-2">Published paper on probability at Pomona College, "Limiting Distributions of Sums with Random Spectral Weights"</p>
                </div>
                <div className="p-4 rounded-lg">
                  <h3 {...useGenerateTags("projectTitleStyle", state)}>
                    <a href="https://multipong.onrender.com" className="inline-block">
                      Pong
                    </a>
                    <a href="https://multipong.onrender.com" className="ml-2 inline-block align-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative -top-[2px]">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </h3>
                  <p {...useGenerateTags("projectDescriptionStyle", state)} className="mb-2">A multiplayer pong game</p>
                </div>
                <div className="p-4 rounded-lg">
                  <h3 {...useGenerateTags("projectTitleStyle", state)}>
                    <a href="https://heart-and-stem.vercel.app" className="inline-block">
                      Heart & Stem
                    </a>
                    <a href="https://heart-and-stem.vercel.app" className="ml-2 inline-block align-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative -top-[2px]">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </h3>
                  <p {...useGenerateTags("projectDescriptionStyle", state)} className="mb-2">A romantic way to buy flowers</p>
                </div>
                <div className="p-4 rounded-lg">
                  <h3 {...useGenerateTags("projectTitleStyle", state)}>
                    <a href="https://felt-sense.vercel.app" className="inline-block">
                      Felt Sense
                    </a>
                    <a href="https://felt-sense.vercel.app" className="ml-2 inline-block align-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative -top-[2px]">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </h3>
                  <p {...useGenerateTags("projectDescriptionStyle", state)} className="mb-2">A voice AI for emotional work</p>
                </div>
                <div className="p-4 rounded-lg">
                  <h3 {...useGenerateTags("projectTitleStyle", state)}>
                    <a href="https://www.npmjs.com/package/mcp-api-connect" className="inline-block">
                      MCP API Connect
                    </a>
                    <a href="https://www.npmjs.com/package/mcp-api-connect" className="ml-2 inline-block align-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative -top-[2px]">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </h3>
                  <p {...useGenerateTags("projectDescriptionStyle", state)} className="mb-2">
                    Model Context Protocol (MCP) server for connecting to any REST API
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 {...useGenerateTags("linksHeadingStyle", state)}>Resources</h2>
              <ul {...useGenerateTags("listStyle", state)} className="space-y-2">
                <li>
                  <span className="font-semibold inline-flex items-center">
                    <a href="/resume" className="inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      Resume
                    </a>
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    <a href="mailto:jacobwaldor@gmail.com" className="inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <div className="ml-[1px]">jacobwaldor@gmail.com</div>
                    </a>
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    <a href="https://www.linkedin.com/in/jacob-waldor/" className="inline-flex items-center">
                      <div className="relative inline-block" style={{ left: '1px' }}>
                        <img src={linkedin} alt="LinkedIn" className="inline-block" width="20" height="20" />
                      </div>
                      <div className="ml-2">LinkedIn</div>
                    </a>
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    <a href="https://github.com/jwaldor" className="inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 98 96" fill="none" className="inline-block mr-2">
                        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f" />
                      </svg>
                      GitHub
                    </a>
                  </span>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </FloatingPanel>
    </AppContext.Provider>
  );
}

export default App;
