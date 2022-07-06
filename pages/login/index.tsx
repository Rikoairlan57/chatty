import type { NextPage } from "next";
import Link from "next/link";
import LayoutLogres from "../../components/LayoutLogres";
import Button, { BUTTON_STYLES_TYPES } from "../../components/UI/Button";

const LoginPage: NextPage = () => {
  return (
    <div>
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
        <Button styleType={BUTTON_STYLES_TYPES.primary}>Login</Button>
        <h1 className="text-center my-5">OR</h1>
        <Button styleType={BUTTON_STYLES_TYPES.secondary}>Authorize with Google</Button>
        <p className="text-center my-4">
          Dont have an account?
          <Link href="/register">
            <a className="text-blue-600">Sign Up</a>
          </Link>
        </p>
      </LayoutLogres>
    </div>
  );
};

export default LoginPage;
