import { useState } from 'react'
import LoginHeader from '../components/LoginHeader'
import { Form, Modal } from 'react-bootstrap'
import TextInput from 'renderer/components/TextInput/TextInput'
import { Button } from 'renderer/components'
import { useNavigate } from 'react-router-dom'
import { faLock, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyImage from "resources/public/logo.png"


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


         <Modal show={show} onHide={handleClose}>
            <Modal.Header>
               <Button onClick={handleClose} variant='icon'>
                  <FontAwesomeIcon style={{ padding: 12 }} icon={faTimesCircle} />
               </Button>
            </Modal.Header>
            <Modal.Body className='text-center center-col m'>
               <img src={MyImage} alt="" width={150} height={150} className='mb-3' />
               <h2 style={{ fontWeight: 'bold' }} className='w-50'>
                  Tu contraseña se ha cambiado con exito!
               </h2>
            </Modal.Body>
            <Modal.Footer className='center-col mb-4'>
               <Button onClick={handleClose} className='w-50'>
                  Aceptar
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   )
}
