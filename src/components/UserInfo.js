import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  margin: auto;
  height: 12rem;
  width: 40rem;
  background: white;
  border-radius: 20px;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 425px) {
    width: 20rem;

    h1 {
      font-size: 1rem;
    }
  }

  h1 {
    color: black;
    padding: 1rem;
    margin: 1.5rem;
    font-size: 2rem;
    font-weight: 800;
    text-transform: capitalize;
    text-align: center;
  }
`;

const UserInfo = () => {
  return (
    <Container>
      <h1>All user Info can be seen on the cards below</h1>
    </Container>
  );
};

export default UserInfo;
