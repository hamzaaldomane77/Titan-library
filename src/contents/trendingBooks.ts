import { books, type Book } from './books'

export interface TrendingBook extends Book {
  borrowCount: number
  isTrending: boolean
  isPopular: boolean
}

// Helper function to get trending books (books with highest borrow count)
export const getTrendingBooks = (): TrendingBook[] => {
  // Simulate borrow counts for books
  const booksWithBorrowCount: TrendingBook[] = books.map((book, index) => ({
    ...book,
    borrowCount: Math.floor(Math.random() * 500) + 50, // Random borrow count between 50-550
    isTrending: index < 8, // First 8 books are trending
    isPopular: index >= 8 && index < 16 // Next 8 are popular
  }))

  // Sort by borrow count (highest first)
  return booksWithBorrowCount
    .sort((a, b) => b.borrowCount - a.borrowCount)
    .slice(0, 12) // Get top 12 books
}

export const trendingBooks: TrendingBook[] = [
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
    borrowCount: 523,
    isTrending: true,
    isPopular: false
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
    borrowCount: 487,
    isTrending: true,
    isPopular: false
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
    borrowCount: 456,
    isTrending: true,
    isPopular: false
  },
  {
    id: 7,
    title: 'Clean Code',
    titleEn: 'Clean Code',
    author: 'روبرت مارتن',
    authorEn: 'Robert C. Martin',
    categoryId: 3,
    description: 'دليل لكتابة كود نظيف وقابل للصيانة',
    descriptionEn: 'A guide to writing clean and maintainable code',
    isbn: 1007,
    available: true,
    year: 2008,
    pages: 464,
    borrowCount: 432,
    isTrending: true,
    isPopular: false
  },
  {
    id: 12,
    title: 'الجمهورية',
    titleEn: 'The Republic',
    author: 'أفلاطون',
    authorEn: 'Plato',
    categoryId: 5,
    description: 'حوار فلسفي عن العدالة والدولة المثالية',
    descriptionEn: 'A philosophical dialogue about justice and the ideal state',
    isbn: 1012,
    available: true,
    year: -380,
    pages: 416,
    borrowCount: 398,
    isTrending: true,
    isPopular: false
  },
  {
    id: 14,
    title: 'الأوديسة',
    titleEn: 'The Odyssey',
    author: 'هوميروس',
    authorEn: 'Homer',
    categoryId: 6,
    description: 'ملحمة شعرية كلاسيكية',
    descriptionEn: 'A classic epic poem',
    isbn: 1014,
    available: true,
    year: -800,
    pages: 541,
    borrowCount: 376,
    isTrending: true,
    isPopular: false
  },
  {
    id: 24,
    title: 'هاري بوتر وحجر الفيلسوف',
    titleEn: 'Harry Potter and the Philosopher\'s Stone',
    author: 'ج. ك. رولينغ',
    authorEn: 'J.K. Rowling',
    categoryId: 11,
    description: 'مغامرة سحرية للشباب',
    descriptionEn: 'A magical adventure for young readers',
    isbn: 1024,
    available: true,
    year: 1997,
    pages: 223,
    borrowCount: 365,
    isTrending: true,
    isPopular: false
  },
  {
    id: 25,
    title: 'The Little Prince',
    titleEn: 'The Little Prince',
    author: 'أنطوان دو سانت إكزوبيري',
    authorEn: 'Antoine de Saint-Exupéry',
    categoryId: 11,
    description: 'قصة خيالية محبوبة',
    descriptionEn: 'A beloved fantasy story',
    isbn: 1025,
    available: true,
    year: 1943,
    pages: 96,
    borrowCount: 354,
    isTrending: true,
    isPopular: false
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
    borrowCount: 342,
    isTrending: false,
    isPopular: true
  },
  {
    id: 8,
    title: 'The Pragmatic Programmer',
    titleEn: 'The Pragmatic Programmer',
    author: 'أندرو هانت',
    authorEn: 'Andrew Hunt',
    categoryId: 3,
    description: 'نصائح عملية للمطورين المحترفين',
    descriptionEn: 'Practical tips for professional developers',
    isbn: 1008,
    available: true,
    year: 1999,
    pages: 352,
    borrowCount: 321,
    isTrending: false,
    isPopular: true
  },
  {
    id: 26,
    title: 'Good to Great',
    titleEn: 'Good to Great',
    author: 'جيم كولينز',
    authorEn: 'Jim Collins',
    categoryId: 12,
    description: 'دراسة عن الشركات المتميزة',
    descriptionEn: 'A study of exceptional companies',
    isbn: 1026,
    available: true,
    year: 2001,
    pages: 320,
    borrowCount: 298,
    isTrending: false,
    isPopular: true
  },
  {
    id: 27,
    title: 'The Lean Startup',
    titleEn: 'The Lean Startup',
    author: 'إريك رايس',
    authorEn: 'Eric Ries',
    categoryId: 12,
    description: 'منهجية لبناء شركات ناشئة ناجحة',
    descriptionEn: 'A methodology for building successful startups',
    isbn: 1027,
    available: true,
    year: 2011,
    pages: 336,
    borrowCount: 287,
    isTrending: false,
    isPopular: true
  }
]

