import React, { createContext, useCallback, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

import ToastContainer from '../components/ToastContainer'

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void
  removeToast(id: string): void
}

export interface ToastMessage {
  id: string
  type?: 'success' | 'info' | 'error'
  title: string
  description: string
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessage] = useState<ToastMessage[]>([])

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid()

      const toast = {
        id,
        type,
        title,
        description,
      }

      setMessage(state => [...state, toast])
    },
    [],
  )
  const removeToast = useCallback((id: string) => {
    setMessage(state => state.filter(message => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export { ToastProvider, useToast }
