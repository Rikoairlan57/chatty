import type { NextPage } from 'next';
import Head from 'next/head';

const Login: NextPage = () => {

  return (
    // flex flex-row 
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className='bg-gray-500 flex flex-row justify-center'>
      </div>
      <div className='flex flex-col px-8 py-6'>
        <h1 className="font-black text-4xl my-12">Login</h1>
        <form>
          <label className="block">Email Address</label>
          <input className="appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
          <label className="block mt-8 ">Password</label>
          <input className="appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" />
         
        </form>
        <button className="mt-8 w-full px-4 py-2 text-white border rounded whitespace-nowrap bg-gray-700 hover:bg-gray-600 transition-all" type="submit">Login</button>
        <h1 className="text-center my-5">OR</h1>
        <button className="mt-4 w-full px-4 py-2 border-2 hover:bg-gray-100 rounded whitespace-nowrap focus:outline-none transition-all">Authorize With Google</button>
        <p className="text-center my-4">Dont have an account? <a href="" className="text-yellow-300">Sign Up</a></p>
      </div>
    </div>
  )
}

export default Login;