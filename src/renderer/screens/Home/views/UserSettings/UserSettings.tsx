import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import IconElement from "renderer/components/IconElement/IconElement";
import { Nav, Row, Tab } from "react-bootstrap";
import CardBox from "renderer/components/CardBox/CardBox";
import NotificationsSettings from "./tabs/NotificationsSettings";
import IPSSettings from "./tabs/IPSSettings";



export default function UserSettings() {
   return (
      <div>
         <CardBox className="">
            <Tab.Container id="my-tab-id" defaultActiveKey="opens">
               <Row>
                  <Nav variant="tabs" className="mb-4 gap-2">
                     <Nav.Item>
                        <Nav.Link eventKey="opens" className="v-center gap-2">
                           <IconElement icon={faBell} />
                           Notificaciones y carta
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="pendings" className="v-center gap-2">
                           <IconElement icon={faWindowMaximize} />
                           IPS
                        </Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Row>
               <Tab.Content>
                  <Tab.Pane eventKey="opens">
                     <NotificationsSettings/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="pendings">
                     <IPSSettings/>
                  </Tab.Pane>
               </Tab.Content>
            </Tab.Container>
         </CardBox>
      </div>
   )
}
