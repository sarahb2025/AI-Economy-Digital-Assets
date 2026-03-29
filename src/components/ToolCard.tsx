import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { type AITool, pricingConfig } from '../data/tools'

interface ToolCardProps {
  tool: AITool
  index?: number
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const pricing = pricingConfig[tool.pricing]
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [expanded, tool.howWeUseIt, tool.topTips])

  return (
    <article
      className="tool-card group relative flex flex-col rounded-xl border border-[hsl(240_6%_90%)] bg-[#FAFAFA] overflow-hidden"
      style={{ animationDelay: `${index * 40}ms` }}
    >
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
        <p className="text-[13px] text-[#6B7280] leading-relaxed mb-4">
          {tool.whatItDoes}
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

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center gap-1.5 text-[12px] font-semibold text-[#6B7280] hover:text-[#111] transition-colors duration-150 mb-3 self-start"
        >
          <span>How Sarah uses it + top prompts</span>
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Expandable breakdown */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: expanded ? `${contentHeight}px` : '0px' }}
        >
          <div ref={contentRef} className="pb-4">
            {/* How We Use It */}
            <div className="mb-4">
              <h4 className="text-[12px] font-bold text-[#374151] uppercase tracking-wide mb-1.5">
                How We Use It
              </h4>
              <p className="text-[13px] text-[#6B7280] leading-relaxed">
                {tool.howWeUseIt}
              </p>
            </div>

            {/* Top 5 Prompts & Tips */}
            {tool.topTips && tool.topTips.length > 0 && (
              <div>
                <h4 className="text-[12px] font-bold text-[#374151] uppercase tracking-wide mb-2">
                  Our Top 5 Prompts & Tips
                </h4>
                <ol className="space-y-1.5">
                  {tool.topTips.slice(0, 5).map((prompt, i) => (
                    <li key={i} className="flex gap-2 text-[13px] text-[#6B7280] leading-relaxed">
                      <span className="shrink-0 font-semibold text-[#374151]">{i + 1}.</span>
                      <span>{prompt}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => window.open(tool.url, '_blank', 'noopener,noreferrer')}
          className="w-full py-2.5 rounded-lg border border-[hsl(240_6%_85%)] text-[13px] font-semibold text-[#374151] hover:border-black hover:bg-black hover:text-white transition-all duration-150 mt-auto"
        >
          Try {tool.name} →
        </button>
      </div>
    </article>
  )
}
