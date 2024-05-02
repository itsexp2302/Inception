import ResturantCard, { withPromotedLabel } from "../RestaurantCard";
import { screen , render } from "@testing-library/react";
import MOCK_DATA from "../../utils/mocks/resCardMock.json"
import "@testing-library/jest-dom";

describe("Restaurant Card", ()=>{
    it("Should render Restaurant Card with props Data", ()=>{
        
        render(<ResturantCard resData={MOCK_DATA}/>)

        const name = screen.getByText("Pizza Hut");
        expect(name).toBeInTheDocument();
    })

    it("Should render Restaurant Card with Promoted Label", ()=>{
        
        const RestaurantCardPromoted = withPromotedLabel(ResturantCard);
        render(<RestaurantCardPromoted resData={MOCK_DATA}/>)

        const promoted = screen.getByText("Promoted");
        expect(promoted).toBeInTheDocument();
    })
})