import React from 'react';
import { Link ,useNavigate } from "react-router-dom";
const Nav = () => {
    const auth = localStorage.getItem('user');
    const Navigate=useNavigate();
    const logout=()=>{
        //console.log("apple")
        localStorage.clear();
        Navigate('/signup')
    }
    return (
        <div>
            <img
            alt='logo'
            className='logo'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlqFmof7iYObAZxCLgKzGUoubtC9OIq0CXw&usqp=CAU'/>
          { auth ?  <ul className='nav-ul'>
                <li><Link to='/'>Product</Link></li>
                <li><Link to='/add'>AddProduct</Link></li>
                <li><Link to='/update'>UpdateProduct</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logout} to='/signup'>Logout({JSON.parse(auth).name})</Link></li>

                   
            </ul>
            :
            <ul className='nav-ul nav-right' >
               <li> <Link to='/signup'>SignUp</Link></li>
                   <li><Link to='/login'>Login</Link></li>  
            </ul>
}
        </div>
    )
}
export default Nav;