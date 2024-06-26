import { faBookmark, faBox, faCalendar, faChevronDown, faFile, faLocationDot, faShop, faSliders, faThumbTack, faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import MainTable from '../../components/MainTable'

export default function Recursos() {
   const navigate = useNavigate()

   return (
      <div id='gestor-recursos-table'>
         {/* Filtros */}
         <CardBox className='mb-4'>
            <div className='v-center-between'>
               <h3 className='cardTitle'><FontAwesomeIcon icon={faSliders} />  Filtros</h3>
               <Button className='w-auto px-5 py-2'>
                  Filtrar
               </Button>
            </div>

            <div className='filter-options d-flex gap-3'>
               {[
                  { t: 'Tipos de recursos', i: faShop },
                  { t: 'Subtipos de recursos', i: faBox },
                  { t: 'Zona de influenica', i: faLocationDot },
                  { t: 'Estados', i: faBookmark },
               ].map((data, idx) => <Button key={idx} variant='light' className='card-btn v-center-between gap-2'>
                  <div className='v-center'>
                     <FontAwesomeIcon icon={data.i} />
                     <p>{data.t}</p>
                  </div>
                  <FontAwesomeIcon icon={faChevronDown} />
               </Button>)}

               <div className='d-flex flex-1 gap-3'>
                  <Button variant='light' className='card-btn v-center-between gap-2 w-50'>
                     <div className='v-center'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>Desde</p>
                     </div>
                     <FontAwesomeIcon icon={faChevronDown} />
                  </Button>

                  <Button variant='light' className='card-btn v-center-between gap-2 w-50'>
                     <div className='v-center'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>Desde</p>
                     </div>
                     <FontAwesomeIcon icon={faChevronDown} />
                  </Button>
               </div>
            </div>

            <div className='mt-3 filter-options d-flex gap-3'>
               {[
                  { t: 'Agencia', i: faThumbTack },
                  { t: 'Comisaria', i: faUserNurse },
                  { t: 'Numero de carta', i: faFile },
               ].map((data, idx) => <Button key={idx} variant='light' className='card-btn v-center-between gap-2'>
                  <div className='v-center'>
                     <FontAwesomeIcon icon={data.i} />
                     <p>{data.t}</p>
                  </div>
                  <FontAwesomeIcon icon={faChevronDown} />
               </Button>)}
            </div>
         </CardBox>

         {/* Table */}
         <MainTable />

      </div>
   )
}
