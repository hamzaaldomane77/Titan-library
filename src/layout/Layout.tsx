import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ToastContainer from '../ui/ToastContainer'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="w-full flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default Layout

