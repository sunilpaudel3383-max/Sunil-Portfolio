import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            Contact
          </p>
          <h2
            className="mb-4 max-w-2xl text-3xl font-normal md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Let's build something that lasts.
          </h2>
          <p className="mb-12 max-w-xl text-base text-gray-300 md:text-lg">
            Open to civil and structural engineering roles, collaborations, and
            consulting. Reach out through any of the channels below.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal>
            <a
              href={`mailto:${profile.email}`}
              className="liquid-glass flex items-center gap-4 rounded-xl border border-white/20 p-5 transition-colors hover:bg-white/5"
            >
              <Mail size={20} className="text-white/70" />
              <div>
                <div className="text-xs text-gray-400">Email</div>
                <div className="text-sm md:text-base">{profile.email}</div>
              </div>
            </a>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="liquid-glass flex items-center gap-4 rounded-xl border border-white/20 p-5 transition-colors hover:bg-white/5"
            >
              <Phone size={20} className="text-white/70" />
              <div>
                <div className="text-xs text-gray-400">Phone</div>
                <div className="text-sm md:text-base">{profile.phone}</div>
              </div>
            </a>
          </Reveal>
          <Reveal delay={160}>
            <div className="liquid-glass flex items-center gap-4 rounded-xl border border-white/20 p-5">
              <MapPin size={20} className="text-white/70" />
              <div>
                <div className="text-xs text-gray-400">Location</div>
                <div className="text-sm md:text-base">{profile.location}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass flex items-center gap-4 rounded-xl border border-white/20 p-5 transition-colors hover:bg-white/5"
            >
              <Linkedin size={20} className="text-white/70" />
              <div>
                <div className="text-xs text-gray-400">LinkedIn</div>
                <div className="text-sm md:text-base">Sunil Paudel</div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
