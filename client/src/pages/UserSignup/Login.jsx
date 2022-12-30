import { Button, Form, Input } from "antd";
import React from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/user/login", values);
      if (response.data.success) {
        toast(response.data.message, {
          icon: "😊",
          style: {
            borderRadius: "10px",
            background: "#223033",
            color: "#fff",
          },
        });
        localStorage.setItem("token", response.data.data);
        navigate("/home");
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
    <>
      <div className={styles.loginContainer}>
        <div className={styles.right}>
          <img src="/assets/login.svg" alt="login" height="500" width="500" />
        </div>
        <div className={styles.left}>
          <div className="box">
            <div className="form">
              <h2 className="mt-4">Welcome Back</h2>
              <Form layout="vertical" className="bgnone" onFinish={onFinish}>
                <Form.Item className="inputBox" label="Email" name="email">
                  <Input placeholder="email@gmail.com" autoComplete="off" />
                </Form.Item>
                <Form.Item
                  className="inputBox"
                  label="Password"
                  name="password"
                >
                  <Input type="password" />
                </Form.Item>

                <Button className="BookNow " htmlType="submit">
                  LOGIN
                </Button>

                <Link to="/register" className="anchor mt-2">
                  Don't Have an Account ?
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
