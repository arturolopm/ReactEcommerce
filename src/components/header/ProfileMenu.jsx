import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useClickOutside from "@/hooks/useClickOutside";
import { RxAvatar } from "react-icons/rx";
// import AvatarImage from "@/assets/images/image-avatar.png";

import ProfileHeader from "@/components/header/ProfileHeader";

const ProfileMenu = () => {
  const params = useParams();
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const divRef = useClickOutside(() => setIsOpenProfile(false));

  const handleOpenProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };
  useEffect(() => {
    setIsOpenProfile(false);
  }, [params]);
  return (
    <div ref={divRef}>
      <button className=" min-w-fit" onClick={handleOpenProfile}>
        <RxAvatar className=" mx-4 ml-auto text-2xl text-green-700" />

        {/* <img src={AvatarImage} className=" mx-4 ml-auto w-10" alt=""></img> */}
      </button>
      {isOpenProfile && <ProfileHeader />}
    </div>
  );
};
export default ProfileMenu;
