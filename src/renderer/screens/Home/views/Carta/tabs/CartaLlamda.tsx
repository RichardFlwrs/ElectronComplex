import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import { faBell, faBriefcaseMedical, faBullhorn, faCarSide, faFireExtinguisher, faHandHoldingHeart, faLocationDot, faMapLocationDot, faPaperclip, faPersonMilitaryPointing, faPhone, faShield, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Form, Nav, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Button } from "renderer/components";
import TextInput from "renderer/components/TextInput/TextInput";
import CartaForm from "../components/CartaForm";
import CentrosDespachoTable from "../components/CentrosDespachoTable";
import CardBox from "renderer/components/CardBox/CardBox";

export default function CartaLlamda() {
   const selectFile = () => {
      document.getElementById('file-input')?.click()
   }

   const TabsIndex = [
      { id: '1', text: "Localización de la llamada", icon: faMapLocationDot },
      { id: '2', text: "Denunciante", icon: faBullhorn },
      { id: '3', text: "Victimas", icon: faUserInjured },
      { id: '4', text: "Salud ", icon: faBriefcaseMedical },
      { id: '5', text: "Parte Policial", icon: faPersonMilitaryPointing },
      { id: '6', text: "Bomberos ", icon: faFireExtinguisher },
      { id: '7', text: "Defensa civil", icon: faShield },
      { id: '8', text: "Transito", icon: faCarSide },
   ]

   return (
      <div id="carta-llamada">
         <div className="v-center-evenly gap-3 buttons-option mb-4">
            <Button variant="light" className="py-2 v-center gap-2 card-btn">
               <FontAwesomeIcon icon={faFaceFrownOpen} />
               Broma
            </Button>
            <Button variant="light" className="py-2 v-center gap-2 card-btn">
               <FontAwesomeIcon icon={faBell} />
               No constituye emergencia
            </Button>
            <Button variant="light" className="py-2 v-center gap-2 card-btn">
               <FontAwesomeIcon icon={faHandHoldingHeart} />
               Agradecimiento
            </Button>
            <Button variant="light" className="py-2 v-center gap-2 card-btn">
               <FontAwesomeIcon icon={faPhone} />
               Llamada interna
            </Button>
         </div>

         <CartaForm />

         <CentrosDespachoTable />

         <CardBox className="no-shadows my-4">
            <Tab.Container id="my-tab-id" defaultActiveKey="1">
               <Row>
                  <Nav variant="tabs" className="mb-4 gap-2">
                     {TabsIndex.map((data, index) => <>
                        <Nav.Item key={index}>
                           <Nav.Link href="" eventKey={data.id}>
                              <FontAwesomeIcon icon={data.icon} />
                              {data.text}
                           </Nav.Link>
                        </Nav.Item>
                     </>)}
                  </Nav>
               </Row>
               <Tab.Content>
                  <Tab.Pane eventKey="1">1</Tab.Pane>
                  <Tab.Pane eventKey="2">2</Tab.Pane>
                  <Tab.Pane eventKey="3">3</Tab.Pane>
                  <Tab.Pane eventKey="4">4</Tab.Pane>
                  <Tab.Pane eventKey="5">5</Tab.Pane>
                  <Tab.Pane eventKey="6">6</Tab.Pane>
                  <Tab.Pane eventKey="7">7</Tab.Pane>
                  <Tab.Pane eventKey="8">8</Tab.Pane>
               </Tab.Content>
            </Tab.Container>
         </CardBox>
      </div>
   )
}