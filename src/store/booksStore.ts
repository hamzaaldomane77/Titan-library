import { create } from 'zustand'
import { books as allBooks, type Book } from '../contents/books'

interface BooksState {
  books: Book[]
  filteredBooks: Book[]
  currentPage: number
  itemsPerPage: number
  query: string
  setPage: (page: number) => void
  filterBooks: (query: string) => void
  reset: () => void
}

export const useBooksStore = create<BooksState>((set, get) => ({
  books: allBooks,
  filteredBooks: allBooks,
  currentPage: 1,
  itemsPerPage: 12,
  query: '',

  setPage: (page: number) => {
    const { filteredBooks, itemsPerPage } = get()
    const totalPages = Math.max(1, Math.ceil(filteredBooks.length / itemsPerPage))
    const safePage = Math.min(Math.max(page, 1), totalPages)
    set({ currentPage: safePage })
  },

  filterBooks: (query: string) => {
    const normalized = query.trim().toLowerCase()
    const base = get().books

    if (!normalized) {
      set({
        filteredBooks: base,
        query: '',
        currentPage: 1
      })
      return
    }

    const filtered = base.filter((book) => {
      const title = book.title?.toLowerCase() ?? ''
      const titleEn = book.titleEn?.toLowerCase() ?? ''
      const author = book.author?.toLowerCase() ?? ''
      const authorEn = book.authorEn?.toLowerCase() ?? ''
      const isbnStr = typeof book.isbn === 'number' ? String(book.isbn) : ''

      return (
        title.includes(normalized) ||
        titleEn.includes(normalized) ||
        author.includes(normalized) ||
        authorEn.includes(normalized) ||
        isbnStr.includes(normalized)
      )
    })

    set({
      filteredBooks: filtered,
      query,
      currentPage: 1
    })
  },

  reset: () => {
    set({
      books: allBooks,
      filteredBooks: allBooks,
      currentPage: 1,
      query: ''
    })
  }
}))


