import Signin from 'app/signin'
import { AuthProvider } from 'context/AuthContext'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from 'router/PrivateRoute'
import PublicRoute from 'router/PublicRoute'
import Home from './home'

export default function App() {
  return (
   <AuthProvider>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route index path="/login" element={<Signin />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
