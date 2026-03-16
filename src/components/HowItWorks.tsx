import { Search, BookOpen, Zap } from 'lucide-react'

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    subtitle: 'Find the right tool for the job',
    description: 'Browse our curated directory of AI tools, filtered by category, pricing, and use case. Every tool has been tested and reviewed for real-world value.',
    tags: ['Writing & Chat', 'Image & Design', 'Coding', 'Video'],
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Evaluate',
    subtitle: 'Honest reviews, no fluff',
    description: 'Each tool listing includes clear pricing details, use cases, and an honest tagline so you can quickly decide if it fits your workflow.',
    tags: ['Pricing Info', 'Use Cases', 'Honest Reviews'],
  },
  {
    number: '03',
    icon: Zap,
    title: 'Activate',
    subtitle: 'Start building with AI today',
    description: 'Click through to any tool, start your free trial, and begin integrating AI into your work. Updated weekly with the latest releases.',
    tags: ['Direct Links', 'Free Trials', 'Weekly Updates'],
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-[hsl(240_6%_90%)] bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[10px] font-semibold text-[#9CA3AF] tracking-widest uppercase mb-3">
            The Roadmap to AI Integration
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight tracking-tight max-w-lg">
              Discover. Evaluate. Activate.
            </h2>
            <p className="text-[14px] text-[#6B7280] max-w-xs">
              Three steps to finding the right AI tool for your workflow.
            </p>
          </div>
        </div>

        {/* Phases grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => {
            const Icon = phase.icon
            return (
              <div
                key={phase.number}
                className="bg-white rounded-2xl border border-[hsl(240_6%_88%)] p-7 hover:border-[hsl(240_6%_75%)] hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3F4F6]">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-xs font-semibold text-[#D1D5DB] tabular-nums">
                    Phase {phase.number}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-black mb-1">{phase.title}</h3>
                <p className="text-[13px] font-semibold text-[#374151] mb-2">{phase.subtitle}</p>
                <p className="text-[13px] text-[#6B7280] leading-relaxed mb-5">{phase.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F3F4F6] text-[#6B7280]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-[11px] font-medium text-[#059669]">System Ready</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
