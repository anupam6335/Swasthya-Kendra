import { Button, Form, Input } from "antd";
import React from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  const onFinish = (values) => {
    console.log(`Recvied values of From:`, values);
 }  
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.right}>
          <img
            src="/assets/login.svg"
            alt="login image"
            height="500"
            width="500"
          />
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
