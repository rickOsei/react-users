import React from "react";
import Users from "./Users";
import { useSelector } from "react-redux";
import { selectUsers } from "../selectors";
import { connect } from "react-redux";

function AllUsers({ users, deleteItem, editUser }) {
  const storeUsers = useSelector((state) => state.storeUsers);
  const modal = useSelector((state) => state.modal);

  return (
    <>
      {storeUsers.map((user, index) => {
        return (
          <Users
            key={index}
            deleteItem={deleteItem}
            editUser={editUser}
            user={user}
          />
        );
      })}
    </>
  );
}

// const mapState = (state) => {
//   console.log(state);
//   return state.storeUsers;
// };
//export default connect(mapState)(AllUsers);
export default AllUsers;
