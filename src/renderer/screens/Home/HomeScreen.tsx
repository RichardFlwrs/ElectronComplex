import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MainLayout from 'renderer/components/Layout/MainLayout'
import NotificationCard from 'renderer/components/NotificationCard/NotificationCard'
import Supervisor from './views/Supervisor/Supervisor'
import AuditoriaHistorial from './views/Supervisor/AuditoriaHistorial'
import EstadoAgencia from './views/Supervisor/EstadoAgencia'
import Noticias from './views/Noticias/Noticias'
import CrearNoticias from './views/Noticias/CrearNoticias'
import VerNoticias from './views/Noticias/VerNoticia'

export const ModalContext = createContext({
   isOpen: false,
   toggleConfirmationModal: () => { },
});

const ModalProvider = ({ children }: any) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleConfirmationModal = () => {
      setIsOpen(!isOpen);
   };

   return (
      <ModalContext.Provider value={{ isOpen, toggleConfirmationModal }}>
         {children}
      </ModalContext.Provider>
   );
};

export default function HomeScreen() {

   const navigate = useNavigate()

   useEffect(() => {
      const url = window.location.href;

      if (!url.includes("home/")) navigate('/home/supervisor')

   }, [])


   return (
      <ModalProvider>
         <MainLayout>
            <NotificationCard />
            <Routes>
               <Route path='supervisor' element={<Supervisor />} />
               <Route path='supervisor/audotoria-historial' element={<AuditoriaHistorial />} />
               <Route path='supervisor/estado-agencia' element={<EstadoAgencia />} />
               <Route path='noticias' element={<Noticias />} />
               <Route path='noticias/crear-noticia' element={<CrearNoticias />} />
               <Route path='noticias/ver-noticia' element={<VerNoticias />} />
            </Routes>


         </MainLayout>
      </ModalProvider>
   )
}
