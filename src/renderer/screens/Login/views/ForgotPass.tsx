import Form from 'react-bootstrap/Form';
import TextInput from 'renderer/components/TextInput/TextInput';
import { Button } from 'renderer/components';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';
import { iconEmail, iconPhone } from 'renderer/store/icons.index';

export default function ForgotPass() {
   const navigate = useNavigate()

   return (
      <>
         {/* Logo */}
         <LoginHeader
            title='¿Olvidaste tu contraseña?'
            subtitle='Ingrese tu dirección de email para recuperar tu contraseña'
         />

         {/* Login Form */}
         <Form onSubmit={() => null}>
            <Form.Group className="mb-3">
               <TextInput icon={iconEmail} placeholder='Email' />
            </Form.Group>

            <Form.Group className="mb-3">
               <TextInput icon={iconPhone} placeholder='Telefono' />
            </Form.Group>


            <div className='mb-2'>
               <Button onClick={() => navigate('/login/ingressCode')}>
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
