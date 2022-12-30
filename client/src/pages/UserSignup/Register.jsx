import { Button, Form, Input } from "antd";
import React from "react";
import styles from "./register.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/user/register", values);
      if (response.data.success) {
        toast(response.data.message, {
          icon: "😊",
          style: {
            borderRadius: "10px",
            background: "#223033",
            color: "#fff",
          },
        });
        navigate("/login");
      } else {
        toast(response.data.message, {
          icon: "😢",
          style: {
            borderRadius: "10px",
            background: "#b8291f",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      toast("Something went wrong", {
        icon: "🤔😑",
        style: {
          borderRadius: "10px",
          background: "#787775",
          color: "#fff",
        },
      });
    }
  };
  return (
    <div className="container d-flex  p-2 justify-content-between align-items-center">
      <div className={styles.right}>
        <img src="/assets/register.svg" alt="register" />
      </div>
      <div className={styles.left}>
        <div className="box">
          <div className="form">
            <h2>Register</h2>
            <Form layout="vertical" className="bgnone" onFinish={onFinish}>
              <Form.Item className="inputBox" label="Name" name="name">
                <Input placeholder="Enter your Name" autoComplete="off" />
              </Form.Item>
              <Form.Item className="inputBox" label="Email" name="email">
                <Input placeholder="email@gmail.com" autoComplete="off" />
              </Form.Item>
              <Form.Item className="inputBox" label="Password" name="password">
                <Input type="password" />
              </Form.Item>

              <Button className="BookNow " htmlType="submit">
                REGISTER
              </Button>

              <Link to="/login" className="anchor mt-2">
                CLICK HERE TO LOGIN
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
