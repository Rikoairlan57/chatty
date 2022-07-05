import type { NextPage } from "next";
import Head from "next/head";
import Register from "../../components/Register";

const RegisterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chatty | Register</title>
      </Head>
      <div>
        <Register />
      </div>
    </>
  );
};

export default RegisterPage;
