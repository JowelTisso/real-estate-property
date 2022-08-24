import "./Home.css";
import React, { useEffect } from "react";
import { GET } from "../../utils/axios";
import { API } from "../../utils/Constant";
import Header from "../../components/Header/Header";

const Home = () => {
  useEffect(() => {
    // (async () => {
    //   const res = await GET(
    //     `${API.PROPERTY_LIST}/?locationExternalIDs=5002,6020&purpose=for-sale&hitsPerPage=6`
    //   );
    //   console.log(res);
    // })();
  }, []);

  return (
    <div>
      <Header />
      <main className="content-wrapper"></main>
    </div>
  );
};

export default Home;
