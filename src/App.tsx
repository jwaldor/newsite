import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import headshot from "./assets/FT.headshots_180824_jacob-17.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
      <header className="mb-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Jacob Waldor</h1>
          <ul className="flex space-x-4 text-sm">
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#cv" className="hover:underline">Resume</a></li>
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
                  My experience spans from building GPT-4 powered chatbots and text classification models to Jackbox-style party games and real-time UI copilots.
                </p>
                <p className="mb-4">
                  With a strong foundation in theoretical math and hands-on experience with modern tech stacks, I bridge the gap between complex mathematical concepts and practical software solutions.
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
                Algorithms in Motion
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
                Quipai
                <a href="https://algorithms.jacobwaldor.com" className="ml-2 inline-block align-middle">
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
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Email:</span>
              <a href="mailto:jacobwaldor@gmail.com" className="ml-2 text-blue-600 hover:underline">jacobwaldor@gmail.com</a>
            </li>

            <li>
              <span className="font-semibold">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/jacob-waldor/" className="ml-2 text-blue-600 hover:underline">Profile</a>
            </li>

          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
