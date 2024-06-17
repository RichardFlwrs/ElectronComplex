import { useNavigate } from 'react-router-dom'

import { Container, Heading, Button } from 'renderer/components'
import { NavBar } from 'renderer/components/Layout/NavBar'

export function AnotherScreen() {
  const navigate = useNavigate()

  return (
    <div>
      <NavBar />
      <Container>
        <Heading>Hello! 👋</Heading>

        <h2>It's another screen! ✨</h2>

        <Button onClick={() => navigate('/')}>Go back to Main screen</Button>
      </Container>
    </div>
  )
}
