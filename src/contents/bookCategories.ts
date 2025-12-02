export interface Category {
  id: number
  name: string
  nameEn: string
  icon: string
  color: string
  bgColor: string
}

export const bookCategories: Category[] = [
  {
    id: 1,
    name: 'روايات',
    nameEn: 'Novels',
    icon: '📚',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100'
  },
  {
    id: 2,
    name: 'علوم',
    nameEn: 'Science',
    icon: '🔬',
    color: 'text-green-600',
    bgColor: 'bg-green-50 hover:bg-green-100'
  },
  {
    id: 3,
    name: 'تقنية',
    nameEn: 'Technology',
    icon: '💻',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100'
  },
  {
    id: 4,
    name: 'تاريخ',
    nameEn: 'History',
    icon: '📜',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 hover:bg-amber-100'
  },
  {
    id: 5,
    name: 'فلسفة',
    nameEn: 'Philosophy',
    icon: '🤔',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 hover:bg-indigo-100'
  },
  {
    id: 6,
    name: 'أدب',
    nameEn: 'Literature',
    icon: '✍️',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 hover:bg-pink-100'
  },
  {
    id: 7,
    name: 'طب',
    nameEn: 'Medicine',
    icon: '⚕️',
    color: 'text-red-600',
    bgColor: 'bg-red-50 hover:bg-red-100'
  },
  {
    id: 8,
    name: 'فنون',
    nameEn: 'Arts',
    icon: '🎨',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 hover:bg-teal-100'
  },
  {
    id: 9,
    name: 'رياضة',
    nameEn: 'Sports',
    icon: '⚽',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 hover:bg-orange-100'
  },
  {
    id: 10,
    name: 'سير ذاتية',
    nameEn: 'Biography',
    icon: '👤',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 hover:bg-cyan-100'
  },
  {
    id: 11,
    name: 'أطفال',
    nameEn: 'Children',
    icon: '🧸',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 hover:bg-yellow-100'
  },
  {
    id: 12,
    name: 'إدارة أعمال',
    nameEn: 'Business',
    icon: '💼',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50 hover:bg-slate-100'
  }
]

