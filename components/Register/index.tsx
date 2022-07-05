import React from "react";
import LeftBg from "./LeftBg";

import RightBg from "./RightBg";

const Register: React.FunctionComponent = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
      <LeftBg />
      <RightBg />
    </div>
  );
};

export default Register;
