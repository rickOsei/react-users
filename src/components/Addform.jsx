import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUsers } from "../action";
import { v4 as uuid } from "uuid";
import { db } from "./firebase/config";
// import { addDoc, setDoc, set, collection } from "firebase/firestore";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

// Add a new document with a generated id.

function Addform({ addUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const dispatch = useDispatch();

  const handleClick = async (e) => {
    const items = {
      name: name,
      email: email,
      gen: gen,
      id: new Date().getTime().toLocaleString(),
    };
    // e.preventDefault();
    // dispatch(setUsers(items));

    e.preventDefault();
    try {
      const docRef = await setDoc(doc(db, "users", items.id), items);
    } catch (error) {
      console.log(error);
    }
    // addUsers(items)
    setName("");
    setEmail("");
    setGen("");
  };

  return (
    <>
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
    </>
  );
}

export default Addform;
