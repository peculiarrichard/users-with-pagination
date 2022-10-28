import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 4rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem;
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  width: 5rem;
  height: 2.5rem;
  color: black;
  font-weight: 800;
  font-size: 1rem;
  margin-top: 1rem;
`;
export const BarLink = styled(Link)`
  background: white;
  width: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
  padding: 1rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
`;
export const MainContainer = styled.div`
  display: grid;
  grid-template-column: auto;
`;
export const UserContainer = styled.div`
  width: 30rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: white;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 157, 165, 0.6) 0px 8px 24px;

  @media (max-width: 425px) {
    width: 20rem;
    height: 23rem;
  }

  img {
    height: 6rem;
    background: center/cover no-repeat;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .profile-img {
    width: 6rem;
    border-radius: 3rem;
    align-self: center;
    margin-top: -2.2rem;
    border: 4px solid white;
  }

  h2 {
    font-size: 1rem;
    align-self: center;
    color: #D3D32;
  }
  .email {
    align-self: center;
    padding-top: 0.5rem;
    font-size: 0.8rem;
    font-style: italic;
    color: grey;
  }
  .gender {
    align-self: center;
    margin: 0.5rem 1rem;
    background: #bace51;
    padding: 0.6rem;
    border-radius: 15px;
    text-transform: capitalize;
    font-weight: 600;
    width: 6rem;
    text-align: center;
  }
  .span {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0.5rem;
    gap: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;
