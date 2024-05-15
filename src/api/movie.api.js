import { GROUP_CODE } from "../constants";
import fetcher from "./fetcher";

/**
 * @description
 * API: "{base_url}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
 * METHOD: GET
 *
 * @returns
 * Array of Movie Objects
 */
export const getMoviesApi = async () => {
    try {
        const response = await fetcher.get(
            "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        );
        return response.data.content;
    } catch (exception) {
        throw new Error(exception);
    }
};

export const getMovieDetailApi = async (id) => {
    try {
        const response = await fetcher.get(
            `/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        );
        return response.data.content;
    } catch (exception) {
        throw new Error(exception);
    }
};

export const getQuanLyRapApi = async () => {
    try {
        const response = await fetcher.get("/QuanLyRap/LayThongTinHeThongRap");
        return response.data.content;
    } catch (exception) {
        throw new Error(exception);
    }
};

export const getTicketApi = async (id) => {
    try {
        const response = await fetcher.get(
            `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
        );
        return response.data.content;
    } catch (exception) {
        throw new Error(exception);
    }
};

export const Banner = {
    getBannerApi: () => {
        return fetcher.get("/QuanLyPhim/LayDanhSachBanner");
    },
};

export const Movie = {
    getMovieApi: () => {
        return fetcher.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
    },
};
