import React from "react";
import { Audio } from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className="min-w-screen min-h-screen grid  place-content-center">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Spinner;
