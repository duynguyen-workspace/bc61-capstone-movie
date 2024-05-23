import React, { useContext, useState } from "react";
import InputText from "../../../components/Input/InputText";
import { useFormik } from "formik";
import { DatePicker, Rate, Select, Switch } from "antd";
import { quanLyPhim } from "../../../api/movie.api";
import useMessage from "antd/es/message/useMessage";
import { AlertMessage } from "../../../App";
import { useSelector } from "react-redux";

const CreateFilm = () => {
  const { user } = useSelector((reducer) => reducer.manage);
  console.log(user);
  const { handleAlert } = useContext(AlertMessage);
  const [image, setImage] = useState("");
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: "",
      sapChieu: false,
      dangChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      for (let key in values) {
        if (key == "hinhAnh") {
          formData.append("File", values[key]);
        } else {
          formData.append(key, values[key]);
        }
        quanLyPhim
          .themPhimUpLoadHinh(formData)
          .then((res) => {
            console.log(res);
            handleAlert("success", res.data.content);
          })
          .catch((err) => {
            console.log(err);
            handleAlert("error", err.response.data.content);
          });
      }
      resetForm();
    },
  });

  return (
    <div>
      <h1>Thêm phim</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-grey-500 py-2 px-2 grid grid-cols-2 gap-5"
        action=""
      >
        <div className="">
          <InputText
            name="tenPhim"
            label="Tên Phim"
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder=""
            error={errors.tenPhim}
            value={values.tenPhim}
            touched={touched.tenPhim}
          />
          <InputText
            name="trailer"
            label="Trailer"
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder=""
            error={errors.trailer}
            value={values.trailer}
            touched={touched.trailer}
          />

          <div className="w-full">
            <label className="block my-2 font-medium text-sm" htmlFor="">
              Mô tả
            </label>
            <textarea
              onChange={handleChange}
              className="w-full h-20 rounded-lg"
              name="moTa"
              id=""
            ></textarea>
          </div>
        </div>

        <div className="space-y-5">
          <div className="">
            <label className="block my-2 font-medium text-sm" htmlFor="">
              Lịch chiếu
            </label>
            <DatePicker
              style={{ width: "100%" }}
              format="DD-MM-YYYY"
              onChange={(date, dateString) => {
                console.log(date);
                console.log(dateString);
                setFieldValue("ngayKhoiChieu", dateString);
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <label className="block my-2 font-medium text-sm" htmlFor="">
                Đang chiếu
              </label>
              <Switch
                onChange={(checked, event) => {
                  console.log(checked);
                  console.log(event);
                  setFieldValue("dangChieu", checked);
                }}
                value={values.dangChieu}
              />
            </div>
            <div>
              <label className="block my-2 font-medium text-sm" htmlFor="">
                Sắp chiếu
              </label>
              <Switch
                onChange={(checked, event) => {
                  console.log(checked);
                  setFieldValue("sapChieu", checked);
                }}
                value={values.sapChieu}
              />
            </div>
            <div>
              <label className="block my-2 font-medium text-sm" htmlFor="">
                Hot
              </label>
              <Switch
                onChange={(checked, event) => {
                  console.log(checked);
                  console.log(event);
                  setFieldValue("hot", checked);
                }}
                value={values.hot}
              />
            </div>
          </div>
          <div>
            <label className="block my-2 font-medium text-sm" htmlFor="">
              Đánh giá
            </label>
            <Rate
              allowHalf
              onChange={(value) => {
                console.log(value);
                setFieldValue("danhGia", value);
              }}
            />
          </div>
        </div>

        <div className="col-span-2">
          <div className="">
            <label className="block my-2 font-medium text-sm" htmlFor="">
              Thêm hình
            </label>
            <img src={image} alt="" />
            <input
              name="hinhAnh"
              onChange={(event) => {
                console.log(event.target.files);
                const img = event.target.files[0];
                if (img) {
                  const urlImg = URL.createObjectURL(img);
                  console.log(urlImg);
                  setImage(urlImg);
                  setFieldValue("hinhAnh", img);
                }
              }}
              type="file"
              accept="image/*"
              id=""
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-2 px-5 mt-5 bg-blue-500 rounded"
            >
              Thêm phim
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateFilm;
