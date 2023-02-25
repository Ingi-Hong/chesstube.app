import {
  FundOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Col,
  Collapse,
  InputNumber,
  Popover,
  Row,
  Space,
  theme,
  Typography,
  Affix,
} from "antd";
import {
  ColorCheckbox,
  CreatorCheckbox,
  OpeningCheckbox,
} from "./StatefulCheckbox";
import { Source_Sans_Pro } from "@next/font/google";

const font = Source_Sans_Pro({
  weight: "600",
  subsets: ["latin"],
});

const { Panel } = Collapse;

function parseCreatorList(input, setCreator, creators) {
  return (
    <>
      {input.map((creatorObject) => (
        <Row>
          <CreatorCheckbox
            setStateList={setCreator}
            stateList={creators}
            label={creatorObject.creator_name}
            item_id={creatorObject.creator_id}
          />
        </Row>
      ))}
    </>
  );
}

function parseOpeningTree(openingTree, setOpenings, openings) {
  return (
    <OpeningCheckbox openingTree={openingTree} setOpenings={setOpenings} />
  );
}

function SliderComponent(props) {
  var setMin = props.setMin;
  var setMax = props.setMax;
  var min = props.min;
  var max = props.max;

  const minChange = (value) => {
    console.log("value", value);
    setMin(value);
  };

  const maxChange = (value) => {
    setMax(value);
  };

  return (
    <>
      <Row gutter={[0, 5]}>
        <Col span={12}>Min: </Col>
        <Col span={12}>
          <InputNumber
            min={0}
            max={3000}
            value={min}
            onChange={minChange}
            bordered={true}
            controls={false}
          ></InputNumber>
        </Col>
        <Col span={12}>Max: </Col>
        <Col span={12}>
          <InputNumber
            min={0}
            max={3000}
            value={max}
            onChange={maxChange}
            bordered={true}
            controls={false}
          ></InputNumber>
        </Col>
      </Row>
    </>
  );
}

const content = <div>Coming soon...</div>;

const whatisthis = [
  { label: "Contribute", key: "contribute", content: content },
  { label: "Donate", key: "donate", content: content },
  { label: "What is this?", key: "what", content: content },
];

function Sidebar(props) {
  var color = props.color;
  var min = props.min;
  var max = props.max;
  var setMax = props.setMax;
  var setMin = props.setMin;
  var setCreators = props.setCreators;
  var creators = props.creators;
  var setOpenings = props.setOpenings;
  var openings = props.openings;
  var openingTree = props.opening_list;
  var creator_list = props.creator_list;
  var creators = props.creators;
  var setCreators = props.setCreators;
  var colors = props.colors;
  var setColors = props.setColors;

  const { token } = theme.useToken();

  const panelStyle = {
    width: "100%",
    border: "none",
    background: token.colorBgBase,
  };

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        background: token.colorBgBase,
        height: "100%",
        alignContent: "space-between",
        position: 'sticky'
      }}
    >
      <Affix>
        <Collapse
          expandIcon={({ isActive }) => (
            <UpOutlined rotate={isActive ? 180 : 0} />
          )}
          bordered={false}
          expandIconPosition="end"
        >
          <Panel
            style={panelStyle}
            header={
              <Space style={{ fontFamily: font.style.fontFamily }}>
                <UserOutlined /> Creators
              </Space>
            }
            key="creator"
          >
            {parseCreatorList(creator_list, setCreators, creators)}
          </Panel>

          <Panel
            style={panelStyle}
            header={
              <Space style={{ fontFamily: font.style.fontFamily }}>
                <FundOutlined /> Elo Range
              </Space>
            }
            key="elo"
          >
            <SliderComponent
              setMin={setMin}
              setMax={setMax}
              max={max}
              min={min}
            />
          </Panel>

          <Panel
            style={panelStyle}
            key="color"
            header={
              <Space style={{ fontFamily: font.style.fontFamily }}>
                <PlayCircleOutlined />
                Plays as...
              </Space>
            }
          >
            <Row>
              {" "}
              <ColorCheckbox
                colors={colors}
                color={"white"}
                setColors={setColors}
              />
            </Row>
            <Row>
              {" "}
              <ColorCheckbox
                colors={colors}
                color={"black"}
                setColors={setColors}
              />
            </Row>
          </Panel>

          <Panel
            style={panelStyle}
            key="Openings"
            header={
              <Space style={{ fontFamily: font.style.fontFamily }}>
                <ShareAltOutlined /> Openings
              </Space>
            }
          >
            {parseOpeningTree(openingTree, setOpenings, openings)}
          </Panel>
        </Collapse>
      </Affix>
      <div style={{ height: "100%" }} />
      <Affix style={{position: 'fixed', bottom: 0}}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {whatisthis.map((item) => (
            <Popover placement="right" key={item.key} content={item.content}>
              <Typography.Link
                style={{
                  color: "black",
                  padding: "0.5em",
                  fontFamily: font.style.fontFamily,
                }}
                underline
                key={"link" + item.key}
              >
                {item.label}
              </Typography.Link>
            </Popover>
          ))}
        </div>
      </Affix>
    </div>
  );
}

export default Sidebar;
