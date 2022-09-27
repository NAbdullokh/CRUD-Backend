import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  height: 100vh;
  margin: 10px auto;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

Container.Input = styled.input`
  width: 200px;
  height: 38px;
  border: 1px solid gray;
  outline: none;
  border-radius: 4px;
  padding: 0px 10px;
`;

Container.Btn = styled.button`
  width: 100px;
  height: 38px;
  margin-left: 20px;
  border: 1px solid green;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    background-color: green;
    color: white;
  }
`;

export const Card = styled.div`
  width: 100%;
  background-color: white;
  margin: 20px 0px;
  height: 700px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125); ;
`;

Card.Img = styled.img`
  height: 70%;
  width: 100%;
  border-radius: 4px;
`;

Card.Title = styled.div`
  font-size: 25px;
  margin-left: 10px;
`;

Card.Descr = styled.div`
  font-size: 18px;
  margin: 10px 10px;
`;

const getColor = ({ colored }) => {
  switch (colored) {
    case "blue":
      return "#0d6efd";
    case "yellow":
      return "#ffc107";
    case "red":
      return "#dc3545";
  }
};

export const ButtonNotice = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin: 0px 10px;
  background-color: ${getColor};
  color: ${({ textBlack }) => (textBlack ? "black" : "white")};
  padding: 10px 25px;
  font-size: 20px;
  :active {
    transform: scale(0.98);
  }
`;
