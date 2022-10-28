import React from 'react';
import {Route, Routes} from 'react-router-dom';
import User from './components/User';
import NotFound from './components/NotFound'
import UserInfo from './components/UserInfo';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css'
import { NavbarContainer, NavbarLinkContainer, NavbarLink } from './Style';



const App = () => {
  return (
    <>
  <ErrorBoundary>
    <NavbarContainer className='nav-bar'>
        <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/users">Users</NavbarLink>
        </NavbarLinkContainer>
    </NavbarContainer>
    <Routes>
        <Route index element ={<Home></Home>}></Route>
        <Route path="home" element={<Home />} />
        <Route path='users' element ={<User></User>}>
            <Route exact path='info' element ={<UserInfo></UserInfo>}></Route>
        </Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
    </Routes>
  </ErrorBoundary>
    </>
  )
}

export default App