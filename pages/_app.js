import { Affix, ConfigProvider, Layout, theme } from "antd";
import { useState } from "react";
const { Header, Sider, Content } = Layout;
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [creator, setCreator] = useState();

  const darkMode = 
  {
    topbarBg: "#333652",
    sidebarBg: "#90adc6",
    secondaryColor: "#90adc6",
    topbarText: "white"
  };

  const lightMode = 
  {
    topbarBg: "#90adc6",
    sidebarBg: "white",
    secondaryColor: "#74BDCB",
    topbarText: "black",
  };

  const [colorMode, setColorMode] = useState(lightMode);

  const [secondaryColor, setSecondaryColor] = useState(colorMode.secondaryColor);
  const [sidebarBg, setSidebarBg] = useState(colorMode.sidebarBg);
  const [topbarBg, setTopbarBg] = useState(colorMode.topbarBg);
  const [topbarText, setTopbarText] = useState(colorMode.topbarText);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: topbarBg,
        },
      }}
      style={{ margin: "0", padding: "0" }}
    >
      <Layout style={{ height: "100dvh", padding: "0", margin: "0" }}>
        <Header style={{ color: topbarText, margin: "0", backgroundColor: topbarBg }}>
            <Topbar />
        </Header>
        <Layout>
          <Sider>
              <Sidebar
                setCreator={setCreator}
                color={sidebarBg}
                setMax={setMax}
                setMin={setMin}
                min={min}
                max={max}
              />
          </Sider>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
