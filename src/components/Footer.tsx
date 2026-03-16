import { Zap } from 'lucide-react'

export function Footer() {
  const links = {
    'Tools': ['Writing & Chat', 'Image & Design', 'Coding', 'Video', 'Audio', 'Productivity', 'Research'],
    'Company': ['About', 'Newsletter', 'Advertise', 'Contact'],
    'Legal': ['Privacy Policy', 'Terms of Use', 'Affiliate Disclosure'],
  }

  return (
    <footer className="border-t border-[hsl(240_6%_90%)] bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black">
                <Zap className="h-3.5 w-3.5 text-white" fill="currentColor" />
              </div>
              <span className="font-semibold text-[15px] text-black">AI Toolkit</span>
            </div>
            <p className="text-[13px] text-[#6B7280] leading-relaxed max-w-xs mb-5">
              Handpicked AI tools for professionals. Tested, reviewed, and updated every week so you can focus on what matters.
            </p>
            <p className="text-[11px] text-[#9CA3AF]">
              * This site contains affiliate links. We may earn a commission when you click through and make a purchase.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-black uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] text-[#6B7280] hover:text-black transition-colors duration-100"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[hsl(240_6%_90%)] pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-[#9CA3AF]">
            © {new Date().getFullYear()} AI Toolkit. All rights reserved.
          </p>
          <p className="text-[12px] text-[#9CA3AF]">
            Built for people who want AI that works.
          </p>
        </div>
      </div>
    </footer>
  )
}
