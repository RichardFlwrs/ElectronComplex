import { faBell, faClock } from "@fortawesome/free-regular-svg-icons";
import { faCloud, faEarthAmericas, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import IconElement from "renderer/components/IconElement/IconElement";
import { Col, Form, Nav, Row, Tab } from "react-bootstrap";
import CardBox from "renderer/components/CardBox/CardBox";
import CartaInversa from "./tabs/CartaInversa";
import CartaLlamda from "./tabs/CartaLlamda";
import { Button } from "renderer/components";
import DropDown from "renderer/components/DropDown/DropDown";
import InboxTable from "./components/InboxTable";

export default function Carta() {
   return (
      <div>
         <CardBox className="mb-4">
            <Tab.Container id="my-tab-id" defaultActiveKey="opens">
               <Row>
                  <Nav variant="tabs" className="mb-4 gap-2">
                     <Nav.Item>
                        <Nav.Link eventKey="opens" className="v-center gap-2">
                           Carta de llamada
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="pendings" className="v-center gap-2">
                           Carta inversa
                        </Nav.Link>
                     </Nav.Item>

                     <div className='nav-left-section gap-2'>
                        <TranslateOptions/>
                        <Button onClick={() => null} variant="light" className='v-center card-btn py-2'>
                           <IconElement icon={faClock} style={{ marginRight: 5 }} />
                           00:2
                        </Button>
                     </div>
                  </Nav>

               </Row>
               <Tab.Content>
                  <Tab.Pane eventKey="opens">
                     <CartaLlamda />
                  </Tab.Pane>
                  <Tab.Pane eventKey="pendings">
                     <CartaLlamda />
                  </Tab.Pane>
               </Tab.Content>
            </Tab.Container>
         </CardBox>

         <InboxTable/>
      </div>
   )
}

const TranslateOptions = () => {
   const filterOptions = ["Inglés", "Portugues", "Francés", "Aleman"]

   return (
      <DropDown
         className='card-btn py-2'
         dropdownParent={<>
            <IconElement icon={faEarthAmericas} style={{ marginRight: 5 }} />
            Traducción
         </>}
         headerTitle='Idiomas:'
         withCloseBtn={true}
         ddOption={{ width: '17rem' }}
      >
         <Row className='pb-0'>
            {filterOptions.map((_f, idx) => <Col xs={6} className='v-center-normal gap-3' key={idx}>
               <Form.Check type='checkbox' label={`${_f}`} id={`${_f}`} />
            </Col>)}
         </Row>
         <div className='pt-0'>
            <Button variant='link' className='w-auto'>
               Activar traducción
            </Button>
         </div>
      </DropDown>
   )
}