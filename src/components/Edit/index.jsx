import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Wrap } from "../Add/style";

export const Edit = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    title: "",
    descr: "",
    image: "",
  });

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

export default Edit;
