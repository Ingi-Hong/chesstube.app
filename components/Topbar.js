import { Col, Row } from "antd";

function Topbar() {
  return (
    <Row justify="space-between">
      <Col style={{ fontSize: 18 }} span={12}>
        Website Name
      </Col>
      <Col>
      Login
      </Col>
    </Row>
  );
}

export default Topbar;
