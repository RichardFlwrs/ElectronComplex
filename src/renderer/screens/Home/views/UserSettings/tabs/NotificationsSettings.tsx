import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { Button } from "renderer/components";

export default function NotificationsSettings() {
   const selectFile = () => {
      document.getElementById('file-input')?.click()
   }

   return (
      <div id="notifications-settings" className="">
         <p className="my-2 mb-4">Seleccione el audio de las notificaciones</p>

         <div className="v-center-between mb-5">
            <div className="flex-1 v-center-normal gap-3">
               <Form.Check
                  type={'checkbox'}
                  id={`Lorem ipsum`}
                  label={`Lorem ipsum`}
                  defaultChecked={false}
               />
               <Form.Check
                  type={'checkbox'}
                  id={`Lorem ipsum`}
                  label={`Lorem ipsum`}
                  defaultChecked={false}
               />
               <Form.Check
                  type={'checkbox'}
                  id={`Lorem ipsum`}
                  label={`Lorem ipsum`}
                  defaultChecked={false}
               />
               <Form.Check
                  type={'checkbox'}
                  id={`Lorem ipsum`}
                  label={`Lorem ipsum`}
                  defaultChecked={false}
               />
            </div>

            <Button onClick={selectFile} variant="link" className="w-auto v-center gap-1">
               <FontAwesomeIcon icon={faPaperclip} />
               Adjuntar archivos
            </Button>

            <div className="positio-absolute hide">
               <input type="file" name="" id="file-input" />
            </div>
         </div>


         <p className="my-4">Tiempo de duración de la carta</p>
         <div className="v-center-evenly gap-3">
            <ClockItem />
            <ClockItem />
            <ClockItem />
         </div>

         <div style={{ margin: '7rem auto' }} className="v-center gap-3">
            <Button variant="danger" className="w-auto py-2 px-5">
               Cancelar
            </Button>
            <Button className="w-auto py-2 px-4">
               Guardar Cambios
            </Button>
         </div>
      </div>
   )
}

const ClockItem = () => {
   return <div className="v-center gap-2 flex-1 w-100">
      <FontAwesomeIcon icon={faClock} className="fs-32" />
      <div className="card-input py-1 px-3  w-100">
         <p>00.00.00 a 00.00.00</p>
      </div>
   </div>
}