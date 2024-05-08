import { useEffect, useState } from "react";
import { getMoviesApi } from "../../api/movie.api";
import Banner from "../../components/Banner/Banner";
import HomePageSearch from "../../components/HomePageSearch/HomePageSearch";
import HomePageMovie from "../../components/HomePageMovie/HomePageMovie";
import "./home.scss";

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
            <HomePageMovie />
        </div>
    );
};

export default Home;
