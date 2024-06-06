import React from 'react'
// import Userimage from '../Image/image';

import Buttons from '../buttons';
import Footer from '../footer';



const Card = (props) => {

  const user =props.post;
  return (
    <div className='user_card'>
    <img src={user.profile} className="user_image" />

    <div className='user_info'>
        <h1 className='user_name'>{user.name}</h1>
        <h3>{user.city}</h3>
       <p>{user.description}</p>        
    </div>
    
    <Buttons />
   <Footer/>

    
      
    </div>
  )
}

export default Card;
