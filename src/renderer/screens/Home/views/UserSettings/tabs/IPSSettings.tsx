import { faChevronLeft, faChevronRight, faCloud, faDesktop, faHashtag, faPencil, faTimesCircle, faTrash, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import IconElement from "renderer/components/IconElement/IconElement";
import { useContext, useState } from "react";
import { Form, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "renderer/components";
import TextInput from "renderer/components/TextInput/TextInput";
import DeleteConfirmation from "renderer/modals/DeleteConfirmation";
import { ModalContext } from "renderer/screens/Home/HomeScreen";


export default function IPSSettings() {
   const navigate = useNavigate()
   const { isOpen, toggleConfirmationModal } = useContext(ModalContext);
   const [selectedId, setSelectedId] = useState(0)
   const addHeaderStyle = (idx: number) => idx == 0 || idx == 4 ? 'text-center' : ''

   const [show, setShow] = useState(false);

   const handleClose = () => {
      setShow(false)
   }
   const gotoHistorial = () => {
      setShow(false)
      navigate('supervisor/audotoria-historial')
   }
   const handleShow = () => setShow(true);

   const removeNews = (id: number) => {
      setSelectedId(id)
      toggleConfirmationModal()
   }
   const removeConfirm = () => {
      console.log(selectedId);
   }


   return (
      <div>
         <div className="v-center-end">
            <Button onClick={handleShow} className='w-auto px-4 py-2'>
               Agregar IP
            </Button>
         </div>

         <div className="v-center-between mb-1">
            <h4 className="cardTitle mx-3">IPS</h4>
            <div className='v-center'>
               <Button onClick={() => null} variant="link" className='v-center gap-1'>
                  <IconElement icon={faCloud} />
                  Excel
               </Button>
               <Button onClick={() => null} variant="link" className='v-center gap-1'>
                  <IconElement icon={faCloud} />
                  PDF
               </Button>
               <Button onClick={() => null} variant="link" className='v-center gap-1'>
                  <IconElement icon={faCloud} />
                  CSV
               </Button>
            </div>
         </div>

         {/* Table */}
         <Table responsive className='text-left'>
            <thead>
               <tr>
                  {["IP", "PUESTOS", "REMOTO", "ACTIVACIÓN", "ACCIÓN"]
                     .map((title: any, index: number) => (
                        <th className={`px-2 ${addHeaderStyle(index)}`} key={index}>{title}</th>
                     ))}
               </tr>
            </thead>
            <tbody className='text-left'>
               {Array.from({ length: 5 }).map((_, index) => (<tr key={index}>
                  <td className='text-center'>10.222.22222</td>
                  <td>Puesto 1</td>
                  <td>Si</td>
                  <td className='px-4'>
                     <div>
                        <Form.Check type='switch' defaultChecked={true} />
                     </div>
                  </td>
                  <td>
                     <div className='v-center-evenly'>
                        <Button
                           variant='flat'
                           className='w-auto no-shadows'
                           onClick={() => { null }}
                        >
                           <IconElement icon={faPencil} />
                        </Button>
                        <Button
                           variant='flat'
                           className='w-auto no-shadows'
                           onClick={() => { removeNews(0) }}
                        >
                           <IconElement icon={faTrash} />
                        </Button>
                     </div>
                  </td>
               </tr>))}
            </tbody>
         </Table>

         {/* Navigation table */}
         <div className="position-relative">
            <nav style={{ position: 'absolute', top: 55 }} className='t-paginator v-center-end gap-2 w-100'>
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

         </div>

         <DeleteConfirmation
            onConfirm={removeConfirm}
            title='¿Estás seguro de que deseas eliminar la IP?'
            subtitle='Esta acción no se puede deshacer y la IP será permanentemente eliminada de tu lista. Por favor, confirma tu decisión.'
         />

         <Modal show={show} onHide={handleClose}>
            <Modal.Header>
               <Button onClick={handleClose} variant='icon'>
                  <IconElement style={{ padding: 12 }} icon={faTimesCircle} />
               </Button>
            </Modal.Header>
            <Modal.Body className='text-center center-col pb-0'>
               <h2 style={{ fontWeight: 'bold' }} className='w-50 mb-5'> Nueva IP </h2>
               <Form.Group className="mb-3">
                  <TextInput wrapperclassname="card-input--g" icon={faWindowMaximize} placeholder='Numero IP' />
               </Form.Group>
               <Form.Group className="mb-3">
                  <TextInput wrapperclassname="card-input--g" icon={faDesktop} placeholder='Puesto 1' />
               </Form.Group>
            </Modal.Body>
            <Modal.Footer className='center-col mb-5'>
               <div className='v-center-between gap-3'>
                  <Button onClick={() => handleClose()} variant="danger" className='px-5 py-2 v-center w-auto'>
                     Cancelar
                  </Button>
                  <Button onClick={() => handleClose()} className='px-5 py-2 v-center w-auto'>
                     Agregar
                  </Button>
               </div>
            </Modal.Footer>
         </Modal>
      </div>
   )
}
