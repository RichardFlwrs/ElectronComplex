import { faBookmark, faCalendar, faChevronDown, faQuestion, faSliders } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import MainTable from '../../components/MainTable'
import IconElement from 'renderer/components/IconElement/IconElement'
import { iconBookmark, iconCalendar, iconFiltros } from 'renderer/store/icons.index'

export default function Supervisor() {
   const navigate = useNavigate()

   return (
      <div>
         {/* Filtros */}
         <CardBox className='mb-4'>
            <h3 className='cardTitle'><IconElement icon={iconFiltros} />  Filtros</h3>

            <div className='v-center-normal gap-4'>
               <Form.Check
                  type={'radio'}
                  id={`Ultimas dos horas`}
                  label={`Ultimas dos horas`}
               />
               <Form.Check
                  type={'radio'}
                  id={`Carta`}
                  label={`Carta`}
               />

               <Button variant='light' className='card-btn'>
                  <p className='p-0'>Numerico</p>
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

               <Button variant='light' className='card-btn v-center gap-2'>
                  <IconElement icon={iconBookmark} />
                  <p style={{ paddingRight: 40 }}>Estado</p>
                  <IconElement icon={faChevronDown} />
               </Button>

               <Button className='w-auto px-5 py-2' onClick={() => null}>Filtrar</Button>
            </div>
         </CardBox>

         {/* Table */}
         <MainTable />

      </div>
   )
}