import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function EditUser({ user, handleClose, editUser }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);

  const handleClick = (e) => {
    const items = {
      name: name,
      email: email,
      gen: gen,
      id: Math.floor(Math.random() * 1000),
    };
    e.preventDefault();
    editUser(items, user.id);
    handleClose();
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Label>Gen</Form.Label>
        <Form.Control
          type="number"
          value={gen}
          onChange={(e) => {
            setGen(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>
  );
}

export default EditUser;
