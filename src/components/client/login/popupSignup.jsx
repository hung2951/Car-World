import React from 'react'
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
const PopupSignup = ({ visible, onClose,onLogin }) => {
    console.log(onLogin);
    
  return (
    <div>
      <Modal open={visible} onCancel={onClose} footer={null} closable={false}>
      <h2 className="text-center text-lg font-semibold mb-4">ĐĂNG KÝ TÀI KHOẢN GEARVN</h2>

      <Form layout="vertical">
        <Form.Item name="fullname">
          <Input placeholder="Họ và Tên" />
        </Form.Item>
        <Form.Item name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item name="agree" valuePropName="checked">
          <Checkbox>Đăng ký nhận tin khuyến mãi qua Email</Checkbox>
        </Form.Item>

        <Button type="primary" className="w-full bg-red-500" size="large">
          TẠO TÀI KHOẢN
        </Button>
      </Form>

      <div className="my-4 flex items-center">
        <span className="flex-grow border-t border-gray-300"></span>
        <span className="mx-2 text-gray-500 text-sm">hoặc đăng ký bằng</span>
        <span className="flex-grow border-t border-gray-300"></span>
      </div>

      <div className="flex justify-center gap-4">
        <Button icon={<GoogleOutlined />} className="w-1/2 bg-red-500 text-white">
          Google
        </Button>
        <Button icon={<FacebookOutlined />} className="w-1/2 bg-blue-600 text-white">
          Facebook
        </Button>
      </div>

      <div className="text-center mt-4 text-sm">
        Bạn đã có tài khoản?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={()=>onLogin(true)}>
          Đăng nhập!
        </span>
      </div>
    </Modal>
    </div>
  )
}

export default PopupSignup
