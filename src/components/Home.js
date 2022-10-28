import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  margin: auto;
  height: 25rem;
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
    width: 18rem;
    height: 28rem;
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

  p {
    color: black;
    padding: 1rem;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.8rem;
  }
`;

const Home = () => {
  return (
    <Container>
      <h1>Hi there! Welcome to my app</h1>
      <p>
        I am excited to have you explore my first project on Pagination and
        React Router.
        <br></br>Feel free to check out my early users.
        <br></br>Just click on the User tab on the Nav bar
      </p>
    </Container>
  );
};

export default Home;
