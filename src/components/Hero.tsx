import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[hsl(240_6%_90%)] bg-[#FAFAFA]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(0,0%,0%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,0%) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-0 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 items-end">

          {/* Left: copy */}
          <div className="pb-16 sm:pb-20">
            {/* Eyebrow badge */}
            <div className="animate-fade-in-up mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1.5 rounded-full tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                Curated AI Tools, Updated Weekly
              </span>
            </div>

            {/* Eyebrow label */}
            <p className="animate-fade-in-up delay-50 text-sm font-medium text-[#6B7280] mb-3 tracking-wide uppercase">
              Your Journey Begins With
            </p>

            {/* Main headline */}
            <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-[#111] leading-[1.04] tracking-tight mb-6 max-w-3xl">
              AI Tools That{' '}
              <span className="text-[hsl(210_100%_40%)]">Actually Work</span>
            </h1>

            {/* Sub */}
            <p className="animate-fade-in-up delay-200 text-lg text-[#6B7280] leading-relaxed max-w-2xl mb-10">
              Not a directory of 500 tools. This is the select kit we actually use every day, with our go-to prompts and setup tips to get you moving fast.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap items-center gap-3">
              <a
                href="#toolkit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#111] text-[#F5F5F5] text-sm font-semibold hover:bg-[#222] transition-colors duration-150"
              >
                Explore the Toolkit
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[hsl(240_6%_85%)] text-[#374151] text-sm font-semibold hover:border-[#111] hover:text-[#111] transition-colors duration-150"
              >
                Get the Newsletter ›
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up delay-500 mt-12 flex flex-wrap items-center gap-8">
              {[
                { value: '7', label: 'Tools in the Kit' },
                { value: '35', label: 'Go-to Prompts' },
                { value: 'Weekly', label: 'Updates' },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-xl font-bold text-[#111]">{stat.value}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sarah's photo */}
          <div className="hidden lg:flex items-end justify-center animate-fade-in-up delay-300">
            <div className="relative w-[380px]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F9DLQMDmFiPVlxtvVm2eBtiUPAbY2%2Fsarah30__46d93c63.png?alt=media&token=b07812b3-7e35-48e9-b3b4-06a4abf06c6f"
                alt="Sarah, AI Toolkit curator"
                className="w-full object-cover object-top"
                style={{ maxHeight: '560px', objectPosition: 'top center' }}
              />
              {/* Subtle floating credential badge */}
              <div className="absolute bottom-8 left-0 bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold text-[#111]">Sarah Speaks</p>
                <p className="text-[11px] text-[#6B7280]">AI Tools Curator</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
