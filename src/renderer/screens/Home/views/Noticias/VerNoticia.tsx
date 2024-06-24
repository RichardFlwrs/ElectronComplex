import { useNavigate } from 'react-router-dom';
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox';

const HARDCODE_1 = `Noticia
                     
                     
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem
ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo`

export default function VerNoticias() {
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
            <p>/ Ver Noticia</p>
         </div>

         <CardBox>
            <div className='mb-3'>
               <h3 className='cardTitle'>Titulo de la noticia</h3>

               <p>De 11.05.2024 10:00 hs hasta 20.05.2024 24hs l CD Viedma</p>
            </div>

            <div className='mt-4 mb-4'>
               {HARDCODE_1}
            </div>

         </CardBox>
      </div>
   )
}
