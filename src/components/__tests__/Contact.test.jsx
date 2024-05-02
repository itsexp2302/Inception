import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";

describe("Contact Us", ()=>{
    it("Should load contact us component",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading")
        const button = screen.getByRole("button")
        const text = screen.getByText("Submit")
        const inputBox = screen.getByPlaceholderText("name")
    
        //Assertion
        expect(heading).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(inputBox).toBeInTheDocument();
    });
    
    it("Should Load 2 Input Boxes on the Contact Component", ()=>{
        render(<Contact/>)
    
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).toBe(2);
    })
})
