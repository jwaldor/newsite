// import Resume from './resume'
import './Resume.css'; // Ensure to import the CSS file


function ShortenedApp() {
    return (
        <div className="w-full mx-auto p-2 bg-white shadow-lg min-h-screen">
            <header className="text-center mb-2">
                <h1 className="text-xl font-bold">JACOB WALDOR</h1>
                <p className="text-xs">New York, NY | P: (973) 951-7500 | jacobwaldor@gmail.com | <a href="https://jacobwaldor.com" className="underline text-black">jacobwaldor.com</a></p>
            </header>

            <section className="mb-1">
                <h2 className="text-lg font-semibold border-b border-gray-300 mb-1">SKILLS</h2>
                <div className="text-xs">
                    <div className="mb-0.5"><strong>Frontend:</strong> React, React Native, Tailwind CSS, Framer Motion, shadcn, React Router</div>
                    <div className="mb-0.5"><strong>Backend:</strong> Python, Docker, Express, Socket.IO</div>
                    <div className="mb-0.5"><strong>Full Stack & Auth:</strong> Clerk, Next.JS, TypeScript</div>
                    <div className="mb-0.5"><strong>Databases:</strong> Redis, Prisma, MongoDB</div>
                    <div className="mb-0.5"><strong>APIs:</strong> OpenAI, Anthropic, Stripe, DeepGram, GitHub, HubSpot</div>
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
                    <p className="text-xs">August 2024 – December 2024</p>
                    <ul className="list-disc list-inside text-xs">
                        <li>Developed an AI-powered flower arrangement marketplace using TypeScript, Next.js, Express, Prisma, and Stripe, enabling personalized customer-flower matching that provides an engaging and streamlined experience for users.
                        </li>
                        <li>Developed an interactive audio AI for emotional work using TypeScript, Next.JS, Prisma, Anthropic API, Deepgram API, Cartesia API, and Prisma</li>
                        <li>Shipped 15+ PRs weekly. Built AI-powered UI copilot (2nd place) and multiplayer party game Quipai (3rd place) in hackathons</li>
                    </ul>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-sm"><strong>Contract Software Engineer</strong></h3>
                        <span className="text-xs">Remote/Brooklyn, NY</span>
                    </div>
                    <ul className="list-disc list-inside text-xs">
                        <li><strong>Membrane</strong> (Sep - Oct 2024) | Augmented GitHub integration to handle org-wide events and PR reviews; created a Slack bot for end of day report reminders & a Discord bot for automating event posts</li>
                        <li><strong>ApplyAll</strong> (Sep 2024) | Built a TypeScript service that goes through resumes like a pro recruiter and annotates the resume with specific feedback, leveraging the OpenAI API</li>
                        <li><strong>Open Book Club</strong> (Oct - Nov 2024) | Used JavaScript, React, MongoDB, Tailwind CSS, and Express to develop notification center; implemented polling for real-time updates and JavaScript Intersection Observer API for lazy scrolling; used React hooks to resolve Twilio authentication issues</li>
                        <li><strong>Quiller</strong> (Nov - Dec 2024) | Using TypeScript, Prisma, and the HubSpot API, developed and implemented an automated user onboarding system integrating Hubspot with internal systems, reducing manual setup time by 80% and improving new user activation rates</li>
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
