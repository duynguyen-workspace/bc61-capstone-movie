import React from "react";
import InputForm from "../Input/InputForm";
import { useFormik } from "formik";
import ButtonForm from "../Button/ButtonForm";
import paths from "../../paths";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div>
      <form
        className="grid grid-cols-2 gap-2"
        onSubmit={handleSubmit}
        action=""
      >
        <InputForm
          name="hoTen"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.hoTen}
          value={values.hoTen}
          errors={errors.hoTen}
          placeholder="Name"
          icon="fa-thin fa-pen text-black font-bold"
        />

        <InputForm
          name="taiKhoan"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.taiKhoan}
          value={values.taiKhoan}
          errors={errors.taiKhoan}
          placeholder="Tài Khoản"
          icon="fa-thin fa-user text-black font-bold"
        />

        <InputForm
          name="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.email}
          value={values.email}
          errors={errors.email}
          placeholder="Email"
          icon="fa-thin fa-envelope text-black font-bold"
        />

        <InputForm
          name="soDT"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.soDt}
          value={values.soDt}
          errors={errors.soDt}
          placeholder="Phone"
          icon="fa-thin fa-phone text-black font-bold"
        />

        <InputForm
          name="matKhau"
          type="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.matKhau}
          value={values.matKhau}
          errors={errors.matKhau}
          placeholder="Password"
          icon="fa-thin fa-lock text-black font-bold"
        />

        <InputForm
          name="matKhau"
          type="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.matKhau}
          value={values.matKhau}
          errors={errors.matKhau}
          placeholder="Confirm Password"
          icon="fa-thin fa-lock text-black font-bold"
        />
      </form>
      <div className="my-5">
        <ButtonForm />
      </div>

      {/* Recommend Sign Up */}
      <p className="py-2 text-xs">
        Already have an account?
        <Link to={paths.LOGIN} className="underline text-blue-500 text-sm">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default FormRegister;
