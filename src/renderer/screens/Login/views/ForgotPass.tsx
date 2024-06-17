import Form from 'react-bootstrap/Form';
import MyImage from "resources/public/logo.png"
import TextInput from 'renderer/components/TextInput/TextInput';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'renderer/components';
import { useNavigate } from 'react-router-dom';

export default function ForgotPass() {
   const navigate = useNavigate()

   return (
      <>
         {/* Logo */}
         <div className='center-col mb-5' style={{ width: 300, textAlign: 'center' }}>
            <img src={MyImage} alt="" width={100} height={100} />
            <h2 style={{ fontWeight: 'bold' }}>¿Olvidaste tu contraseña?</h2>
            <p>Ingrese tu dirección de email para recuperar tu contraseña</p>
         </div>


         {/* Login Form */}
         <Form onSubmit={() => null}>
            <Form.Group className="mb-3">
               <TextInput icon={faEnvelope} placeholder='Email' />
            </Form.Group>

            <Form.Group className="mb-3">
               <TextInput icon={faPhone} placeholder='Telefono' />
            </Form.Group>


            <div className='mb-2'>
               <Button onClick={() => navigate('/home')}>
                  Confirmar
               </Button>
            </div>

            <div>
               <Button onClick={() => navigate('/login')} variant='light'>
                  Cancelar
               </Button>
            </div>
         </Form>
      </>
   )
}
