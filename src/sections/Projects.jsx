import { useEffect, useState } from "react";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";
import { myProjects } from "../constants";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

const stars = Array.from({ length: 42 }, (_, index) => ({
  left: `${(index * 37) % 100}%`, top: `${(index * 61) % 100}%`,
  size: index % 7 === 0 ? "size-1" : "size-0.5", delay: `${(index % 9) * 0.4}s`,
}));

const positions = [
  { left: "15%", top: "63%" },
  { left: "50%", top: "49%" },
  { left: "82%", top: "27%" },
  { left: "30%", top: "21%" },
  { left: "73%", top: "76%" },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 25, stiffness: 80 });
  const springY = useSpring(y, { damping: 25, stiffness: 80 });

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleMouseMove = (e) => {
    if (reducedMotion || window.innerWidth < 768) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - bounds.left - bounds.width / 2) / 28);
    y.set((e.clientY - bounds.top - bounds.height / 2) / 28);
  };

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(31,30,57,0.55),transparent_45%),linear-gradient(180deg,#030412_0%,#050817_55%,#030412_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        {stars.map((star, index) => <span key={index} className={`absolute ${star.size} animate-pulse rounded-full bg-white/60`} style={{ left: star.left, top: star.top, animationDelay: star.delay }} />)}
      </div>
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.35em] text-aqua">Selected systems / 05 missions</p>
        <h2 className="text-heading font-primary">Project Galaxy</h2>
        <p className="mt-3 text-lg font-secondary text-white/75">Explore the systems I&apos;ve built.</p>
        <p className="mt-1 text-sm font-secondary text-neutral-500">Selected projects, experiments, and production applications.</p>
      </motion.div>
      <div className="relative mt-10 min-h-[620px] overflow-hidden rounded-3xl border border-white/10 bg-black/10 md:min-h-[680px]">
        <motion.div className="absolute inset-0 max-md:hidden" style={{ x: springX, y: springY }}>
          <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 md:size-[30rem]" />
          <div className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 md:size-[21rem]" />
          <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua shadow-[0_0_35px_8px_rgba(51,194,204,0.3)]" />
          <div className="absolute left-[23%] top-[18%] text-white/60">✦</div><div className="absolute right-[18%] bottom-[17%] text-white/50">✦</div>
        </motion.div>
        <div className="relative z-10 flex min-h-[620px] flex-col justify-around gap-14 px-8 py-14 md:block md:min-h-[680px] md:p-0">
          {myProjects.slice(0, 5).map((project, index) => <Project key={project.id} project={project} index={index} position={positions[index]} onOpen={setSelectedProject} />)}
        </div>
        <p className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 md:block">Select a planet to open mission telemetry</p>
      </div>
      {selectedProject && <ProjectDetails project={selectedProject} closeModal={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projects;
