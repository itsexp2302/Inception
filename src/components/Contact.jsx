import React from "react";
const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input 
                type="text" 
                className="border-black p-2 m-2"
                placeholder="name"/>

                <input type="text"
                placeholder="message" 
                className="border-black p-2 m-2"
                />
                
                <button className="border-black p-2 m-2 bg-gray-100 rounded-r-lg">Submit</button>
            </form>
        </div>
    )
};

export default Contact;