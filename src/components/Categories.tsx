import { ArrowRight, Pen, Image, Code, Video, Search, Music, Zap, BarChart } from 'lucide-react'

const categories = [
  {
    icon: Pen,
    title: 'Writing',
    subtitle: 'Create & communicate',
    description: 'AI writing assistants, copywriting tools, and content generators that help you write better, faster.',
    color: '#0071e3',
    tools: ['ChatGPT', 'Claude', 'Jasper'],
    href: '#toolkit',
  },
  {
    icon: Image,
    title: 'Image & Design',
    subtitle: 'Visual creativity',
    description: 'Text-to-image generators, design assistants, and visual AI tools for creators and marketers.',
    color: '#5856d6',
    tools: ['Midjourney', 'DALL·E 3', 'Stable Diffusion'],
    href: '#toolkit',
  },
  {
    icon: Code,
    title: 'Coding',
    subtitle: 'Build faster',
    description: 'AI code editors, copilots, and developer tools that write, test, and explain code.',
    color: '#34c759',
    tools: ['Cursor', 'GitHub Copilot', 'v0'],
    href: '#toolkit',
  },
  {
    icon: Video,
    title: 'Video',
    subtitle: 'Motion & story',
    description: 'Text-to-video generators, AI editors, and avatar tools for content creators and marketers.',
    color: '#e63950',
    tools: ['Runway', 'Sora', 'HeyGen'],
    href: '#toolkit',
  },
  {
    icon: Search,
    title: 'Research',
    subtitle: 'Know more, faster',
    description: 'AI search engines, summarizers, and research assistants that surface insights in seconds.',
    color: '#20b2aa',
    tools: ['Perplexity', 'Gemini', 'NotebookLM'],
    href: '#toolkit',
  },
  {
    icon: Music,
    title: 'Audio & Voice',
    subtitle: 'Sound & speech',
    description: 'Voice cloning, text-to-speech, transcription, and AI music generation tools.',
    color: '#f59e0b',
    tools: ['ElevenLabs', 'Descript', 'Suno'],
    href: '#toolkit',
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-32 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="text-[#0071e3] font-bold tracking-widest uppercase mb-6 text-sm">
            Everything You Need
          </p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
            Browse by category
          </h2>
          <p className="text-foreground/60 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Six categories. Hundreds of tools. Find exactly what you need for your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <a
              key={cat.title}
              href={cat.href}
              className="ecosystem-card group p-10 bg-white rounded-[40px] border border-transparent hover:shadow-xl transition-all flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="icon-box w-16 h-16 rounded-[20px] flex items-center justify-center text-white mb-10 shadow-lg"
                style={{ backgroundColor: cat.color, boxShadow: `0 8px 16px ${cat.color}25` }}
              >
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight group-hover:text-[#0071e3] transition-colors">
                {cat.title}
              </h3>
              <p className="text-foreground/50 font-bold text-sm mb-6">{cat.subtitle}</p>
              <p className="text-foreground/60 font-medium leading-relaxed flex-grow mb-8">
                {cat.description}
              </p>
              <div className="mt-auto pt-6 border-t border-foreground/5 flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-1.5 bg-[#F5F5F7] rounded-full text-[10px] font-bold uppercase tracking-wider text-foreground/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
