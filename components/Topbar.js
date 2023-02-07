import { Col, Popover, Row, Typography } from "antd";
function Topbar() {
  return (
    <Row justify="space-between">
      <Col style={{ fontSize: 18 }} span={12}>
        Website Name
      </Col>
      <Col>
      <Popover placement="right" content="Maybe a future feature...">
            <Typography.Text style={{color: 'black', padding: '0.em'}} >Login</Typography.Text>
          </Popover>
      </Col>
    </Row>
  );
}

export default Topbar;
