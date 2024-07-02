import { faCircleInfo, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "renderer/components";
import TextInput from "renderer/components/TextInput/TextInput";

export default function Tab_Localizacion() {
   return (
      <div className="carta-tab-wrapper">
         <Row className="col-spacing">
            <Col xl={8}>
               <TextInput placeholder="Calle" wrapperclassname="flex-1 card-input" />
            </Col>
            <Col xl={4} className="v-center gap-3">
               <TextInput placeholder="Nro" wrapperclassname="flex-1 card-input" />
               <TextInput placeholder="Depto" wrapperclassname="flex-1 card-input" />
               <Button variant="link" className="v-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  Mapa
               </Button>
               <Button variant="link" className="v-center gap-2">
                  <FontAwesomeIcon icon={faCircleInfo} />
                  A incidente
               </Button>
            </Col>
            <Col xl={12}>
               <Form.Control
                  as="textarea"
                  className='card-input mb-2'
                  placeholder="Comentarios"
                  style={{ height: '80px' }}
               />
            </Col>
            <Col xl={3} className="">
               <TextInput placeholder="Telefono" wrapperclassname="card-input" />
            </Col>
            <Col xl={9} className="v-center-evenly gap-3">
               <Form.Check type="checkbox" label='Enviar SMS para geolocalizacion ' />
               <Form.Check type="checkbox" label='Hacer videollamada ' />
               <Form.Check type="checkbox" label='Ubicacion de la víctima es distinta al denunciante' />
            </Col>
            <Col xl={8}>
               <TextInput placeholder="Calle" wrapperclassname="flex-1 card-input" />
            </Col>
            <Col xl={2} className="v-center gap-3">
               <TextInput placeholder="Nro" wrapperclassname="flex-1 card-input" />
               <TextInput placeholder="Depto" wrapperclassname="flex-1 card-input" />
            </Col>
         </Row>

      </div>
   )
}