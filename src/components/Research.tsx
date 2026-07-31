import { ExternalLink } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { publications } from '../data'

export default function Research() {
  return (
    <Section
      id="research"
      label="Research & Publications"
      title="Published Research and Manuals."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 120}>
            <article className="liquid-glass group flex h-full flex-col overflow-hidden rounded-2xl border border-white/20">
              {/* Image placeholder */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={pub.image}
                  alt={pub.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-gray-200 backdrop-blur-sm">
                  {pub.type}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-sm font-medium leading-snug md:text-base">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {pub.venue} · {pub.year}
                </p>
                {pub.href && (
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    View publication <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
