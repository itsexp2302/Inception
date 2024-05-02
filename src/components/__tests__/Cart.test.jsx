import { screen, render, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../utils/mocks/mockResMenu.json";
import {Provider} from "react-redux";
import appStore from "../../utils/Store/AppStore"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

describe("Cart", ()=>{
    it("Should load restaurant menu component", async()=>{

        await act(async()=>{
            render(
            <Provider store={appStore}>
                <RestaurantMenu/>
                </Provider>
            )
        })


        //Take any accordian of any restaurant menu
        const accordian = screen.getByText("Drinks (5)")
        //click on accordian to expand
        fireEvent.click(accordian);
        //Take all the items present inside the accordian
        const items = screen.getAllByTestId("foodItems")
        //check the no. of items inside it
        expect(items.length).toBe(5)
        //Find Add Buttons in that accordian
        const addbuttons = screen.getAllByRole("button", {name : "Add+"});
        //Click on any one of the buttons
        fireEvent.click(addbuttons[0]);
        
    })
})