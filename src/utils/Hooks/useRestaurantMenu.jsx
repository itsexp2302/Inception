import { useEffect, useState } from "react";
import { MENU_API_URL } from "../constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(MENU_API_URL+resId);
        const response = await data.json();
        setResInfo(response.data)

    }
    return resInfo;
}

export default useRestaurantMenu;