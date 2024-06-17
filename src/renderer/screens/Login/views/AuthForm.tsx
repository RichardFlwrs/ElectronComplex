import Form from 'react-bootstrap/Form';
import MyImage from "resources/public/logo.png"
import TextInput from 'renderer/components/TextInput/TextInput';
import { faLock, faMapPin, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'renderer/components';
import Select from 'renderer/components/Select/Select';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
   const navigate = useNavigate()

   return (
      <>
         {/* Logo */}
         <div className='center-col mb-5'>
            <img src={MyImage} alt="" width={100} height={100} />
            <h2 style={{ fontWeight: 'bold' }}>Bienvenido/a</h2>
            <p>Ingrese sus datos</p>
         </div>


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

         <div>
            <Button onClick={() => navigate('/login/forgotPass')} variant="link">
               ¿Olvidaste tu contraseña?
            </Button>
         </div>
      </>
   )
}
