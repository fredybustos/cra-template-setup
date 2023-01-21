import useAuth from 'hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
  const { session } = useAuth()

  if (!session.token) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}
