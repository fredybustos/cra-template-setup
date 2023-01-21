import useAuth from 'hooks/useAuth'

export default function Home() {
  const { logout } = useAuth()

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
