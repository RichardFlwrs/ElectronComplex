import { faBook, faCloud, faGear, faHashtag, faMapLocation, faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Form, Modal } from 'react-bootstrap';
import TextInput from '../TextInput/TextInput';

const iterateElements = (array: HTMLCollectionOf<Element>, func: (e: Element) => void) => {
   for (let index = 0; index < array.length; index++) {
      func(array[index])
   }
}

export function NavBar() {
   const navigate = useNavigate()
   const location = useLocation();
   const [show, setShow] = useState(false);

   const handleClose = () => {
      setShow(false)
   }
   const gotoHistorial = () => {
      setShow(false)
      navigate('supervisor/audotoria-historial')
   }
   const handleShow = () => setShow(true);

   const deactivateNavLink = () => {
      const MAIN_NAV = document.getElementById('main-navbar-nav')
      if (MAIN_NAV) {
         const LIST = MAIN_NAV.getElementsByClassName('nav-link')
         iterateElements(LIST, (el) => el.classList.remove('active'))
      }
   }
   const activeNavLink = (id: string) => {
      document.getElementById(id)?.classList.add('active')
   }

   useEffect(() => {
      const url = window.location.href;
      const check = url.split('/home')
      // Check if the current location is inside "home" route
      if (check[1]) {
         const current = check[1] // eg -> '/noticias'
         deactivateNavLink()

         if (current.includes('supervisor')) activeNavLink('nav-supervisor')
         if (current.includes('noticias')) activeNavLink('nav-noticias')
         if (current.includes('filtros-multiples')) activeNavLink('nav-filtros')
         if (current.includes('operadores')) activeNavLink('nav-operadores')
         if (current.includes('gestor')) activeNavLink('nav-gestor')
      }
   }, [location])

   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary px-3">
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
               <Nav className="me-auto">
                  <NavDropdown title="Supervisor" id="nav-supervisor">
                     <NavDropdown.Item onClick={handleShow} >Auditoria</NavDropdown.Item>
                     <NavDropdown.Item onClick={() => navigate('/home/supervisor/estado-agencia')} >Estado Agencia</NavDropdown.Item>
                     {/* <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate('/home/supervisor')} >Separated link</NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link onClick={() => navigate('/home/noticias')} id='nav-noticias' >Noticias</Nav.Link>
                  <NavDropdown title="Reportes" id="nav-reportes">
                     <NavDropdown.Item onClick={() => navigate('/home/supervisor')} >Something</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Gestor Recursos" id="nav-gestor">
                     <NavDropdown.Item onClick={() => navigate('/home/gestor/tipos-recursos')}>
                        Tipos/Subtipos
                     </NavDropdown.Item>
                     <NavDropdown.Item onClick={() => navigate('/home/gestor/recursos')}>
                        Recursos
                     </NavDropdown.Item>
                     <NavDropdown.Item onClick={() => null}>
                        CAMARAS
                     </NavDropdown.Item>
                     <NavDropdown.Item onClick={() => null}>
                        ETC
                     </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={() => navigate('/home/operadores')} id='nav-operadores'>Operadores</Nav.Link>
                  <Nav.Link onClick={() => navigate('/home/filtros-multiples')} id='nav-filtros' >Filtros multiples</Nav.Link>
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
                  <Button variant='light' onClick={() => navigate('/home/user-settings')}>
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
               <Form.Group style={{ marginRight: '15%' }}>
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


