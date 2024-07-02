import { Col, Form, Row } from "react-bootstrap";
import TextInput from "renderer/components/TextInput/TextInput";

export default function Tab_Denunciante() {
  return (
    <div className="carta-tab-wrapper">
      <Row className="col-spacing">
        <Col xl={6}>
          <TextInput placeholder="Nombre" wrapperclassname="flex-1 card-input" />
        </Col>
        <Col xl={6}>
          <TextInput placeholder="Apellido" wrapperclassname="flex-1 card-input" />
        </Col>

        <Col xl={12} className="">
          <Form.Check type="checkbox" label='El denunciante y la victima son la misma persona' />
        </Col>
      </Row>
    </div>
  )
}
