import { useEffect, useState } from 'react'
import Toast, { type ToastProps } from './Toast'

interface ToastItem extends ToastProps {
  id: string
}

let toastIdCounter = 0
const toastListeners: Array<(toast: ToastItem) => void> = []

export const showToast = (props: Omit<ToastProps, 'onClose'>) => {
  const id = `toast-${toastIdCounter++}`
  const toast: ToastItem = { ...props, id }
  toastListeners.forEach((listener) => listener(toast))
}

function ToastContainer() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  useEffect(() => {
    const listener = (toast: ToastItem) => {
      setToasts((prev) => [...prev, toast])
    }

    toastListeners.push(listener)

    return () => {
      const index = toastListeners.indexOf(listener)
      if (index > -1) {
        toastListeners.splice(index, 1)
      }
    }
  }, [])

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )
}

export default ToastContainer

