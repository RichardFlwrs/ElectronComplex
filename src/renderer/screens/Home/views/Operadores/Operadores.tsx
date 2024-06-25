import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button } from 'renderer/components'
import OperadoresTable from '../../components/OperadoresTable'
import { useNavigate } from 'react-router-dom'
import CardBox from 'renderer/components/CardBox/CardBox'

export default function Operadores() {
   const navigate = useNavigate()
   return (
      <div id='operadores-container'>
         {/* Header */}
         <div className='v-center-between mb-3'>
            <h4>Operadores</h4>
            <Button className='w-auto px-4 py-2' onClick={() => { navigate('form/nuevo') }}>
               Crear Nuevo Operador
            </Button>
         </div>

         {/* 'Operadores' bar plots */}
         <CardBox className='p-4'>
            <div className='d-flex'>
               <div style={{ width: 760, height: 120, background: 'cyan' }}>

               </div>

               <div className='indicators-column flex-1 px-3 m-auto'>
                  <h6>Total operadores: 1000</h6>

                  <div className=' d-flex flex-wrap'>
                     <div className='w-50 v-center-normal gap-3'>
                        <div className='circle-status-red'></div>
                        <p>10 en retirada</p>
                     </div>
                     <div className='w-50 v-center-normal gap-3'>
                        <div className='circle-status-red'></div>
                        <p>10 en wrap up</p>
                     </div>
                     <div className='w-50 v-center-normal gap-3'>
                        <div className='circle-status-red'></div>
                        <p>10 en com. privada</p>
                     </div>
                     <div className='w-50 v-center-normal gap-3'>
                        <div className='circle-status-red'></div>
                        <p>10 en pausa</p>
                     </div>
                     <div className='w-50 v-center-normal gap-3'>
                        <div className='circle-status-red'></div>
                        <p>10 en com. ACD</p>
                     </div>
                     <div className='w-50 v-center-normal gap-3'>
                        <div className='circle-status-red'></div>
                        <p>10 ocupados</p>
                     </div>
                  </div>
               </div>
            </div>
         </CardBox>

         {/* Chat | CB | OnCall */}
         <Row className='mt-2'>
            <Col xs={4} className='p-3 pl-0'>
               <CardBox className='p-2 px-4 v-center-normal'>
                  <div style={{ width: 35, height: 35, background: 'cyan' }}></div>
                  <div className='px-3'>
                     <h3 className='bolder'>35</h3>
                     <h6>En chat</h6>
                  </div>
               </CardBox>
            </Col>
            <Col xs={4} className='p-3'>
               <CardBox className='p-2 px-4 v-center-normal'>
                  <div style={{ width: 35, height: 35, background: 'cyan' }}></div>
                  <div className='px-3'>
                     <h3 className='bolder'>12</h3>
                     <h6>En callback</h6>
                  </div>
               </CardBox>
            </Col>
            <Col xs={4} className='p-3 pr-0'>
               <CardBox className='p-2 px-4 v-center-normal'>
                  <div style={{ width: 35, height: 35, background: 'cyan' }}></div>
                  <div className='px-3'>
                     <h3 className='bolder'>10</h3>
                     <h6>En llamada</h6>
                  </div>
               </CardBox>
            </Col>
         </Row>

         {/* Estado | Turnos | Agencias */}
         <Row className='mt-2'>
            <Col xs={4} className='p-3 pl-0'>
               <CardBox className='p-3 px-4'>
                  <h6 className='mb-2'>Estado</h6>
                  <div style={{ width: '100%', height: 180, background: 'cyan' }}></div>
               </CardBox>
            </Col>
            <Col xs={4} className='p-3'>
               <CardBox className='p-3 px-4'>
                  <h6 className='mb-2'>Turnos</h6>
                  <div style={{ width: '100%', height: 180, background: 'cyan' }}></div>
               </CardBox>
            </Col>
            <Col xs={4} className='p-3 pr-0'>
               <CardBox className='p-3 px-4'>
                  <h6 className='mb-2'>Agencias</h6>
                  <div style={{ width: '100%', height: 180, background: 'cyan' }}></div>
               </CardBox>
            </Col>
         </Row>

         <OperadoresTable />

      </div>
   )
}


