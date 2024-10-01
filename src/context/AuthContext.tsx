// src/context/AuthContext.tsx
import React, {createContext, useContext, useState} from 'react'
import {log} from '../utils/log/logger' // Import the logger

interface AuthContextProps {
  login: (username: string) => void
  user?: string // Optional user property
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children
}) => {
  const [user, setUser] = useState<string | undefined>(undefined)

  const login = (username: string) => {
    log('User logged in:', username) // Use the logger instead of console.log
    setUser(username) // Ensure this line uses 'username'
  }

  return (
    <AuthContext.Provider value={{login, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
