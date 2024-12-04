// import Resume from './resume'
import './Resume.css'; // Ensure to import the CSS file


function ShortenedApp() {
    return (
        <div className="w-full mx-auto p-2 bg-white shadow-lg h-screen">
            <header className="text-center mb-2">
                <h1 className="text-xl font-bold">JACOB WALDOR</h1>
                <p className="text-xs">New York, NY | P: (973) 951-7500 | jacobwaldor@gmail.com | <a href="https://jacobwaldor.com" className="underline text-black">jacobwaldor.com</a></p>
            </header>

            <section className="mb-1">
                <h2 className="text-lg font-semibold border-b border-gray-300 mb-1">SKILLS</h2>
                <div className="text-xs">
                    <div className="mb-0.5"><strong>Frontend:</strong> React, Tailwind CSS, Framer Motion, shadcn, React Router</div>
                    <div className="mb-0.5"><strong>Backend:</strong> Python, Docker, Express, Socket.IO</div>
                    <div className="mb-0.5"><strong>Full Stack & Auth:</strong> Clerk, Next.JS, Typescript</div>
                    <div className="mb-0.5"><strong>Databases:</strong> Redis, Prisma, MongoDB</div>
                    <div className="mb-0.5"><strong>APIs:</strong> OpenAI, Anthropic, Stripe, DeepGram, GitHub</div>
                    <div className="mb-0.5"><strong>Deployment:</strong> Vercel, Railway, Render, AWS EC2, AWS S3, AWS Lambda Functions</div>
                    <div className="mb-0.5"><strong>Data Science:</strong> Sklearn, Pandas, Probability, Statistics, Bayesian Statistics, Linear Programming</div>
                </div>
            </section>
            <section className="mb-1">
                <h2 className="text-lg font-semibold border-b border-gray-300 mb-1">EXPERIENCE</h2>
                <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-sm"><strong>Software Developer</strong> | Fractal Development Accelerator</h3>
                        <span className="text-xs">Brooklyn, NY</span>
                    </div>
                    <p className="text-xs">August 2024 – Present</p>
                    <ul className="list-disc list-inside text-xs">
                        <li>Used Next.JS, WorkOS Authkit, Anthropic API, Deepgram API, and Cartesia API to develop voice AI for emotional work</li>
                        <li>Shipped 15+ PRs weekly. Built AI-powered UI copilot (2nd place) and multiplayer party game Quipai (3rd place) in hackathons</li>
                    </ul>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-sm"><strong>Software Developer</strong> | Open Book Club</h3>
                        <span className="text-xs">Brooklyn, NY</span>
                    </div>
                    <p className="text-xs">October 2024-present</p>
                    <ul className="list-disc list-inside text-xs">
                        <li>Used JavaScript, React, MongoDB, Tailwind CSS, Express, and Twilio to develop notification center for book club platform</li>
                        <li>Implemented polling to keep notifications up to date without refresh and used JavaScript Intersection Observer API for lazy scrolling</li>
                    </ul>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-sm"><strong>Software Developer</strong> | ApplyAll</h3>
                        <span className="text-xs">Brooklyn, NY</span>
                    </div>
                    <p className="text-xs">September 2024</p>
                    <ul className="list-disc list-inside text-xs">
                        <li>Built a TypeScript service that goes through resumes like a pro recruiter and annotates the resume with specific feedback, leveraging LLMs</li>
                    </ul>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-sm"><strong>Software Developer</strong> | Membrane</h3>
                        <span className="text-xs">Remote</span>
                    </div>
                    <p className="text-xs">September 2024 – October 2024</p>
                    <ul className="list-disc list-inside text-xs">
                        <li>Augmented the GitHub integration to handle org-wide events and PR reviews</li>
                        <li>Developed algorithm to pull types straight from Linear's schema to produce an API driver</li>
                        <li>Observed, reported, and tracked bugs and UX issues</li>
                        <li>Used platform create multiple useful integrations that illustrate its power to potential users</li>
                    </ul>
                </div>
                <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-sm"><strong>Machine Learning Research & Engineer</strong> | Dasion</h3>
                        <span className="text-xs">Remote</span>
                    </div>
                    <p className="text-xs">January 2024 – July 2024 (Full-time), Nov 2022 – Mar 2023 (Part-time), Jan – Apr 2022 (Intern)</p>
                    <ul className="list-disc list-inside text-xs">
                        <li>Built FastAPI endpoints for AWS S3 content serving and session management in Docker</li>
                        <li>Engineered LLM-powered chatbots with agentic behavior for interactive lessons and medical questionnaires</li>
                        <li>Developed text/video generation pipelines and JavaScript web apps for avatar-based chatbot interfaces</li>
                    </ul>
                </div>
                <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-sm"><strong>Machine Learning Intern</strong> | AppliedXL</h3>
                        <span className="text-xs">Brooklyn, NY</span>
                    </div>
                    <p className="text-xs">June 2022 – October 2022</p>
                    <ul className="list-disc list-inside text-xs">
                        <li>Used Python, Sklearn, and Pandas to upgrade text classification model accuracy by incorporating cutting-edge deep learning techniques</li>
                        <li>Developed classifier for extracting key text from press releases</li>
                    </ul>
                </div>
                <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-sm"><strong>Research Assistant</strong> | Harvey Mudd College</h3>
                        <span className="text-xs">Claremont, CA</span>
                    </div>
                    <p className="text-xs">October 2021 – December 2021</p>
                    <ul className="list-disc list-inside text-xs">
                        <li>Assisted Professor S. Martonosi with research that devises algorithms for maximizing the flow through a vertex in a graph</li>
                        <li>Formulated proofs and scripted in AMPL for testing different algorithms</li>
                    </ul>
                </div>
            </section>


            <section className="mb-1">
                <h2 className="text-lg font-semibold border-b border-gray-300 mb-1">EDUCATION</h2>
                <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-sm">POMONA COLLEGE</h3>
                        <span className="text-xs">Claremont, CA</span>
                    </div>
                    <p className="text-xs">B.A. in Mathematics, Magna Cum Laude (2022) | GPA: 3.96 | Phi Beta Kappa</p>
                </div>
            </section>
        </div>
    );
}

export default ShortenedApp;
