import { faChevronDown, faFileLines } from '@fortawesome/free-solid-svg-icons';
import IconElement from 'renderer/components/IconElement/IconElement';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox';
import TextInput from 'renderer/components/TextInput/TextInput';
import { iconBookmark, iconCalendar, iconDocumento, iconPantalla } from 'renderer/store/icons.index';

const HARDCODE_1 = `Noticia
                     
                     
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem
ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo`

export default function CrearNoticias() {
   const navigate = useNavigate()

   return (
      <div>
         <div className='v-center-normal gap-1'>
            <Button
               variant='link'
               className='w-auto'
               style={{ paddingRight: 1 }}
               onClick={() => navigate("/home/noticias")}
            >
               {"< Noticias"}
            </Button>
            <p>/ Crear Noticias</p>
         </div>

         <CardBox>
            <div className='v-center-between mb-3'>
               <h3 className='cardTitle'>Crear Noticias</h3>
            </div>

            <div className='v-center-normal gap-3'>
               <TextInput
                  icon={iconDocumento}
                  placeholder='Titulo'
                  wrapperclassname='card-input'
               />

               <Button variant='light' className='card-btn v-center gap-2'>
                  <IconElement icon={iconBookmark} />
                  <p style={{ paddingRight: 40 }}>Predeterminada</p>
                  <IconElement icon={faChevronDown} />
               </Button>

               <Button variant='light' className='card-btn v-center gap-2'>
                  <IconElement icon={iconPantalla} />
                  <p style={{ paddingRight: 40 }}>Destino de la noticia</p>
                  <IconElement icon={faChevronDown} />
               </Button>

               <Button variant='light' className='card-btn v-center gap-2'>
                  <IconElement icon={iconCalendar} />
                  <p>Desde</p>
                  <IconElement icon={faChevronDown} />
               </Button>

               <Button variant='light' className='card-btn v-center gap-2'>
                  <IconElement icon={iconCalendar} />
                  <p>Hasta</p>
                  <IconElement icon={faChevronDown} />
               </Button>
            </div>

            <div className='mt-4 mb-4'>

               <Form.Control
                  as="textarea"
                  placeholder=""
                  style={{ height: '300px' }}
                  value={HARDCODE_1}
                  readOnly={true}
               />
            </div>

            <div className='v-center gap-4'>
               <Button
                  onClick={() => navigate('/home/noticias')}
                  className='v-center w-auto px-5'
                  variant='danger'
               >
                  Cancelar
               </Button>

               <Button
                  onClick={() => navigate('/home/noticias')}
                  className='v-center w-auto px-5'
               >
                  Crear Noticia
               </Button>
            </div>

         </CardBox>
      </div>
   )
}
