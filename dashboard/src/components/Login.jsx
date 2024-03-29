import React from "react";
import { Card, Space, Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const onFinish = async (values) => {
    let data = {
      email: "shawon.cit.bd@gmail.com",
      password: "123456789",
    };

    let logData = await axios.post(
      "http://localhost:8000/api/v1/auth/login",
      data
    );
    console.log(logData);

    if (logData.data.role == "User") {
      console.log("You do not have permission for login");
    } else {
      console.log("Done");
      navigate("/home");
      localStorage.setItem("user", JSON.stringify(logData.data));
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Space direction="vertical" size={16}>
      <Card
        title="Login"
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
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
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

export default Login;
