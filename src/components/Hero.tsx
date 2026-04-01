import { Search, ArrowRight } from 'lucide-react'

interface HeroProps {
  searchQuery: string
  onSearchChange: (q: string) => void
}

export function Hero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[hsl(240_6%_90%)] bg-white">
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
            <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-[1.04] tracking-tight mb-6 max-w-3xl">
              AI Tools That{' '}
              <span className="text-[hsl(210_100%_40%)]">Actually Work</span>
            </h1>

            {/* Sub */}
            <p className="animate-fade-in-up delay-200 text-lg text-[#6B7280] leading-relaxed max-w-2xl mb-10">
              We've tested and handpicked the best AI tools across writing, coding, design, video, and more. Skip the noise and get straight to the results.
            </p>

            {/* Search */}
            <div className="animate-fade-in-up delay-300 max-w-xl mb-10">
              <div className="flex items-center gap-2.5 border border-[hsl(240_6%_85%)] rounded-xl px-4 py-3 bg-white shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black/10 transition-all duration-150">
                <Search className="h-4.5 w-4.5 text-[#9CA3AF] shrink-0" style={{ width: '18px', height: '18px' }} />
                <input
                  type="text"
                  placeholder="Search tools: writing, coding, image generation..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="flex-1 text-sm text-black bg-transparent outline-none placeholder:text-[#9CA3AF]"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="text-xs text-[#6B7280] hover:text-black px-2 py-0.5 rounded bg-[#F3F4F6] transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap items-center gap-3">
              <a
                href="#tools"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white text-sm font-semibold hover:bg-[#111] transition-colors duration-150 active:scale-[0.97]"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#featured"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[hsl(240_6%_85%)] text-[#374151] text-sm font-semibold hover:border-black hover:text-black transition-colors duration-150"
              >
                View Featured Tools ›
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up delay-500 mt-12 flex flex-wrap items-center gap-8">
              {[
                { value: '50+', label: 'AI Tools Reviewed' },
                { value: '8', label: 'Categories' },
                { value: 'Weekly', label: 'Updates' },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-xl font-bold text-black">{stat.value}</div>
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
              <div className="absolute bottom-8 left-0 bg-white border border-[#E5E7EB] rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold text-black">Sarah Speaks</p>
                <p className="text-[11px] text-[#6B7280]">AI Tools Curator</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
