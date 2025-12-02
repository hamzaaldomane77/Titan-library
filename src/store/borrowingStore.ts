import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Book } from '../contents/books'
import { books } from '../contents/books'

export interface BorrowerInfo {
  fullName: string
  phone: string
  email: string
  idNumber?: string
  address?: string
}

export interface BorrowedBook extends Book {
  borrowerInfo: BorrowerInfo
  borrowedDate: string
  returnDate?: string
}

interface BorrowingState {
  selectedBookIds: number[]
  selectedBorrowedBookIds: number[]
  borrowedBooks: BorrowedBook[]
  isBorrowModalOpen: boolean
  isFeedbackModalOpen: boolean
  
  // Actions
  toggleBookSelection: (bookId: number, isAvailable: boolean) => void
  toggleBorrowedBookSelection: (bookId: number) => void
  clearSelection: () => void
  clearBorrowedSelection: () => void
  openBorrowModal: () => void
  closeBorrowModal: () => void
  openFeedbackModal: () => void
  closeFeedbackModal: () => void
  borrowBooks: (borrowerInfo: BorrowerInfo) => number
  returnBook: (bookId: number) => void
  returnSelectedBooks: () => void
  returnAllBooks: () => void
  loadBorrowedBooks: () => void
}

export const useBorrowingStore = create<BorrowingState>()(
  persist(
    (set, get) => ({
      selectedBookIds: [],
      selectedBorrowedBookIds: [],
      borrowedBooks: [],
      isBorrowModalOpen: false,
      isFeedbackModalOpen: false,

      toggleBookSelection: (bookId: number, isAvailable: boolean) => {
        if (!isAvailable) {
          return // Don't allow selection of unavailable books
        }

        const { selectedBookIds } = get()
        const isSelected = selectedBookIds.includes(bookId)

        if (isSelected) {
          set({
            selectedBookIds: selectedBookIds.filter((id) => id !== bookId)
          })
        } else {
          set({
            selectedBookIds: [...selectedBookIds, bookId]
          })
        }
      },

      clearSelection: () => {
        set({ selectedBookIds: [] })
      },

      toggleBorrowedBookSelection: (bookId: number) => {
        const { selectedBorrowedBookIds } = get()
        const isSelected = selectedBorrowedBookIds.includes(bookId)

        if (isSelected) {
          set({
            selectedBorrowedBookIds: selectedBorrowedBookIds.filter((id) => id !== bookId)
          })
        } else {
          set({
            selectedBorrowedBookIds: [...selectedBorrowedBookIds, bookId]
          })
        }
      },

      clearBorrowedSelection: () => {
        set({ selectedBorrowedBookIds: [] })
      },

      openFeedbackModal: () => {
        set({ isFeedbackModalOpen: true })
      },

      closeFeedbackModal: () => {
        set({ isFeedbackModalOpen: false })
      },

      openBorrowModal: () => {
        const { selectedBookIds } = get()
        if (selectedBookIds.length > 0) {
          set({ isBorrowModalOpen: true })
        }
      },

      closeBorrowModal: () => {
        set({ isBorrowModalOpen: false })
      },

      borrowBooks: (borrowerInfo: BorrowerInfo): number => {
        const { selectedBookIds, borrowedBooks } = get()
        
        const booksToBorrow = books.filter((book) =>
          selectedBookIds.includes(book.id) && book.available
        )

        const newBorrowedBooks: BorrowedBook[] = booksToBorrow.map((book) => ({
          ...book,
          borrowerInfo,
          borrowedDate: new Date().toISOString()
        }))

        const updatedBorrowedBooks = [...borrowedBooks, ...newBorrowedBooks]

        set({
          borrowedBooks: updatedBorrowedBooks,
          selectedBookIds: [],
          isBorrowModalOpen: false
        })

        return booksToBorrow.length
      },

      returnBook: (bookId: number) => {
        const { borrowedBooks, selectedBorrowedBookIds } = get()
        set({
          borrowedBooks: borrowedBooks.filter((book) => book.id !== bookId),
          selectedBorrowedBookIds: selectedBorrowedBookIds.filter((id) => id !== bookId)
        })
      },

      returnSelectedBooks: () => {
        const { borrowedBooks, selectedBorrowedBookIds } = get()
        set({
          borrowedBooks: borrowedBooks.filter((book) => !selectedBorrowedBookIds.includes(book.id)),
          selectedBorrowedBookIds: []
        })
      },

      returnAllBooks: () => {
        set({ 
          borrowedBooks: [],
          selectedBorrowedBookIds: []
        })
      },

      loadBorrowedBooks: () => {
        // This will be called on mount to load from localStorage
        // The persist middleware handles this automatically
      }
    }),
    {
      name: 'borrowing-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        borrowedBooks: state.borrowedBooks
      })
    }
  )
)

