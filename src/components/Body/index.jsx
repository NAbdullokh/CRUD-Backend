import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { product } from "../../data";
import { ButtonNotice, Card, Container, Flexing } from "./style";

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
      <Flexing>
        <Container.Input
          onChange={(e) => setText(e.target.value)}
          type={"text"}
          placeholder="Search"
        />
        <Container.Btn onClick={getSearch}>Search</Container.Btn>
      </Flexing>

      {data.map((value) => {
        return (
          <Card key={value?._id}>
            <Card.Img src={value?.image} alt="imgs" />
            <Card.Title>{value?.title}</Card.Title>
            <Card.Descr>{value?.descr}</Card.Descr>
            <Flexing>
              <Link to={`/edit/:${value._id}`}>
                <ButtonNotice colored="blue">Update</ButtonNotice>
              </Link>
              <ButtonNotice onClick={() => getDelete(value?._id)} colored="red">
                Delete
              </ButtonNotice>
            </Flexing>
          </Card>
        );
      })}
    </Container>
  );
};

export default Body;
