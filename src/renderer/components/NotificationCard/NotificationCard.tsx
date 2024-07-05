import IconElement from "renderer/components/IconElement/IconElement";
import { Button } from "../Button/Button";
import { iconNotiCarta, iconNotificacionRojo, iconTimes, iconVer } from "renderer/store/icons.index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicModal from "renderer/modals/BasicModal";
import MyImage from "resources/public/bell-modal.png"

type NotificationItemn = {
   img: string, text: string, cssStyle: string
}

export default function NotificationCard() {
   const [selected, setSelected] = useState({} as NotificationItemn)
   const [index, setIndex] = useState(0)
   const nav = useNavigate()

   const [show, setShow] = useState(false);
   const handleClose = () => {
      setShow(false)
   }
   const handleShow = () => setShow(true);

   const NOTIFICATIONS = [
      {
         img: iconNotiCarta,
         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga praesentium libero delectus, laudantium quidem eaque nemo.',
         cssStyle: 'carta'
      },
      {
         img: iconNotificacionRojo,
         text: 'Fuga praesentium libero delectus, laudantium quidem eaque nemo.',
         cssStyle: ''
      },
      {
         img: iconNotificacionRojo,
         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
         cssStyle: ''
      },
   ]

   useEffect(() => {
      setSelected(NOTIFICATIONS[index])
   }, [])

   const changeSelected = (idx: number) => {
      setIndex(idx)
      setSelected(NOTIFICATIONS[idx])
   }

   return (
      <div className="notfi-card-wrapper">
         <div className={`notif-card v-center-normal ${selected.cssStyle}`}>
            {selected.cssStyle !== 'carta'
               ? <Button
                  onClick={handleShow}
                  variant='icon'
                  className="closeBtn"
               >
                  <IconElement className="fs-14" icon={iconTimes} />
               </Button>
               : <Button
                  onClick={() => nav('/home/carta/ver/0')}
                  variant='link'
                  className="ver-cartaBtn v-center gap-1"
               >
                  <IconElement className="fs-14" icon={iconVer} />
                  Ver carta
               </Button>
            }

            <img src={selected.img} alt="icono-notificacion" />

            <p>{selected.text}</p>
         </div>

         <div className="v-center dot-section">
            {NOTIFICATIONS.map((_, idx) => <Button
               variant="icon"
               key={idx}
               onClick={() => changeSelected(idx)}
            >
               <div className={`dot-element ${idx === index ? 'active' : ''}`}></div>
            </Button>)}
         </div>

         <BasicModal
            show={show}
            onClosed={handleClose}
            title='¿Has leído y comprendido la notificación?'
            image={MyImage}
         />

      </div>
   )
}
