import { useState } from 'react'
import LoginHeader from '../components/LoginHeader'
import { Form, Modal } from 'react-bootstrap'
import TextInput from 'renderer/components/TextInput/TextInput'
import { Button } from 'renderer/components'
import { useNavigate } from 'react-router-dom'
import { faLock, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyImage from "resources/public/logo.png"
import BasicModal from 'renderer/modals/BasicModal'


export default function ChangePass() {
   const navigate = useNavigate()
   const [show, setShow] = useState(false);

   const handleClose = () => {
      setShow(false)
      navigate('/login')
   }
   const handleShow = () => setShow(true);


   return (
      <>
         {/* Logo */}
         <LoginHeader
            title='Bienvenido/a'
            subtitle='Por tu seguridad, cambia la contraseña'
         />

         {/* Login Form */}
         <Form onSubmit={() => null}>
            <Form.Group className="mb-3">
               <TextInput icon={faLock} placeholder='Nueva contraseña' type='password' />
            </Form.Group>

            <Form.Group className="mb-3">
               <TextInput icon={faLock} placeholder='Repetir contraseña' type='password' />
            </Form.Group>


            <div className='mb-2 mt-5'>
               <Button className='mt-3' onClick={handleShow}>
                  Cambiar contraseña
               </Button>
            </div>

            <div>
               <Button onClick={() => navigate('/login')} variant='light'>
                  Cancelar
               </Button>
            </div>
         </Form>


         <BasicModal
            show={show}
            onClosed={handleClose}
            title='Tu contraseña se ha cambiado con exito!'
         />
      </>
   )
}
