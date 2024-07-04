import { faChevronLeft, faChevronRight, faCloud } from '@fortawesome/free-solid-svg-icons'
import IconElement from 'renderer/components/IconElement/IconElement'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'


export default function TiposRecursos() {

   return (
      <div id='gestor-tipos-recursos'>
         <HARDCODE_TABLE title='Tipos de recursos' />
         <HARDCODE_TABLE title='Subtipos de recursos' />
      </div>
   )
}


const HARDCODE_TABLE = (P: { title: string }) => <>
   <CardBox className='mb-3'>
      <div className='v-center-between'>
         <h3 className='cardTitle'>{P.title}</h3>
         <div className='v-center-end'>
            <Button onClick={() => null} variant="link" className='v-center'>
               <IconElement icon={faCloud} />
               Excel
            </Button>
            <Button onClick={() => null} variant="link" className='v-center'>
               <IconElement icon={faCloud} />
               PDF
            </Button>
            <Button onClick={() => null} variant="link" className='v-center'>
               <IconElement icon={faCloud} />
               CSV
            </Button>
         </div>
      </div>

      <Table responsive className='text-left'>
         <thead>
            <tr>
               {[
                  "ID",
                  "NOMBRE",
                  "A MOSTRAR",
                  "DESCRIPCION",
                  "BORRADO",
                  "ZONA DE INFLUENCIA",
               ].map((title: any, index: number) => (
                  <th key={index}>{title}</th>
               ))}
            </tr>
         </thead>
         <tbody className='text-left'>
            {Array.from({ length: 3 }).map((data, index) => (<tr key={index}>
               <td style={{ paddingLeft: 30 }}>{index + 1}</td>
               <td>Patrullero</td>
               <td>Patrullero</td>
               <td>Patrullero</td>
               <td>No</td>
               <td>Lorem ipsum dolor </td>
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