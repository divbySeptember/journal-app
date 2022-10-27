import React, {useState} from 'react'
import userProfile from '../../img/user.png'

function User({userName, userID}) {
    const [user, setUser] = useState('Anthony Johnson')
    
    
  return (
    <div className='userMain'>
        <h4>{user}</h4>
        <div className='userImg'> <img className='userPic' src={userProfile} alt="User" /></div>
    </div>
  )
}



export default User

