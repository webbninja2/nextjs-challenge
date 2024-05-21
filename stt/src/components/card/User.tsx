import { PersonContext } from "@/contexts/PersonContext";
import React, { useContext } from "react";
import CurrentDateTime from "./CurrentDateTime";
import { UserInfo } from "@/types/person";
import Image from "next/image";

interface UserCardProps {
  user: UserInfo;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const context = useContext(PersonContext);

  if (!context) {
    throw new Error("PersonContext must be used within a PersonContextProvider");
  }

  const { enableLog, toggleLog } = context;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-3 gap-4 p-4 mt-5">
      <div className="col-span-1">
        <div style={{ position: "relative", width: "100%", height: 200 }}>
          <Image
            src={user.profilePictureUrl}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="col-span-2">
        <div className="user-info">
          <p className="font-bold text-black">{user.name}</p>
          <p className="text-gray-500">
            {user.title} <CurrentDateTime />
          </p>
          <p className="text-gray-500">
            <span className="follow">Followers {user.followers}</span>{" "}
            <span className="follow">Following: {user.following}</span>
          </p>
          <p className="text-gray-600">{user.email}</p>
          <br />
          <button className="text-black" onClick={toggleLog}>
            Click to Toggle Logs: {enableLog ? "Enabled" : "Disabled"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
