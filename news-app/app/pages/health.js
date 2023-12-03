import React, { useState } from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";
import LoadingBar from "react-top-loading-bar";

const Health = () => {
  const pageSize = 15;
  const apiKey = "40be1dabdf414b4690f67291aaef2547";
  const country = "in";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar />
      <LoadingBar height={3} color="#f11946" progress={progress} />

      <News
        apiKey={apiKey}
        setProgress={setProgress}
        key="health"
        pageSize={pageSize}
        country={country}
        category="health"
      />
    </div>
  );
};

export default Health;