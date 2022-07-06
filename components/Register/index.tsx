import React from "react";
import Link from "next/link";
import LayoutLogres from "../LayoutLogres/index";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";

const Register: React.FunctionComponent = () => {
  return (
    <LayoutLogres pageTitle="Register">
      <h1 className="font-black text-4xl my-4">Register</h1>
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
        <label className="block mt-8 ">confirm Password</label>
        <input
          className="appearance-none border rounded w-full py-2 px-4 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
        />
      </form>
      <PrimaryButton>Register</PrimaryButton>
      <h1 className="text-center my-5">OR</h1>
      <SecondaryButton>Authorize with Google</SecondaryButton>
      <p className="text-center my-4">
        Already have an account?
        <Link href="/login">
          <a className="text-blue-600">Sign In</a>
        </Link>
      </p>
    </LayoutLogres>
  );
};

export default Register;
