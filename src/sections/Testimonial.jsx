import { motion, useReducedMotion } from "motion/react";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const competencyVisuals = {
  "MERN Stack": "assets/logos/react.svg",
  "JWT & RBAC": "assets/logos/auth0.svg",
  "React & Tailwind": "assets/logos/tailwindcss.svg",
  "APIs & Databases": "assets/logos/nodejs.svg",
  "DSA Practice": "assets/logos/java.svg",
  "Continuous Learning": "assets/logos/javascript.svg",
  "Communication & Teamwork": "assets/logos/git.svg",
  "Clean Code Practices": "assets/logos/github.svg",
};

const ReviewCard = ({ icon, name, username, body, index }) => {
  const prefersReducedMotion = useReducedMotion();
  const logo = competencyVisuals[username];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
      className="group relative flex h-full w-[18rem] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-storm/90 via-indigo/90 to-midnight p-5 shadow-xl shadow-black/10 transition-colors duration-300 hover:border-lavender/50"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-lavender/20 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-lavender/[0.08] to-transparent" />

      <div className="relative flex items-start justify-between gap-3">
        <motion.div
          whileHover={prefersReducedMotion ? undefined : { rotate: 8, scale: 1.1 }}
          className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-2xl shadow-inner shadow-white/5"
          aria-hidden
        >
          {logo ? (
            <img src={logo} alt="" className="size-7 object-contain" />
          ) : (
            icon
          )}
        </motion.div>
        <span className="rounded-full border border-aqua/20 bg-aqua/10 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-aqua">
          0{index + 1}
        </span>
      </div>

      <div className="relative mt-5">
        <figcaption className="text-base font-semibold font-primary text-white">{name}</figcaption>
        <p className="mt-1 text-xs font-medium font-mono uppercase tracking-[0.16em] text-lavender">
          {username}
        </p>
      </div>
      <blockquote className="relative mt-4 text-sm font-secondary leading-6 text-neutral-400">
        {body}
      </blockquote>

      <div className="relative mt-auto flex items-center gap-1 pt-5">
        <span className="h-px w-8 bg-gradient-to-r from-aqua to-transparent" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
          capability
        </span>
      </div>
    </motion.figure>
  );
};

const FloatingLogo = ({ src, className, delay = 0 }) => (
  <motion.img
    src={src}
    alt=""
    aria-hidden
    initial={{ opacity: 0, scale: 0.6 }}
    whileInView={{ opacity: 0.8, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
    className={`absolute size-10 rounded-xl border border-white/10 bg-white/[0.06] p-2 shadow-lg shadow-lavender/10 ${className}`}
  />
);

export default function Testimonial() {
  return (
    <section className="relative mt-25 overflow-hidden py-4 md:mt-35" id="competencies">
      <div className="pointer-events-none absolute left-1/2 top-16 -z-10 size-[26rem] -translate-x-1/2 rounded-full bg-royal/10 blur-[100px]" />

      <div className="c-space">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <p className="mb-4 text-xs font-mono font-semibold uppercase tracking-[0.35em] text-aqua">
              What I bring to the table
            </p>
            <h2 className="max-w-xl font-primary text-4xl font-bold leading-tight text-white md:text-5xl">
              Core <span className="text-lavender">Competencies</span>
            </h2>
            <p className="mt-5 max-w-md text-sm font-secondary leading-7 text-neutral-400 md:text-base">
              A practical toolkit shaped by real products, problem-solving, and a
              constant curiosity to build better software.
            </p>

            <div className="mt-8 flex gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-bold font-primary text-white">08<span className="text-aqua">+</span></p>
                <p className="mt-1 text-xs font-mono uppercase tracking-widest text-neutral-500">focus areas</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-primary text-white">500<span className="text-aqua">+</span></p>
                <p className="mt-1 text-xs font-mono uppercase tracking-widest text-neutral-500">problems solved</p>
              </div>
            </div>

            <div className="relative mt-10 hidden h-32 w-64 lg:block">
              <div className="absolute left-8 top-4 flex size-24 items-center justify-center rounded-full border border-lavender/40 bg-lavender/10 shadow-[0_0_45px_rgba(122,87,219,0.3)]">
                <span className="text-3xl">✦</span>
              </div>
              <div className="absolute left-5 top-1/2 h-px w-48 bg-gradient-to-r from-transparent via-lavender/50 to-transparent" />
              <div className="absolute left-1/2 top-0 h-32 w-px bg-gradient-to-b from-transparent via-aqua/40 to-transparent" />
              <FloatingLogo src="assets/logos/react.svg" className="left-0 top-0" delay={0.1} />
              <FloatingLogo src="assets/logos/nodejs.svg" className="right-2 top-8" delay={0.25} />
              <FloatingLogo src="assets/logos/mongodb.svg" className="bottom-0 left-16" delay={0.4} />
            </div>
          </motion.div>

          <div className="relative min-w-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-primary to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-primary to-transparent md:w-24" />

            <div className="space-y-4">
              <Marquee pauseOnHover className="[--duration:28s]">
                {firstRow.map((review, index) => (
                  <ReviewCard key={review.username} {...review} index={index} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:32s]">
                {secondRow.map((review, index) => (
                  <ReviewCard key={review.username} {...review} index={index + firstRow.length} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

