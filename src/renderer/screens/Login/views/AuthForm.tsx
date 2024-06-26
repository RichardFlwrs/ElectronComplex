import Form from 'react-bootstrap/Form';
import TextInput from 'renderer/components/TextInput/TextInput';
import { faChevronDown, faLock, faMapPin, faSquare, faThumbTack, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'renderer/components';
import Select from 'renderer/components/Select/Select';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';
import DropDown from 'renderer/components/DropDown/DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

export default function AuthForm() {
   const navigate = useNavigate()
   const [checkedItems, setCheckedItems] = useState([
      { text: "CATE VIEDMA", value: true },  // Set initial checked state
      { text: "CD VIEDMA", value: false },
      { text: "CD BARILOCHE", value: false },
      { text: "CD GENERAL ROCA", value: false },
   ]);

   const handleCheckboxChange = (event: any, index: number) => {
      const newCheckedItems = [...checkedItems]; // Copy the array
      newCheckedItems[index].value = event.currentTarget.checked; // Update value
      setCheckedItems(newCheckedItems); // Update state
   };

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
               <DropDown
                  classContainer=''
                  className='v-center-between card-box-style px-3 py-3'
                  dropdownParent={<>
                     <div className='v-center gap-2'>
                        <FontAwesomeIcon icon={faThumbTack} />
                        <p>Agencia</p>
                     </div>
                     <FontAwesomeIcon icon={faChevronDown} />
                  </>}
               >
                  {checkedItems.map((data, idx) => <div className='v-center-normal gap-2' key={idx}>
                     <Form.Check
                        type={'checkbox'}
                        id={data.text}
                        label={data.text}
                        defaultChecked={data.value}
                        onChange={(e) => handleCheckboxChange(e, idx)}
                     />
                  </div>)}
               </DropDown>
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
