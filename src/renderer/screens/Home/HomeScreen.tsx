import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Heading } from 'renderer/components'
import { NavBar } from 'renderer/components/Layout/NavBar'

export default function HomeScreen() {
   const navigate = useNavigate()

   return (
      <div>
         <NavBar />
         <Container>
            <Heading>Hello! 👋</Heading>

            <h2>It's another screen! ✨</h2>

            <Button onClick={() => navigate('/login')}>Go back to Login</Button>
         </Container>

      </div>
   )
}
