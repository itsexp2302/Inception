import React , {useEffect, useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState('Login')

    const BtnHandler = () => {
        btnNameReact ==="Login"?setBtnNameReact('Logout') : setBtnNameReact("Login")
    }
    //if no dependecy array => useEffect always called on every render of component.
    //if empty dependency [] => useEffect called on inital render ( just once)
    //if dependency array => [xyz] => useEffect called whenever xyz changes.
    useEffect(()=>{console.log("useEffect Called")},[])

    const onlineStatus = useOnlineStatus();

    const { loggedInUser} = useContext(UserContext);

    //Selector
    const cartItems = useSelector((store)=> store.cart.items);

    return (
        <div className='flex justify-between bg-pink-100 shadow-lg  '>
            <div className='logo-container'>
                <img 
                className='w-28' 
                src={LOGO_URL}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus===true ? "✅" : "❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="about">About Us</Link></li>
                    <li className="px-4"><Link to="contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart - ({cartItems.length} items) </Link></li>
                    <li className="px-4">User : {loggedInUser}</li>
                    <button className="login" onClick={BtnHandler}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;