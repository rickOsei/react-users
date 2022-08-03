import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import EditUser from "./EditUser";

function Users({ users, deleteItem, editUser, user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* {users.map((user, index) => { */}

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
            <Button variant="primary" onClick={() => deleteItem(user.id)}>
              Delete
            </Button>{" "}
            <Button variant="primary" onClick={handleShow}>
              Update
            </Button>{" "}
          </Card.Body>
        </Card>
      </div>

      {/* })} */}
    </>
  );
}

export default Users;
