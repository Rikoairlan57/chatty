const FromRegister: React.FunctionComponent = () => {
  return (
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
  );
};

export default FromRegister;
