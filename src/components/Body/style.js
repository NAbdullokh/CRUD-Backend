import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 50px auto;
`;

export const Input = styled.input`
  width: 70%;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #212121;
  border-radius: 5px;
  padding: 0 15px 0 15px;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid;
  margin-bottom: 50px;
  padding: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Button = styled.div`
  width: 150px;
  height: 50px;
  background-color: red;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: white;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;
