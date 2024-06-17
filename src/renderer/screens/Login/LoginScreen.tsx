import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthForm from './views/AuthForm';
import ForgotPass from './views/ForgotPass';



export default function LoginScreen() {
   const navigate = useNavigate()

   return (
      <Row style={{ height: '100%' }}>
         <Col className='center-col'>

            <Routes>
               <Route path='' element={<AuthForm />} />
               <Route path='forgotPass' element={<ForgotPass />} />
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

const styles = {
   footer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
   }
}