import { Col, Form, Row } from "react-bootstrap";

export default function Tab_Policial() {
  return (
    <div className="carta-tab-wrapper">
      <Row className="col-spacing">
        <Col xl={12} className="">
          <Form.Check type="checkbox" label='Incluir parte policial' />
        </Col>
      </Row>
    </div>
  )
}
