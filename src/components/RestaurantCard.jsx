import React from "react";
import {CDN_URL} from '../utils/constants'


const ResturantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId, 
        name, 
        avgRating, 
        cuisines, 
        deliveryTime, 
        costForTwo
    } = resData;
    return(
        <div data-testid="resCard" className='bg-gray-100 m-4 p-4 w-[250px] rounded-lg hover:bg-gray-500'>
            <img 
            className='rounded-lg'
            src={ CDN_URL + cloudinaryImageId}
            alt='res-logo'
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
            
        )
    }
}

export default ResturantCard