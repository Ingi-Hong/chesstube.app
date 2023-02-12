import { Spin } from "antd";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { useDebounce } from "use-debounce";
import Videocard from "../components/Videocard";
import Videodisplay from "../components/Videodisplay";

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

  var elomin = props.elomin;
  var elomax = props.elomax;
  var plays_as = props.plays_as;
  const openingsList = props.openingsList;
  const creatorMap = props.labelCreators;
  const min = useDebounce(elomin, 400);
  const max = useDebounce(elomax, 400);
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

  if (error) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
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
        return data;
      }

      return prevState;
    });
  }, [data]);

  if (test === undefined) {
    console.log("This should not be reached");
    return (
      <div>
        <h1>GDFJDSF</h1>UHHHHHHHHHHHHHHH
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Spin></Spin>
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
    <div style={{ overflow: "scroll" }} className="content-wrapper">
      <Spin spinning={isValidating}>
        <AnimatePresence>
          <Videodisplay key="videodisplayyy" DisplayThis={DisplayThis} />
        </AnimatePresence>
      </Spin>
    </div>
  );
}
