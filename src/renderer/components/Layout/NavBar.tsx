import { PropsWithChildren } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from 'react-router-dom';

type NavBarProps = {

}

export function NavBar() {
   const navigate = useNavigate()

   return (
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
         <Container>
            <Navbar.Brand onClick={() => navigate('/')} >React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link onClick={() => navigate('/')} >Home</Nav.Link>
                  <Nav.Link onClick={() => navigate('/anotherScreen')} >Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                     <NavDropdown.Item onClick={() => navigate('/anotherScreen')}>Action</NavDropdown.Item>
                     <NavDropdown.Item onClick={() => navigate('/anotherScreen')} >
                        Another action
                     </NavDropdown.Item>
                     <NavDropdown.Item onClick={() => navigate('/anotherScreen')} >Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item onClick={() => navigate('/anotherScreen')} >
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
