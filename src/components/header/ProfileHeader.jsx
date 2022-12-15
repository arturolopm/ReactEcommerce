import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import LoginForm from "@/components/forms/LoginForm";
import LoggedView from "@/components/header/LoggedView";
const ProfileHeader = () => {
  const { user } = useContext(useGeneralContext);

  return (
    <section className=" absolute top-[125%] right-0 z-10 w-3/5 md:top-full md:left-full md:max-w-md md:-translate-x-full">
      <div className=" mx-4 rounded-md bg-white shadow-md">
        <h4 className="  px-6 py-2 text-lg font-bold  text-green-primary">
          Hello
        </h4>
        <hr />

        <div className=" px-6 pt-2 pb-1">
          <div className="  flex flex-col text-dark-grayish-blue">
            {user ? <LoggedView /> : <LoginForm />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfileHeader;
