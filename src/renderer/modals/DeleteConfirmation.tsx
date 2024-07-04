import MyImage from "resources/public/logo.png"
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import IconElement from 'renderer/components/IconElement/IconElement'
import { Modal } from 'react-bootstrap'
import { Button } from 'renderer/components'
import { useContext, useState } from "react"
import { ModalContext } from "renderer/screens"


type Props = {
   onConfirm: () => void,
   title?: string,
   subtitle?: string,
}

export default function DeleteConfirmation(P: Props) {
   const { isOpen, toggleConfirmationModal } = useContext(ModalContext);

   const handleClose = () => toggleConfirmationModal()

   const confirmDelete = () => {
      P.onConfirm()
      toggleConfirmationModal()
   }

   return (
      <div>
         <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header>
               <Button onClick={handleClose} variant='icon'>
                  <IconElement style={{ padding: 12 }} icon={faTimesCircle} />
               </Button>
            </Modal.Header>
            <Modal.Body className='text-center center-col m'>
               <img src={MyImage} alt="" width={150} height={150} className='mb-3' />
               <h2 style={{ fontWeight: 'bold' }} className='w-75'>
                  {P.title}
               </h2>
               <p style={{ fontSize: 15 }} className='w-75'>
                  {P.subtitle}
               </p>
            </Modal.Body>
            <Modal.Footer className='v-center mb-4 gap-4'>
               <Button
                  onClick={handleClose}
                  className='w-auto px-5'
                  variant="danger"
                  style={{ padding: 12 }}
               >
                  Cancelar
               </Button>
               <Button
                  onClick={confirmDelete}
                  className='w-auto px-5'
                  style={{ padding: 12 }}
               >
                  Eliminar
               </Button>
            </Modal.Footer>
            <div className="my-4"></div>
         </Modal>
      </div>
   )
}
