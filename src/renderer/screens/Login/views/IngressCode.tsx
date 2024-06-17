import LoginHeader from "../components/LoginHeader"
import { Form } from "react-bootstrap"
import TextInput from "renderer/components/TextInput/TextInput"
import { Button } from "renderer/components"
import { useNavigate } from "react-router-dom"

export default function IngressCode() {
   const navigate = useNavigate()
   const squreInput = { width: 50, height: 50, padding: 5 }

   return (
      <>
         {/* Logo */}
         <LoginHeader
            title='Bienvenido/a'
            subtitle='Ingresa el codigo de seguridad'
         />

         {/* Login Form */}
         <Form onSubmit={() => null}>
            <Form.Group className="mb-3 row gap-4">
               <TextInput style={squreInput} inputstyle={{ textAlign: 'center' }} maxLength={1} />
               <TextInput style={squreInput} inputstyle={{ textAlign: 'center' }} maxLength={1} />
               <TextInput style={squreInput} inputstyle={{ textAlign: 'center' }} maxLength={1} />
               <TextInput style={squreInput} inputstyle={{ textAlign: 'center' }} maxLength={1} />
               <TextInput style={squreInput} inputstyle={{ textAlign: 'center' }} maxLength={1} />
            </Form.Group>
         </Form>

         <div className='mb-2 mt-5'>
            <Button onClick={() => navigate('/login/changePass')}>
               Confirmar
            </Button>
         </div>

         <div>
            <Button onClick={() => navigate('/login')} variant='light'>
               Cancelar
            </Button>
         </div>

      </>
   )
}
