import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MainLayout from 'renderer/components/Layout/MainLayout'
import Supervisor from './views/Supervisor'
import NotificationCard from 'renderer/components/NotificationCard/NotificationCard'

export default function HomeScreen() {

   const navigate = useNavigate()

   useEffect(() => {
      navigate('/home/supervisor')
   }, [])


   return (
      <MainLayout>
         <NotificationCard />
         <Routes>
            <Route path='supervisor' element={<Supervisor />} />
         </Routes>
      </MainLayout>
   )
}
