import { ArrowRight } from 'lucide-react'

const STORAGE_KEY = 'ai_toolkit_access'

export function useAccess() {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'granted'
}

export function AccessGate({ onUnlock }: { onUnlock: () => void }) {

  function handleUnlock() {
    localStorage.setItem(STORAGE_KEY, 'granted')
    onUnlock()
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-5 sm:px-8">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: copy + CTA */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1.5 rounded-full tracking-wide uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            Members Only
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold text-black leading-[1.08] tracking-tight mb-3">
            Start AI right.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl font-semibold text-black mb-6 leading-snug">
            Unlock my AI Toolkit.
          </p>

          {/* Tagline */}
          <p className="text-[15px] text-[#6B7280] leading-relaxed mb-8">
            Get instant access to AI tools that will transform the way you work.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleUnlock}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-[#111] transition-all"
          >
            Unlock My AI Toolkit
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Footer link */}
          <p className="text-[12px] text-[#9CA3AF] mt-6">
            Don't have access?{' '}
            <a href="#" className="text-black underline hover:text-[#374151] transition-colors">
              Purchase the AI Toolkit
            </a>
          </p>
        </div>

        {/* Right: Sarah's photo */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-[400px]">
            <div className="rounded-3xl overflow-hidden bg-[#F5F5F7] border border-[#E5E7EB]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F9DLQMDmFiPVlxtvVm2eBtiUPAbY2%2Fsarah30__46d93c63.png?alt=media&token=b07812b3-7e35-48e9-b3b4-06a4abf06c6f"
                alt="Sarah, AI Tools Curator"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-6 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold text-black">Sarah Speaks</p>
              <p className="text-[11px] text-[#6B7280]">AI Tools Curator</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
