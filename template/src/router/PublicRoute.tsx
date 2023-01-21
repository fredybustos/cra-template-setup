import useAuth from 'hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoute() {
  const { session } = useAuth()

  if (session.token) {
    return <Navigate to="/home" />
  }

  return <Outlet />
}
