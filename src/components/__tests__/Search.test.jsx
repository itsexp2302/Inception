import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../../utils/mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

describe("Search Functionality", ()=>{
    it("Should render Body component", async()=>{
        
        await act(async()=> render(
         <BrowserRouter><Body/></BrowserRouter>   
        ))

        const searchbtn = screen.getByRole("button", {name: "Search"});

        const searchInput = screen.getByTestId("searchInput");

        fireEvent.change(searchInput, {target: {value: "burger"}})
        fireEvent.click(searchbtn)

        //screen should render cards with burger named restaurant

        const cards = screen.getAllByTestId("resCard")
        expect(cards.length).toBe(2)

        //expect(search).toBeInTheDocument();

    })

    
})