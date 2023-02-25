import { ConfigProvider, Layout, theme } from "antd";
import App from "next/app";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/globals.css";
import {Roboto} from '@next/font/google'
const font = Roboto({
  weight: '300',
  subsets: ['latin']
})
// import {get_openings, get_creators} from "../database/static-props"
const { Header, Sider, Content } = Layout;

export default function MyApp({
  Component,
  pageProps,
  openingTreeAndList,
  labelCreators,
}) {
  var allOpenings = [];
  openingTreeAndList.openingList.forEach((item) => 
  allOpenings.push(parseInt(item.opening_id))
  );
  
  const [creators, setCreators] = useState(labelCreators);
  const [openings, setOpenings] = useState(allOpenings);
  const [plays_as, setPlays_as] = useState(["black", "white"]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);

  const darkMode = {
    topbarBg: "#4d8d7a",
    sidebarBg: "#4d8d7a",
    secondaryColor: "#4d8d7a",
    topbarText: "black",
  };

  const lightMode = {
    topbarBg: "#90adc6",
    sidebarBg: "white",
    secondaryColor: "#74BDCB",
    topbarText: "black",
  };


  const [colorMode, setColorMode] = useState(darkMode);

  const [secondaryColor, setSecondaryColor] = useState(
    colorMode.secondaryColor
  );
  const [sidebarBg, setSidebarBg] = useState(colorMode.sidebarBg);
  const [topbarBg, setTopbarBg] = useState(colorMode.topbarBg);
  const [topbarText, setTopbarText] = useState(colorMode.topbarText);
  
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colorMode.topbarBg
        },
      }}
      style={{ margin: "0", padding: "0" }}
    >
      <Layout style={{ height: "100dvh", padding: "0", margin: "0" }}>
        <Header
        className={font.className}
          style={{background: colorMode.topbarBg, margin: "0" }}
        >
          <Topbar 
          fontColor={topbarText}
          font={font}
          />
        </Header>
        <Layout>
          <Sider >
            <Sidebar
              setCreators={setCreators}
              creators={creators}
              setOpenings={setOpenings}
              openings={allOpenings}
              min={min}
              max={max}
              setMin={setMin}
              setMax={setMax}
              creator_list={labelCreators}
              opening_list={openingTreeAndList.opening_tree}
              setColors={setPlays_as}
              colors={plays_as}
            />
          </Sider>
          <Content
          style={{background: "white"}}
          >
            <Component
              
              {...pageProps}
              creatorList={creators}
              elomin={min}
              elomax={max}
              plays_as={plays_as}
              openingsList={openings}
              creatorMap = {labelCreators}
            />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  let appProps = App.getInitialProps(context);

  if (context.ctx.req) {
    // Check if on the server-side
    // Dynamically import `node-fetch-cache` on the server-only
    const { get_openings, get_creators } = await import(
      "../database/static-props"
    );
    const labelOpenings = await get_openings();
    const labelCreators = await get_creators();
    return {
      ...appProps,
      openingTreeAndList: labelOpenings,
      labelCreators: labelCreators,
    };
  } else {
    // Handle client-side here
    console.log("Client side");
    var openings;

    var creators;
    fetch("/api/fetch_start_data")
      .then((res) => res.json())
      .then((data) => {
        labelOpenings = data.openings;
        labelCreators = data.creators;
      });

    return {
      ...appProps,
      poop: "poop",
    };
  }
};