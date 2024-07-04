import { faLocationDot, faMagnifyingGlass, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import IconElement from 'renderer/components/IconElement/IconElement'
import { useState } from 'react';
import { Modal } from 'react-bootstrap'
import { Button } from 'renderer/components'
import TextInput from 'renderer/components/TextInput/TextInput';

export default function OpenMapModal() {
   const [show, setShow] = useState(false);

   const handleShow = () => setShow(true);

   const handleClose = () => {
      setShow(false)
   }

   return (
      <div>
         <Button onClick={handleShow} variant="link" className="w-auto v-center gap-2">
            <IconElement icon={faLocationDot} />
            <p>Mapa</p>
         </Button>

         <Modal show={show} onHide={handleClose} className='modal-center'>
            <Modal.Header>
               <Button onClick={handleClose} variant='icon'>
                  <IconElement style={{ padding: 12 }} icon={faTimesCircle} />
               </Button>
            </Modal.Header>
            <Modal.Body className='text-center center-col pb-0 px-5'>
               <div className='v-center-between w-100 gap-5 mb-3'>
                  <TextInput
                     icon={faMagnifyingGlass}
                     placeholder='Buscar o escribir dirección'
                     wrapperclassname='card-input--g flex-1'
                  />
                  <Button className='w-auto py-2 px-5' onClick={handleClose}>
                     Guardar
                  </Button>
               </div>

               {/* TODO MAP */}
               <div
                  style={{
                     backgroundColor: 'cyan',
                     height: 500,
                     borderRadius: 10,
                  }}
                  className='w-100'
               ></div>
            </Modal.Body>
            <Modal.Footer className='center-col mb-5'>
            </Modal.Footer>
         </Modal>
      </div>
   )
}
