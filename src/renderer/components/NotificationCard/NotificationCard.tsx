import { faBell, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button/Button";

export default function NotificationCard() {
   return (
      <div className="notfi-card-wrapper">
         <div className="notif-card v-center">
            <Button onClick={() => null} variant='icon' className="closeBtn">
               <FontAwesomeIcon icon={faTimesCircle} />
            </Button>

            <FontAwesomeIcon style={{ fontSize: 25 }} icon={faBell} />

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
