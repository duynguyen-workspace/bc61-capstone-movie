import fetcher from "./fetcher";

export const homePageService = {
    moviePagination: () => {
        return fetcher.get(
            "/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=3"
        );
    },
};
