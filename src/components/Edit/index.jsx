import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Wrap } from "../Add/style";

export const Edit = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [inputValue, setInputValue] = useState({
    title: "",
    descr: "",
    image: "",
  });

  const getValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(
        `https://travels-book.herokuapp.com/api/travel/${id.replace(":", "")}`
      )
      .then((res) =>
        setInputValue({
          title: res?.data?.travel?.title,
          descr: res?.data?.travel?.descr,
          image: res?.data?.travel?.image,
        })
      );
  }, []);

  const getUpdate = () => {
    axios.put(
      `https://travels-book.herokuapp.com/api/travel/${id.replace(":", "")}`,
      {
        title: inputValue.title,
        descr: inputValue.descr,
        image: inputValue.image,
      }
    );
    navigate("/");
  };

  return (
    <Container>
      <Wrap>
        <Wrap.Title>Title</Wrap.Title>
        <Wrap.Input
          value={inputValue.title}
          name="title"
          onChange={getValue}
          type={"text"}
        />
      </Wrap>
      <Wrap>
        <Wrap.Title>Decription</Wrap.Title>
        <Wrap.Input
          value={inputValue.descr}
          name="descr"
          onChange={getValue}
          type={"text"}
        />
      </Wrap>
      <Wrap>
        <Wrap.Title>Image</Wrap.Title>
        <Wrap.Input
          value={inputValue.image}
          name="image"
          onChange={getValue}
          type={"text"}
        />
      </Wrap>
      <Container.Button onClick={getUpdate}>Update News</Container.Button>
    </Container>
  );
};

export default Edit;
