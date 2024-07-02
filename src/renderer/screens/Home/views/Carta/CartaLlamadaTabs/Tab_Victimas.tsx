import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "renderer/components";
import TextInput from "renderer/components/TextInput/TextInput";

export default function Tab_Victimas() {
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
          <TextInput placeholder="Dirección" wrapperclassname="flex-1 card-input" />
        </Col>
        <Col xl={6} className="v-center-normal gap-3">
          <Form.Check type="checkbox" label='Confidencial' id="Confidencial" />
          <Button variant="link" className="w-auto v-center gap-2">
            <FontAwesomeIcon icon={faPlusCircle}/>
            Agregar victima
          </Button>
        </Col>
      </Row>

    </div>
  )
}
