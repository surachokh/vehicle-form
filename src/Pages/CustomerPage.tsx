import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Form, Input, Table } from "antd";

export default function CustomerPage() {
  const [page, setPage] = useState(3);
  const [pageSize, setPageSize] = useState(10);
  const [formValues, setFormValues] = useState([{ value: null }]);

  const customers = useSelector((state: any) => state?.customer?.value);

  const initPayload = {
    skip: (page - 1) * 10,
    limit: pageSize,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "REQUEST_CUSTOMER", initPayload });
  }, []);

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

    const payload = {
      skip: "0",
      limit: "10",
    };

    //condition for filter
    if (values[0].value !== "" && values[0].value)
      Object.assign(payload, { code: values[0].value });
    if (values[1].value !== "" && values[1].value)
      Object.assign(payload, { name: values[1].value });
    if (values[2].value !== "" && values[2].value)
      Object.assign(payload, { phone: values[2].value });

    dispatch({ type: "REQUEST_CUSTOMER", payload });
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPage(page)
    setPageSize(pageSize)

    const payload = {
      skip: (page - 1) * 10,
      limit: pageSize,
    };

    if (formValues[0]?.value !== "" && formValues[0]?.value)
      Object.assign(payload, { code: formValues[0].value });
    if (formValues[1]?.value !== "" && formValues[1]?.value)
      Object.assign(payload, { name: formValues[1].value });
    if (formValues[2]?.value !== "" && formValues[2]?.value)
      Object.assign(payload, { phone: formValues[2].value });

    dispatch({ type: "REQUEST_CUSTOMER", payload });
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
