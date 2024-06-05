import { useEffect, useState } from "react";
import { getMoviesApi } from "../../api/movie.api";
import Banner from "../../components/Banner/Banner";
import HomePageSearch from "../../components/HomePageSearch/HomePageSearch";

const Home = () => {
  useEffect(() => {
    getMoviesApi()
      .then((result) => {
        console.log("result: ", result);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  return (
    <div className="home">
      <Banner />
      <HomePageSearch />
    </div>
  );
};

export default Home;
