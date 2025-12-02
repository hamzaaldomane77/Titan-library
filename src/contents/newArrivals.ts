import { type Book } from './books'

export interface NewArrival extends Book {
  isNew: boolean
  tagline?: string
  isFeatured?: boolean
}

// Get new arrivals - books added recently
export const newArrivals: NewArrival[] = [
  {
    id: 1,
    title: '1984',
    titleEn: '1984',
    author: 'جورج أورويل',
    authorEn: 'George Orwell',
    categoryId: 1,
    description: 'رواية ديستوبية كلاسيكية عن مجتمع مراقب',
    descriptionEn: 'A classic dystopian novel about a surveilled society',
    isbn: 1001,
    available: true,
    year: 1949,
    pages: 328,
    isNew: true,
    isFeatured: true,
    tagline: 'A timeless masterpiece that continues to resonate with readers today'
  },
  {
    id: 2,
    title: 'الغريب',
    titleEn: 'The Stranger',
    author: 'ألبير كامو',
    authorEn: 'Albert Camus',
    categoryId: 1,
    description: 'رواية فلسفية عن اللامعنى والوجود',
    descriptionEn: 'A philosophical novel about meaninglessness and existence',
    isbn: 1002,
    available: true,
    year: 1942,
    pages: 123,
    isNew: true,
    isFeatured: false
  },
  {
    id: 3,
    title: 'مئة عام من العزلة',
    titleEn: 'One Hundred Years of Solitude',
    author: 'غابرييل غارثيا ماركيز',
    authorEn: 'Gabriel García Márquez',
    categoryId: 1,
    description: 'رواية سحرية واقعية عن عائلة بونديا',
    descriptionEn: 'A magical realist novel about the Buendía family',
    isbn: 1003,
    available: true,
    year: 1967,
    pages: 417,
    isNew: true,
    isFeatured: false
  },
  {
    id: 4,
    title: 'نظرية التطور',
    titleEn: 'On the Origin of Species',
    author: 'تشارلز داروين',
    authorEn: 'Charles Darwin',
    categoryId: 2,
    description: 'كتاب أساسي في علم الأحياء والتطور',
    descriptionEn: 'A fundamental book in biology and evolution',
    isbn: 1004,
    available: true,
    year: 1859,
    pages: 502,
    isNew: true,
    isFeatured: false
  },
  {
    id: 5,
    title: 'تاريخ موجز للزمن',
    titleEn: 'A Brief History of Time',
    author: 'ستيفن هوكينغ',
    authorEn: 'Stephen Hawking',
    categoryId: 2,
    description: 'مقدمة شعبية للفيزياء والكون',
    descriptionEn: 'A popular introduction to physics and the universe',
    isbn: 1005,
    available: true,
    year: 1988,
    pages: 256,
    isNew: true,
    isFeatured: false
  },
  {
    id: 6,
    title: 'Clean Code',
    titleEn: 'Clean Code',
    author: 'روبرت مارتن',
    authorEn: 'Robert C. Martin',
    categoryId: 3,
    description: 'دليل لكتابة كود نظيف وقابل للصيانة',
    descriptionEn: 'A guide to writing clean and maintainable code',
    isbn: 1006,
    available: true,
    year: 2008,
    pages: 464,
    isNew: true,
    isFeatured: false
  }
]


export const getFeaturedBook = (): NewArrival | undefined => {
  return newArrivals.find(book => book.isFeatured) || newArrivals[0]
}

export const getSmallBooks = (): NewArrival[] => {
  return newArrivals.filter(book => !book.isFeatured).slice(0, 5)
}

