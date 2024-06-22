import { faBookmark, faCalendar, faChevronDown, faChevronLeft, faChevronRight, faCloud, faEarListen, faEllipsisV, faEye, faPhone, faPlayCircle, faPlusCircle, faSliders, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Form, Nav, Row, Tab, Table, Tabs } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button, Heading } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import DropDown from 'renderer/components/DropDown/DropDown'
import NotificationCard from 'renderer/components/NotificationCard/NotificationCard'

export default function Supervisor() {
   const navigate = useNavigate()

   return (
      <div>
         {/* Filtros */}
         <CardBox className='mb-4'>
            <h3 className='cardTitle'><FontAwesomeIcon icon={faSliders} />  Filtros</h3>

            <div className='v-center-normal gap-4'>
               <Form.Check
                  type={'radio'}
                  id={`default-radio`}
                  label={`Ultimas dos horas`}
               />
               <Form.Check
                  type={'radio'}
                  id={`default-radio`}
                  label={`Carta`}
               />

               <Button variant='light' className='card-btn'>
                  <p>Numerico</p>
               </Button>

               <Button variant='light' className='card-btn v-center gap-2'>
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>Desde</p>
                  <FontAwesomeIcon icon={faChevronDown} />
               </Button>

               <Button variant='light' className='card-btn v-center gap-2'>
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>Hasta</p>
                  <FontAwesomeIcon icon={faChevronDown} />
               </Button>

               <Button variant='light' className='card-btn v-center gap-2'>
                  <FontAwesomeIcon icon={faBookmark} />
                  <p style={{ paddingRight: 40 }}>Estado</p>
                  <FontAwesomeIcon icon={faChevronDown} />
               </Button>

               <Button style={{ width: '10rem' }} onClick={() => null}>Filtrar</Button>
            </div>
         </CardBox>

         {/* Table */}
         <div>
            <CardBox className='mb-4'>
               <Tab.Container id="my-tab-id" defaultActiveKey="opens">
                  <Row>
                     <Nav variant="tabs" className="mb-4 gap-2">
                        <Nav.Item>
                           <Nav.Link eventKey="opens">
                              Abiertas <div className='circle-number'>10</div>
                           </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="pendings">
                              Pendientes/En proceso <div className='circle-number'>4</div>
                           </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="closed">
                              Cerradas <div className='circle-number'>6</div>
                           </Nav.Link>
                        </Nav.Item>

                        <div className='nav-left-section'>
                           <Button onClick={() => null} variant="link" className='v-center'>
                              <FontAwesomeIcon icon={faCloud} />
                              Excel
                           </Button>
                           <Button onClick={() => null} variant="link" className='v-center'>
                              <FontAwesomeIcon icon={faCloud} />
                              PDF
                           </Button>
                           <Button onClick={() => null} variant="link" className='v-center'>
                              <FontAwesomeIcon icon={faCloud} />
                              CSV
                           </Button>
                        </div>
                     </Nav>
                  </Row>
                  <Tab.Content>
                     <Tab.Pane eventKey="opens"><DummyTble /></Tab.Pane>
                     <Tab.Pane eventKey="pendings"><DummyTble /></Tab.Pane>
                     <Tab.Pane eventKey="closed"><DummyTble /></Tab.Pane>
                  </Tab.Content>
               </Tab.Container>
            </CardBox>

            <nav className='t-paginator v-center-end gap-2'>
               <Button variant='flat' className='v-center w-auto p-2'>
                  <FontAwesomeIcon icon={faChevronLeft} />
               </Button>

               <Button variant='primary' className='v-center'>
                  1
               </Button>

               <Button variant='light' className='v-center'>
                  2
               </Button>

               <Button variant='flat' className='v-center w-auto p-2'>
                  <FontAwesomeIcon icon={faChevronRight} />
               </Button>
            </nav>
         </div>

      </div>
   )
}

const TableOptions = () => {
   const filterOptions = ["Partido", "Cuad", "Localidad", "Cria", "Comisaria", "Calle N"]

   return (
      <DropDown
         className='tOption'
         dropdownParent={<FontAwesomeIcon icon={faEllipsisV} />}
         headerTitle='Agregar:'
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
               Aplicar filtros
            </Button>
         </div>
      </DropDown>
   )
}



const DummyTble = () => {
   const headings: any = [
      "P",
      "ID",
      "FECHA",
      "HORA",
      "AGENCIA",
      "TIPO DE DELITO",
      "RECURSOS",
      "ANI",
      "ESTADO",
      "ACCION",
      <TableOptions />
   ]
   return (
      <Table responsive>
         <thead>
            <tr>
               {headings.map((title: any, index: number) => (
                  <th key={index}>{title}</th>
               ))}
            </tr>
         </thead>
         <tbody className='text-center'>
            {Array.from({ length: 5 }).map((_, index) => (<tr key={index}>
               <td>
                  <div className='circle-status-red m-auto'></div>
               </td>
               <td>30.245.592</td>
               <td>22.05.2023</td>
               <td>16:30:34</td>
               <td>Circunscripcion 1</td>
               <td>Lorem ipsum dolor</td>
               <td>Lorem ipsum</td>
               <td>Lorem ipsum</td>
               <td>
                  <div className='status-box'>
                     P
                  </div>
               </td>
               <td colSpan={2}>
                  <div className='v-center-evenly  '>
                     <Button variant='flat' className='w-auto no-shadows'>
                        <FontAwesomeIcon icon={faEye} />
                     </Button>
                     <Button variant='flat' className='w-auto no-shadows'>
                        <FontAwesomeIcon icon={faPlusCircle} />
                     </Button>
                     <HearAudio idx={index} />
                     <Button variant='flat' className='w-auto no-shadows'>
                        <FontAwesomeIcon icon={faPhone} />
                     </Button>
                  </div>
               </td>
            </tr>))}
         </tbody>
      </Table>
   )
}

import SoundImage from "resources/public/wave-sound.png"

const HearAudio = ({ idx }: { idx: number }) => {


   return (
      <DropDown
         parentId={'hearOption' + idx}
         classContainer='audiobox-option'
         className='w-auto no-shadows'
         dropdownParent={<FontAwesomeIcon icon={faEarListen} />}
         withCloseBtn={true}
         ddOption={{ width: '17rem' }}
      >
         <div className='v-center-normal'>
            <FontAwesomeIcon icon={faPlayCircle} />
            <img
               src={SoundImage}
               alt=""
               width={100}
               height={62}
            />
            <img
               style={{marginLeft: -10}}
               src={SoundImage}
               alt=""
               width={100}
               height={62}
            />
         </div>
      </DropDown>
   )
}