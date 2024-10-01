// src/components/auth/signup.tsx
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import {useAuth} from '../../context/AuthContext'
import {log} from '../../utils/log/logger' // Import the logger

const Signup: React.FC = () => {
  const [username, setUsername] = useState('')
  const router = useRouter()
  const {login} = useAuth() // Use the login function

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    log('Signing up with username:', username) // Use the logger instead of console.log

    try {
      // Implement signup logic here
      await login(username) // Assuming login is a function that accepts a username
      router.push('/')
    } catch (error) {
      log('Signup failed:', error) // Log the error if signup fails
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-lg font-bold mb-4">Sign Up</h2>
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
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
