import React from "react";
import Link from "next/link";
import LayoutLogres from "../LayoutLogres/index";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";

const Login: React.FunctionComponent = () => {
  return (
    <LayoutLogres pageTitle="Login">
      <h1 className="font-black text-4xl my-4">Login</h1>
      <form>
        <label className="block">Email Address</label>
        <input
          className="appearance-none border rounded w-full py-2 px-4 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
        <label className="block mt-8 ">Password</label>
        <input
          className="appearance-none border rounded w-full py-2 px-4 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
        />
      </form>
      <PrimaryButton>Login</PrimaryButton>
      <h1 className="text-center my-5">OR</h1>
      <SecondaryButton>Authorize with Google</SecondaryButton>
      <p className="text-center my-4">
        Dont have an account?
        <Link href="/register">
          <a className="text-blue-600">Sign Up</a>
        </Link>
      </p>
    </LayoutLogres>
  );
};

export default Login;
