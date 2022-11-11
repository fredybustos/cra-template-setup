import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

test('It render the application', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})
