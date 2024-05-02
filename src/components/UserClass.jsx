import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"Dummy Name",
                location : "Default",
                repoCount: 0
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/itsexp2302")
        const response = await data.json();
        console.log(response)
        this.setState({
            userInfo: response
        })
    }

    render(){
        
        const {name,location} = this.state.userInfo
        return(
        <div className="user-card">
          <h2>Name: {name}</h2>
          <h3>Location : {location}</h3>
          <h4>Contact: anubhavsrivastava.2k23@gmail.com</h4>
          <UserContext.Consumer>
            {({loggedInUser})=> <h3>{loggedInUser}</h3>}
          </UserContext.Consumer>
        </div>
        )
    }
}

export default UserClass;