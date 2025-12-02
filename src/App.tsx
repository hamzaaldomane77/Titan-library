import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Layout from './layout/Layout'
import PageLoader from './components/PageLoader'
import HomePage from './pages/Home/home-page'
import BooksByCategory from './pages/BookCategory/BooksByCategory'
import BooksPage from './pages/Books/BooksPage'
import BorrowedBooksPage from './pages/BorrowedBooks/BorrowedBooksPage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import AuthorsPage from './pages/Authors/AuthorsPage'

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000 // 5 minutes
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <PageLoader />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<BooksByCategory />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/borrowed" element={<BorrowedBooksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/authors" element={<AuthorsPage />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  )
}

export default App
