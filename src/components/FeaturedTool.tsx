import { ArrowRight, ExternalLink } from 'lucide-react'
import { type AITool, pricingConfig } from '../data/tools'

interface FeaturedToolProps {
  tool: AITool
}

export function FeaturedTool({ tool }: FeaturedToolProps) {
  const pricing = pricingConfig[tool.pricing]

  return (
    <div className="rounded-2xl border border-[hsl(240_6%_88%)] bg-white overflow-hidden shadow-sm">
      <div className="p-7 sm:p-8">
        {/* Category label */}
        <div className="text-[10px] font-semibold text-[#9CA3AF] tracking-widest uppercase mb-4">
          {tool.categoryLabel}
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Left */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-base font-bold"
                style={{ backgroundColor: tool.logoColor + '18', color: tool.logoColor, border: `1px solid ${tool.logoColor}30` }}
              >
                {tool.logo}
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-bold text-xl text-black">{tool.name}</h3>
                </div>
                <span
                  className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-md mt-1"
                  style={{ color: pricing.color, backgroundColor: pricing.bg }}
                >
                  {pricing.label}
                </span>
              </div>
            </div>

            <p className="font-semibold text-lg text-black leading-snug mb-2">
              {tool.tagline}
            </p>
            <p className="text-[14px] text-[#6B7280] leading-relaxed mb-5">
              {tool.whatItDoes}
            </p>

            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F3F4F6] text-[#6B7280]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-row sm:flex-col gap-3 sm:w-44 sm:items-stretch">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-white text-sm font-semibold hover:bg-[#111] transition-colors duration-150 text-center"
            >
              Try for Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-[hsl(240_6%_85%)] text-[#374151] text-sm font-semibold hover:border-black hover:text-black transition-colors duration-150 text-center"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
