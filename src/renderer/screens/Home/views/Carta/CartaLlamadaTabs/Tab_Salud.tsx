import { Col, Form, Row } from "react-bootstrap";
import TextInput from "renderer/components/TextInput/TextInput";

export default function Tab_Salud() {
  return (
    <div className="carta-tab-wrapper">
      <Row className="col-spacing">
        <Col xl={6}>
          <TextInput placeholder="Nombre" wrapperclassname="flex-1 card-input" />
        </Col>
        <Col xl={6}>
          <TextInput placeholder="Apellido" wrapperclassname="flex-1 card-input" />
        </Col>
        <Col xl={6}>
          <TextInput placeholder="Sexo" wrapperclassname="flex-1 card-input" />
        </Col>
        <Col xl={6}>
          <TextInput placeholder="Edad" wrapperclassname="flex-1 card-input" />
        </Col>
        <Col xl={6}>
          <TextInput placeholder="Documento" wrapperclassname="flex-1 card-input" />
        </Col>
        <Col xl={6}>
          <TextInput placeholder="Sintoma" wrapperclassname="flex-1 card-input" />
        </Col>
      </Row>
    </div>
  )
}
