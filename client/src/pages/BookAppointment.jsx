import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DoctorForm from "../components/DoctorForm";
import moment from "moment";
import "./BookAppointment.css";

const BookAppointment = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  const getDoctorData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/doctor/get-doctor-info-by-id",
        {
          doctorId: params.doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        setDoctor(response.data.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };
  const checkAvailability = async () => {
    console.log(date);
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/check-booking-avilability",
        {
          doctorId: params.doctorId,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setIsAvailable(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };
  const bookNow = async () => {
    setIsAvailable(false);
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctor,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/appointments");
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getDoctorData();
  }, []);
  return (
    <Layout>
      {doctor && (
        <div>
          <span className="headingDoctor">
            <span className="inner">
              {doctor.firstName} {doctor.lastName}
            </span>
            
              
            <h1 className="normal-text timingsClass">
              <b>Timings :</b> {doctor.timings[0]} - {doctor.timings[1]}
            </h1>
          </span>
          <hr />

          <Row >
            <Col span={12} sm={24} xs={24} lg={8}>
              <div className="doctors-details">
                <div>
                  <div className="d-flex flex-column appointmentDiv">
                    <div className="datePickerDiv">
                      <DatePicker
                        format="DD-MM-YYYY"
                        onChange={(value) => {
                          setDate(moment(value).format("DD-MM-YYYY"));
                          setIsAvailable(false);
                        }}
                      />
                    </div>
                    <div className="rangePickerDiv">
                      <TimePicker
                        format="HH:MM"
                        className="mt-3 "
                        onChange={(value) => {
                          setIsAvailable(false);
                          setTime(moment(value).format("HH:mm"));
                        }}
                      />
                    </div>
                    {!isAvailable && (
                      <Button
                        className="primary-button mt-3 full-width-button checkAvailability"
                        onClick={checkAvailability}
                      >
                        Check Availability
                      </Button>
                    )}

                    {isAvailable && (
                      <Button
                        className="primary-button mt-3 bookNow"
                        onClick={bookNow}
                      >
                        Book Now
                      </Button>
                    )}
                  </div>
                </div>
                <Col span={8} sm={24} xs={24} lg={8}>
              <img className="margin-right"
              draggable='false'
                src="/assets/booking.svg"
                alt=""
                width="100%"
                height='400'

              />
            </Col>
                <div className="doctors">
                  
                  <p>
                    <b>Phone Number : </b>
                    {doctor.phoneNumber}
                  </p>
                  <p>
                    <b>Address : </b>
                    {doctor.address}
                  </p>
                  <p>
                    <b>Fee per Visit : </b>
                    {doctor.feePerCunsultation}
                  </p>
                  <p>
                    <b>Website : </b>
                    {doctor.website}
                  </p>
                  <p>
                    <b>Timings : </b>
                    {doctor.timings[0]} - {doctor.timings[1]}
                  </p>
                  <p>
                    <b>Experience : </b>
                    {doctor.experience}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Layout>
  );
};

export default BookAppointment;
