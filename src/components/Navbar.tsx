import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data'
import ThemeToggle from './ThemeToggle'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-6 transition-all md:px-12 lg:px-16 ${
        scrolled ? 'pt-3' : 'pt-6'
      }`}
    >
      <nav className="liquid-glass mx-auto flex max-w-7xl items-center justify-between rounded-xl px-4 py-2">
        <a href="#top" className="text-xl font-semibold tracking-tight">
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100 md:inline-block"
        >
          Get in Touch
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="liquid-glass mx-auto mt-2 flex max-w-7xl flex-col rounded-xl px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-gray-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-white px-6 py-2 text-center text-sm font-medium text-black"
          >
            Get in Touch
          </a>
          <ThemeToggle />
        </div>
      )}
    </header>
  )
}
