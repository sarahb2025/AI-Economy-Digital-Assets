import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'All Tools', href: '#tools' },
    { label: 'Categories', href: '#categories' },
    { label: 'Featured', href: '#featured' },
    { label: 'Newsletter', href: '#newsletter' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(240_6%_90%)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-[60px] items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black">
              <Zap className="h-3.5 w-3.5 text-white" fill="currentColor" />
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-black">
              AI Toolkit
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[#6B7280] hover:text-black transition-colors duration-100 rounded-md hover:bg-[#F9FAFB]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#newsletter"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-[#111] transition-colors duration-150 active:scale-[0.97]"
            >
              Get Updates
            </a>
            <button
              className="md:hidden p-1.5 rounded-md text-[#6B7280] hover:text-black hover:bg-[#F9FAFB] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[hsl(240_6%_90%)] py-3 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex px-2 py-2.5 text-sm text-[#374151] hover:text-black hover:bg-[#F9FAFB] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#newsletter"
                className="flex items-center justify-center w-full py-2.5 rounded-lg bg-black text-white text-sm font-semibold"
              >
                Get Updates
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
