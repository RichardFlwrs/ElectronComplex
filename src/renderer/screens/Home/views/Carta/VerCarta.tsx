import { faCircleInfo, faThumbtack, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "renderer/components";
import CardBox from "renderer/components/CardBox/CardBox";
import InboxTable from "./components/InboxTable";
import { faBookmark, faCalendar } from "@fortawesome/free-regular-svg-icons";

export default function VerCarta() {
   const navigate = useNavigate()
   let { id } = useParams();
   const [show, setShow] = useState(false);
   const [isNew, setisNew] = useState(false);

   const handleClose = () => {
      setShow(false)
      navigate('/home/operadores')
   }

   const sendForm = () => {
      setShow(true)
   }

   useEffect(() => {
      // console.log(id);

      if (id === 'nuevo') setisNew(true)
   }, [])

   return (
      <div id="VerCartaPage">
         <div className="v-center-between">
            <div className='v-center-normal gap-1'>
               <Button
                  variant='link'
                  className='w-auto'
                  style={{ paddingRight: 1 }}
                  onClick={() => navigate("/home/carta")}
               >
                  {"< Supervisor"}
               </Button>
               <p>/ {`Ver Carta`}</p>
            </div>

            <div className="v-center-end gap-3">
               <Button
                  variant="light"
                  className="w-auto px-5 py-2"
               >Cerrar Carta </Button>
               <Button
                  className="w-auto px-5 py-2"
               >Asociar </Button>
               <Button
                  variant="link"
                  className="w-auto"
               >Editar </Button>
            </div>
         </div>

         <Row className="col-spacing mb-3">
            <Col xl={12} className="d-flex gap-3">
               <CardBox className="flex-1 p-3">
                  <div className="v-center-normal gap-2">
                     <FontAwesomeIcon icon={faTriangleExclamation} className="circle-icon" />
                     <p className="cardTitle bolder m-0">Tipo de delito</p>
                  </div>
                  <p className="my-2">Lorem ipsum</p>
               </CardBox>

               <CardBox className="flex-1 p-3">
                  <div className="v-center-normal gap-2">
                     <FontAwesomeIcon icon={faCalendar} className="circle-icon" />
                     <p className="cardTitle bolder m-0">Fecha y hora</p>
                  </div>
                  <p className="my-2">22.05.2023 | 16:30:34</p>
               </CardBox>

               <CardBox className="flex-1 p-3">
                  <div className="v-center-normal gap-2">
                     <FontAwesomeIcon icon={faThumbtack} className="circle-icon" />
                     <p className="cardTitle bolder m-0">Agencia</p>
                  </div>
                  <p className="my-2">Circunscripcion 1</p>
               </CardBox>

               <CardBox className="flex-1 p-3">
                  <div className="v-center-normal gap-2">
                     <FontAwesomeIcon icon={faBookmark} className="circle-icon" />
                     <p className="cardTitle bolder m-0">Estado</p>
                  </div>
                  <p className="my-2">Abierta</p>
               </CardBox>
            </Col>
            <Col xl={6}>
               <CardBox className="p-3 mb-3">
                  <div className="v-center-normal gap-2">
                     <FontAwesomeIcon icon={faCircleInfo} className="circle-icon" />
                     <p className="cardTitle m-0">Estado</p>
                  </div>
                  <p className="my-2">Abierta</p>
                  <div className="v-center-normal gap-2">
                     <FontAwesomeIcon icon={faCircleInfo} className="circle-icon" />
                     <p className="cardTitle m-0">Estado</p>
                  </div>
                  <p className="my-2">Abierta</p>
               </CardBox>

               <CardBox className="p-3">
                  <div className="v-center-normal gap-2">
                     <FontAwesomeIcon icon={faCircleInfo} className="circle-icon" />
                     <p className="cardTitle m-0">Estado</p>
                  </div>
                  <p className="my-2">Abierta</p>
                  <div className="v-center-normal gap-2">
                     <FontAwesomeIcon icon={faCircleInfo} className="circle-icon" />
                     <p className="cardTitle m-0">Estado</p>
                  </div>
                  <p className="my-2">Abierta</p>
               </CardBox>
            </Col>
            <Col xl={6}>
               <CardBox className="p-3 h-100">
                  <div className="">
                     <p className="cardTitle mb-3">Comentarios</p>
                  </div>
                  <p className="my-2">Fecha: 22.05.2024 l Hora: 15:30:20</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis necessitatibus qui nostrum neque ab corporis dignissimos obcaecati dolorum repudiandae eius a repellendus vitae fuga, dolor facere velit nulla aperiam.</p>

                  <div className="bb-card my-3"></div>
                  <p className="my-2">Fecha: 22.05.2024 l Hora: 15:30:20</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis necessitatibus qui nostrum neque ab corporis dignissimos obcaecati dolorum repudiandae eius a repellendus vitae fuga, dolor facere velit nulla aperiam.</p>
               </CardBox>
            </Col>

            <Col xl={12}>
               <CardBox className="p-3">
                  <div className="v-center-normal gap-2">
                     <FontAwesomeIcon icon={faCircleInfo} className="circle-icon" />
                     <p className="cardTitle m-0">Estado</p>
                  </div>
                  <p className="my-2">Abierta</p>
               </CardBox>
            </Col>
         </Row>

         <CardBox className="map-section mb-4">
            <h5 className="cardTitle">Geolocalización</h5>

            <div className="map-info-section gap-4">
               {[
                  'Partido: Lorem ipsum',
                  'Localidad: Lorem ipsum',
                  'Calle: Lorem ipsum',
                  'Nro: XXX',
                  'Piso: X',
               ].map((info, idx) => <div key={idx}>
                  {info}
               </div>)}
            </div>

            {/* TODO MAP */}
            <div
               style={{
                  backgroundColor: 'cyan',
                  height: 500,
                  borderRadius: 10,
               }}
               className='w-100'
            ></div>
         </CardBox>

         <div style={{ margin: 10 }}>
            <InboxTable />
         </div>

         <div style={{ paddingLeft: '2rem' }} className="mb-5">
            <Button variant="link" className="">
               Ver historial carta
            </Button>
         </div>

      </div>
   )
}

