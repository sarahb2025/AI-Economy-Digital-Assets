export interface AITool {
  id: string
  name: string
  category: string
  categoryLabel: string
  tagline: string
  whatItDoes: string
  howWeUseIt: string
  topTips: string[]
  tags: string[]
  url: string
  logo: string
  logoColor: string
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Free Trial'
}

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'writing', label: 'Writing & Chat' },
  { id: 'image', label: 'Image & Design' },
  { id: 'coding', label: 'Coding' },
  { id: 'video', label: 'Video' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'research', label: 'Research' },
  { id: 'audio', label: 'Audio' },
]

export const tools: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'writing',
    categoryLabel: 'WRITING & CHAT',
    tagline: 'The AI that started the revolution.',
    whatItDoes:
      'The most versatile AI assistant available. ChatGPT handles everything from drafting emails and brainstorming content ideas to analyzing data, writing code, and building custom GPTs for repeatable workflows. With GPT-4o, it processes text, images, and files in one conversation.',
    howWeUseIt:
      "This is our daily driver. We use it for first-draft content, rewriting client briefs, summarizing long documents, and building custom GPTs that handle repetitive tasks like social post formatting and email sequences. It's the first tool we open every morning.",
    topTips: [
      "Start with: 'Act as [specific role]. Your task is [specific outcome]. Here's the context: [paste details]'",
      'Use Custom Instructions to set your default tone, industry, and output format so every chat starts dialed in',
      "Upload documents directly and ask 'Summarize the key takeaways and list 3 action items'",
      'Build a Custom GPT for your most repeated task. Name it, give it a system prompt, and pin it',
      "End prompts with 'Format as bullet points' or 'Give me a table' to get clean, usable output immediately",
    ],
    tags: ['Chat', 'Writing', 'Code', 'Analysis'],
    url: '#affiliate-chatgpt',
    logo: 'G',
    logoColor: '#10A37F',
    pricing: 'Freemium',
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'writing',
    categoryLabel: 'WRITING & CHAT',
    tagline: 'Long-context reasoning that thinks before it speaks.',
    whatItDoes:
      "Anthropic's AI assistant built for deep thinking. Claude excels at long-form writing, nuanced analysis, and working with large documents (up to 200K tokens). It's the best at following complex instructions and producing careful, well-reasoned output.",
    howWeUseIt:
      "We reach for Claude whenever a task needs real depth. Strategy documents, competitive analyses, detailed content briefs, and anything where we need the AI to think step-by-step rather than just generate. It's also our go-to for reviewing and improving existing copy.",
    topTips: [
      "Paste your entire document and ask 'What are the 3 weakest arguments here and how would you strengthen them?'",
      'Use the Projects feature to upload reference files and keep context across multiple conversations',
      "For writing tasks, give Claude a style reference: 'Match the tone and structure of this example: [paste]'",
      "Ask Claude to 'think step by step' for complex reasoning tasks. It actually improves the output quality",
      "Use 'First, outline your approach. Then execute.' to see Claude's reasoning before it commits to an answer",
    ],
    tags: ['Chat', 'Analysis', 'Research', 'Writing'],
    url: '#affiliate-claude',
    logo: 'C',
    logoColor: '#CC785C',
    pricing: 'Freemium',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'image',
    categoryLabel: 'IMAGE & DESIGN',
    tagline: 'Turn words into stunning, artistic visuals.',
    whatItDoes:
      "The gold standard for AI image generation. Midjourney creates stunning, artistic visuals from text prompts, running through Discord. It's unmatched for creating brand visuals, social content, product mockups, and creative concepts that actually look professional.",
    howWeUseIt:
      "We use Midjourney for all our visual content: social media graphics, blog hero images, presentation visuals, and client mood boards. It's replaced stock photography for us almost entirely. We run it through Discord and batch-generate options for every project.",
    topTips: [
      "Structure prompts as: [subject], [style], [lighting], [mood], [camera angle]. For example, 'professional headshot, editorial photography, soft natural light, confident, medium close-up'",
      "Add '--ar 16:9' for widescreen, '--ar 9:16' for Stories/Reels, '--ar 1:1' for social posts",
      "Use '--stylize 250' for a balance of creativity and accuracy, or '--stylize 750' for maximum artistic flair",
      'Save your best prompts in a Discord channel called #prompt-library so your team can reuse them',
      "Add 'photorealistic, 8k, detailed' for realistic images or 'flat illustration, minimal, vector' for graphic styles",
    ],
    tags: ['Image Gen', 'Art', 'Design', 'Creative'],
    url: '#affiliate-midjourney',
    logo: 'M',
    logoColor: '#6366F1',
    pricing: 'Paid',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'coding',
    categoryLabel: 'CODING',
    tagline: 'The AI-first IDE loved by developers.',
    whatItDoes:
      "An AI-first code editor built on VS Code. Cursor understands your entire codebase and can write, edit, debug, and explain code with full project context. It's the fastest way to build software with AI, whether you're a developer or learning to code.",
    howWeUseIt:
      'We build all our web projects in Cursor. It handles everything from scaffolding new features to refactoring messy code to writing tests. The Composer feature lets us describe what we want in plain English and it writes the code across multiple files at once.',
    topTips: [
      "Use Cmd+K to highlight code and ask 'Refactor this to be more readable' or 'Add error handling'",
      "In Composer, be specific: 'Create a React component that displays a pricing table with 3 tiers, monthly/annual toggle, and a CTA button'",
      'Add a .cursorrules file to your project root with your coding standards so every suggestion follows your style',
      "Use '@codebase' in chat to let Cursor search your entire project for context before answering",
      "Start debugging with: 'This function returns undefined when [input]. Walk me through the logic and find the bug'",
    ],
    tags: ['IDE', 'Code Editor', 'AI Pair Programmer'],
    url: '#affiliate-cursor',
    logo: 'Cu',
    logoColor: '#16A34A',
    pricing: 'Freemium',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'research',
    categoryLabel: 'RESEARCH',
    tagline: 'Real-time search meets AI understanding.',
    whatItDoes:
      'A conversational search engine that combines AI with real-time web search. Perplexity finds, summarizes, and cites current information so you can research topics in minutes instead of hours. Every answer includes source links you can verify.',
    howWeUseIt:
      'This replaced Google for our research workflow. We use it for competitive analysis, market research, fact-checking content, and staying current on industry news. The Pro Search feature digs deeper and asks clarifying questions before giving a thorough answer.',
    topTips: [
      'Use Pro Search for any question that needs depth. It asks clarifying questions and searches multiple times before answering',
      "Start research sessions with: 'Give me a comprehensive overview of [topic] with recent data and cite all sources'",
      'Use Perplexity Collections to organize research by project or client — everything stays searchable',
      'Ask follow-up questions in the same thread to go deeper without losing context from earlier answers',
      "For competitive research: 'Compare [Company A] vs [Company B] — pricing, features, target market, recent news'",
    ],
    tags: ['Search', 'Research', 'Citations', 'Real-time'],
    url: '#affiliate-perplexity',
    logo: 'P',
    logoColor: '#14B8A6',
    pricing: 'Freemium',
  },
  {
    id: 'runway',
    name: 'Runway',
    category: 'video',
    categoryLabel: 'VIDEO',
    tagline: 'AI video generation and editing for creators.',
    whatItDoes:
      'AI-powered video generation and editing for creators. Runway lets you generate video from text or images, remove backgrounds, apply style transfers, and edit with powerful AI tools. Gen-3 Alpha produces some of the most realistic AI video available.',
    howWeUseIt:
      "We use Runway for social video content, animated thumbnails, and quick explainer clips. The text-to-video feature is great for concept videos when you don't have footage. We also use the background removal and style transfer for repurposing existing content.",
    topTips: [
      "For text-to-video, be cinematic: 'Slow dolly shot of a modern office, morning light streaming through windows, 4K, shallow depth of field'",
      'Start with an image input + motion prompt for more control: upload a still frame, then describe the movement you want',
      'Use Gen-3 Alpha Turbo for fast iterations and Gen-3 Alpha for final, high-quality renders',
      'Keep prompts under 3 sentences for best results. Describe the scene, the movement, and the mood',
      'Export at the highest resolution and trim in your regular editor — Runway is best for raw generation, not final cuts',
    ],
    tags: ['Video Gen', 'Editing', 'Text-to-Video'],
    url: '#affiliate-runway',
    logo: 'R',
    logoColor: '#EF4444',
    pricing: 'Freemium',
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'audio',
    categoryLabel: 'AUDIO',
    tagline: 'Ultra-realistic AI voice generation.',
    whatItDoes:
      'The most realistic AI voice generation available. ElevenLabs creates natural-sounding speech in 29 languages, clones voices with just a few minutes of audio, and powers everything from podcasts to audiobooks to app narration.',
    howWeUseIt:
      "We use ElevenLabs for voiceovers on video content, narrating blog posts as audio versions, and creating consistent brand voices for our clients' content. The voice cloning feature means we can scale audio content without booking studio time.",
    topTips: [
      'Clone your own voice with 3-5 minutes of clean audio (no background noise, consistent pace) for unlimited future use',
      "Use the 'Stability' slider: lower for more expressive/emotional reads, higher for consistent narration",
      'For long-form content, break scripts into paragraphs and generate each separately for more natural pacing',
      "Choose 'Eleven Multilingual v2' model for the most natural output, especially for non-English content",
      'Add [pause] markers in your text where you want natural breathing breaks — it sounds more human',
    ],
    tags: ['Voice AI', 'TTS', 'Voice Clone', 'Podcast'],
    url: '#affiliate-elevenlabs',
    logo: 'E',
    logoColor: '#F59E0B',
    pricing: 'Freemium',
  },
]

export const pricingConfig: Record<string, { label: string; color: string; bg: string }> = {
  Free: { label: 'Free', color: '#059669', bg: '#ECFDF5' },
  Freemium: { label: 'Freemium', color: '#0369A1', bg: '#EFF6FF' },
  Paid: { label: 'Paid', color: '#374151', bg: '#F9FAFB' },
  'Free Trial': { label: 'Free Trial', color: '#7C3AED', bg: '#F5F3FF' },
}
