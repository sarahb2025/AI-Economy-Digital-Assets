import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="newsletter" className="py-32 border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-black text-white rounded-[48px] p-12 md:p-20 relative overflow-hidden group">
          <div className="relative z-10 max-w-2xl">
            <p className="text-[#0071e3] font-bold tracking-widest uppercase mb-6 text-sm">
              Stay Ahead
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              AI Toolkit Newsletter
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-medium mb-10 leading-relaxed">
              Join 15,000+ professionals getting the best AI tool reviews, exclusive deals, and weekly roundups, straight to your inbox.
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 text-[#34c759] font-bold text-lg">
                <div className="w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center text-black text-sm">✓</div>
                You're on the list! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all"
                />
                <button
                  type="submit"
                  className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#0071e3]/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#0071e3]/30 transition-all duration-1000" />
        </div>
      </div>
    </section>
  )
}
