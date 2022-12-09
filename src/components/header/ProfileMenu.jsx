import React, { useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import AvatarImage from "@/assets/images/image-avatar.png";

import ProfileHeader from "@/components/header/ProfileHeader";

const ProfileMenu = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const divRef = useClickOutside(() => setIsOpenProfile(false));
  const handleOpenProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };
  return (
    <div ref={divRef}>
      <button className=" min-w-fit" onClick={handleOpenProfile}>
        <img src={AvatarImage} className=" mx-4 ml-auto w-10" alt=""></img>
      </button>
      {isOpenProfile && <ProfileHeader />}
    </div>
  );
};
export default ProfileMenu;
