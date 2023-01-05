import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout >
      <span className="layoutHeading">
        <span className="inner">👨‍⚕️ Available Doctors</span>
      </span>
      <hr />
      <Row className="gapBetween d-flex ">
        <div className="d-flex doctorssDiv flex-wrap"> 
          {doctors.map((doctor, idx) => (
            <Col span={8} xs={24} sm={24} lg={8} key={idx}>
              <Doctor doctor={doctor} />
            </Col>
          ))}
        </div>

        <div className="doctorsDiv">
          <img src="/assets/doctors.svg" alt="doctors"  draggable='false' height='100%' width='550vh'/>
        </div>
      </Row>
    </Layout>
  );
};

export default Home;
