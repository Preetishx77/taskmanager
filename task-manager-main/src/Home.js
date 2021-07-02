import React , { Component } from "react";
import fire from "./firebase";
import { Button } from "@material-ui/core";


class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
        <div>
            <Button variant="contained" color="primary" onClick={this.logout} style={{marginTop: "100px", marginLeft: "50px",backgroundColor: "rgba(4, 4, 255, 0.322)"}}>Logout</Button>
        </div>
    )
}
}
export default Home;