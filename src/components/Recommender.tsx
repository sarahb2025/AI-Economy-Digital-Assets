import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'roi-starter-kit',
    title: 'AI ROI Starter Kit',
    description:
      'A step-by-step framework to measure the real return on your AI tools. Includes ROI calculator, time-tracking templates, and a 30-day implementation plan.',
    tag: 'Framework',
    href: '#',
  },
  {
    id: 'geo-audit',
    title: 'GEO Audit',
    description:
      'A complete audit template for your Generative Engine Optimization. Find out how your brand shows up in AI search results and what to fix first.',
    tag: 'Audit',
    href: '#',
  },
  {
    id: 'ai-busy-people',
    title: 'AI for Busy People',
    description:
      'The no-fluff guide to using AI when you have zero spare time. 15-minute setups, copy-paste prompts, and workflows that save hours every week.',
    tag: 'Guide',
    href: '#',
  },
]

export function Recommender() {
  return (
    <section className="border-t border-[hsl(240_6%_90%)] bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[10px] font-semibold text-[#9CA3AF] tracking-widest uppercase mb-3">
            From Sarah
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight tracking-tight max-w-lg">
              Go deeper with these
            </h2>
            <p className="text-[14px] text-[#6B7280] max-w-xs">
              Resources we built to help you get real results from AI, faster.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group bg-[#111] rounded-2xl p-7 flex flex-col hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              <span className="inline-flex self-start text-[10px] font-bold text-[#9CA3AF] tracking-widest uppercase mb-5 px-2.5 py-1 rounded-md bg-[#222]">
                {product.tag}
              </span>

              <h3 className="text-xl font-bold text-[#F5F5F5] tracking-tight mb-3 leading-snug">
                {product.title}
              </h3>

              <p className="text-[14px] text-[#9CA3AF] leading-relaxed flex-1 mb-6">
                {product.description}
              </p>

              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#F5F5F5] group-hover:gap-3 transition-all duration-150">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
