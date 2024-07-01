import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'

export default function ZonInfluencia() {
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
               {"< Gestro de recursos"}
            </Button>
            <p>/ Recursos / Zona de Influencia</p>
         </div>

         <CardBox>
            <div className='v-center-normal gap-3 mb-3'>
               <div>
                  <p>Zona 1</p>
               </div>
               <div>
                  <p>Zona 2</p>
               </div>
               <div>
                  <p>Zona 3</p>
               </div>
               <div>
                  <p>Zona 4</p>
               </div>
            </div>

            {/* TODO MAP */}
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
