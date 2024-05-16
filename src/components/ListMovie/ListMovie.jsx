import { useEffect, useState } from "react";
import { Banner, Movie, getMoviesApi } from "../../api/movie.api";
import { Carousel } from "antd";
import "./listMovie.scss";
import HomePageSearch from "../HomePageSearch/HomePageSearch";
import { Button, Modal } from "antd";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={style} onClick={onClick}>
            <i className="fa-solid fa-angle-left"></i>
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={style} onClick={onClick}>
            <i className="fa-solid fa-angle-right"></i>
        </div>
    );
};

const ListMovie = () => {
    let [arrBanner, setArrBanner] = useState([]);
    let [arrMovie, setArrMovie] = useState([]);
    console.log(arrMovie);
    useEffect(() => {
        // lấy API Banner
        Banner.getBannerApi()
            .then((res) => {
                setArrBanner(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
        const getMovie = async () => {
            await getMoviesApi();
        };
        // Lấy API Movie
        // const listMovie = getMoviesApi();
        // setArrMovie(listMovie);
        Movie.getMovieApi()
            .then((res) => {
                // console.log(res);
                setArrMovie(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="list__movie">
            <div className="lBanner__container">
                <Carousel
                    prevArrow={<PrevArrow />}
                    nextArrow={<NextArrow />}
                    arrows={true}
                >
                    {arrBanner.map((item, index) => {
                        return (
                            <div key={index} className="h-[90vh]">
                                <img
                                    className="h-full w-full "
                                    src={item?.hinhAnh}
                                    alt="img"
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className="mt-44 mb-32">
                <HomePageSearch />
            </div>
            <div className="lmovie__container container mx-auto pb-11">
                <div className="lMovie__item grid grid-cols-5 gap-3">
                    {arrMovie?.map((item, index) => {
                        return (
                            <div
                                className="text-white hMovie__item__contain"
                                key={index}
                            >
                                <div className="hMovie__img">
                                    <img
                                        className="h-[400px] w-full"
                                        src={item?.hinhAnh}
                                        alt="img"
                                    />
                                    <div className="hMovie__icon">
                                        <Button
                                            type="primary"
                                            onClick={showModal}
                                        >
                                            <i className="fa-solid fa-play"></i>
                                        </Button>
                                        <Modal
                                            title="Basic Modal"
                                            open={isModalOpen}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                        >
                                            {/* Modal Video */}
                                        </Modal>
                                    </div>
                                </div>
                                <div className="hMovie__content">
                                    <div className="hMContent__title flex items-center ">
                                        <span className="text-white bg-blue-600 py-2 px-3 rounded-md mr-6">
                                            C18
                                        </span>
                                        <span className="text-white text-[1.5rem] line-clamp-1">
                                            {item?.tenPhim}
                                        </span>
                                    </div>
                                    <div className="hMovie__rating flex justify-evenly items-center mt-3 pb-4">
                                        <div>
                                            <i className="fa-solid fa-thumbs-up text-yellow-500 text-2xl mr-3"></i>
                                            <span className="font-semibold">
                                                88%{" "}
                                            </span>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-fire text-red-500 text-2xl mr-3"></i>
                                            <span className="font-semibold">
                                                88%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="view__detail">
                                    <button className="bg-yellow-500 rounded-md py-3 text-xl">
                                        View Detail
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ListMovie;
