import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { editUser } from "../action";
import { useDispatch } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/config";

function EditUser({ user, handleClose }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);
  const dispatch = useDispatch();

  // const editUser = (id, user) => {
  //   return { type: "EDIT_USER", payload: { id, user } };
  // };

  const handleClick = async (e) => {
    const items = {
      name: name,
      email: email,
      gen: gen,
      id: new Date().getTime().toLocaleString(),
    };
    console.log(user);

    // editUser(items, user.id);

    // dispatch({ type: "EDIT_USER", payload: { id: user.id, user: items } });
    // dispatch(editUser(user.id, items));
    const docRef = doc(db, "users", user.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(docRef, items);
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
