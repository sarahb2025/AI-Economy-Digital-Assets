import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Categories } from './components/Categories'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { ToolCard } from './components/ToolCard'
import { tools } from './data/tools'
import { ArrowRight } from 'lucide-react'
import { AccessGate, useAccess } from './components/AccessGate'

// Affiliate disclaimer strip
function Disclaimer() {
  return (
    <div className="bg-[#F5F5F7] border-b border-black/5 py-2 px-4 text-center">
      <p className="text-[11px] text-foreground/40 font-medium">
        This site contains affiliate links. We may earn a commission when you click through and purchase. This helps keep our reviews free.{' '}
        <a href="#" className="underline hover:text-foreground/70 transition-colors">Learn more</a>
      </p>
    </div>
  )
}

// Product bento grid
function ToolkitGrid() {
  const featured = tools.slice(0, 2)
  const row2 = tools.slice(2, 5)
  const row3 = tools.slice(5, 8)

  return (
    <section id="toolkit" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Cut through AI overwhelm
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl font-medium">Explore the toolkit</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Row 1: 2 featured cards */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 lg:col-span-7 animate-scale-in">
            <ToolCard tool={featured[0]} size="large" />
          </div>
          <div className="col-span-12 lg:col-span-5 animate-scale-in delay-100">
            <ToolCard tool={featured[1]} size="large" />
          </div>

          {/* Row 2: 3 medium cards */}
          {row2.map((tool, i) => (
            <div
              key={tool.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 animate-scale-in"
              style={{ animationDelay: `${(i + 2) * 80}ms` }}
            >
              <ToolCard tool={tool} size="medium" />
            </div>
          ))}

          {/* Row 3: 3 more medium cards */}
          {row3.map((tool, i) => (
            <div
              key={tool.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 animate-scale-in"
              style={{ animationDelay: `${(i + 5) * 80}ms` }}
            >
              <ToolCard tool={tool} size="medium" />
            </div>
          ))}

          {/* View all CTA card */}
          <div className="col-span-12 lg:col-span-4 animate-scale-in delay-700">
            <a
              href="#"
              className="product-card group relative rounded-[32px] overflow-hidden bg-[#F5F5F7] border border-black/5 cursor-pointer flex flex-col h-[550px] items-center justify-center text-center p-10 hover:bg-[#ebebeb] transition-colors"
            >
              <div className="mb-6 w-20 h-20 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                View All Tools
              </h3>
              <p className="text-foreground/50 text-lg font-medium leading-snug">
                50+ vetted AI tools across all categories
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Engagement model section
function EngagementModel() {
  const phases = [
    {
      icon: '🔍',
      iconBg: '#0071e3',
      phase: 'Phase 01',
      title: 'Discover',
      description: 'Browse our curated toolkit by category, use case, or pricing tier to find what fits your needs.',
    },
    {
      icon: '📋',
      iconBg: '#34c759',
      phase: 'Phase 02',
      title: 'Evaluate',
      description: 'Read our in-depth reviews, compare alternatives, and understand exactly what you\'re signing up for.',
    },
    {
      icon: '⚡',
      iconBg: '#5856d6',
      phase: 'Phase 03',
      title: 'Activate',
      description: 'Click through to get the best available deal. Some tools offer exclusive discounts via our links.',
    },
    {
      icon: '🚀',
      iconBg: '#ff9f0a',
      phase: 'Phase 04',
      title: 'Scale',
      description: 'Come back weekly for new tools, updated reviews, and the AI news that matters to your workflow.',
    },
  ]

  return (
    <section className="py-32 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="text-[#0071e3] font-bold tracking-widest uppercase mb-6 text-sm">Our Process</p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">How we work with you</h2>
          <p className="text-foreground/60 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            A simple, repeatable process to go from AI-curious to AI-powered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, i) => (
            <div
              key={phase.title}
              className="phase-card relative p-10 bg-white rounded-[40px] shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="icon-box w-16 h-16 rounded-[20px] flex items-center justify-center mb-10 text-2xl shadow-lg"
                style={{ backgroundColor: phase.iconBg }}
              >
                <span role="img" aria-label={phase.title}>{phase.icon}</span>
              </div>
              <p className="text-foreground/30 font-bold text-sm uppercase tracking-widest mb-4">{phase.phase}</p>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">{phase.title}</h3>
              <p className="text-foreground/60 font-medium leading-relaxed">{phase.description}</p>

              {/* Arrow connector (not last) */}
              {i < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-foreground/10">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
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
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-16 items-center">
        {/* Visual */}
        <div className="relative aspect-[4/5] md:aspect-square rounded-[48px] overflow-hidden bg-[#F5F5F7] group w-full max-w-[450px] animate-scale-in">
          <img
            alt="AI Toolkit curator"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-2xl font-bold tracking-tight mb-1">AI Toolkit</p>
            <p className="text-white/60 font-medium uppercase tracking-widest text-xs">Curated since 2024</p>
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
            <p>We're a team of builders, writers, and founders who use AI tools constantly. We test everything before recommending it.</p>
            <p>No sponsored rankings. No pay-to-play lists. Just honest reviews and affiliate links that keep this site running.</p>
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
        <EngagementModel />
        <Categories />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
