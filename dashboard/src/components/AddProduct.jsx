import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";

const AddProduct = () => {
  let [varinatvalue, setVarinatvalue] = useState([]);
  let [value, setValue] = useState("");
  let [valuestock, setValueStock] = useState("");
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
        {varinatvalue.length > 0 &&
          varinatvalue.map((item, index) => (
            <Card style={{ width: 300 }}>
              <>
                <p>
                  <b>{item.name}</b>
                </p>
                <input
                  placeholder="value name"
                  onChange={(e) => setValue(e.target.value)}
                />
                <input
                  placeholder="Sotck"
                  onChange={(e) => setValueStock(e.target.value)}
                />
                <Button onClick={() => handleVariantValue(index)}>Add</Button>
                {item.value.map((i) => (
                  <>
                    <p>{i.name}</p>
                    <p>{i.stock}</p>
                  </>
                ))}
              </>
            </Card>
          ))}
      </Form>
    </>
  );
};

export default AddProduct;
