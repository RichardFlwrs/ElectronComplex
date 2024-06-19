import { faBookmark, faCalendar, faChevronDown, faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Col, Form, Nav, Row, Tab, Table, Tabs } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button, Heading } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
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
         <CardBox className='mb-4'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
               <Row>
                  <Nav variant="pills" className="gap-2">
                     <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Row>
               <Tab.Content>
                  <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
               </Tab.Content>
            </Tab.Container>
         </CardBox>

         <h2>It's another screen! ✨</h2>

         <Button onClick={() => navigate('/login')}>Go back to Login</Button>
      </div>
   )
}


const DummyTble = () => {
   return (
      <Table responsive>
         <thead>
            <tr>
               <th>#</th>
               {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>Table heading</th>
               ))}
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
               ))}
            </tr>
            <tr>
               <td>2</td>
               {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
               ))}
            </tr>
            <tr>
               <td>3</td>
               {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
               ))}
            </tr>
         </tbody>
      </Table>
   )
}