import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlined} title={"Like"} color={"gray"} />
        <InputOption Icon={ChatOutlined} title={"Comment"} color={"gray"} />
        <InputOption Icon={ShareOutlined} title={"Share"} color={"gray"} />
        <InputOption Icon={SendOutlined} title={"Send"} color={"gray"} />
      </div>
    </div>
  );
};

export default Post;
