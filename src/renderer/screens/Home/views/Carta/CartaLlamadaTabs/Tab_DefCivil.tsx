import { Col, Row } from "react-bootstrap";
import TextInput from "renderer/components/TextInput/TextInput";

export default function Tab_DefCivil() {
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
          <TextInput placeholder="Jerarquia" wrapperclassname="flex-1 card-input" />
        </Col>
        <Col xl={6}>
          <TextInput placeholder="Nᵒ de móvil" wrapperclassname="flex-1 card-input" />
        </Col>
      </Row>
    </div>
  )
}
