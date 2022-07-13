import type { NextPage } from "next";
import Button, { BUTTON_STYLES } from "../../components/UI/Button";
import Link from "next/link";
import LayoutLogres from "../../components/LayoutLogres";


function Input() {
  return (<input className="appearance-none border rounded w-full py-2 px-4 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />);
}

// TODO Refactor this into components

const RegisterPage: NextPage = () => {
  return (
    <LayoutLogres pageTitle="Register">
      <h1 className="font-black text-4xl my-4">Register</h1>
      <form>
        <label className="block">Email Address</label>
        <Input />
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
      <Button buttonStyle={BUTTON_STYLES.primary}>Login</Button>
      <h1 className="text-center my-5">OR</h1>
      <Button buttonStyle={BUTTON_STYLES.secondary}>Authorize with</Button>
      <p className="text-center my-4">
        Already have an account?
        <Link href="/login">
          <a className="text-blue-600">Sign In</a>
        </Link>
      </p>
    </LayoutLogres>
  );
};

export default RegisterPage;
