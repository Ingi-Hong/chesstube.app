import React, { useState } from "react";
import Videodisplay from "../components/Videodisplay";

export default function Home() {

  // Dummy data for videodisplay.js
  //title
  //elo
  //isWhite
  //creator
  //thumbnail

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

  const [creator, setCreator] = useState();

  return (
    <div style={{overflow: "scroll"}} className="content-wrapper" >
      <Videodisplay results={dummyData} />
    </div>
  );
}
