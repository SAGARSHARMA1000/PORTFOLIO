import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const projectMeta = {
  1: { category: "E-Commerce Platform", type: "Full Stack Web Application", accent: "orange", systems: ["Products", "Cart", "Checkout", "Payments", "Admin"] },
  2: { category: "Contract Farming Platform", type: "Full Stack Web Application", accent: "emerald", systems: ["Marketplace", "Contracts", "Escrow", "Delivery", "Dashboards"] },
  3: { category: "EdTech Learning Platform", type: "Full Stack Web Application", accent: "blue", systems: ["Courses", "Authentication", "Payments", "Streaming", "Analytics"] },
  4: { category: "Travel Insurance System", type: "Web Application", accent: "violet", systems: ["Policies", "Premiums", "Claims", "Accounts", "REST API"] },
  5: { category: "Interactive Experience", type: "Frontend Experiment", accent: "cyan", systems: ["Parallax", "Animation", "Responsive UI", "3D", "Performance"] },
};

const accentStyles = {
  emerald: { planet: "from-emerald-300 via-emerald-600 to-emerald-950", glow: "shadow-[0_0_55px_rgba(52,211,153,0.42)]", text: "text-emerald-300", border: "border-emerald-300/30" },
  orange: { planet: "from-orange-200 via-orange-600 to-red-950", glow: "shadow-[0_0_55px_rgba(249,115,22,0.4)]", text: "text-orange-300", border: "border-orange-300/30" },
  blue: { planet: "from-sky-200 via-blue-600 to-indigo-950", glow: "shadow-[0_0_55px_rgba(59,130,246,0.42)]", text: "text-sky-300", border: "border-sky-300/30" },
  violet: { planet: "from-violet-200 via-violet-600 to-purple-950", glow: "shadow-[0_0_55px_rgba(139,92,246,0.42)]", text: "text-violet-300", border: "border-violet-300/30" },
  cyan: { planet: "from-cyan-200 via-cyan-600 to-blue-950", glow: "shadow-[0_0_55px_rgba(34,211,238,0.42)]", text: "text-cyan-300", border: "border-cyan-300/30" },
};

const Project = ({ project, index, position, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const meta = projectMeta[project.id] || projectMeta[3];
  const colors = accentStyles[meta.accent];
  const mission = String(index + 1).padStart(2, "0");
  const name = project.title.split(" –")[0];

  return (
    <motion.div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 max-md:static max-md:translate-x-0 max-md:translate-y-0"
      style={position}
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        type="button"
        aria-label={`Explore ${name}`}
        className="group relative flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050817]"
        onClick={() => onOpen(project)}
        animate={reducedMotion ? undefined : { y: [0, -7, 0], rotate: [0, 1, 0] }}
        transition={reducedMotion ? undefined : { duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className={`absolute -inset-5 rounded-full bg-white/5 blur-xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
        <span className={`relative flex items-center justify-center rounded-full bg-gradient-to-br ${colors.planet} ${colors.glow} ${index === 1 ? "size-36 md:size-48" : "size-28 md:size-36"} border border-white/30 transition-transform duration-300 group-hover:scale-110`}>
          <span className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.5),transparent_18%),radial-gradient(circle_at_70%_75%,rgba(0,0,0,0.35),transparent_50%)]" />
          <span className="absolute -inset-3 rounded-full border border-white/10 opacity-70" />
          <span className="relative max-w-[75%] text-center text-[10px] font-bold uppercase tracking-[0.2em] font-primary text-white drop-shadow md:text-xs">{name}</span>
        </span>
        <span className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] font-primary text-white/90">{name}</span>
        <span className={`mt-1 text-[10px] font-medium uppercase tracking-[0.2em] font-mono ${colors.text}`}>MISSION {mission}</span>
      </motion.button>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-full z-30 mt-4 w-64 -translate-x-1/2 rounded-xl border border-white/15 bg-[#081024]/90 p-4 text-left shadow-2xl backdrop-blur-xl max-md:hidden"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -6 }}
        transition={{ duration: 0.2 }}
      >
        <p className={`text-[10px] font-medium uppercase tracking-[0.24em] font-mono ${colors.text}`}>● Project detected</p>
        <p className="mt-2 text-lg font-bold font-primary text-white">{name}</p>
        <p className="mt-1 text-xs font-secondary text-white/55">{meta.category}</p>
        <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.16em] text-white/45">{project.tags.slice(0, 4).map((tag) => tag.name).join(" · ")}</p>
        <p className="mt-3 text-right text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-white">Explore project →</p>
      </motion.div>
    </motion.div>
  );
};

export { projectMeta, accentStyles };

export default Project;
