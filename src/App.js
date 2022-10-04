import React, { useState, useEffect } from "react";
import AllUsers from "./components/AllUsers";
import Addform from "./components/Addform";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "./components/firebase/config";
import { setUsers } from "./action";
import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const newUsers = async () => {
      const q = query(collection(db, "users"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newUsersArr = [];
        querySnapshot.forEach((doc) => {
          newUsersArr.push(doc.data());
        });
        console.log(newUsersArr);
        dispatch(setUsers(newUsersArr));
      });
    };

    newUsers();
  }, []);
  // const [users, setUsers] = useState([]);

  // const addUsers = (user) => {
  //   setUsers((prev) => {
  //     return [...prev, user];
  //   });
  // };

  // const editUser = (user, id) => {
  //   setUsers((prev) =>
  //     prev.map((item) => {
  //       if (item.id === id) return user;
  //       return item;
  //     })
  //   );
  // };

  // const deleteItem = (id) => {
  //   setUsers((prev) => prev.filter((item) => item.id !== id));
  // };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <Addform />
        </Col>

        <Col>
          <AllUsers />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
