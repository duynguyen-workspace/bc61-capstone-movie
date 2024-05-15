import { useEffect, useState } from "react";
import { Banner } from "../../api/movie.api";
import { Carousel } from "antd";

const ListMovie = () => {
    let [arrBanner, setArrBanner] = useState([]);
    console.log(arrBanner);
    useEffect(() => {
        Banner.getBannerApi()
            .then((res) => {
                // console.log(res);
                // console.log(res.data.content);
                setArrBanner(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Antd onchange Carousel
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <div className="Lmovie__banner">
            <div className="Lbanner__container">
                <Carousel afterChange={onChange} arrows={true}>
                    {arrBanner.map((item, index) => {
                        return (
                            <div key={index} className="h-[87vh]">
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
        </div>
    );
};

export default ListMovie;
