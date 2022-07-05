import type { NextPage } from "next";
import Head from "next/head";
import Login from "../../components/Login";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chatty | Login</title>
      </Head>
      <div>
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
