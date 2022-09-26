import axios from "axios";
import React, { useEffect, useState } from "react";
import { product } from "../../data";
import { BtnWrapper, Button, Card, Container, Input } from "./style";

const Body = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const BackendMalumot = () => {
    axios
      .get("https://travels-book.herokuapp.com/api/travel")
      .then((res) => setData(res?.data?.travels));
  };

  useEffect(() => {
    BackendMalumot();
  }, []);

  const getDelete = (id) => {
    axios.delete(`https://travels-book.herokuapp.com/api/travel/${id}`);
    BackendMalumot();
  };

  const getSearch = () => {
    if (text !== "") {
      axios
        .get(`https://travels-book.herokuapp.com/api/travel/search/${text}`)
        .then((res) => setData(res?.data?.travel));
    } else {
      BackendMalumot();
    }
  };

  console.log(text);

  return (
    <Container>
      <BtnWrapper>
        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={getSearch}>Search</Button>
      </BtnWrapper>
      {product.map((value) => {
        return (
          <Card>
            <img src={value.image} alt="" />
            <h3>{value.title}</h3>
            <h5>{value.desc}</h5>
            <BtnWrapper>
              <Button>Update</Button>
              <Button onClick={() => getDelete(value._id)}>Delete</Button>
            </BtnWrapper>
          </Card>
        );
      })}
    </Container>
  );
};

export default Body;
