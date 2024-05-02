import Header from "../Header";
import { screen,render, fireEvent } from "@testing-library/react";
import {Provider} from "react-redux";
import appStore from "../../utils/Store/AppStore";
import { BrowserRouter } from "react-router-dom";
import { execPath } from "process";
import "@testing-library/jest-dom";

describe("Header Component", ()=>{
    it("Should Header Component with a login button",()=>{
        render(
            <BrowserRouter>
             <Provider store={appStore}>
                 <Header/>
             </Provider>
            </BrowserRouter>
        );

        const button = screen.getByRole("button", {name: "Login"});
        expect(button).toBeInTheDocument()


    })

    it("Should render Cart with Inital Items as 0" , ()=>{
        render(
            <BrowserRouter>
             <Provider store={appStore}>
                 <Header/>
             </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText("Cart - (0 items)")
        expect(cartItems).toBeInTheDocument();
    })

    it("Should render Cart " , ()=>{
        render(
            <BrowserRouter>
             <Provider store={appStore}>
                 <Header/>
             </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText(/Cart/) //regex
        expect(cartItems).toBeInTheDocument();
    })

    it("Should change Login Button to Logout on Click" , ()=>{

        render(
            <BrowserRouter>
             <Provider store={appStore}>
                 <Header/>
             </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", {name: "Login"})

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", {name: "Logout"})

        expect(logoutButton).toBeInTheDocument();

    })

    it("Should render User " , ()=>{
        render(
            <BrowserRouter>
             <Provider store={appStore}>
                 <Header/>
             </Provider>
            </BrowserRouter>
        );

        const user = screen.getByText(/User/) //regex
        expect(user).toBeInTheDocument();
    })

    it("Should render About Us" , ()=>{
        render(
            <BrowserRouter>
             <Provider store={appStore}>
                 <Header/>
             </Provider>
            </BrowserRouter>
        );

        const aboutUs = screen.getByText("About Us");
        expect(aboutUs).toBeInTheDocument();
    })
})