import { createContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MainLayout from 'renderer/components/Layout/MainLayout'
import NotificationCard from 'renderer/components/NotificationCard/NotificationCard'
import Supervisor from './views/Supervisor/Supervisor'
import AuditoriaHistorial from './views/Supervisor/AuditoriaHistorial'
import EstadoAgencia from './views/Supervisor/EstadoAgencia'
import Noticias from './views/Noticias/Noticias'
import CrearNoticias from './views/Noticias/CrearNoticias'
import VerNoticias from './views/Noticias/VerNoticia'
import FiltrosMultiples from './views/FiltrosMultiples/FiltrosMultiples'
import Operadores from './views/Operadores/Operadores'
import NuevoOperador from './views/Operadores/NuevoOperador'
import TiposRecursos from './views/GestorRecursos/TiposRecursos'
import Recursos from './views/GestorRecursos/Recursos'
import VerRecurso from './views/GestorRecursos/VerRecurso'
import ZonInfluencia from './views/GestorRecursos/ZonInfluencia'
import AgendaTabs from './views/Agenda/AgendaTabs'
import UserSettings from './views/UserSettings/UserSettings'
import MapaCalor from './views/Reportes/MapaCalor'
import Carta from './views/Carta/Carta'
import Mapa from './views/Mapa/Mapa'
import VerCarta from './views/Carta/VerCarta'
import CartaHisotrial from './views/Carta/CartaHisotrial'
import Camaras from './views/Mapa/Camaras'
import NuevaCamara from './views/Mapa/NuevaCamara'

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
            <RouteList/>
         </MainLayout>
      </ModalProvider>
   )
}

const RouteList = () => {
   return <Routes>
      {/* Supervisor */}
      <Route path='supervisor' element={<Supervisor />} />
      <Route path='supervisor/audotoria-historial' element={<AuditoriaHistorial />} />
      <Route path='supervisor/estado-agencia' element={<EstadoAgencia />} />
      {/* Noticias */}
      <Route path='noticias' element={<Noticias />} />
      <Route path='noticias/crear-noticia' element={<CrearNoticias />} />
      <Route path='noticias/ver-noticia' element={<VerNoticias />} />
      {/* Filtros */}
      <Route path='filtros-multiples' element={<FiltrosMultiples />} />
      {/* Operadores */}
      <Route path='operadores' element={<Operadores />} />
      <Route path='operadores/form/:id' element={<NuevoOperador />} />
      {/* Gestor Recursos */}
      <Route path='gestor/tipos-recursos' element={<TiposRecursos />} />
      <Route path='gestor/recursos' element={<Recursos />} />
      <Route path='gestor/recursos/:id' element={<VerRecurso />} />
      <Route path='gestor/zona-influencia' element={<ZonInfluencia />} />
      {/* Agenda */}
      <Route path='agenda' element={<AgendaTabs />} />
      {/* Settings */}
      <Route path='user-settings' element={<UserSettings />} />
      {/* Reportes */}
      <Route path='reportes/mapa-calor' element={<MapaCalor />} />
      {/* Carta */}
      <Route path='carta' element={<Carta />} />
      <Route path='carta/ver/:id' element={<VerCarta />} />
      <Route path='carta/historial/:id' element={<CartaHisotrial />} />
      {/* Zonas mapa */}
      <Route path='zonas-mapa' element={<Mapa />} />
      <Route path='zonas-mapa/camaras' element={<Camaras />} />
      <Route path='zonas-mapa/camaras/nueva' element={<NuevaCamara />} />
   </Routes>
}
