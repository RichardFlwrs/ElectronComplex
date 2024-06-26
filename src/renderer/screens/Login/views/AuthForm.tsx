import Form from 'react-bootstrap/Form';
import TextInput from 'renderer/components/TextInput/TextInput';
import { faBook, faChevronDown, faLock, faMapPin, faSquare, faThumbTack, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'renderer/components';
import Select from 'renderer/components/Select/Select';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';
import DropDown from 'renderer/components/DropDown/DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import MultipleSelect from 'renderer/components/MultipleSelect/MultipleSelect';

export default function AuthForm() {
   const navigate = useNavigate()
   const [checkedItems, setCheckedItems] = useState([
      { text: "CATE VIEDMA", value: true },  // Set initial checked state
      { text: "CD VIEDMA", value: false },
      { text: "CD BARILOCHE", value: false },
      { text: "CD GENERAL ROCA", value: false },
   ]);

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
               <MultipleSelect
                  className='px-3 py-3'
                  placeholder='Agencia'
                  data={checkedItems}
                  onChange={(_data) => { setCheckedItems(_data) }}
               />
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
