import React, { useState } from "react";
import AllUsers from "./components/AllUsers";
import Addform from "./components/Addform";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUsers = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };

  const editUser = (user, id) => {
    setUsers((prev) =>
      prev.map((item) => {
        if (item.id === id) return user;
        return item;
      })
    );
  };

  const deleteItem = (id) => {
    setUsers((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <Addform addUsers={addUsers} />
        </Col>

        <Col>
          <AllUsers users={users} deleteItem={deleteItem} editUser={editUser} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
