import React, { useState } from "react";
import Users from "./components/Users";
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

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <Addform addUsers={addUsers} />
        </Col>

        <Col>
          <Users users={users} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
