
import { motion } from "motion/react";
import { accentStyles, projectMeta } from "./Project";

const ProjectDetails = ({ project, closeModal }) => {
  const meta = projectMeta[project.id] || projectMeta[3];
  const colors = accentStyles[meta.accent];
  const name = project.title.split(" –")[0];
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-[#02030b]/80 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div role="dialog" aria-modal="true" aria-labelledby="project-title" className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/15 bg-[#071022]/95 shadow-2xl shadow-black/60" initial={{ opacity: 0, scale: 0.78, y: 25 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-[10px] uppercase tracking-[0.25em] text-white/45 md:px-8"><span>Project Galaxy / Mission {String(project.id).padStart(2, "0")} / 05</span><button type="button" onClick={closeModal} aria-label="Close project details" className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua"><img src="assets/close.svg" alt="" className="size-4" /></button></div>
        <div className="grid gap-8 p-5 md:grid-cols-[1.05fr_0.95fr] md:p-8">
          <div><p className={`text-xs uppercase tracking-[0.28em] ${colors.text}`}>● Mission active</p><h3 id="project-title" className="mt-3 text-3xl font-bold text-white md:text-5xl">{name}</h3><p className="mt-2 text-sm text-white/55">{meta.category}</p><div className="mt-7 overflow-hidden rounded-xl border border-white/10 bg-black/20 shadow-xl"><img src={project.image} onError={(event) => { event.currentTarget.src = "/assets/projects/study.png"; }} alt={`${name} project interface`} className="aspect-video w-full object-cover" /></div></div>
          <div className="space-y-7"><div><p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Project telemetry</p><dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-white/10 py-4 text-sm"><div><dt className="text-[10px] uppercase tracking-widest text-white/35">Type</dt><dd className="mt-1 text-white/80">{meta.type}</dd></div><div><dt className="text-[10px] uppercase tracking-widest text-white/35">Role</dt><dd className="mt-1 text-white/80">Full Stack Developer</dd></div><div><dt className="text-[10px] uppercase tracking-widest text-white/35">Status</dt><dd className={`mt-1 ${colors.text}`}>● Project</dd></div><div><dt className="text-[10px] uppercase tracking-widest text-white/35">Stack</dt><dd className="mt-1 text-white/80">MERN</dd></div></dl></div>
            <div><p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Technology</p><div className="mt-3 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={`${tag.id}-${tag.name}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75"><img src={tag.path} alt="" className="size-4" />{tag.name}</span>)}</div></div>
            <div><p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Systems</p><p className="mt-2 text-sm leading-7 text-white/70">{meta.systems.join("  ·  ")}</p></div><p className="text-sm leading-6 text-white/60">{project.description}</p>
            {project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-3 rounded-full border ${colors.border} bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white/10`}>🚀 Launch project <span>→</span></a> : <span className="inline-flex rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/40">Project link unavailable</span>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
