import { faCloud, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "renderer/components";
import CardBox from "renderer/components/CardBox/CardBox";
import TextInput from "renderer/components/TextInput/TextInput";

export default function MapaCalor() {
   return (
      <CardBox id="mapa-calor">
         <div className="v-center-between">
            <h5 className="cardTitle">
               <FontAwesomeIcon icon={faSliders} className="px-2" />
               Filtros
            </h5>

            <Button className="w-auto py-2 px-5">
               Buscar
            </Button>
         </div>

         {/* Form section */}
         <div className="form-section">
            <Row>
               <Col className="v-center-evenly">
                  <Form.Check type="checkbox" label='Relevantes' />
                  <Form.Check type="checkbox" label='Sin asociar' />
               </Col>
               <Col>
                  <TextInput wrapperclassname="card-input" placeholder="Relato" />
               </Col>
               <Col>
                  <TextInput wrapperclassname="card-input" placeholder="Telefono" />
               </Col>
               <Col>
                  <TextInput wrapperclassname="card-input" placeholder="Calle" />
               </Col>
               <Col>
                  <TextInput wrapperclassname="card-input" placeholder="Partido" />
               </Col>
            </Row>

            <Row>
               <div style={{ width: '60%' }}>
                  <Row>
                     <Col>
                        <TextInput wrapperclassname="card-input" placeholder="Usuario" />
                     </Col>
                     <Col className="v-center gap-2">
                        <TextInput wrapperclassname="card-input" placeholder="Desde" />
                        <TextInput wrapperclassname="card-input" placeholder="Hasta" />
                     </Col>
                     <Col>
                        <TextInput wrapperclassname="card-input" placeholder="Cate" />
                     </Col>
                  </Row>
                  <Row>
                     <Col>
                        <TextInput wrapperclassname="card-input" placeholder="Centro de despacho" />
                     </Col>
                     <Col>
                        <TextInput wrapperclassname="card-input" placeholder="Tipificacion de la llamada" />
                     </Col>
                     <Col>
                        <TextInput wrapperclassname="card-input" placeholder="Tipificacion despacho" />
                     </Col>
                  </Row>
                  <Row>
                     <Col>
                        <TextInput wrapperclassname="card-input" placeholder="Prioridad" />
                     </Col>
                     <Col>
                        <TextInput wrapperclassname="card-input" placeholder="Inicio" />
                     </Col>
                     <Col>
                        <TextInput wrapperclassname="card-input" placeholder="Resultado" />
                     </Col>
                  </Row>
               </div>
               <div style={{ width: '40%' }}>
                  <Col>
                     <Form.Control
                        as="textarea"
                        className='card-btn w-100 m-0'
                        placeholder="Comentarios"
                        style={{ height: '155px' }}
                     />
                  </Col>
               </div>
            </Row>

         </div>

         <div className="v-center-between">
            <h5 className="cardTitle my-4">
               Mapa de calor
            </h5>

            <Button className="w-auto" variant="link">
               <FontAwesomeIcon icon={faCloud} />
               PDF
            </Button>
         </div>

         {/* TODO MAP */}
         <div
            style={{
               backgroundColor: 'cyan',
               height: 500,
               borderRadius: 10
            }}
            className='w-100'
         ></div>
      </CardBox>
   )
}
