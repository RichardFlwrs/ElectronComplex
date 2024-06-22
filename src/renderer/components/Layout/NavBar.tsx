import { faBook, faCloud, faGear, faHashtag, faMapLocation, faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Form, Modal } from 'react-bootstrap';
import TextInput from '../TextInput/TextInput';

type NavBarProps = {

}

export function NavBar() {
   const navigate = useNavigate()
   const [show, setShow] = useState(false);

   const handleClose = () => {
      setShow(false)
   }
   const gotoHistorial = () => {
      setShow(false)
      navigate('supervisor/audotoria-historial')
   }
   const handleShow = () => setShow(true);

   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary px-3">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <NavDropdown className='active' title="Supervisor" id="dp-supervisor">
                     <NavDropdown.Item onClick={handleShow} >Auditoria</NavDropdown.Item>
                     <NavDropdown.Item onClick={() => navigate('/home/supervisor/estado-agencia')} >Estado Agencia</NavDropdown.Item>
                     {/* <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate('/home/supervisor')} >Separated link</NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link onClick={() => navigate('/home/supervisor')} >Noticias</Nav.Link>
                  <NavDropdown title="Reportes" id="dp-reportes">
                     <NavDropdown.Item onClick={() => navigate('/home/supervisor')} >Something</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Gestor Recursos" id="dp-gestor">
                     <NavDropdown.Item onClick={() => navigate('/home/supervisor')} >Something</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={() => navigate('/home/supervisor')} >Operadores</Nav.Link>
                  <Nav.Link onClick={() => navigate('/home/supervisor')} >Filtros multiples</Nav.Link>
               </Nav>

               <div className='v-center navbar-options'>
                  <Button variant='light' className='v-center round'>
                     <FontAwesomeIcon icon={faBook} />
                     <p>Carta</p>
                  </Button>
                  <Button variant='light' className='v-center round'>
                     <FontAwesomeIcon icon={faMapLocation} />
                     <p>Mapa</p>
                  </Button>
                  <Button variant='light' onClick={() => navigate('/')}>
                     <FontAwesomeIcon icon={faGear} />
                  </Button>
                  <Button variant='light' onClick={() => navigate('/')}>
                     <FontAwesomeIcon icon={faUser} />
                  </Button>
               </div>
            </Navbar.Collapse>
         </Navbar>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header>
               <Button onClick={handleClose} variant='icon'>
                  <FontAwesomeIcon style={{ padding: 12 }} icon={faTimesCircle} />
               </Button>
            </Modal.Header>
            <Modal.Body className='text-center center-col pb-0'>
               <h2 style={{ fontWeight: 'bold' }} className='w-50'> Auditoria </h2>
               <p>Ingresa el ID del llamado a auditar</p>
               <Form.Group className="mb-3">
                  <TextInput icon={faHashtag} placeholder='12483639900' />
               </Form.Group>
               <Form.Group style={{marginRight: '15%'}}>
                  <Form.Check
                     type={'checkbox'} id={`Historico`} label={`Historico`}
                  />
               </Form.Group>
            </Modal.Body>
            <Modal.Footer className='center-col mb-4'>
               <Button onClick={gotoHistorial} className='w-auto px-5'>
                  Acceder carta
               </Button>

               <div className='v-center-between'>
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
            </Modal.Footer>
         </Modal>
      </>
   )
}

// MODALS


