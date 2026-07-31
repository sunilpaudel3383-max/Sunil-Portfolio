import { User, GraduationCap, MapPin, BadgeCheck } from 'lucide-react'
import Reveal from './Reveal'
import { profile, stats, education } from '../data'

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            About
          </p>
          <h2
            className="mb-12 max-w-2xl text-3xl font-normal md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Registered Civil Engineer Based in Kathmandu.
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Photo placeholder — replace the block below with your <img> */}
          <Reveal className="lg:col-span-2">
  <img
    src="/sunil.jpg"
    alt="Sunil Paudel"
    className="aspect-[4/5] w-full rounded-2xl object-cover"
  />
</Reveal>
            <div className="liquid-glass flex aspect-[4/5] w-full flex-col items-center justify-center rounded-2xl border border-white/20 text-center">
              <User size={56} className="mb-4 text-white/40" strokeWidth={1.25} />
              <p className="text-sm text-gray-400">Your photo goes here</p>
              <p className="mt-1 text-xs text-gray-500">Add it in the About section later</p>
            </div>
          </Reveal>

          {/* Bio + facts */}
          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="liquid-glass flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200">
                  <BadgeCheck size={16} className="text-white/70" /> Registered Civil Engineer
                </span>
                <span className="liquid-glass flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200">
                  <GraduationCap size={16} className="text-white/70" /> IOE, Thapathali Campus
                </span>
                <span className="liquid-glass flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200">
                  <MapPin size={16} className="text-white/70" /> {profile.location}
                </span>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={300}>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="liquid-glass rounded-xl border border-white/20 px-4 py-5"
                  >
                    <div className="text-2xl font-medium md:text-3xl">{s.value}</div>
                    <div className="mt-1 text-xs text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Education */}
        <Reveal delay={100}>
          <h3 className="mb-6 mt-16 text-xl font-medium md:text-2xl">Education</h3>
          <div className="space-y-4">
            {education.map((e) => (
              <div
                key={e.title}
                className="liquid-glass flex flex-col gap-2 rounded-xl border border-white/20 px-6 py-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="text-base font-medium md:text-lg">{e.title}</div>
                  <div className="text-sm text-gray-400">{e.place}</div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-300">{e.detail}</span>
                  <span className="text-gray-500">{e.period}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
