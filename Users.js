import React from 'react'
//import Useritem from './components/Useritem'
import Useritems from './Useritem';

const Users=(props)=>{
 
        return(
            <div style={userStyle}>
            
                {props.users.map(User=>(
                    <Useritems key={User.id} User={User}/>
                    ))}
            </div>
        
        )
    }

    const userStyle=
    {
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gridGap:'lrem'
    }
export default Users;