import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateVehicle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    const response = await dispatch({ type: "CREATE_VEHICLE", values });
    if (response) {
      alert("Create Success");
      navigate("/");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleNavigate = (e: any) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <div style={{ width: "640px", margin: "auto" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your vehicle's name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Code"
            name="code"
            rules={[
              {
                required: true,
                message: "Please input your vehicle's code!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Capacity"
            name="capacity"
            rules={[
              {
                required: true,
                message: "Please input your vehicle's capacity!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Weight"
            name="weight"
            rules={[
              {
                required: true,
                message: "Please input your vehicle's weight!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary" onClick={(e) => handleNavigate(e)}>
              Back
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
