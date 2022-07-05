import React from "react";
import Link from "next/link";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import FormLogin from "./FormLogin";

const RightBg: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col px-8 py-6">
      <h1 className="font-black text-4xl my-4">Login</h1>
      <FormLogin />
      <PrimaryButton>Login</PrimaryButton>
      <h1 className="text-center my-5">OR</h1>
      <SecondaryButton>Authorize with Google</SecondaryButton>
      <p className="text-center my-4">
        Dont have an account?
        <Link href="/register">
          <a className="text-blue-600">Sign Up</a>
        </Link>
      </p>
    </div>
  );
};

export default RightBg;
