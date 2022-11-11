import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import store from 'storejs'

import { Session, ContextProps } from 'types/auth'

export const AuthContext = createContext<ContextProps>({
  login: () => null,
  logout: () => null,
  session: {} as Session
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session>({
    token: store.get('SESSION'),
    user: {} as Session['user']
  })

  const login = (token: string) => {
    store.set('SESSION', token)
    setUser(token)
  }

  useEffect(() => {
    if (session.token) {
      setCommonHeaders(session.token)
      setUser(session.token)
    }
  }, [])

  const setUser = (token: string) => {
    setSession({
      token,
      user: { name: 'test', lastname: 'test' }
    })
  }

  const setCommonHeaders = (token: string) => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }

  const logout = () => {
    store.remove('SESSION')
    setSession({} as Session)
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
