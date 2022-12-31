import React, { useState } from "react";
import "../layout.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-heart-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-3-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-fill",
    },
    {
      name: "Profile",
      path: "/apply-doctor",
      icon: "ri-user-2-fill",
    },
    {
      name: "Logout",
      path: "/apply-doctor",
      icon: "ri-logout-box-r-line",
    },
  ];

  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-heart-line",
    },
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "ri-user-2-fill",
    },
  ];

  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-heart-line",
    },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist",
      icon: "ri-user-star-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-2-fill",
    },
  ];

  const menuToBeRendered = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;
  const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : "User";
  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1 className="role">{role}</h1>
          </div>

          <div className="menu">
            <ul>
              {menuToBeRendered.map((menu, idx) => {
                const isActive = location.pathname === menu.path;
                return (
                  <li className={`list ${isActive && "active"} `} key={idx}>
                    <NavLink className="a" to={menu.path}>
                      <span className="icon">
                        <i className={menu.icon}></i>
                      </span>
                      <span className="title">{menu.name}</span>
                    </NavLink>
                  </li>
                );
              })}
              <li className='list'>
                <NavLink
                  className="a"
                  to='/login'
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  <span className="icon">
                    <i className='ri-logout-box-r-line'></i>
                  </span>
                  <span className="title">Logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="header">
            <div></div>
            <div className="d-flex jus layout-action-icon">
              <i className="ri-notification-3-fill notification "></i>
              <Link className="user" to="/profile">
                {user?.name}
              </Link>
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
