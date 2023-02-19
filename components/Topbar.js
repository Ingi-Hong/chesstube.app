import { Col, Popover, Row, Typography, theme} from "antd";
function Topbar(props) {
  const font = props.font;
  const fontColor = props.fontColor;
  const {useToken} = theme;

  const token = useToken();
  return (

    <Row justify="space-between">
      <Col span={12}>
        <div style={{fontSize: '2em', fontFamily: font.style.fontFamily}}>chesstube.app<sub style={{fontSize: '0.5em'}}>alpha</sub></div> 
      </Col>
      <Col>
      <Popover placement="right" content="Maybe a future feature...">
            <Typography.Text style={{color: fontColor, padding: '0', fontFamily: font.style.fontFamily}} >Login</Typography.Text>
          </Popover>
      </Col>
    </Row>
  );
}

export default Topbar;
