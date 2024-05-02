import React, {useState, useEffect, useContext} from "react";
import ResturantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    //useState is used to create local state variables inside the component
    const [listofRestaurants, setListOfRestaurants] = useState([]);
    const [filterRestaurant, setFilteredRestaurant] = useState([]);
    const [ searchText, setSearchText] = useState('');

    const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const response = await data.json();
        //Optional Chaining
        setListOfRestaurants(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const topRestaurantHandler = () => {
        const filteredList = listofRestaurants.filter((res)=> res.info.avgRating > 4.4)
        setListOfRestaurants(filteredList);
    }

    const inputHandler=(event)=>{
        setSearchText(event.target.value)
    }

    const filterRestaurantsHandler = () => {
        const filteredRestaurants = listofRestaurants.filter(
            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filteredRestaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
        return <h1>Looks like you are offline! Please check your internet connection.</h1>
    }

    const {loggedInUser,setUserName} = useContext(UserContext);

    return listofRestaurants.length===0 ? 
    ( 
    <Shimmer/> 
    ) 
    : (
        <div>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input 
                    type="text" 
                    className="border border-solid border-black" 
                    value={searchText} 
                    onChange={inputHandler}
                    data-testid="searchInput"
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={filterRestaurantsHandler}
                    >Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button 
                className="px-4 py-2 bg-grey-100"
                onClick={topRestaurantHandler}
                >Top Rated Restaurants
                </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName</label>
                    <input className="border-black border p-2" 
                    value={loggedInUser}
                    onChange={(event)=>setUserName(event.target.value)}/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {filterRestaurant.map(
                    (restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                        {/** if restaurant is promoted show it as promoted in UI*/
                          restaurant.info.avgRating>4.4 ? 
                          <RestaurantCardPromoted resData={restaurant.info}/> 
                          : 
                          <ResturantCard resData={restaurant.info}/>
                        }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;