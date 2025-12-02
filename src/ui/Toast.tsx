import { useEffect, useState } from 'react'

export interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  onClose?: () => void
}

function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onClose?.()
      }, 300) // Wait for fade out animation
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  }

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }

  return (
    <div
      className={`
        fixed top-20 right-4 z-50
        px-4 py-3 rounded-lg shadow-lg border
        flex items-center gap-3
        transition-all duration-300
        ${typeStyles[type]}
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
      `}
    >
      <span className="text-lg font-bold">{icons[type]}</span>
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}

export default Toast

