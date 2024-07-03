import { faBoxArchive, faBusSimple, faCircleInfo, faFilePdf, faHashtag, faMotorcycle, faPersonMilitaryPointing, faReceipt, faShield, faThumbtack, faTriangleExclamation, faTruckMedical, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "renderer/components";
import CardBox from "renderer/components/CardBox/CardBox";
import InboxTable from "./components/InboxTable";
import { faBookmark, faCalendar, faTimesCircle } from "@fortawesome/free-regular-svg-icons";

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
                  {[
                     [
                        {
                           icon: faShield, lbl: 'Prioridad', content: <div className="v-center">
                              <div className="circle-status-red"></div>
                              <p>Alta</p>
                           </div>
                        },
                        { icon: faReceipt, lbl: 'Ani', content: '234506' },
                        { icon: faPersonMilitaryPointing, lbl: 'Comisaria', content: 'Lorem ipsum dolor' },
                     ],
                     [
                        { icon: faUserInjured, lbl: 'N de victimas', content: '3' },
                        { icon: faHashtag, lbl: 'ID', content: '30.245.592' },
                        { icon: faBoxArchive, lbl: 'Subtipos', content: 'Lorem ipsum' },
                     ]
                  ].map((section, idx) => <div
                     key={idx}
                     className={`v-center-normal py-3 px-2 gap-3 ${idx == 0 ? 'bb-card' : ''}`}
                  >
                     {section.map((data, _i) => <CartaPropiedad
                        key={_i}
                        icon={data.icon}
                        label={data.lbl}
                        content={data.content}
                     />)}
                  </div>)}
               </CardBox>

               <CardBox className="p-3">
                  <div className="v-center-between mb-3">
                     <p className="cardTitle m-0">Recursos Asignados</p>
                     <Button variant="link" className="">
                        Agregar recursos
                     </Button>
                  </div>
                  <div className="v-center-between gap-4">
                     <div className="w-100 py-2 box-ambulancia v-center gap-3">
                        <FontAwesomeIcon icon={faTruckMedical} />
                        Ambulancia (3)
                     </div>
                     <div className="w-100 py-2 box-bomberos v-center gap-3">
                        <FontAwesomeIcon icon={faBusSimple} />
                        Bomberos (2)
                     </div>
                     <div className="w-100 py-2 box-moto v-center gap-3">
                        <FontAwesomeIcon icon={faMotorcycle} />
                        Moto (3)
                     </div>
                  </div>
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
                  <div className="v-center-between mb-3">
                     <div className="v-center gap-2">
                        <p className="cardTitle m-0">Archivos adjuntos</p>
                        <div className="circle-number">6</div>
                     </div>
                     <Button variant="link" className="">
                        Agregar archivos
                     </Button>
                  </div>
                  <div className="v-center-normal gap-3">
                     {Array.from({ length: 6 }).map((d, i) => <div key={i} className="file-chip">
                        <FontAwesomeIcon icon={faFilePdf} />
                        <p title="Lorem ipsum dolor, sit amet consectetur adipisicing.">
                           Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </p>
                        <Button variant="link" className="w-auto p-0">
                           <FontAwesomeIcon icon={faTimesCircle} />
                        </Button>
                     </div>)}
                  </div>
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
            <Button onClick={() => navigate(`/home/carta/historial/${id}`)} variant="link" className="">
               Ver historial carta
            </Button>
         </div>

      </div>
   )
}



const CartaPropiedad = ({ icon, label, content }: any) => {
   return <div className="flex-1 v-center gap-1">
      <FontAwesomeIcon icon={icon} />
      <p className="bolder">{label}:</p>
      <div
         style={{
            width: 'max-content',
         }}
      >{content}</div>
   </div>
}