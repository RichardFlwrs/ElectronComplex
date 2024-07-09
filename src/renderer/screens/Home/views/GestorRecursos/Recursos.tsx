import {
   faBox,
   faChevronDown,
   faChevronLeft,
   faChevronRight,
   faEye,
   faShop,
   faSliders} from '@fortawesome/free-solid-svg-icons'
import IconElement from 'renderer/components/IconElement/IconElement'
import { useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import MultipleSelect from 'renderer/components/MultipleSelect/MultipleSelect'
import { iconAmbulancia, iconBomberos, iconBookmark, iconCalendar, iconComisario, iconCuatriciclo, iconDescargar, iconDocumento, iconMoto, iconPin, iconUbicacion } from 'renderer/store/icons.index'

export default function Recursos() {
   const navigate = useNavigate()
   const [checkedItems, setCheckedItems] = useState([
      { text: "Zona 1", value: true },
      { text: "Zona 2", value: false },
      { text: "Zona 3", value: false },
      { text: "Zona 4", value: false },
   ]);

   return (
      <div id='gestor-recursos-table'>
         {/* Filtros */}
         <CardBox className='mb-4'>
            <div className='v-center-between mb-2'>
               <h4 className='cardTitle'><IconElement icon={faSliders} />  Filtros</h4>
               <Button className='w-auto px-5 py-2'>
                  Filtrar
               </Button>
            </div>

            <div className='filter-options d-flex gap-3'>
               {[
                  { t: 'Tipos de recursos', i: faShop },
                  { t: 'Subtipos de recursos', i: faBox },
               ].map((data, idx) => <Button key={idx} variant='light' className='card-btn v-center-between gap-2'>
                  <div className='v-center'>
                     <IconElement icon={data.i} />
                     <p>{data.t}</p>
                  </div>
                  <IconElement icon={faChevronDown} />
               </Button>)}
               <MultipleSelect
                  className='card-btn no-shadows'
                  icon={iconUbicacion}
                  placeholder='Zona de influenica'
                  data={checkedItems}
                  onChange={(_data) => { setCheckedItems(_data) }}
               >
                  <div className='v-center p-0 mb-2'>
                     <Button onClick={() => navigate('/home/gestor/zona-influencia')} className='w-auto px-2' variant='link'>
                        Ver todas las zonas
                     </Button>
                  </div>
               </MultipleSelect>
               <Button variant='light' className='card-btn v-center-between gap-2'>
                  <div className='v-center'>
                     <IconElement icon={iconBookmark} />
                     <p>Estados</p>
                  </div>
                  <IconElement icon={faChevronDown} />
               </Button>

               <div className='d-flex flex-1 gap-3'>
                  <Button variant='light' className='card-btn v-center-between gap-2 w-50'>
                     <div className='v-center'>
                        <IconElement icon={iconCalendar} />
                        <p>Desde</p>
                     </div>
                     <IconElement icon={faChevronDown} />
                  </Button>

                  <Button variant='light' className='card-btn v-center-between gap-2 w-50'>
                     <div className='v-center'>
                        <IconElement icon={iconCalendar} />
                        <p>Desde</p>
                     </div>
                     <IconElement icon={faChevronDown} />
                  </Button>
               </div>
            </div>

            <div className='mt-3 filter-options d-flex gap-3'>
               {[
                  { t: 'Agencia', i: iconPin },
                  { t: 'Comisaria', i: iconComisario },
                  { t: 'Numero de carta', i: iconDocumento },
               ].map((data, idx) => <Button key={idx} variant='light' className='card-btn v-center-between gap-2'>
                  <div className='v-center'>
                     <IconElement icon={data.i} />
                     <p>{data.t}</p>
                  </div>
                  <IconElement icon={faChevronDown} />
               </Button>)}
            </div>
         </CardBox>

         {/* Table */}
         <HARDCODE_TABLE title='Recursos' nav={navigate} />

      </div>
   )
}

const HARDCODE_DATA = [
   { tipo: "ambulancia", i: iconAmbulancia },
   { tipo: "bomberos", i: iconBomberos },
   { tipo: "moto", i: iconMoto },
   { tipo: "cuatriciclo", i: iconCuatriciclo },
]

const HARDCODE_TABLE = (P: { title: string, nav: any }) => <>
   <CardBox className='mb-3'>
      <div className='v-center-between'>
         <h3 className='cardTitle'>{P.title}</h3>
         <div className='v-center-end'>
            <Button onClick={() => null} variant="link" className='v-center'>
               <IconElement icon={iconDescargar} />
               Excel
            </Button>
            <Button onClick={() => null} variant="link" className='v-center'>
               <IconElement icon={iconDescargar} />
               PDF
            </Button>
            <Button onClick={() => null} variant="link" className='v-center'>
               <IconElement icon={iconDescargar} />
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
                     <IconElement icon={data.i} />
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
                        <IconElement icon={faEye} />
                     </Button>
                  </div>
               </td>
            </tr>))}
         </tbody>
      </Table>


   </CardBox>

   <nav className='t-paginator v-center-end gap-2 mb-4'>
      <Button variant='flat' className='v-center w-auto p-2'>
         <IconElement icon={faChevronLeft} />
      </Button>

      <Button variant='primary' className='v-center'>
         1
      </Button>

      <Button variant='light' className='v-center'>
         2
      </Button>

      <Button variant='flat' className='v-center w-auto p-2'>
         <IconElement icon={faChevronRight} />
      </Button>
   </nav>

</>