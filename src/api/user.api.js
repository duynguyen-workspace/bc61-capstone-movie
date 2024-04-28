import fetcher from "./fetcher";

export const userApiService = {
  signIn: (data) => {
    return fetcher.post("/QuanLyNguoiDung/DangNhap", data);
  },
};
