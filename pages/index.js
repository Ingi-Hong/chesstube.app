import { Spin } from "antd";
import React from "react";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
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
  console.log(responseBody);
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
  const openings = props.openingsList;
  const creatorMap = props.labelCreators;
  const min = useDebounce(elomin, 400);
  const max = useDebounce(elomax, 400);
  const filteredColors = useDebounce(plays_as, 400);
  if (filteredColors) {
    plays_as = filteredColors[0]
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
    openings: openings,
  };

  const { data, error, isLoading } = useSWR(
    ["/api/fetch_videos", filterObject],
    ([url, filterObject]) => fetch_vid_data(url, filterObject)
  );

  if (error) {
    return <div style={{height: '100%', justifyContent: 'center', alignContent: 'center'}}>{error.message}</div>;
  }

  if (data === undefined) {
    return <Spin delay={500} spinning={true}></Spin>
  }

  return (
    <div style={{ overflow: "scroll" }} className="content-wrapper">
      <Videodisplay isLoading={isLoading} results={data.Videos} creatorMap={creatorMap} />
    </div>
  );
}