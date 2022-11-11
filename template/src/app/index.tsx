import Signin from 'app/signin'
import useAuth from 'hooks/useAuth'
import { Routes as Router, Route, Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const { session } = useAuth()
  return session?.token ? <Outlet /> : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <Router>
      <Route path="login" element={<Signin />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<h1>App</h1>} />
        <Route path="/home" element={<h1>App</h1>} />
      </Route>
    </Router>
  )
}
