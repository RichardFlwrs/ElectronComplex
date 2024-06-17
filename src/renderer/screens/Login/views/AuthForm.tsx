import Form from 'react-bootstrap/Form';
import TextInput from 'renderer/components/TextInput/TextInput';
import { faLock, faMapPin, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'renderer/components';
import Select from 'renderer/components/Select/Select';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';

export default function AuthForm() {
   const navigate = useNavigate()

   return (
      <>
         {/* Logo */}
         <LoginHeader
            title='Bienvenido/a'
            subtitle='Ingrese sus datos'
         />


         {/* Login Form */}
         <Form onSubmit={() => null}>
            <Form.Group className="mb-3">
               <TextInput icon={faUser} placeholder='Usuario' />
            </Form.Group>

            <Form.Group className="mb-3">
               <TextInput icon={faLock} type='password' placeholder='Contraseña' />
            </Form.Group>

            <Form.Group className="mb-3">
               <Select icon={faMapPin} />
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

         <div className='mt-3'>
            <Button onClick={() => navigate('/login/forgotPass')} variant="link">
               ¿Olvidaste tu contraseña?
            </Button>
         </div>
      </>
   )
}
