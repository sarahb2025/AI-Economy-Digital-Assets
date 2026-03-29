import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { Recommender } from './components/Recommender'
import { ToolCard } from './components/ToolCard'
import { tools } from './data/tools'
import { AccessGate, useAccess } from './components/AccessGate'

// Affiliate disclaimer strip
function Disclaimer() {
  return (
    <div className="bg-[#F5F5F7] border-b border-black/5 py-2 px-4 text-center">
      <p className="text-[11px] text-foreground/40 font-medium">
        Some tools on this site have affiliate links. We were using them before we knew there was a program. This helps keep the site free.{' '}
        <a href="#" className="underline hover:text-foreground/70 transition-colors">Learn more</a>
      </p>
    </div>
  )
}

// The select toolkit grid
function ToolkitGrid() {
  return (
    <section id="toolkit" className="py-24 bg-[#F9FAFB] overflow-hidden border-t border-[hsl(240_6%_90%)]">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="animate-fade-in-up">
          <p className="text-[10px] font-semibold text-[#9CA3AF] tracking-widest uppercase mb-3">
            The Recommended Toolkit
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            The tools we actually use
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl font-medium max-w-2xl">
            8 tools covering writing, research, code, image, video, audio, and productivity. Each one includes how we use it and our go-to prompts to get you moving fast.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <div
              key={tool.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <ToolCard tool={tool} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About section
function About() {
  return (
    <section id="about" className="py-32 bg-[#F9FAFB] overflow-hidden border-t border-[hsl(240_6%_90%)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-16 items-center">
        {/* Visual */}
        <div className="relative aspect-[4/5] md:aspect-square rounded-[48px] overflow-hidden bg-[#F5F5F7] group w-full max-w-[450px] animate-fade-in-up">
          <img
            alt="AI Toolkit curator"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-10 left-10 text-[#F5F5F5]">
            <p className="text-2xl font-bold tracking-tight mb-1">AI Toolkit</p>
            <p className="text-[#F5F5F5]/60 font-medium uppercase tracking-widest text-xs">Curated since 2024</p>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col animate-fade-in-up delay-200">
          <div className="w-16 h-16 bg-[#0071e3]/10 rounded-2xl flex items-center justify-center font-bold text-2xl text-[#0071e3] mb-8">
            AI
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-10 leading-[1.1]">
            Built by people who use AI every day
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-foreground/60 leading-relaxed font-medium mb-12">
            <p>We use every tool we recommend. This isn't a directory of 500 tools. It's the select kit we rely on every day to run our business.</p>
            <p>Some tools here have affiliate programs. That's a coincidence, not a strategy. We were using them well before we knew there was a program.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#toolkit"
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-all text-center"
            >
              Explore Tools ›
            </a>
            <a
              href="#newsletter"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-foreground rounded-full font-bold hover:bg-secondary/80 transition-all text-center"
            >
              Get the Newsletter ›
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [hasAccess, setHasAccess] = useState(useAccess)

  if (!hasAccess) {
    return <AccessGate onUnlock={() => setHasAccess(true)} />
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#0071e3]/20 selection:text-foreground">
      <Disclaimer />
      <Navbar />
      <main>
        <Hero />
        <ToolkitGrid />
        <HowItWorks />
        <About />
        <Recommender />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
