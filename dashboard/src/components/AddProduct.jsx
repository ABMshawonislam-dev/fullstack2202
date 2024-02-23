import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Card, Col, Row } from "antd";
import axios from "axios";

const AddProduct = () => {
  let [varinatvalue, setVarinatvalue] = useState([]);
  let [value, setValue] = useState("");
  let [valuestock, setValueStock] = useState("");
  const onFinishMain = async (values) => {
    let data = await axios.post(
      "http://localhost:8000/api/v1/product/products",
      {
        name: values.name,
        description: values.description,
        variant: varinatvalue,
      }
    );
    console.log(data);
  };

  const onFinish = (values) => {
    let arr = [...varinatvalue];

    arr.push({
      name: values.variantname,
      value: [],
    });
    setVarinatvalue(arr);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleVariantValue = (index) => {
    varinatvalue[index].value.push({
      name: value,
      stock: valuestock,
    });
    let arr = [...varinatvalue];
    console.log(arr);
    setVarinatvalue(arr);
  };

  let handleDelete = (index) => {
    console.log(index);
    let arr = [...varinatvalue];
    arr.splice(index, 1);
    setVarinatvalue(arr);
  };

  let handleValueDelete = (mainid, id) => {
    console.log(mainid, id);
    let arr = [...varinatvalue];
    console.log(arr[mainid].value);
    arr[mainid].value.splice(id, 1);
    setValue(arr);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishMain}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Variant Name"
          name="variantname"
          rules={[
            {
              required: true,
              message: "Please input your variant!",
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
            Add Variant
          </Button>
        </Form.Item>
        <Row>
          {varinatvalue.length > 0 &&
            varinatvalue.map((item, index) => (
              <Col span={8}>
                <Card style={{ width: 300 }}>
                  <>
                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                    <p>
                      <b>
                        {item.name} {JSON.stringify(varinatvalue)}
                      </b>
                    </p>
                    <input
                      placeholder="value name"
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <input
                      placeholder="Sotck"
                      onChange={(e) => setValueStock(e.target.value)}
                    />
                    <Button onClick={() => handleVariantValue(index)}>
                      Add
                    </Button>
                    {item.value.map((i, id) => (
                      <>
                        <p>{i.name}</p>
                        <p>{i.stock}</p>
                        <Button
                          danger
                          onClick={() => handleValueDelete(index, id)}
                        >
                          delete
                        </Button>
                      </>
                    ))}
                  </>
                </Card>
              </Col>
            ))}
        </Row>
      </Form>
    </>
  );
};

export default AddProduct;
