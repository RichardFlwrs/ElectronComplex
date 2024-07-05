import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Modal } from 'react-bootstrap'
import { Button } from 'renderer/components'
import IconElement from 'renderer/components/IconElement/IconElement'
import { iconTimes } from 'renderer/store/icons.index'
import MyImage from "resources/public/logo.png"

type Props = {
   show: boolean,
   onClosed: () => void,
   title?: string,
   image?: string,
}

export default function BasicModal(P: Props) {

   const handleClose = () => {
      P.onClosed()
   }

   return (
      <>
         <Modal show={P.show} onHide={handleClose}>
            <Modal.Header>
               <Button onClick={handleClose} variant='icon'>
                  <IconElement style={{ padding: 7 }} icon={iconTimes} />
               </Button>
            </Modal.Header>
            <Modal.Body className='text-center center-col m'>
               <img
                  src={P.image || MyImage} alt=""
                  className='mb-3'
               />
               <h2 style={{ fontWeight: 'bold' }} className='w-50'>
                  {P.title}
               </h2>
            </Modal.Body>
            <Modal.Footer className='center-col mb-4'>
               <Button onClick={handleClose} className='w-50'>
                  Aceptar
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   )
}
