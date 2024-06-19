import { faBook, faGear, faMapLocation, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

type NavBarProps = {

}

export function NavBar() {
   const navigate = useNavigate()

   return (
      <Navbar expand="lg" className="bg-body-tertiary px-3">
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <NavDropdown className='active' title="Supervisor" id="dp-supervisor">
                  <NavDropdown.Item onClick={() => navigate('/home/supervisor')} >Auditoria</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/home/supervisor')} >Estado Agencia</NavDropdown.Item>
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
   )
}
