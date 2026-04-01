import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="newsletter" className="border-t border-[hsl(240_6%_90%)] bg-[#F9FAFB]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-[10px] font-semibold text-[#6B7280] tracking-widest uppercase mb-4">
            Cutting Through the Chaos With
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight tracking-tight mb-4">
            AI that works.
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-relaxed mb-8">
            Get a weekly digest of the best new AI tools, honest reviews, and practical guides, delivered straight to your inbox. No hype, no spam.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-green-200 bg-green-50">
              <div className="h-7 w-7 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-green-800">You're in!</p>
                <p className="text-[13px] text-green-700">Check your inbox to confirm your subscription.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border border-[hsl(240_6%_85%)] bg-white text-sm text-black placeholder:text-[#9CA3AF] outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-all duration-150"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm font-semibold hover:bg-[#111] transition-colors duration-150 active:scale-[0.97] whitespace-nowrap"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <p className="text-xs text-[#9CA3AF] mt-3">
            Join 5,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
