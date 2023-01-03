import React from "react";
import "./doctorFrom.css";
import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";
const DoctorForm = ({ onFinish, initivalValues }) => {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initivalValues,
        ...(initivalValues && {
          timings: [
            moment(initivalValues?.timings[0], "HH:mm"),
            moment(initivalValues?.timings[1], "HH:mm"),
          ],
        }),
      }}
    >
      <h1 className="card-title mt-3">Personal Information</h1>
      <Row gutter={20} className="form-details">
        <Col span={8} xs={24} sm={24} className="formInput">
          <Form.Item
            required
            className="labelDetails"
            label="First Name"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input className="inputDoc" placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8} className="formInput">
          <Form.Item
            required
            className="labelDetails"
            label="Last Name"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input className="inputDoc" placeholder="Last Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8} className="formInput">
          <Form.Item
            required
            label="Phone Number"
            className="labelDetails"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input className="inputDoc" placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8} className="formInput">
          <Form.Item
            required
            className="labelDetails"
            label="Website"
            name="website"
            rules={[{ required: true }]}
          >
            <Input className="inputDoc" placeholder="Website" />
          </Form.Item>
        </Col>

        <Col span={8} xs={24} sm={24} lg={8} className="formInput">
          <Form.Item
            required
            className="labelDetails address"
            label="Address"
            name="address"
            rules={[{ required: true }]}
          >
            <Input className="inputDoc address" placeholder="Address" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <h1 className="card-title mt-3">Professional Information</h1>
      <Row gutter={20} className="form-details">
        <Col span={8} xs={24} sm={24} lg={8} className="formInput">
          <Form.Item
            required
            className="labelDetails"
            label="Specialization"
            name="specialization"
            rules={[{ required: true }]}
          >
            <Input className="inputDocs" placeholder="Specialization" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8} className="formInput ">
          <Form.Item
            required
            className="labelDetails"
            label="Experience"
            name="experience"
            rules={[{ required: true }]}
          >
            <Input
              className="inputDocs experience"
              placeholder="Experience"
              type="number"
            />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8} className="formInput">
          <Form.Item
            required
            className="labelDetails"
            label="Fee Per Cunsultation"
            name="feePerCunsultation"
            rules={[{ required: true }]}
          >
            <Input
              className="inputDocs fee"
              placeholder="Fee Per Cunsultation"
              type="number"
            />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8} className="formInputs">
          <Form.Item
            required
            label="Timings"
            name="timings"
            rules={[{ required: true }]}
            className="timerPicker labelDetails time"
          >
            <TimePicker.RangePicker format="HH:mm" />
          </Form.Item>
        </Col>
      </Row>

      <div className="d-flex justify-content-end">
        <Button className="BookNow btnSubmit" htmlType="submit">
          SUBMIT
        </Button>
      </div>
    </Form>
  );
};

export default DoctorForm;
