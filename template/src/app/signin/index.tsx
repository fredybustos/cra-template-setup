import { useState } from 'react'
import useAuth from 'hooks/useAuth'

const initialValues = {
  user: '',
  password: ''
}

export default function Signin() {
  const { login } = useAuth()
  const [values, setValues] = useState<typeof initialValues>(initialValues)

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    login(JSON.stringify(values))
  }

  return (
    <div>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          name="user"
          placeholder="User"
          value={values.user}
          onChange={handleChangeValue}
        />
        <input
          required
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChangeValue}
        />
        <button>Login</button>
      </form>
    </div>
  )
}
