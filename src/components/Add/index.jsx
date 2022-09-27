import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Wrap } from "./style";

export const Add = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    title: "",
    descr: "",
    image: "",
  });

  console.log(inputValue);
  return (
    <Container>
      <Wrap>
        <Wrap.Title>Title</Wrap.Title>
        <Wrap.Input type={"text"} />
      </Wrap>
      <Wrap>
        <Wrap.Title>Decription</Wrap.Title>
        <Wrap.Input type={"text"} />
      </Wrap>
      <Wrap>
        <Wrap.Title>Image</Wrap.Title>
        <Wrap.Input type={"text"} />
      </Wrap>
      <Container.Button>Add News</Container.Button>
    </Container>
  );
};

export default Add;
