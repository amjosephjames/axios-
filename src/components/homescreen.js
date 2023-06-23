import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Homescreen = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <Container>
      <Wrapper>
        {data.map((props) => {
          <Card key={props._id}>
            <Title>{props.title}</Title>
            <Content>{props.content}</Content>
          </Card>;
        })}
      </Wrapper>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
const Card = styled.div`
  width: 100px;
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  width: 500px;
`;
const Title = styled.div`
  font-size: 25px;
`;
const Content = styled.div`
  font-size: 17px;
  margin-top: 10px;
`;
