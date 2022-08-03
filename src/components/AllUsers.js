import React from "react";
import Users from "./Users";

function AllUsers({ users, deleteItem, editUser }) {
  return (
    <>
      {users.map((user, index) => {
        return (
          <Users deleteItem={deleteItem} editUser={editUser} user={user} />
        );
      })}
    </>
  );
}

export default AllUsers;
