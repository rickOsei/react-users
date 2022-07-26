import React from "react";
import { Card } from "react-bootstrap";

function Users({ users }) {
  return (
    <>
      {users.map((user, index) => {
        return (
          <Card style={{ width: "18rem" }}>
            5
            <Card.Body>
              <Card.Title>Name: {user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Email: {user.email}
              </Card.Subtitle>
              <Card.Text>Gen: {user.gen}</Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Users;
