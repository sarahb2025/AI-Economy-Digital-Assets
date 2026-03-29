const categories = [
  { id: 'all', label: 'All' },
  { id: 'writing', label: 'Writing & Chat' },
  { id: 'image', label: 'Image & Design' },
  { id: 'coding', label: 'Coding' },
  { id: 'video', label: 'Video' },
  { id: 'research', label: 'Research' },
  { id: 'audio', label: 'Audio' },
]

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (id: string) => void
  counts: Record<string, number>
}

export function CategoryFilter({ activeCategory, onCategoryChange, counts }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`category-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[13px] font-medium transition-all duration-150 ${
            activeCategory === cat.id ? 'active' : 'border-[hsl(240_6%_88%)] text-[#374151]'
          }`}
        >
          {cat.label}
          {counts[cat.id] !== undefined && (
            <span
              className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-[#F3F4F6] text-[#9CA3AF]'
              }`}
            >
              {counts[cat.id]}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
