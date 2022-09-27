import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  margin: 10px auto;
`;

export const Wrap = styled.div`
  margin-bottom: 30px;
`;

Wrap.Title = styled.div`
  margin-bottom: 8px;
`;

Wrap.Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
`;

Container.Button = styled.button`
  color: white;
  background-color: #0d6efd;
  border-color: #0d6efd;
  border: none;
  outline: none;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 0.25rem;
  padding: 10px 25px;
  :active {
    transform: scale(0.98);
  }
`;
