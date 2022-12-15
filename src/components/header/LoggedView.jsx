const LoggedView = () => {
  return (
    <>
      <a href="#" className=" group relative hover:text-green-primary">
        History purchase
        <span className="absolute bottom-0 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </a>
      <a href="#" className="group relative hover:text-green-primary">
        Edit profile
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </a>
      <form action="login" method="post"></form>

      <div className=" text-right">
        <button className=" h-6 w-3/5 rounded-md bg-dark-grayish-blue text-white transition-all hover:bg-green-700">
          Log Out
        </button>
      </div>
    </>
  );
};
export default LoggedView;
