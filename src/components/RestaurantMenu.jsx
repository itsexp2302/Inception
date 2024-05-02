import React, {useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom';
import useRestaurantMenu from "../utils/Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] =  useState(0)
    console.log(resId)

    if (resInfo===null)  return <Shimmer/>;

    const {name,cuisine,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card.card;

    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> 
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="text-lg font-bold">{cuisine} - {costForTwoMessage}</h2>
            {categories.map((category,index)=> 
            //Controlled Component
            <RestaurantCategory 
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index=== showIndex ? true:false}
            setShowIndex={()=>setShowIndex(index)}
            />)}
        </div>
    )
}

export default RestaurantMenu;