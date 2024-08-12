"use client"

import { useState } from 'react'
import { signIn } from 'next-auth/react'

const LocalCredentialsSignin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const res = await signIn('local', {
      callbackUrl: '/dashboard',
      username,
      password
    })
  }

  if (process.env.NODE_ENV === "development") {
    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
  return null
}

export default LocalCredentialsSignin