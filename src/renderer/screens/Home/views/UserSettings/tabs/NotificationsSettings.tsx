import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import IconElement from "renderer/components/IconElement/IconElement";
import { Form } from "react-bootstrap";
import { Button } from "renderer/components";
import Clock1 from "resources/public/config/tiempo-carta-01.svg"
import Clock2 from "resources/public/config/tiempo-carta-02.svg"
import Clock3 from "resources/public/config/tiempo-carta-03.svg"


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
               <IconElement icon={faPaperclip} />
               Adjuntar archivos
            </Button>

            <div className="positio-absolute hide">
               <input type="file" name="" id="file-input" />
            </div>
         </div>


         <p className="my-4">Tiempo de duración de la carta</p>
         <div className="v-center-evenly gap-3">
            <ClockItem img={Clock1} title="Tiempo 1" />
            <ClockItem img={Clock2} title="Tiempo 2" />
            <ClockItem img={Clock3} title="Tiempo 3" />
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

const ClockItem = ({img, title} : any) => {
   return <div className="v-center gap-2 flex-1 w-100">
      <img src={img} className="fs-32" title={title} />
      <div className="card-input py-1 px-3  w-100">
         <p>00.00.00 a 00.00.00</p>
      </div>
   </div>
}