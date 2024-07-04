import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import { faBell, faBriefcaseMedical, faBullhorn, faCarSide, faFireExtinguisher, faHandHoldingHeart, faLocationDot, faMapLocationDot, faPaperclip, faPersonMilitaryPointing, faPhone, faShield, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import IconElement from "renderer/components/IconElement/IconElement";
import { Col, Form, Nav, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Button } from "renderer/components";
import TextInput from "renderer/components/TextInput/TextInput";
import CartaForm from "../components/CartaForm";
import CentrosDespachoTable from "../components/CentrosDespachoTable";
import CardBox from "renderer/components/CardBox/CardBox";
import Tab_Localizacion from "../CartaLlamadaTabs/Tab_Localizacion";
import Tab_Denunciante from "../CartaLlamadaTabs/Tab_Denunciante";
import Tab_Victimas from "../CartaLlamadaTabs/Tab_Victimas";
import Tab_Salud from "../CartaLlamadaTabs/Tab_Salud";
import Tab_Policial from "../CartaLlamadaTabs/Tab_Policial";
import Tab_Bomberos from "../CartaLlamadaTabs/Tab_Bomberos";
import Tab_DefCivil from "../CartaLlamadaTabs/Tab_DefCivil";
import Tab_Transito from "../CartaLlamadaTabs/Tab_Transito";

export default function CartaLlamda() {

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
               <IconElement icon={faFaceFrownOpen} />
               Broma
            </Button>
            <Button variant="light" className="py-2 v-center gap-2 card-btn">
               <IconElement icon={faBell} />
               No constituye emergencia
            </Button>
            <Button variant="light" className="py-2 v-center gap-2 card-btn">
               <IconElement icon={faHandHoldingHeart} />
               Agradecimiento
            </Button>
            <Button variant="light" className="py-2 v-center gap-2 card-btn">
               <IconElement icon={faPhone} />
               Llamada interna
            </Button>
         </div>

         <CartaForm />

         <CentrosDespachoTable />

         <CardBox className="no-shadows my-4">
            <Tab.Container id="my-tab-id" defaultActiveKey="1">
               <Row>
                  <Nav variant="tabs" className="mb-4 gap-2">
                     {TabsIndex.map((data, index) =>
                        <Nav.Item key={index}>
                           <Nav.Link href="" eventKey={data.id}>
                              <IconElement icon={data.icon} />
                              {data.text}
                           </Nav.Link>
                        </Nav.Item>
                     )}
                  </Nav>
               </Row>
               <Tab.Content>
                  <Tab.Pane eventKey="1"><Tab_Localizacion /> </Tab.Pane>
                  <Tab.Pane eventKey="2"><Tab_Denunciante /> </Tab.Pane>
                  <Tab.Pane eventKey="3"><Tab_Victimas /> </Tab.Pane>
                  <Tab.Pane eventKey="4"><Tab_Salud /> </Tab.Pane>
                  <Tab.Pane eventKey="5"><Tab_Policial /> </Tab.Pane>
                  <Tab.Pane eventKey="6"><Tab_Bomberos /> </Tab.Pane>
                  <Tab.Pane eventKey="7"><Tab_DefCivil /> </Tab.Pane>
                  <Tab.Pane eventKey="8"><Tab_Transito /> </Tab.Pane>
               </Tab.Content>
            </Tab.Container>
         </CardBox>

         <p>El protocolo de las preguntas XXXX y la pre fue elaborado por XXXX el dia sss a las xxxx</p>

         <div className="v-center gap-4 my-5">
            <Button variant="danger" className="w-auto px-5">
               Cancelar
            </Button>
            <Button className="w-auto px-5">
               Crear Carta
            </Button>
         </div>
      </div>
   )
}