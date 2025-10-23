import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="h-[70vh]">
      <div>
        <img src={user ? user.photoURL : ""} alt="" />
      </div>
    </div>
  );
};

export default Profile;
