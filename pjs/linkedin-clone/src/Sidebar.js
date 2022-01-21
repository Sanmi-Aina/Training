import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <aside className="sidebar">
      <article className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1484402628941-0bb40fc029e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
          alt="User Profile Header"
        />
        <Avatar className="sidebar__avatar" src={user.user.photoURL}>
          {user.user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.user.displayName}</h2>
        <h4>{user.user.email}</h4>
      </article>
      <article className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </article>

      <article className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("scss")}
        {recentItem("powerplatform")}
        {recentItem("softwaredevelopment")}
        {recentItem("designer")}
      </article>
    </aside>
  );
};

export default Sidebar;
