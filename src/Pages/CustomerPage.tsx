import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Form, Input, Table } from "antd";

export default function CustomerPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [formValues, setFormValues] = useState([
    { name: "", value: undefined },
  ]);

  const customers = useSelector((state: any) => state?.customer?.value);

  const initPayload = {
    skip: (page - 1) * 10,
    limit: pageSize,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "REQUEST_CUSTOMER", initPayload });
  }, []);

  useEffect(() => {
    const payload = {
      skip: (page - 1) * 10,
      limit: pageSize,
    };

    formValues.map((value) => {
      if (value.value && value.value !== "")
        Object.assign(payload, { [value.name]: value.value });
    });

    dispatch({ type: "REQUEST_CUSTOMER", payload });
  }, [page, pageSize, formValues]);

  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  const handleChange = (_?: any, values?: any) => {
    setFormValues(values);
    setPage(1)
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };

  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFieldsChange={handleChange}
        autoComplete="off"
      >
        <Form.Item label="Code" name="code">
          <Input />
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>
      </Form>
      {customers && (
        <Table
          dataSource={customers.customers}
          columns={columns}
          pagination={{
            onChange: handlePaginationChange,
            current: page,
            pageSize: pageSize,
            total: customers.total,
          }}
        />
      )}
    </div>
  );
}
