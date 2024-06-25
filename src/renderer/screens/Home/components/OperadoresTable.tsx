import { faChevronLeft, faChevronRight, faCloud, faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox';
import DeleteConfirmation from 'renderer/modals/DeleteConfirmation';
import { ModalContext } from '../HomeScreen';

export default function OperadoresTable() {
   const navigate = useNavigate()
   const { isOpen, toggleConfirmationModal } = useContext(ModalContext);
   const [selectedId, setSelectedId] = useState(0)

   const removeNews = (id: number) => {
      setSelectedId(id)
      toggleConfirmationModal()
   }

   const removeConfirm = () => {
      console.log(selectedId);
   }

   return (
      <div>
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

         <CardBox>
            <Table responsive className='text-left'>
               <thead>
                  <tr>
                     {["ID", "NOMBNRE", "AGENCIAS", "TURNO", "LLAMADAS EN COLA", "ACTIVACIÓN", "ACCIÓN"]
                        .map((title: any, index: number) => (
                           <th className='' key={index}>{title}</th>
                        ))}
                  </tr>
               </thead>
               <tbody className='text-left'>
                  {Array.from({ length: 3 }).map((_, index) => (<tr key={index}>
                     <td className='text-center'>{index + 1}</td>
                     <td>Lorem Ipsum</td>
                     <td>CD Viedma</td>
                     <td>Mañana</td>
                     <td>20</td>
                     <td className='px-4'>
                        <div>
                           <Form.Check type='switch' />
                        </div>
                     </td>
                     <td>
                        <div className='v-center-evenly'>
                           <Button
                              variant='flat'
                              className='w-auto no-shadows'
                              onClick={() => { navigate('/home/noticias/ver-noticia') }}
                           >
                              <FontAwesomeIcon icon={faEye} />
                           </Button>
                           <Button
                              variant='flat'
                              className='w-auto no-shadows'
                              onClick={() => { navigate(`/home/operadores/form/${index + 1}`) }}
                           >
                              <FontAwesomeIcon icon={faPencil} />
                           </Button>
                           <Button
                              variant='flat'
                              className='w-auto no-shadows'
                              onClick={() => { removeNews(0) }}
                           >
                              <FontAwesomeIcon icon={faTrash} />
                           </Button>
                        </div>
                     </td>
                  </tr>))}
               </tbody>
            </Table>


         </CardBox>

         <nav className='mt-3 t-paginator v-center-end gap-2'>
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

         <DeleteConfirmation
            onConfirm={removeConfirm}
            title='¿Estás seguro de que deseas eliminar al operador?'
            subtitle='Esta acción no se puede deshacer y el operador será permanentemente eliminada de tu lista. Por favor, confirma tu decisión.'
         />
      </div>
   )
}