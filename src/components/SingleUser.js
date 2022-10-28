import React from 'react';
import { UserContainer, MainContainer } from '../Style';
import bgi from '../images/bgi.jpg'


const SingleUser = (props) => {
  return (
    <MainContainer>
        <UserContainer>
            <img src={bgi} alt = 'bgi'></img>
            <img src={props.data.picture.large} alt ='profile' className='profile-img'></img>
            <h2>{props.data.name.first}</h2><span></span><h2>{props.data.name.last}</h2>
            <p className='email'>{props.data.email}</p>
            <p className='gender'>{props.data.gender}</p>
            <div className='span'>
                <p>Location <br></br>{props.data.location.state}</p>
                <p>Phone Number <br></br>{props.data.phone}</p>
                <p>Age <br></br>{props.data.dob.age}</p>
            </div>
        </UserContainer>
    </MainContainer>
  )
}

export default SingleUser