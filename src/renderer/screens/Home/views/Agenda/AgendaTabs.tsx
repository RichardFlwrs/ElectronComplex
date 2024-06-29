import { Nav, Row, Tab } from "react-bootstrap";
import CardBox from "renderer/components/CardBox/CardBox";
import Agenda from "./tabs/Agenda";
import Mensajes from "./tabs/Mensajes";


export default function AgendaTabs() {
   return (
      <div>
         <CardBox className="pb-0 pr-0 pl-0">
            <Tab.Container id="my-tab-id" defaultActiveKey="opens">
               <Row style={{ paddingLeft: '2rem' }}>
                  <Nav variant="tabs" className="mb-4 gap-2">
                     <Nav.Item>
                        <Nav.Link eventKey="opens">
                           Agenda
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="pendings">
                           Mensajes
                        </Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Row>
               <Tab.Content>
                  <Tab.Pane eventKey="opens">
                     <Agenda />
                  </Tab.Pane>
                  <Tab.Pane eventKey="pendings">
                     <Mensajes />
                  </Tab.Pane>
               </Tab.Content>
            </Tab.Container>
         </CardBox>
      </div>
   )
}
