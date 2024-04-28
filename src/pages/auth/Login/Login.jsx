import React from "react";
import IconSocial from "../../../components/IconSocial/IconSocial";
import Lottie from "react-lottie";

import "./Login.scss";
import loginAnimation from "../../../assets/lotties/loginAnimation.json";
import FormLogin from "../../../components/FormLogin/FormLogin";

const Login = () => {
  console.log("hello");
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        backgroundImage: "url(./src/assets/img/bg-login.jpg)",
      }}
      className="h-screen login"
    >
      {/* Form */}
      <div className="form items-center text-center text-white">
        {/* Animation */}
        <div className="animate">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>

        <div className="login-card flex flex-col gap-10">
          {/* Form Header */}
          <div>
            <h1 className="text-3xl font-bold">Sign In</h1>
          </div>

          {/* Form Content */}
          <div className="login-content">
            <FormLogin />
          </div>

          {/* Form Footer */}
          <IconSocial />
        </div>
      </div>
    </div>
  );
};

export default Login;
