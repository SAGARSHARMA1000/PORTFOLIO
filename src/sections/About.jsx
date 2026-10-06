import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Sagar Sharma</p>
            <p className="subtext">
              I'm passionate about building scalable and user-centric web
              applications. I enjoy turning ideas into real-world products using
              modern web technologies.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - Engineering Philosophy & Architecture */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="relative flex items-center justify-center w-full h-full overflow-hidden"
          >
            {/* Centerpiece Philosophy Typography */}
            <div className="z-10 text-center pointer-events-none select-none px-4">
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-aqua mb-1.5">
                Engineering Philosophy
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-primary tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                CODE IS CRAFT
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-secondary text-neutral-400 max-w-xs sm:max-w-sm mx-auto">
                Building clean, testable, and highly resilient web architectures
              </p>
            </div>

            {/* Balanced Core Concept Badges */}
            <Card
              style={{ rotate: "-6deg", top: "7%", left: "5%" }}
              text="Clean Code"
              className="border-aqua/40 text-aqua/90 bg-aqua/10"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ rotate: "6deg", top: "7%", right: "5%" }}
              text="SOLID Principles"
              className="border-lavender/40 text-lavender bg-lavender/10"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ rotate: "5deg", bottom: "8%", left: "5%" }}
              text="RESTful APIs"
              className="border-royal/50 text-white/90 bg-royal/15"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ rotate: "-6deg", bottom: "8%", right: "5%" }}
              text="System Design"
              className="border-mint/40 text-mint bg-mint/10"
              containerRef={grid2Container}
              floating
            />

            {/* Perimeter Tech Stack Icons */}
            <Card
              style={{ top: "4%", left: "46%" }}
              image="assets/logos/react.svg"
              label="React"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ bottom: "6%", left: "46%" }}
              image="assets/logos/tailwindcss.svg"
              label="Tailwind CSS"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ top: "42%", left: "3%" }}
              image="assets/logos/nodejs.svg"
              label="Node.js"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ top: "42%", right: "3%" }}
              image="assets/logos/mongodb.svg"
              label="MongoDB"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ top: "22%", left: "26%" }}
              image="assets/logos/javascript.svg"
              label="JavaScript"
              className="hidden sm:flex"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ top: "22%", right: "26%" }}
              image="assets/logos/git.svg"
              label="Git"
              className="hidden sm:flex"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ bottom: "24%", left: "26%" }}
              image="assets/logos/express.svg"
              label="Express"
              className="hidden sm:flex"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ bottom: "24%", right: "26%" }}
              image="assets/logos/vitejs.svg"
              label="Vite"
              className="hidden sm:flex"
              containerRef={grid2Container}
              floating
            />
          </div>
        </div>

        {/* Grid 3 - Global Reach & Social/Resume Hub */}
        <div className="grid-black-color grid-3 relative overflow-hidden flex flex-col justify-between p-6 md:p-7">
          <div className="z-10 w-full md:w-[62%]">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-aqua">
              ● Global Presence
            </p>
            <h3 className="font-primary text-2xl sm:text-3xl font-bold text-white mt-1">
              Connect & Collaborate
            </h3>
            <p className="subtext mt-2 text-xs sm:text-sm">
              Open to worldwide remote engineering roles, freelance builds, and open-source contributions.
            </p>

            {/* Interactive Profiles & Resume Links */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/sagar-sharma-751943336"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sagar Sharma's LinkedIn profile"
                className="group/link inline-flex items-center gap-2 rounded-full border border-royal/50 bg-royal/15 px-3.5 py-1.5 text-xs font-medium text-white shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-royal hover:bg-royal/30 hover:shadow-[0_0_15px_rgba(92,51,204,0.4)]"
              >
                <img src="/assets/socials/linkedIn.svg" alt="" className="size-3.5" />
                <span>LinkedIn</span>
                <span className="text-lavender transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/SAGARSHARMA1000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sagar Sharma's GitHub profile"
                className="group/link inline-flex items-center gap-2 rounded-full border border-aqua/50 bg-aqua/15 px-3.5 py-1.5 text-xs font-medium text-white shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua hover:bg-aqua/30 hover:shadow-[0_0_15px_rgba(51,194,204,0.4)]"
              >
                <img src="/assets/logos/github.svg" alt="" className="size-3.5" />
                <span>GitHub</span>
                <span className="text-aqua transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
              </a>

              {/* Resume / CV */}
              <a
                href="https://drive.google.com/file/d/1Q5vl90tlFhhoNUqL6y7OdHu8kHuIsEQn/view?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View or download resume"
                className="group/link inline-flex items-center gap-2 rounded-full border border-coral/50 bg-gradient-to-r from-coral/25 via-lavender/20 to-royal/25 px-3.5 py-1.5 text-xs font-medium text-white shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:bg-coral/35 hover:shadow-[0_0_15px_rgba(234,72,132,0.4)]"
              >
                <svg className="size-3.5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Resume / CV</span>
                <span className="text-coral transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
              </a>
            </div>
          </div>

          {/* Interactive 3D Globe in Background / Side */}
          <figure className="absolute -right-20 -bottom-24 md:-right-8 md:-bottom-16 pointer-events-auto opacity-70 md:opacity-85 hover:opacity-100 transition-opacity scale-90 md:scale-100">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
