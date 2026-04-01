import { ArrowUpRight } from 'lucide-react'
import { type AITool, pricingConfig } from '../data/tools'

interface ToolCardProps {
  tool: AITool
  index?: number
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const pricing = pricingConfig[tool.pricing]

  return (
    <article
      className="tool-card group relative flex flex-col rounded-xl border border-[hsl(240_6%_90%)] bg-white cursor-pointer overflow-hidden"
      style={{ animationDelay: `${index * 40}ms` }}
      onClick={() => window.open(tool.url, '_blank', 'noopener,noreferrer')}
    >
      {/* Badge */}
      {tool.badge && (
        <div className="absolute top-3 right-3 z-10">
          <span
            className="text-[10px] font-bold px-2 py-1 rounded-md tracking-wide uppercase"
            style={{
              backgroundColor: tool.badge === "Editor's Pick" ? '#0369A1' : tool.badge === 'Trending' ? '#059669' : tool.badge === 'New' ? '#7C3AED' : '#DC2626',
              color: '#fff',
            }}
          >
            {tool.badge}
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Category label */}
        <div className="text-[10px] font-semibold text-[#9CA3AF] tracking-widest uppercase mb-3">
          {tool.categoryLabel}
        </div>

        {/* Header */}
        <div className="flex items-start gap-3 mb-3.5">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
            style={{ backgroundColor: tool.logoColor + '18', color: tool.logoColor, border: `1px solid ${tool.logoColor}28` }}
          >
            {tool.logo}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-[15px] text-black leading-snug truncate">
                {tool.name}
              </h3>
              <ArrowUpRight
                className="h-3.5 w-3.5 shrink-0 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              />
            </div>
            <span
              className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-md mt-0.5"
              style={{ color: pricing.color, backgroundColor: pricing.bg }}
            >
              {pricing.label}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium text-[#111] leading-snug mb-1.5">
          {tool.tagline}
        </p>

        {/* Description */}
        <p className="text-[13px] text-[#6B7280] leading-relaxed flex-1 mb-4">
          {tool.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-md bg-[#F3F4F6] text-[#6B7280] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            window.open(tool.url, '_blank', 'noopener,noreferrer')
          }}
          className="w-full py-2.5 rounded-lg border border-[hsl(240_6%_85%)] text-[13px] font-semibold text-[#374151] hover:border-black hover:bg-black hover:text-white transition-all duration-150"
        >
          Try {tool.name} →
        </button>
      </div>
    </article>
  )
}
