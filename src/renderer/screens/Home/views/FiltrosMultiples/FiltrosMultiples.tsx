import { faBookmark, faCalendar, faChevronDown, faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import MainTable from '../../components/MainTable'


const HardCodeInput = (P: { text: string, noSelect?: boolean }) => {
   return <Button variant='light' className='card-btn w-100 v-center-between flex-1'>
      <p style={{ paddingRight: 40 }}>{P.text}</p>
      {P.noSelect ? null : <FontAwesomeIcon icon={faChevronDown} />}
   </Button>
}


export default function FiltrosMultiples() {
   const navigate = useNavigate()

   return (
      <div id='filtros-multiples'>
         {/* Filtros */}
         <CardBox className='mb-4'>

            <div className='v-center-between'>
               <h3 className='cardTitle'>Filtros múltiples</h3>
               <Button
                  onClick={() => null}
                  className='w-auto px-5'
                  style={{ padding: 12 }}
               >
                  Filtrar
               </Button>
            </div>

            <div className='wrapper-filter'>
               <div>
                  <p className='form-header'>Estado</p>
                  <Button variant='light' className='card-btn v-center-between w-100 m-0'>
                     <p style={{ paddingRight: 40 }}>Estado</p>
                     <FontAwesomeIcon icon={faChevronDown} />
                  </Button>
               </div>

               <Row>
                  {/* Tipificación */}
                  <Col xs={6}>
                     <p className='form-header'>Tipificacion</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Tipo' />
                        <HardCodeInput text='Subtipo' />
                     </Row>
                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Particularidad' />
                        <HardCodeInput text='Prioridad' />
                     </Row>
                  </Col>

                  {/* Texto */}
                  <Col xs={6}>
                     <p className='form-header'>Texto</p>

                     <Row className='d-flex gap-3'>
                        <Form.Control
                           as="textarea"
                           className='flex-1 card-btn'
                           placeholder="Hecho, relatos, comentarios"
                           style={{ height: '80px' }}
                        />
                        <HardCodeInput text='Razon de cierre' />
                     </Row>
                  </Col>

                  {/* Recursos */}
                  <Col xs={6}>
                     <p className='form-header'>Recursos</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Recursos asignados' />
                        <HardCodeInput text='Recursos' />
                     </Row>
                  </Col>

                  {/* Parte policial */}
                  <Col xs={6}>
                     <p className='form-header'>Parte policial</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Recursos' />
                     </Row>
                  </Col>

                  {/* Fecha */}
                  <Col xs={6}>
                     <p className='form-header'>Fecha</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Desde' />
                        <HardCodeInput text='Hasta' />
                     </Row>
                  </Col>

                  {/* Entidades */}
                  <Col xs={6}>
                     <p className='form-header'>Entidades</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Agencia involucrada' />
                        <HardCodeInput text='Centro involucrado' />
                     </Row>
                  </Col>

                  {/* Usuario */}
                  <Col xs={6}>
                     <p className='form-header'>Usuario</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Usuario creador' />
                        <HardCodeInput text='Terminal' noSelect />
                     </Row>
                  </Col>

                  {/* Usuario (2nd col) */}
                  <Col xs={6}>
                     <p className='form-header' style={{ color: 'transparent' }}>Usuario</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Guardia/Turno' />
                        <HardCodeInput text='Posicion' noSelect />
                     </Row>
                  </Col>

                  {/* Agencia creadora */}
                  <Col xs={6}>
                     <p className='form-header'>Agencia creadora</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Agencia' />
                     </Row>
                  </Col>

                  {/* Agencia receptora */}
                  <Col xs={6}>
                     <p className='form-header'>Agencia receptora</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Agencia' />
                     </Row>
                  </Col>

                  {/* Telefono  */}
                  <Col xs={6}>
                     <p className='form-header'>Telefono </p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Telefono (libre)' noSelect />
                        <HardCodeInput text='Motivo' />
                     </Row>
                  </Col>

                  {/* Numero de carta */}
                  <Col xs={6}>
                     <p className='form-header'>Numero de carta</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Carta' noSelect />
                     </Row>
                  </Col>

                  {/* Despacho | Aprehendidos*/}
                  <Col xs={6}>
                     <p className='form-header'>Despacho</p>

                     <div className='mx-3 mb-2'>
                        <Form.Check
                           type={'checkbox'}
                           id={`Solo de mi grupo de despacho`}
                           label={`Solo de mi grupo de despacho`}
                        />
                     </div>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Grupo Despacho' />
                        <HardCodeInput text='Recursos' />
                     </Row>

                     <p className='form-header'>Aprehendidos</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Aprehendidos' noSelect />
                        <HardCodeInput text='Cantidad' noSelect />
                     </Row>
                  </Col>

                  {/* Localizacion */}
                  <Col xs={6}>
                     <p className='form-header' style={{ marginBottom: 32 }}>Localizacion</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Municipio' />
                        <HardCodeInput text='Localidad' />
                     </Row>
                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Localizacion' />
                        <HardCodeInput text='Calle' noSelect />
                     </Row>
                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Altura' noSelect />
                        <HardCodeInput text='Hito' noSelect />
                     </Row>
                  </Col>

                  {/* Denunciante */}
                  <Col xs={12}>
                     <p className='form-header'>Denunciante</p>

                     <Row className='d-flex gap-3'>
                        <HardCodeInput text='Denunciante (libre)' noSelect />
                        <HardCodeInput text='Documento' noSelect />
                     </Row>
                  </Col>
               </Row>
            </div>
         </CardBox>

         {/* Table */}
         <MainTable />

      </div>
   )
}

