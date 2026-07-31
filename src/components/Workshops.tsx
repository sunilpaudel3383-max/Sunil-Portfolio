import { GraduationCap } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { workshops } from '../data'

export default function Workshops() {
  return (
    <Section
      id="workshops"
      label="Workshops Attended"
      title="Continuous learning through hands-on training."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workshops.map((w, i) => (
          <Reveal key={w.title} delay={i * 100}>
            <div className="liquid-glass h-full rounded-2xl border border-white/20 p-6 md:p-8">
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <GraduationCap size={18} className="text-white/70" />
                </span>
                <span className="text-xs text-gray-500">{w.period}</span>
              </div>
              <h3 className="mb-1.5 text-base font-medium md:text-lg">{w.title}</h3>
              <p className="mb-3 text-sm text-gray-400">{w.org}</p>
              <p className="text-sm leading-relaxed text-gray-300">{w.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
