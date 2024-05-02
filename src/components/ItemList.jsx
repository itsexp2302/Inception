import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/Slices/cartSlice"

const ItemList = ({items}) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item))
  }
    return(
        <div>
            <ul>
                {items.map((item)=>
                <div 
                data-testid="foodItems"
                key={item?.card?.info?.id} 
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                      <div className="py-2">
                        <span className="font-bold">{item.card.info.name} </span>
                        <span className="font-bold"> - ₹ {item.card.info.price? 
                        item.card.info.price/100 : 
                        item.card.info.defaultPrice/100}
                        </span>
                      </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                          <button 
                          className="px-2 py-1 mx-1 text-xs rounded-lg bg-black text-white shadow-lg absolute"
                          onClick={() => handleAddItem(item)}>
                            Add+
                          </button>
                        </div>
                      <img src={CDN_URL+item.card.info.imageId} className="w-full"></img>
                    </div>
                    </div>
            )}
            </ul>
        </div>
    )
}

export default ItemList;