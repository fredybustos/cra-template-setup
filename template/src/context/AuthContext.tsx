import React, { createContext, useCallback, useMemo, useState } from 'react'
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

  const login = useCallback((token: string) => {
    store.set('SESSION', token)
    setUser(token)
    setCommonHeaders(token)
  }, [])

  const logout = useCallback(() => {
    store.remove('SESSION')
    setSession({} as Session)
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

  const value = useMemo(
    () => ({
      session,
      login,
      logout
    }),
    [session, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
