// src/components/auth/login.tsx
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuth } from '~/src/context/AuthContext';
import { log } from '~/src/utils/log/logger';

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    log('Logging in with username:', username)

    try {
      await login(username)
      router.push('/')
    } catch (error) {
      log('Login failed:', error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-lg font-bold mb-4">Log In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login
