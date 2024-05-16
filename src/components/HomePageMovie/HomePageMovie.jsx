import { useEffect, useState } from "react";
import "./homePageMovie.scss";
import { homePageService } from "../../api/homePage";
import { Link, NavLink } from "react-router-dom";
import { Button, Modal } from "antd";
import paths from "../../paths";

const HomePageMovie = () => {
    const [arrMoviePagination, setArrMoviePagination] = useState([]);

    useEffect(() => {
        homePageService
            .moviePagination()
            .then((res) => {
                // console.log(res);
                // console.log(res.data.content.items);
                setArrMoviePagination(res.data.content.items);
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
        <div className="hMovie__container">
            {/* HomePage Movie Header */}
            <div className="hMovie__header">
                <h2 className="text-white text-5xl font-bold leading-10">
                    MOVIES
                </h2>
                <Link
                    to={paths.LIST_MOVIES}
                    className="hMovie__viewAll text-[#31d7a9] font-bold text-2xl"
                >
                    View All
                </Link>
            </div>
            {/* HomePage Movie List Pagnitration */}
            <div className="hMovie__item grid grid-cols-3 gap-7">
                {arrMoviePagination.map((item, index) => {
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
                                    <Button type="primary" onClick={showModal}>
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
                                <NavLink
                                    to={`${paths.MOVIE_DETAIL}/${item.maPhim}`}
                                    className="bg-yellow-500 rounded-md py-3 text-xl"
                                >
                                    View Detail
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePageMovie;
