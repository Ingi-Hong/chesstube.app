import {
  FundOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
  UpOutlined,
  UserOutlined
} from "@ant-design/icons";
import {
  Checkbox, Col, Collapse,
  InputNumber,
  Menu,
  Row, Space,
  theme
} from "antd";
import styles from "../styles/Sidebar.module.css";
import { CreatorCheckbox, OpeningCheckbox, ColorCheckbox } from "./StatefulCheckbox";

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
    console.log("value", value)
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

const whatisthis = [
  { label: "Contribute", key: "contribute" },
  { label: "Donate", key: "donate" },
  { label: "What is this?", key: "what" },
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
    border: "none",
    background: token.colorBgContainer,
  };

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        background: color,
        height: "100%",
        alignContent: "space-between",
      }}
    >
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
            <Space>
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
            <Space>
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
            <Space>
              <PlayCircleOutlined />
              Plays as...
            </Space>
          }
        >
          <Row>
            {" "}
            <ColorCheckbox colors={colors} color={'white'} setColors={setColors}/>
          </Row>
          <Row>
            {" "}
            <ColorCheckbox colors={colors} color={'black'} setColors={setColors} />
          </Row>
        </Panel>

        <Panel
          style={panelStyle}
          key="Openings"
          header={
            <Space>
              <ShareAltOutlined /> Openings
            </Space>
          }
        >
          {parseOpeningTree(openingTree, setOpenings, openings)}
        </Panel>
      </Collapse>
      <Menu
        className={styles.additionalInfoLink}
        theme={{ algorithm: theme.compactAlgorithm }}
        style={{ position: "absolute", bottom: "0px" }}
        mode="inline"
        items={whatisthis}
        selectable={false}
      />
    </div>
  );
}

export default Sidebar;
