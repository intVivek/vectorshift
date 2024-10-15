import React from "react";
import s from "./SubmitButton.module.scss";
import { FaPlay } from "react-icons/fa";

const SubmitButton = () => {
  return (
    <button className={s.SubmitButton}>
      <FaPlay className={s.icon}/>
      Submit
    </button>
  );
};

export default SubmitButton;
