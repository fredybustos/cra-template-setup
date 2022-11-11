export type Session = {
  token: string
  user?: User
}

export type ContextProps = {
  login: (arg: string) => void
  logout: () => void
  session: Session
}

type User = {
  name: string
  lastname: string
}
