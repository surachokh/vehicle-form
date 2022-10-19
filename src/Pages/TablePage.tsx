import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";

export default function TablePage() {
  const vehicles = useSelector((state: any) => state?.vehicle?.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "REQUEST_VEHICLE" });
  }, []);

  const navigateToCreate = (e: any) => {
    e.preventDefault();
    navigate("/create");
  };

  const loginHandle = async (e: any) => {
    e.preventDefault();
    const payload = {
      grant_type: "password",
      username: "FPJDriver01",
      password: "FPJDriver01",
    };
    const url = `https://rywe6a9co8.execute-api.ap-southeast-1.amazonaws.com/dev-cognito-login`;
    const token = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(res => res.json());
    localStorage.setItem("access_token", token.access_token)
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, _: any) => <a href={`/${_.uid}`}>{text}</a>,
    }, //
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
      <Button onClick={(e) => loginHandle(e)}>Login</Button>
    </div>
  );
}
