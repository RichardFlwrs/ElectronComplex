import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthForm from './views/AuthForm';
import ForgotPass from './views/ForgotPass';
import IngressCode from './views/IngressCode';
import ChangePass from './views/ChangePass';



export default function LoginScreen() {
   const navigate = useNavigate()

   return (
      <Row className='no-gutters' style={{ height: '100%', width: '100%' }}>
         <Col className='center-col'>

            <Routes>
               <Route path='' element={<AuthForm />} />
               <Route path='forgotPass' element={<ForgotPass />} />
               <Route path='ingressCode' element={<IngressCode />} />
               <Route path='changePass' element={<ChangePass />} />
            </Routes>

            {/* footer */}
            <div style={{ position: 'absolute', bottom: 10, left: 30 }}>
               <p style={{ fontSize: 10 }}>© 2024 POWERED BY TELEFONICA</p>
            </div>
         </Col>
         {/* Image */}
         <Col style={{ background: 'cyan', height: '100%' }}></Col>
      </Row>
   )
}