import { faBookmark, faCalendar, faChevronDown, faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Form, Tab, Table, Tabs } from 'react-bootstrap'
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
            <Tabs
               defaultActiveKey="Home"
               id="uncontrolled-tab-example"
               className="mb-3"
            >
               <Tab eventKey="home" title="Home">
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
               </Tab>
               <Tab eventKey="profile" title="Profile">
                  Tab content for Profile
               </Tab>
               <Tab eventKey="contact" title="Contact">
                  Tab content for Contact
               </Tab>
            </Tabs>
         </CardBox>

         <h2>It's another screen! ✨</h2>

         <Button onClick={() => navigate('/login')}>Go back to Login</Button>
      </div>
   )
}
