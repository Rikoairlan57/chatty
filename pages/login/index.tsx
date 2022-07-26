import type { NextPage } from "next";
import Link from "next/link";
import LayoutLogres from "../../components/LayoutLogres";
import Button, { BUTTON_STYLES } from "../../components/UI/Button";
import Email, { EMAIL_STYLES } from "../../components/UI/Email";
import Password, { PASSWORD_STYLES } from "../../components/UI/Password";

// TODO Refactor this into components

const LoginPage: NextPage = () => {
  return (
    <div>
      <LayoutLogres pageTitle="Login">
        <h1 className="font-black text-4xl my-4">Login</h1>
        <form>
          <label className="block">Email Address</label>
          <Email emailStyle={EMAIL_STYLES.primary} />
          <label className="block mt-8 ">Password</label>
          <Password passStyle={PASSWORD_STYLES.primary} />
        </form>
        <Button buttonStyle={BUTTON_STYLES.primary}>Login</Button>
        <h1 className="text-center my-5">OR</h1>
        <Button buttonStyle={BUTTON_STYLES.secondary}>
          Authorize with Google
        </Button>
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
