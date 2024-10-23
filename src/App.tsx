import headshot from "./assets/FT.headshots_180824_jacob-17.jpg"
import linkedin from "./assets/LI-In-Bug.png"
import skeleton from "./assets/evil-skeleton-rpg-svgrepo-com (1).svg"
import { useEffect, useState } from 'react'

function App() {
  const firstPosition = { x: 50, y: 50 };
  const [svgPosition, setSvgPosition] = useState(firstPosition);
  const [direction, setDirection] = useState<'up' | 'down' | 'left' | 'right'>('right');
  const [traveledCoords, setTraveledCoords] = useState<{ x: number, y: number }[]>([]);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setDirection('up');
        break;
      case 'ArrowDown':
        setDirection('down');
        break;
      case 'ArrowLeft':
        setDirection('left');
        break;
      case 'ArrowRight':
        setDirection('right');
        break;
    }
    setTraveledCoords([...traveledCoords, svgPosition, svgPosition]);
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const computeRectangles = () => {
    const rectangles = traveledCoords.concat(svgPosition);
    const pairs = [];
    for (let i = 0; i < rectangles.length - 1; i += 2) {
      pairs.push([rectangles[i], rectangles[i + 1]]);
    }
    return pairs;
  }


  console.log(direction);
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
      <img
        src={skeleton}
        alt="Skeleton"
        style={{ position: 'absolute', left: svgPosition.x, top: svgPosition.y, width: '4%', height: '4%' }}
      />
      <header className="mb-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Jacob Waldor</h1>
          <ul className="flex space-x-4 text-sm">
            {/* <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#cv" className="hover:underline">Resume</a></li> */}
          </ul>
        </nav>
      </header>

      <main>
        <section className="flex items-start space-x-8 mb-8">
          {/* <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Emma Chen"
            width={150}
            height={150}
            className="rounded-full"
          /> */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="flex items-start space-x-8">
              <img
                src={headshot}
                alt="Emma Chen"
                className="rounded-full w-[20%] h-[10%] float-left mr-8"
              />
              <div>
                <p className="mb-4">
                  I'm a software developer with a passion for AI and machine learning.  I've worked across various roles combining software development with AI innovations.
                </p>
                <p className="mb-4">
                  My experience spans from building LLM-powered chatbots and text classification models to Jackbox-style party games and real-time UI copilots.
                </p>
                <p className="mb-4">
                  I love building, imagining, creating, and diving into problems that I am not sure I can solve.
                </p>

              </div>
            </div>
          </div>
        </section>



        <section id="projects" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className=" p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
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
              <p className="mb-2">Visual demonstration of a common computer science algorithms</p>
            </div>
            <div className=" p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
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
              <p className="mb-2">An AI-powered party game</p>
            </div>
          </div>
          <div className=" p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
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
            <p className="mb-2">A multiplayer pong game</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">
                <a href="mailto:jacobwaldor@gmail.com" className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div className="ml-[1px]">
                    jacobwaldor@gmail.com
                  </div>
                </a>
              </span>
            </li>

            <li>
              <span className="font-semibold">
                <a href="https://www.linkedin.com/in/jacob-waldor/" className="inline-flex items-center">
                  <div className="relative inline-block" style={{ left: '1px' }}>
                    <img src={linkedin} alt="LinkedIn" className="inline-block" width="20" height="20" />
                  </div>
                  <div className="ml-2">
                    LinkedIn
                  </div>
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
  )
}

export default App
