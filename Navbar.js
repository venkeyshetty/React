import React from 'react'



const Navbar=(props)=>{

        const{className,name}=props;
        return(
            <nav className='navbar bg-primary'>
               
                <h1> <i className={className}></i>{name}</h1>
            </nav>
        )
    }

export default Navbar;