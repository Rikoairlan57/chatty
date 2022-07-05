import React from "react";
import Link from "next/link";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import FormRegister from "./FormRegister";

const RightBg: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col px-8 py-6">
      <h1 className="font-black text-4xl my-4">Register</h1>
      <FormRegister />
      <PrimaryButton>Register</PrimaryButton>
      <h1 className="text-center my-5">OR</h1>
      <SecondaryButton>Authorize with Google</SecondaryButton>
      <p className="text-center my-4">
        Already have an account?
        <Link href="/login">
          <a className="text-blue-600">Sign In</a>
        </Link>
      </p>
    </div>
  );
};

export default RightBg;
