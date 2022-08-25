import "./Spinner.css";
import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { COLOR } from "../../utils/Constant";

const Spinner = () => {
  return (
    <div className="spinner flex-center">
      <BeatLoader color={COLOR.primary} size={25} />
    </div>
  );
};

export default Spinner;
