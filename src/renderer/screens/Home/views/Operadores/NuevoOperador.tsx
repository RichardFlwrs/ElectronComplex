import { faBriefcase, faDesktop, faEnvelope, faFileCircleCheck, faFileLines, faFolder, faIdBadge, faIdCard, faPhone, faTerminal, faThumbTack, faUser, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import TextInput from 'renderer/components/TextInput/TextInput'
import BasicModal from 'renderer/modals/BasicModal'

export default function NuevoOperador() {
   const navigate = useNavigate()
   let { id } = useParams();
   const [show, setShow] = useState(false);
   const [isNew, setisNew] = useState(false);

   const handleClose = () => {
      setShow(false)
      navigate('/home/operadores')
   }

   const sendForm = () => {
      setShow(true)
   }

   useEffect(() => {
      console.log(id);

      if (id === 'nuevo') setisNew(true)
   }, [])

   const IUNPUTS_LIST = [
      { i: faUser, ph: 'Nombre y Apellido' },
      { i: faIdCard, ph: 'DNI' },
      { i: faEnvelope, ph: 'Mail' },
      { i: faPhone, ph: 'Telefono' },
      { i: faIdBadge, ph: 'Nombre de usuario' },
      { i: faFileCircleCheck, ph: 'Legajo' },
      { i: faBriefcase, ph: 'Escalafon' },
      { i: faFolder, ph: 'Jerarquia' },
      { i: faThumbTack, ph: 'Agencias' },
      { i: faDesktop, ph: 'Puesto' },
      { i: faFileLines, ph: 'Posicion' },
      { i: faWindowMaximize, ph: 'Terminal' },
   ]

   const CHECKBOX_LIST = [
      "Sin restriccion", "Remoto", "Ver reportes", , "Hacer llamadas grupales", "Hacer llamadas salientes"
   ]

   return (
      <div>
         <div className='v-center-normal gap-1'>
            <Button
               variant='link'
               className='w-auto'
               style={{ paddingRight: 1 }}
               onClick={() => navigate("/home/operadores")}
            >
               {"< Operadores"}
            </Button>
            <p>/ {isNew ? `Nuevo` : `Editar`} Operador</p>
         </div>

         <CardBox className='p-4'>
            <h3>{isNew ? `Nuevo` : `Editar`} Operador</h3>

            <div className='d-flex flex-wrap'>
               {IUNPUTS_LIST.map((_e, idx) => <div className='w-33 p-3' key={idx}>
                  <TextInput
                     wrapperclassname='card-input no-shadows'
                     icon={_e.i}
                     placeholder={_e.ph}
                  />
               </div>)}
            </div>

            <div className='v-center-normal gap-3 p-3 pt-0 mb-5'>
               {CHECKBOX_LIST.map((name, idx) => <Form.Check
                  key={idx}
                  type={'checkbox'}
                  id={name}
                  label={name}
               />)}
            </div>

            <div className='v-center gap-4 pt-3'>
               <Button
                  onClick={() => navigate('/home/operadores')}
                  className='v-center w-auto px-5 py-2'
                  variant='danger'
               >
                  Cancelar
               </Button>

               <Button
                  onClick={() => sendForm()}
                  className='v-center w-auto px-5 py-2'
               >
                  {isNew ? `Crear Noticia` : `Guardar cambios`}
               </Button>
            </div>
         </CardBox>

         <BasicModal
            show={show}
            onClosed={handleClose}
            title='¡El operador ha sido agregado con éxito!'
         />

      </div>
   )
}
