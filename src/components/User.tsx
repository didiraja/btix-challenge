import React from "react";

export interface IUser {
  id: number;
  userId: number;
  username: string;
  email: string;
  name: string;
  website: string;
  company: {
    name: string
  };
}

function User(prop: IUser) {

  if (!prop) return null;

  return (
    <div className="user text-sm p-3 mb-3 bg-slate-800 rounded-xl mb-5">
      <div>
        <p className="text-md font-bold inline">{prop.username}</p>
        <p className="text-sm italic inline ml-1">({prop.email})</p>
      </div>

      <div className="ml-3">
        <p>Name: {prop.name}</p>
        <p>Site: {prop.website}</p>
        {prop.company && <p>Company: {prop.company.name}</p>}
      </div>
    </div>
  );
}

export default User;
