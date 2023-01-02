import React from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Tabs } from "antd";
import "./Notification.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";

const Notifications = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const markAllAsSeen = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/mark-all-notifications-as-seen",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  const deleteAll=async()=>{
    try {
        dispatch(showLoading());
        const response = await axios.post("/api/user/delete-all-notifications", {userId : user._id} , {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        });
        dispatch(hideLoading());
        if (response.data.success) {
          toast.success(response.data.message)
          dispatch(setUser(response.data.data));
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        toast.error("Something went wrong");
      }
  }
  return (
    <Layout>
      <h1 className="page-noti">Notifications</h1>
      <hr className="horizontal" />
      <Tabs>
        <Tabs.TabPane tab="Unseen" key={0}>
          <h1 className="d-flex justify-content-end unseenMark mark mk" onClick={()=>markAllAsSeen()}>
            <div>Mark all as seen</div>
          </h1>
          {user?.unseenNotifications.map((notification) => (
            <h4
              className="h4all"
              onClick={() => navigate(notification.onClickPath)}
            >
              {notification.message}
            </h4>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="seen" key={1}>
          <span className="d-flex justify-content-end unseenMark" onClick={()=>deleteAll()}>
            <h1 className="mark del">Delete all</h1>
          </span>
          {user?.seenNotifications.map((notification) => (
            <h3
              className="h4all"
              onClick={() => navigate(notification.onClickPath)}
            >
              {notification.message}
            </h3>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};

export default Notifications;
