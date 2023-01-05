import React from "react";
import { useNavigate } from "react-router-dom";
import "./doctor.css";
function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="cards"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="cards-title">
        {doctor.firstName} {doctor.lastName} <hr />
       <span className="specialization"> {doctor.specialization}</span>
      </h1>
      <hr />
      <p>
        <b>Phone Number : </b>
        {doctor.phoneNumber}
      </p>
      <p className="addressWrap">
        <b>Address : </b>
        {doctor.address}
      </p>
      <p>
        <b>Experience : </b>
        {doctor.experience}
      </p>
      <p>
        <b>Fee per Visit : </b>
        {doctor.feePerCunsultation}
      </p>
      <p>
        <b>Timings : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
