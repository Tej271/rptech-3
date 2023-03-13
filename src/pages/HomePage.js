import React from "react";
import NavBar from "../components/NavBar";
import MediaNews from "../components/MediaNews";
import LatestNews from "../components/LatestNews";

function HomePage() {
  return (
    <div>
      <MediaNews />
      <LatestNews />
    </div>
  );
}

export default HomePage;
