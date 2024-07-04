import IconElement from "renderer/components/IconElement/IconElement";
import { Button } from "../Button/Button";
import { iconNotificacion, iconTimes } from "renderer/store/icons.index";

export default function NotificationCard() {
   return (
      <div className="notfi-card-wrapper">
         <div className="notif-card v-center">
            <Button onClick={() => null} variant='icon' className="closeBtn">
               <IconElement icon={iconTimes} />
            </Button>

            <img src={iconNotificacion} alt="icono-notificacion" />

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga praesentium libero delectus, laudantium quidem eaque nemo.</p>
         </div>

         <div className="v-center dot-section">
            <div className="dot-element"></div>
            <div className="dot-element active"></div>
            <div className="dot-element"></div>
         </div>

      </div>
   )
}
