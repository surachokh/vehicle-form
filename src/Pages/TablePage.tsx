import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";

export default function TablePage() {
  const vehicles = useSelector((state: any
    ) => state?.vehicle?.value);
  const dispatch = useDispatch();
    const navigate = useNavigate()
  useEffect(() => {
    dispatch({ type: "REQUEST_VEHICLE" });
  }, []);

  const navigateToCreate = (e: any) => {
    e.preventDefault()
    navigate('/create')
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, _: any) => <a href={`/${_.uid}`}>{text}</a>,
    },//
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
  ];

  return (
    <div style={{ width: "640px", margin: "auto" }}>
      <Table dataSource={vehicles} columns={columns} />
      <br />
      <Button onClick={(e) => navigateToCreate(e)}>Create</Button>
    </div>
  );
}
