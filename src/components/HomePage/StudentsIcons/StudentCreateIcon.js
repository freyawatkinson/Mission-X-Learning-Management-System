import React from "react";
import "../HomePageStyle.css";

const HomePageIcons = (props) => {
  return (
    <div className="IconContainer">
      {props.image}
      {props.text}
    </div>
  );
};

export default HomePageIcons;
