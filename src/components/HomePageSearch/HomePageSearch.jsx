import "./homePageSearch.scss";
const HomePageSearch = () => {
    return (
        <div className="home__search container mx-auto">
            <div className="hsearch__container">
                <div className="hsearch__header">
                    <div className="hsearch__first uppercase">
                        <h6 className="hsearch__category text-xl mb-2">
                            Welcome to Boleto
                        </h6>
                        <h3 className="hsearch__title text-white text-3xl">
                            What are you looking for
                        </h3>
                    </div>
                    <div className="hsearch__second uppercase mb-5">
                        <button>
                            <i className="fa-solid fa-film"></i>
                            <span className="font-bold pl-3 text-white">
                                MOVIE
                            </span>
                        </button>
                        <button>
                            <i className="fa-solid fa-calendar-days"></i>
                            <span className="font-bold pl-3 text-white">
                                EVENT
                            </span>
                        </button>
                        <button>
                            <i className="fa-solid fa-masks-theater"></i>
                            <span className="font-bold pl-3 text-white">
                                THEATER
                            </span>
                        </button>
                    </div>
                </div>
                <div className="hsearch__bar">
                    <div className="hsearchBar__item">
                        <form className="hsearchBar__form">
                            <div className="form__group">
                                <i className="fa-solid fa-clapperboard"></i>
                                <span>movie</span>
                                <select name="movie">
                                    <option value="film">Film</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <i className="fa-solid fa-masks-theater"></i>
                                <span>Theater</span>
                                <select name="movie">
                                    <option value="theater">Theater</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <i className="fa-solid fa-clapperboard"></i>
                                <span>movie</span>
                                <select name="movie">
                                    <option value="film">Film</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <input
                                    className="hsearch__input text-white"
                                    type="text"
                                    placeholder="Search for movies"
                                />
                                <button type="submit">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSearch;
