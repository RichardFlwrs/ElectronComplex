import { faChevronLeft, faChevronRight, faComment, faMagnifyingGlass, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import IconElement from "renderer/components/IconElement/IconElement";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "renderer/components";
import CardBox from "renderer/components/CardBox/CardBox";
import TextInput from "renderer/components/TextInput/TextInput";
import ChatModal from "../components/ChatModal";
import { iconMensaje, iconPhone } from "renderer/store/icons.index";

export default function Agenda() {
   const nav = useNavigate()
   const [chatOpen, setchatOpen] = useState(false)

   const openChat = () => {
      setchatOpen(true)
   }
   const closeChat = () => {
      setchatOpen(false)
   }

   return (
      <div 
         id="agenda-tap-wrapper" 
         className="pb-5" 
         style={{ paddingRight: '2rem', paddingLeft: '2rem' }}
      >
         <div className="v-center-normal gap-5">
            <TextInput
               icon={faMagnifyingGlass}
               placeholder="Buscar"
               wrapperclassname="flex-1 card-input"
            />

            <Button className="py-2 w-auto">
               Agregar Contacto
            </Button>
         </div>

         <Row className="mt-4 d-flex flex-wrap">
            {Array.from({ length: 15 }).map((data, idx) =>
               <Col xl={4} style={{ height: 85 }} key={idx}>
                  <CardBox className="v-center-between mx-2 my-4 p-2 px-3">
                     <div className="v-center gap-3">
                        <IconElement icon={faUser} />
                        <div>
                           <p>Florencia Gonzalez</p>
                           <p>000000</p>
                        </div>
                     </div>
                     <div className="v-center gap-2">
                        <Button variant="icon" className="p-1">
                           <IconElement icon={iconPhone} style={{ fontSize: 14 }} />
                        </Button>
                        <Button variant="icon" className="p-1" onClick={() => openChat()}>
                           <IconElement icon={iconMensaje} style={{ fontSize: 14 }} />
                        </Button>
                     </div>
                  </CardBox>
               </Col>
            )}
         </Row>

         <div className="position-relative">
            <nav style={{ position: 'absolute', top: 55 }} className='t-paginator v-center-end gap-2 w-100'>
               <Button variant='flat' className='v-center w-auto p-2'>
                  <IconElement icon={faChevronLeft} />
               </Button>

               <Button variant='primary' className='v-center'>
                  1
               </Button>

               <Button variant='light' className='v-center'>
                  2
               </Button>

               <Button variant='flat' className='v-center w-auto p-2'>
                  <IconElement icon={faChevronRight} />
               </Button>
            </nav>

         </div>

         <ChatModal visible={chatOpen} onClose={closeChat} />
      </div>
   )
}