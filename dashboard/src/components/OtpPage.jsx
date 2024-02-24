import React from "react";
import { Card, Space, Button, Checkbox, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const OtpPage = () => {
  let { email } = useParams();
  let navigate = useNavigate();

  const onFinish = async (values) => {
    let data = {
      otp: values.otp,
      email: email,
    };

    let otpData = await axios.post(
      "http://localhost:8000/api/v1/auth/otpverify",
      data
    );

    console.log(otpData);
    navigate("/login");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Space direction="vertical" size={16}>
      <Card
        title="Check Email For Otp"
        style={{
          width: 300,
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Otp"
            name="otp"
            rules={[
              {
                required: true,
                message: "Please input your otp!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};

export default OtpPage;
