import {
   faBookmark,
   faBox,
   faBusSimple,
   faCalendar,
   faChevronDown,
   faChevronLeft,
   faChevronRight,
   faCloud,
   faEye,
   faFile,
   faLocationDot,
   faMotorcycle,
   faShop,
   faSliders,
   faThumbTack,
   faTruckMedical,
   faTruckMonster,
   faUserNurse
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'

export default function Recursos() {
   const navigate = useNavigate()

   return (
      <div id='gestor-recursos-table'>
         {/* Filtros */}
         <CardBox className='mb-4'>
            <div className='v-center-between mb-2'>
               <h4 className='cardTitle'><FontAwesomeIcon icon={faSliders} />  Filtros</h4>
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
         <HARDCODE_TABLE title='Recursos' nav={navigate} />

      </div>
   )
}

const HARDCODE_DATA = [
   { tipo: "ambulancia", i: faTruckMedical },
   { tipo: "bomberos", i: faBusSimple },
   { tipo: "moto", i: faMotorcycle },
   { tipo: "cuatriciclo", i: faTruckMonster },
]

const HARDCODE_TABLE = (P: { title: string, nav: any }) => <>
   <CardBox className='mb-3'>
      <div className='v-center-between'>
         <h3 className='cardTitle'>{P.title}</h3>
         <div className='v-center-end'>
            <Button onClick={() => null} variant="link" className='v-center'>
               <FontAwesomeIcon icon={faCloud} />
               Excel
            </Button>
            <Button onClick={() => null} variant="link" className='v-center'>
               <FontAwesomeIcon icon={faCloud} />
               PDF
            </Button>
            <Button onClick={() => null} variant="link" className='v-center'>
               <FontAwesomeIcon icon={faCloud} />
               CSV
            </Button>
         </div>
      </div>

      <Table responsive className='text-left'>
         <thead>
            <tr>
               {[
                  "ESTADO",
                  "TIPO",
                  "SUBTIPO",
                  "COMISARIA",
                  "Nº DE CARTA ASOC.",
                  "AGENCIA",
                  "FECHA",
                  "HORA",
                  "ACTIVACIÓN",
                  "ACCIÓN",
               ].map((title: any, index: number) => (
                  <th key={index}>{title}</th>
               ))}
            </tr>
         </thead>
         <tbody className='text-left'>
            {HARDCODE_DATA.map((data, index) => (<tr key={index}>
               <td>Disponible</td>
               <td style={{ textTransform: 'capitalize' }}>
                  <div
                     className={`v-center-normal gap-2 box-${data.tipo}`}
                  >
                     <FontAwesomeIcon icon={data.i} />
                     <p>{data.tipo}</p>
                  </div>
               </td>
               <td>Lorem ipsum</td>
               <td>Lorem ipsum</td>
               <td>010190</td>
               <td>Circunscripcion 1</td>
               <td>22/05/2024</td>
               <td>16:30:34</td>
               <td>
                  <div className='v-center'>
                     <Form.Check type='switch' defaultChecked />
                  </div>
               </td>
               <td>
                  <div className='v-center-evenly'>
                     <Button
                        variant='flat'
                        className='w-auto no-shadows'
                        onClick={() => { P.nav('0') }}
                     >
                        <FontAwesomeIcon icon={faEye} />
                     </Button>
                  </div>
               </td>
            </tr>))}
         </tbody>
      </Table>


   </CardBox>

   <nav className='t-paginator v-center-end gap-2 mb-4'>
      <Button variant='flat' className='v-center w-auto p-2'>
         <FontAwesomeIcon icon={faChevronLeft} />
      </Button>

      <Button variant='primary' className='v-center'>
         1
      </Button>

      <Button variant='light' className='v-center'>
         2
      </Button>

      <Button variant='flat' className='v-center w-auto p-2'>
         <FontAwesomeIcon icon={faChevronRight} />
      </Button>
   </nav>

</>