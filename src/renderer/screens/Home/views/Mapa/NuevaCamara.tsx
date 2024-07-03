import { faBookmark, faMap } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faList, faLocationCrosshairs, faLocationDot, faMapLocationDot, faMapPin, faRoad } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import TextInput from 'renderer/components/TextInput/TextInput'

type Option = 'address' | 'coords';

export default function NuevaCamara() {
   const navigate = useNavigate()
   const [option, setOption] = useState<Option>('address')

   const selectOption = (option: Option) => {
      setOption(option)
   }

   return (
      <div id='nueva-camara-page'>
         <div className='v-center-normal gap-1'>
            <Button
               variant='link'
               className='w-auto'
               style={{ paddingRight: 1 }}
               onClick={() => navigate("/home/zonas-mapa")}
            >
               {"< Mapa"}
            </Button>
            <p>/ Cámaras / Agregar cámara</p>
         </div>

         <CardBox>
            <p className='cardTitle'>Nueva cámara</p>

            <Row className='col-spacing'>
               <Col xl={4}>
                  <TextInput placeholder='Nombre' icon={faCamera} wrapperclassname='card-input' />
               </Col>
               <Col xl={4}>
                  <TextInput placeholder='Estado' icon={faBookmark} wrapperclassname='card-input' />
               </Col>
               <Col xl={4}>
                  <TextInput placeholder='Descripción' icon={faList} wrapperclassname='card-input' />
               </Col>

               <Col xl={12}>
                  <Form.Control
                     as="textarea"
                     className='card-input card-padding mb-2'
                     placeholder="Comentarios"
                     style={{ height: '80px' }}
                  />
               </Col>
            </Row>

            <div className='v-center-normal gap-4 my-3'>
               <Form.Check
                  id='Agregar ubicación por dirección'
                  label='Agregar ubicación por dirección'
                  checked={option === 'address'}
                  onChange={() => selectOption('address')}
               />
               <Form.Check
                  id='Agregar ubicación por coordenadas'
                  label='Agregar ubicación por coordenadas'
                  checked={option === 'coords'}
                  onChange={() => selectOption('coords')}
               />
            </div>

            {option === 'address' ? <ByAddress /> : <ByCoords />}

         </CardBox>
      </div>
   )
}

const ByAddress = () => {
   return (
      <Row className='col-spacing'>
         <Col xl={4}>
            <TextInput placeholder='Partido' icon={faMap} wrapperclassname='card-input' />
         </Col>
         <Col xl={4}>
            <TextInput placeholder='Localidad' icon={faLocationDot} wrapperclassname='card-input' />
         </Col>
         <Col xl={4}>
            <TextInput placeholder='Calle' icon={faRoad} wrapperclassname='card-input' />
         </Col>
         <Col xl={4}>
            <TextInput placeholder='Altura' icon={faMapPin} wrapperclassname='card-input' />
         </Col>
         <Col xl={4}>
            <TextInput placeholder='Intersección' icon={faMapLocationDot} wrapperclassname='card-input' />
         </Col>
      </Row>
   )
}

const ByCoords = () => {
   return (
      <Row className='col-spacing'>
         <Col xl={4}>
            <TextInput placeholder='Coordenada X' icon={faLocationCrosshairs} wrapperclassname='card-input' />
         </Col>
         <Col xl={4}>
            <TextInput placeholder='Coordenada Y' icon={faLocationCrosshairs} wrapperclassname='card-input' />
         </Col>
         <Col xl={4}>
            <TextInput placeholder='Ubicación' icon={faMapLocationDot} wrapperclassname='card-input' />
         </Col>
      </Row>
   )
}