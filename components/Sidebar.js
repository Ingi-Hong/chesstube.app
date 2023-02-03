import {
  FundOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Checkbox,
  Collapse,
  InputNumber,
  Menu,
  Row,
  Col,
  Space,
  theme,
} from "antd";
import styles from "../styles/Sidebar.module.css";
const { Panel } = Collapse;

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }

// creators.map((creator) => getItem(creator, creator))
const creators = ["Daniel Naroditsky", "Levy Rozman", "Eric Rosen", "All"];

const handleClick = (info) => {
  console.log("click ", info);
};

function handleAll() {}

const creatorClick = (creator) => {
  if (creator.key === "All") {
    handleAll();
    console.log("All click");
    return;
  }

  console.log("Regular click: ");
  console.log(creator.key);
};

function dynamicCreators(input) {
  return input.map((creator) => (
    <Row>
      {" "}
      <Checkbox key={creator}>{creator}</Checkbox>
    </Row>
  ));
}

function SliderComponent(props) {
  var setMin = props.setMin;
  var setMax = props.setMax;
  var min = props.min;
  var max = props.max;

  const minChange = (value) => {
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

const whatisthis = [{label: "Contribute", key: "contribute"}, {label: "Donate", key: "donate"}, { label: "What is this?", key: "what" }];

function Sidebar(props) {
  var setCreator = props.setCreator;
  var color = props.color;
  var min = props.min;
  var max = props.max;
  var setMax = props.setMax;
  var setMin = props.setMin;
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
          {dynamicCreators(creators)}
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
            <Checkbox key="white">White</Checkbox>
          </Row>
          <Row>
            {" "}
            <Checkbox key="black">Black</Checkbox>
          </Row>
          <Row>
            {" "}
            <Checkbox key="allcolors">All</Checkbox>
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
        ></Panel>
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
