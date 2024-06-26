import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox';
import TextInput from 'renderer/components/TextInput/TextInput';

export default function VerRecurso() {
   const navigate = useNavigate()

   return (
      <div>
         <div className='v-center-normal gap-1'>
            <Button
               variant='link'
               className='w-auto'
               style={{ paddingRight: 1 }}
               onClick={() => navigate("/home/gestor/recursos")}
            >
               {"< Gestor Recursos"}
            </Button>
            <p>/ Recursos</p>
         </div>

         <CardBox>
            <TextInput
               icon={faMagnifyingGlass}
               placeholder='Buscar o escribir direccion'
               wrapperclassname='card-input mb-4'
            />

            <div
               style={{
                  backgroundColor: 'cyan',
                  height: 500,
                  borderRadius: 10
               }}
               className='w-100'
            ></div>



         </CardBox>
      </div>
   )
}
