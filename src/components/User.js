import React from "react";
import { BarLink } from "../Style";
import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";
import SingleUser from "./SingleUser";

const url = 'https://randomuser.me/api/?results=200'

const User = () => {

  const [data, setData] = React.useState([])
  

    React.useEffect(() => {
    async function getUsers(){
      const res =await fetch(url)
      const data = await res.json()
      setData(data.results)
    };
    getUsers()  
    // fetch(url)
    //   .then((response) => {
    //     if (response.ok) return response.json();
    //     throw new Error('something went wrong while requesting posts');
    //   })
    //   .then((data) => console.log(data.results))
    //   .catch((error) => setError(error.message));
  }, []);

  // if (error) return <h1>{error}</h1>;
  return (
    <>
      <nav>
        <ul>
          <li>
            <BarLink to="info">UserInfo</BarLink>
          </li>
        </ul>
      </nav>

      <Outlet />
      <div>
        {data.length > 0? (
          <>
            <Pagination
            data = {data}
            RenderComponent = {SingleUser}
            pageLimit = {5}
            dataLimit = {5}>
            </Pagination>
          </>
        ): (<h1>Waiting for users to load...</h1>)}
      </div>
    </>
  );
};

export default User;
