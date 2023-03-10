import { Spin, theme } from "antd";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { useDebounce } from "use-debounce";
import Videocard from "../components/Videocard";
import Videodisplay from "../components/Videodisplay";
const { useToken } = theme;

const fetch_vid_data = async (url, filterObject) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(filterObject),
    headers: {
      "Content-Type": "application/json",
    },
  });
  var responseBody = response.json();
  return responseBody;
};

export default function Home(props) {
  const creatorObjectList = props.creatorList;
  var creatorList = [];
  creatorObjectList.forEach((item) => {
    creatorList.push(item.creator_id);
  });

  const { token } = useToken();
  var elomin = props.elomin;
  var elomax = props.elomax;
  var plays_as = props.plays_as;
  var openingsList = props.openingsList;
  var debouncedOpeningsList = useDebounce(openingsList, 400);
  const creatorMap = props.labelCreators;
  const min = useDebounce(elomin, 800);
  const max = useDebounce(elomax, 800);
  const filteredColors = useDebounce(plays_as, 400);
  if (filteredColors) {
    plays_as = filteredColors[0];
  }
  if (min) {
    elomin = min[0];
  }
  if (max) {
    elomax = max[0];
  }

  if (debouncedOpeningsList) {
    openingsList = debouncedOpeningsList[0];
  }

  const filterObject = {
    creators: creatorList,
    elomin: elomin,
    elomax: elomax,
    plays_as: plays_as,
    openings: openingsList,
  };

  const [test, setTest] = useState();
  const { data, error, isLoading, isValidating } = useSWRImmutable(
    ["/api/fetch_videos", filterObject],
    ([url, filterObject]) => fetch_vid_data(url, filterObject)
  );

  const [prevData, setPrevData] = useState();

  if (error) {
    return (
      <div
        style={{
          height: "100dvh",
          width: "100dvw",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {error.message}
      </div>
    );
  }

  useEffect(() => {
    setTest((prevState) => {
      if (prevState != data) {
        setPrevData(prevState);
        return data;
      }

      return prevState;
    });
  }, [data]);

  if (test === undefined || test.Videos === undefined) {
    if (prevData === undefined || prevData.Videos === undefined) {
      return (
        <div className="content-wrapper">
          <Spin />
        </div>
      );
    } else {
      const DisplayThis = prevData.Videos.map((card, iteration) => (
        <Videocard
          layoutId={card.title}
          key={"videocard" + iteration}
          card={card}
        />
      ));

      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: token.colorBgContainer,
            padding: "3em",
          }}
        >
          <Spin spinning={isValidating}>
            <AnimatePresence>
              <Videodisplay key="videodisplayyy" DisplayThis={DisplayThis} />
            </AnimatePresence>
          </Spin>
        </div>
      );
    }
  }

  if (isLoading) {
    if (prevData === undefined) {
      return (
        <div
          style={{
            background: token.colorBgContainer,
          }}
          className="content-wrapper"
        >
          <Spin></Spin>
        </div>
      );
    }

    const DisplayThis = prevData.Videos.map((card, iteration) => (
      <Videocard
        layoutId={card.title}
        key={"videocard" + iteration}
        card={card}
      />
    ));

    return (
      <div
        style={{
          background: token.colorBgContainer,
        }}
        className="content-wrapper"
      >
        <Spin style={{ margin: "auto" }} spinning={isValidating}>
          <AnimatePresence>
            <Videodisplay key="videodisplayyy" DisplayThis={DisplayThis} />
          </AnimatePresence>
        </Spin>
      </div>
    );
  }

  const DisplayThis = test.Videos.map((card, iteration) => (
    <Videocard
      layoutId={card.title}
      key={"videocard" + iteration}
      card={card}
    />
  ));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: token.colorBgContainer,
        padding: "3em",
      }}
    >
      <Spin spinning={isValidating}>
        <AnimatePresence>
          <Videodisplay key="videodisplayyy" DisplayThis={DisplayThis} />
        </AnimatePresence>
      </Spin>
    </div>
  );
}
