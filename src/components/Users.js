import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import EditUser from "./EditUser";
import { useDispatch } from "react-redux";
import { deleteUser } from "../action";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase/config";

function Users({ users, deleteItem, editUser, user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    // dispatch(deleteUser(user.id));
    // console.log(user);
    await deleteDoc(doc(db, "users", user.id));
  };

  return (
    <>
      <div key={user.id}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <EditUser
              user={user}
              handleClose={handleClose}
              editUser={editUser}
            />
          </Modal.Body>
        </Modal>

        {/* Outputted card begins */}
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Name: {user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Email: {user.email}
            </Card.Subtitle>
            <Card.Text>Gen: {user.gen}</Card.Text>
            <Button variant="primary" onClick={handleDelete}>
              Delete
            </Button>{" "}
            <Button variant="primary" onClick={handleShow}>
              Update
            </Button>{" "}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Users;
