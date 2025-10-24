import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";

const Profile = () => {
  const { user, updateUser, setUser } = use(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        e.target.reset();
        setUser((result) => ({
          ...result,
          displayName: name,
          photoURL: photo,
        }));
      })
      .catch((error) => {
        console.log(error);
        // setUser(result.user);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f3f3f3]">
      <div className="bg-white shadow-lg w-[550px] h-[350px] flex justify-center p-8 rounded-xl">
        <div className="">
          <img
            className="w-40 h-40 mx-auto rounded-full border-2 border-gray-400 p-2 object-cover"
            src={user ? user.photoURL : ""}
            alt=""
          />
          <div className="text-center mt-4 space-y-1">
            <p className="font-bold"> Name: {user ? user.displayName : ""}</p>
            <p className="font-semibold">Email: {user ? user.email : ""}</p>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              type="submit"
              className="mt-2 text-center btn btn-outline btn-success"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Update Profile
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form onSubmit={handleUpdateProfile}>
                  <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="input"
                      placeholder="Name"
                      defaultValue={user?.displayName}
                    />
                    {/* Photo URL */}
                    <label className="label">Photo URL</label>
                    <input
                      name="photo"
                      type="text"
                      className="input"
                      placeholder="photo URL"
                      defaultValue={user?.photoURL}
                    />
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
