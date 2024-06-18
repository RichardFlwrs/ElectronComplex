import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Heading } from 'renderer/components'
import { NavBar } from 'renderer/components/Layout/NavBar'
import SideMenu from 'renderer/components/Layout/SideMenu'

import styles from './styles.module.sass'


export default function MainLayout({ children }: any) {
   const navigate = useNavigate()

   return (
      <div className='layoutGrid'>
         <SideMenu />
         <Container>
            <NavBar />
            <div className='children-container'>
               {children}
            </div>
         </Container>
      </div>
   )
}


