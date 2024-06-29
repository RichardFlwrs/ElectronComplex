import { faPhone, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "renderer/components";
import Chat from "renderer/components/Chat/Chat";

export default function ChatModal(P: { visible: boolean, onClose: () => void }) {
   return (
      <div
         className='card-box-style p-0 chat-box-wrapper'
         style={{
            position: 'absolute',
            bottom: 0,
            right: 30,
            width: 370,
            height: 570,
            display: P.visible ? 'flex' : 'none'
         }}
      >
         <div className="position-relative">
            <div style={{ position: 'absolute', top: 7, right: 7, zIndex: 1 }}>
               <Button variant='icon' onClick={P.onClose}>
                  <FontAwesomeIcon icon={faTimesCircle} style={{ fontSize: 14 }} />
               </Button>
            </div>
         </div>

         <div className="position-relative">
            <div style={{ position: 'absolute', top: 28, right: 32, zIndex: 1 }}>
               <Button variant='icon' className="p-1">
                  <FontAwesomeIcon icon={faPhone} style={{ fontSize: 24 }} />
               </Button>
            </div>
         </div>

         <Chat />

      </div>
   )
}