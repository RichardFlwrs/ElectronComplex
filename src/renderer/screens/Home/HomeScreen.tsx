import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MainLayout from 'renderer/components/Layout/MainLayout'
import NotificationCard from 'renderer/components/NotificationCard/NotificationCard'
import Supervisor from './views/Supervisor/Supervisor'
import AuditoriaHistorial from './views/Supervisor/AuditoriaHistorial'
import EstadoAgencia from './views/Supervisor/EstadoAgencia'

export default function HomeScreen() {

   const navigate = useNavigate()

   useEffect(() => {
      const url = window.location.href;

      if (!url.includes("home/")) navigate('/home/supervisor')

   }, [])


   return (
      <MainLayout>
         <NotificationCard />
         <Routes>
            <Route path='supervisor' element={<Supervisor />} />
            <Route path='supervisor/audotoria-historial' element={<AuditoriaHistorial />} />
            <Route path='supervisor/estado-agencia' element={<EstadoAgencia />} />
         </Routes>
      </MainLayout>
   )
}
