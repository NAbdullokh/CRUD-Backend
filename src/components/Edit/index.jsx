import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Wrap } from "./style";

export const Edit = () => {
  const { id } = useParams();
  console.log(inputValue);
  return (
    <Container>
      <Wrap>
        <Wrap.Title>Title</Wrap.Title>
        <Wrap.Input name="title" onChange={getValues} type={"text"} />
      </Wrap>
      <Wrap>
        <Wrap.Title>Decription</Wrap.Title>
        <Wrap.Input name="descr" onChange={getValues} type={"text"} />
      </Wrap>
      <Wrap>
        <Wrap.Title>Image</Wrap.Title>
        <Wrap.Input name="image" onChange={getValues} type={"text"} />
      </Wrap>
      <Container.Button>Add News</Container.Button>
    </Container>
  );
};

export default Edit;
