export interface Book {
  id: number
  title: string
  titleEn: string
  author: string
  authorEn: string
  categoryId: number
  description: string
  descriptionEn: string
  coverImage?: string
  // International Standard Book Number
  isbn?: number
  year?: number
  pages?: number
  available: boolean
}

export const books: Book[] = [
  // روايات (Category ID: 1)
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
    pages: 328
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
    available: false,
    year: 1942,
    pages: 123
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
    pages: 417
  },

  // علوم (Category ID: 2)
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
    pages: 502
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
    pages: 256
  },
  {
    id: 6,
    title: 'الكون الأنيق',
    titleEn: 'The Elegant Universe',
    author: 'بريان غرين',
    authorEn: 'Brian Greene',
    categoryId: 2,
    description: 'استكشاف نظرية الأوتار والفيزياء الحديثة',
    descriptionEn: 'Exploring string theory and modern physics',
    isbn: 1006,
    available: false,
    year: 1999,
    pages: 448
  },

  // تقنية (Category ID: 3)
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
    pages: 464
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
    available: false,
    year: 1999,
    pages: 352
  },
  {
    id: 9,
    title: 'Design Patterns',
    titleEn: 'Design Patterns',
    author: 'عصابة الأربعة',
    authorEn: 'Gang of Four',
    categoryId: 3,
    description: 'أنماط تصميم برمجية أساسية',
    descriptionEn: 'Essential software design patterns',
    isbn: 1009,
    available: true,
    year: 1994,
    pages: 395
  },

  // تاريخ (Category ID: 4)
  {
    id: 10,
    title: 'تاريخ الحضارات',
    titleEn: 'A History of Civilizations',
    author: 'فيرناند بروديل',
    authorEn: 'Fernand Braudel',
    categoryId: 4,
    description: 'دراسة شاملة لتاريخ الحضارات',
    descriptionEn: 'A comprehensive study of civilizations history',
    isbn: 1010,
    available: true,
    year: 1963,
    pages: 600
  },
  {
    id: 11,
    title: 'صعود وسقوط الإمبراطورية الرومانية',
    titleEn: 'The Decline and Fall of the Roman Empire',
    author: 'إدوارد جيبون',
    authorEn: 'Edward Gibbon',
    categoryId: 4,
    description: 'عمل كلاسيكي في التاريخ الروماني',
    descriptionEn: 'A classic work on Roman history',
    isbn: 1011,
    available: false,
    year: 1776,
    pages: 1200
  },

  // فلسفة (Category ID: 5)
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
    pages: 416
  },
  {
    id: 13,
    title: 'نقد العقل الخالص',
    titleEn: 'Critique of Pure Reason',
    author: 'إيمانويل كانط',
    authorEn: 'Immanuel Kant',
    categoryId: 5,
    description: 'عمل فلسفي أساسي في نظرية المعرفة',
    descriptionEn: 'A fundamental philosophical work in epistemology',
    isbn: 1013,
    available: false,
    year: 1781,
    pages: 856
  },

  // أدب (Category ID: 6)
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
    pages: 541
  },
  {
    id: 15,
    title: 'دون كيخوت',
    titleEn: 'Don Quixote',
    author: 'ميغيل دي سرفانتس',
    authorEn: 'Miguel de Cervantes',
    categoryId: 6,
    description: 'رواية كلاسيكية عن الفارس الحالم',
    descriptionEn: 'A classic novel about the dreaming knight',
    isbn: 1015,
    available: false,
    year: 1605,
    pages: 863
  },

  // طب (Category ID: 7)
  {
    id: 16,
    title: 'Gray\'s Anatomy',
    titleEn: 'Gray\'s Anatomy',
    author: 'هنري غراي',
    authorEn: 'Henry Gray',
    categoryId: 7,
    description: 'مرجع أساسي في علم التشريح',
    descriptionEn: 'An essential reference in anatomy',
    isbn: 1016,
    available: true,
    year: 1858,
    pages: 1242
  },
  {
    id: 17,
    title: 'Harrison\'s Principles of Internal Medicine',
    titleEn: 'Harrison\'s Principles of Internal Medicine',
    author: 'دينيس كاسبر',
    authorEn: 'Dennis Kasper',
    categoryId: 7,
    description: 'مرجع شامل في الطب الباطني',
    descriptionEn: 'A comprehensive reference in internal medicine',
    isbn: 1017,
    available: false,
    year: 1950,
    pages: 4000
  },

  // فنون (Category ID: 8)
  {
    id: 18,
    title: 'تاريخ الفن',
    titleEn: 'The Story of Art',
    author: 'إرنست غومبريتش',
    authorEn: 'E.H. Gombrich',
    categoryId: 8,
    description: 'مقدمة شاملة لتاريخ الفن',
    descriptionEn: 'A comprehensive introduction to art history',
    isbn: 1018,
    available: true,
    year: 1950,
    pages: 688
  },
  {
    id: 19,
    title: 'Ways of Seeing',
    titleEn: 'Ways of Seeing',
    author: 'جون بيرجر',
    authorEn: 'John Berger',
    categoryId: 8,
    description: 'دراسة نقدية للفن والتصوير',
    descriptionEn: 'A critical study of art and imagery',
    isbn: 1019,
    available: false,
    year: 1972,
    pages: 176
  },

  // رياضة (Category ID: 9)
  {
    id: 20,
    title: 'The Beautiful Game',
    titleEn: 'The Beautiful Game',
    author: 'ديفيد غولدبلات',
    authorEn: 'David Goldblatt',
    categoryId: 9,
    description: 'تاريخ كرة القدم العالمي',
    descriptionEn: 'A history of world football',
    isbn: 1020,
    available: true,
    year: 2006,
    pages: 544
  },
  {
    id: 21,
    title: 'Open',
    titleEn: 'Open',
    author: 'أندريه أغاسي',
    authorEn: 'Andre Agassi',
    categoryId: 9,
    description: 'سيرة ذاتية لنجم التنس',
    descriptionEn: 'Autobiography of a tennis star',
    isbn: 1021,
    available: false,
    year: 2009,
    pages: 400
  },

  // سير ذاتية (Category ID: 10)
  {
    id: 22,
    title: 'سيرة ذاتية',
    titleEn: 'The Autobiography of Benjamin Franklin',
    author: 'بنجامين فرانكلين',
    authorEn: 'Benjamin Franklin',
    categoryId: 10,
    description: 'سيرة ذاتية كلاسيكية',
    descriptionEn: 'A classic autobiography',
    isbn: 1022,
    available: true,
    year: 1791,
    pages: 186
  },
  {
    id: 23,
    title: 'Long Walk to Freedom',
    titleEn: 'Long Walk to Freedom',
    author: 'نيلسون مانديلا',
    authorEn: 'Nelson Mandela',
    categoryId: 10,
    description: 'سيرة ذاتية لرئيس جنوب أفريقيا',
    descriptionEn: 'Autobiography of South African president',
    isbn: 1023,
    available: false,
    year: 1994,
    pages: 656
  },

  // أطفال (Category ID: 11)
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
    pages: 223
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
    pages: 96
  },

  // إدارة أعمال (Category ID: 12)
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
    pages: 320
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
    pages: 336
  }
]

// Helper function to get books by category
export const getBooksByCategory = (categoryId: number): Book[] => {
  return books.filter(book => book.categoryId === categoryId)
}

// Helper function to get book by id
export const getBookById = (id: number): Book | undefined => {
  return books.find(book => book.id === id)
}

