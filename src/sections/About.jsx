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
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        {/* <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="SPLINE"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SDLC"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/html5.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/vitejs.svg"
              containerRef={grid2Container}
            />
          </div>
        </div> */}

        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="relative flex items-center justify-center w-full h-full overflow-hidden"
          >
            {/* Main Text */}
            <div className="z-10 text-center pointer-events-none">
              <p className="text-4xl md:text-5xl font-semibold text-gray-500/80">
                CODE IS CRAFT
              </p>

            </div>

            {/* Development Concepts */}

            <Card
              style={{ rotate: "8deg", top: "2%", left: "5%" }}
              text="Design Principles"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ rotate: "0deg", top: "8%", left: "42%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ rotate: "-20deg", top: "2%", right: "5%" }}
              text="SOLID"
              containerRef={grid2Container}
              floating
            />

             <Card
              style={{ rotate: "-8deg", top: "45%", left: "5%" }}
              image="assets/logos/html5.svg"
              containerRef={grid2Container}
              floating
            />

            

            <Card
              style={{ rotate: "20deg", bottom: "10%", left: "60%" }}
              text="Clean Code"
              containerRef={grid2Container}
              floating
            />
            

            <Card
              style={{ rotate: "-20deg", top: "70%", left: "10%" }}
              text="REST API"
              containerRef={grid2Container}
              floating
            />
  

            {/* Tech Stack Icons */}

            
            <Card
              style={{ rotate: "-45deg", top: "2%", left: "10%" }}
              image="assets/logos/vitejs.svg"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ rotate: "20deg", top: "40%", right: "3%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ rotate: "-20deg", bottom: "2%", left: "5%" }}
              image="assets/logos/nodejs.svg"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ rotate: "5deg", bottom: "10%", right: "5%" }}
              image="assets/logos/mongodb.svg"
              containerRef={grid2Container}
              floating
            />

        
            <Card
              style={{ rotate: "30deg", top: "5%", left: "85%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
              floating
            />
            <Card
              style={{ rotate: "-40deg", bottom: "15%", right: "30%" }}
              image="assets/logos/express.svg"
              containerRef={grid2Container}
              floating
            />

            <Card
              style={{ rotate: "25deg", bottom: "5%", left: "40%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
              floating
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Currently based in Bhopal, India (IST), and comfortable
              collaborating with teams across different time zones.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
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
            <p className="headText">Teck Stack</p>
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
