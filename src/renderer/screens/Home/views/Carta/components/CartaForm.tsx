import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import IconElement from "renderer/components/IconElement/IconElement";
import { Col, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Button } from "renderer/components";
import TextInput from "renderer/components/TextInput/TextInput";
import OpenMapModal from "../components/OpenMapModal";

export default function CartaForm() {
   const selectFile = () => {
      document.getElementById('file-input')?.click()
   }

   return (
      <>
         <Row id="form-options" className="col-spacing">
            <Col xl={6}>
               <Row className="col-spacing">
                  <Col xl={12}>
                     <h6 className="cardTitle mb-0">Identificacion de la llamada</h6>
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Telefono" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Previa" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Motivo" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Origen de la llamada" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={12}>
                     <div className="v-center-normal gap-3">
                        <Form.Check label='Hecho relevante' />
                        <Form.Check label='Datos confidenciales' />
                     </div>
                     <Form.Check label='Geoubicación de llamada no corresponde a la ubicación de la incidencia' />
                  </Col>
               </Row>

               <Row className="col-spacing">
                  <Col xl={12}>
                     <h6 className="cardTitle mb-0">Localización del incidente</h6>
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Partido" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Localidad" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Calle" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6} className="v-center-between gap-2">
                     <TextInput placeholder="Nro" wrapperclassname="card-input px-2 py-1" />
                     <TextInput placeholder="Piso" wrapperclassname="card-input px-2 py-1" />
                     <TextInput placeholder="Cuerpo" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="CD" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <OpenMapModal />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="E/C" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Hitos" wrapperclassname="card-input px-2 py-1" />
                  </Col>
               </Row>

               <Row className="col-spacing">
                  <Col xl={12}>
                     <h6 className="cardTitle mb-0">Tipificación de incidencias</h6>
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Tipo" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Subtipo" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Particip" wrapperclassname="card-input px-2 py-1" />
                  </Col>
                  <Col xl={6}>
                     <TextInput placeholder="Prioridad" wrapperclassname="card-input px-2 py-1" />
                  </Col>
               </Row>
            </Col>
            <Col xl={6}>
               <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className=""
               >
                  {/* Preguntas Cerradas */}
                  <Tab eventKey="home" title="Preguntas Cerradas" className="tab-wrapper">
                     <TextInput placeholder="Pregunta:" wrapperclassname="card-input mb-2" />
                     <Form.Control
                        as="textarea"
                        className='card-input mb-2'
                        placeholder="Hecho, relatos, comentarios"
                        style={{ height: '80px' }}
                     />
                     <TextInput placeholder="Pregunta:" wrapperclassname="card-input mb-2" />
                     <Form.Control
                        as="textarea"
                        className='card-input mb-2'
                        placeholder="Hecho, relatos, comentarios"
                        style={{ height: '80px' }}
                     />
                     <TextInput placeholder="Pregunta:" wrapperclassname="card-input mb-2" />
                     <Form.Control
                        as="textarea"
                        className='card-input'
                        placeholder="Hecho, relatos, comentarios"
                        style={{ height: '80px' }}
                     />
                  </Tab>

                  {/* Protocolo */}
                  <Tab eventKey="profile" title="Protocolo" className="tab-wrapper position-relative">
                     <p className="flex-1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolores odio quam laboriosam id eos eum officiis minima excepturi amet reprehenderit tenetur voluptatum at aperiam, voluptatibus libero itaque fugit expedita totam? Provident consequuntur minus sunt fugiat quia rem rerum, quas eaque voluptates perspiciatis voluptatem et hic quis voluptatum accusantium quibusdam fugit consequatur quisquam perferendis aliquam architecto enim quaerat officiis esse! Nisi molestias, deserunt, cumque corrupti sequi alias aspernatur possimus perferendis excepturi similique nesciunt maiores sunt labore! Deleniti error vel architecto nam laborum blanditiis soluta, aut expedita eaque quos veritatis in esse impedit voluptates pariatur officia praesentium perferendis ad labore! Officia minus aut tenetur consequuntur obcaecati delectus ipsam ipsum modi. Laborum excepturi ratione nihil voluptate, assumenda sit aliquam obcaecati doloribus voluptas quisquam voluptatum vero officiis perferendis labore cum esse expedita dolorum libero et ullam ut magni? Ad nam repellat reprehenderit laboriosam ex reiciendis dolor a voluptate explicabo, deserunt dolorem nobis consectetur, corporis enim eaque labore odio? Asperiores ducimus et aspernatur sed facilis voluptate impedit exercitationem enim explicabo optio repellendus, cupiditate consectetur alias qui delectus totam veniam libero in tempore maxime consequatur nesciunt temporibus beatae tempora. Molestias nobis eum voluptate dolorum, maxime fugit, quo impedit iure deleniti totam architecto dignissimos, nam sapiente!
                     </p>

                     {/* TODO: Sticky at bottom */}
                     <div className="v-center gap-3">
                        <div className="pill">Lorem ipsum dolor sit.</div>
                        <div className="pill">Lorem ipsum dolor sit.</div>
                     </div>
                  </Tab>

                  {/* Evento */}
                  <Tab eventKey="contact" title="Evento" className="tab-wrapper">
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>HORA</th>
                              <th>EVENTO</th>
                              <th>DESCRIPCIÓN</th>
                              <th>USUARIO</th>
                           </tr>
                        </thead>
                        <tbody className='text-center'>
                           {Array.from({ length: 5 }).map((_, index) => (<tr key={index}>
                              <td>29.04.2023 13:41:21</td>
                              <td>Sincronizador de serivor</td>
                              <td>Origen: Mar del Plata Destino: Mar del Plata</td>
                              <td>Operador01</td>
                           </tr>))}
                        </tbody>
                     </Table>
                  </Tab>
               </Tabs>


               <div className="">
                  <h6 className="cardTitle my-3">Comentarios</h6>
                  <TextInput placeholder="Información" wrapperclassname="card-input px-2 py-1 mb-3" />
                  <Form.Control
                     as="textarea"
                     className='card-input mb-2'
                     placeholder=""
                     style={{ height: '80px' }}
                  />
                  <Button onClick={selectFile} variant="link" className="w-auto v-center gap-1">
                     <IconElement icon={faPaperclip} />
                     Adjuntar archivos
                  </Button>

                  <div className="positio-absolute hide">
                     <input type="file" name="" id="file-input" />
                  </div>
               </div>
            </Col>
         </Row>
      </>
   )
}
