import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import PopupSignin from "./popupSignin";
import PopupSignup from "./popupSignup";
const Login = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <Card className="w-80 shadow-lg rounded-lg p-4 absolute top-16 right-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">👋</span>
            <span className="font-semibold">Xin chào, vui lòng đăng nhập</span>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setIsLoginOpen(true)}
              type="primary"
              className="w-full bg-black hover:bg-gray-800"
            >
              ĐĂNG NHẬP
            </Button>
            <Button
              onClick={() => setIsRegisterOpen(true)}
              className="w-full border-black hover:border-gray-600"
            >
              ĐĂNG KÝ
            </Button>
          </div>
        </Card>
      </div>
      <PopupSignin
        visible={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onRegister={(value) => {
          setIsRegisterOpen(value);
          setIsLoginOpen(false);
        }}
      />
      <PopupSignup
        visible={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onLogin={(value) => {
          setIsLoginOpen(value);
          setIsRegisterOpen(false);
        }}
      />
    </>
  );
};

export default Login;
