import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data'

type Project = (typeof projects)[number]

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // As a pinned card gets covered by the next, it recedes slightly.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35])
  const isLast = index === total - 1

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `calc(6rem + ${index * 2.5}rem)` }}
    >
      <motion.div
        style={isLast ? undefined : { scale, opacity }}
        className="overflow-hidden rounded-3xl border border-white/15 bg-[#0b0b0c] shadow-2xl shadow-black/50"
      >
        <div className="grid md:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-5xl font-light text-white/15 md:text-6xl">
                  0{index + 1}
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.15em] text-gray-400">
                  {project.tag}
                </span>
              </div>
              <h3 className="mb-5 text-2xl font-medium md:text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
                {project.title}
              </h3>
              <ul className="space-y-3">
                {project.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-gray-300 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/50" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-gray-400">
              <ArrowUpRight size={16} /> Civil / Structural
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[240px] overflow-hidden bg-black md:min-h-[420px]">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            Projects
          </p>
          <h2
            className="mb-4 max-w-2xl text-3xl font-normal md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Selected engineering work.
          </h2>
          <p className="mb-16 max-w-xl text-base text-gray-400">
            Scroll to explore — each project stacks over the last.
          </p>
        </Reveal>

        {/* Stacking cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
