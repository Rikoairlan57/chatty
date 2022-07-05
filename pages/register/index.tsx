import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import PrimaryButton from "../../components/UI/PrimaryButton";
import SecondaryButton from "../../components/UI/SecondaryButton";
import { Secondary } from "../../stories/Button.stories";

const Register: NextPage = () => {
  return (
    // flex flex-row
    <>
      <Head>
        <title>Chatty | Register</title>
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="bg-neutral-800 flex flex-row justify-center"></div>
        <div className="flex flex-col px-8 py-6">
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
        </div>
      </div>
    </>
  );
};

export default Register;
