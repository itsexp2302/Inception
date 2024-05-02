import { useState, useEffect } from "react";
const User = () => {
    const [myData, setMyData] = useState({
        name:"Vasooli Bhai",
        location:"Panwel"
    });

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(
            "https://api.github.com/users/itsexp2302"
        );
        const response = await data.json();
        setMyData(response)
    }
    return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <h2>Name: {myData.name}</h2>
        <h3>Location : {myData.location}</h3>
        <h4>Contact: anubhavsrivastava.2k23@gmail.com</h4>
    </div>
    )
}

export default User;