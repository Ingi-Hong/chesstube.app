import React, { useState } from "react";
import Videodisplay from "../components/Videodisplay";
import useSWR from 'swr';

export default function Home(props) {

  // Dummy data for videodisplay.js
  //title
  //elo
  //isWhite
  //creator
  //thumbnail

  const creatorList = props.creatorList;
  const elomin = props.elomin;
  const elomax = props.elomax;
  const plays_as = props.plays_as;
  const openings = props.openingsList;

  const filterObject = 
  {
    creators: creatorList, 
    elomin: elomin,
    elomax: elomax,
    plays_as: plays_as,
    openings: openings,
  }

  console.log(filterObject);

  function fetch_vid_data(){
    
  };

  const { data, error, isLoading } = useSWR('/')


  const dummyData = [
    {
      title: "peee peee pee pepepepofaodfj poo poo",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Two",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Three",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Four",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Five",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Six",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Seven",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Eight",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example one",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Two",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Three",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Four",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Five",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Six",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Seven",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Eight",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example one",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Two",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Three",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Four",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Five",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Six",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Seven",
      elo: 1268,
      isWhite: true,
      creator: "Daniel Naroditsky",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Four Knights Scotch",
    },
    {
      title: "Example Eight",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
    {
      title: "Example Eight",
      elo: 2300,
      isWhite: false,
      creator: "Levy Rossman",
      thumbnail: "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
      opening: "Caro-Kahn",
    },
  ];

  return (
    <div style={{overflow: "scroll"}} className="content-wrapper" >
      <Videodisplay results={dummyData} />
    </div>
  );
}
