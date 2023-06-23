import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createData = async () => {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", title, content)
      .then((res) => {
        console.log(res);
      });
    navigate("/");
  };

  return (
    <Container>
      <Card>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button onClick={createData}>Submit</Button>
      </Card>
    </Container>
  );
};
export default Create;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  input {
    width: 90%;
    margin-left: 10px;
    height: 50px;
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
    ::placeholder {
      color: black;
    }
  }
`;
const Button = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 16px;
  border-radius: 10px;
`;
