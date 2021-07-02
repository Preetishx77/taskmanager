import React , { Component } from "react";
import fire from "./firebase.js";
import { TextField } from "@material-ui/core";
import { Button,Grid } from "@material-ui/core";
import logo from './img1.png'

class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        alert("Incorrect Password")
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(
        <div className="container mt-5">
            <form style={{display: "grid",
                placeItems: "center",
                 margin: ".5rem 0 .5rem 0"}}>

                <Grid container spacing={3} style={{backgroundColor: "rgb(170, 181, 255)",alignItems: "center",marginLeft: "5%"}}>
                <Grid classname="row">
                <Grid className="col">
                    <h1>Welcome to Task Manager</h1>
                
                <Grid item className="mx-3 my-5">
                 <TextField label="Email" variant="outlined" 
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                /></Grid>
                <Grid item  className="mx-3 my-5">
                <TextField label="Password" variant="outlined" 
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
                </Grid>
                <Grid item>
                <Button  onClick={this.login} variant="contained" color="primary" style={{marginBottom: "20px"}}>Login</Button></Grid>
                <Grid item>
                <Button onClick={this.signup} variant="contained" color="primary">Signup</Button></Grid></Grid><Grid className="col">
                <img src={logo} alt="ok" style={{position: "absolute", marginLeft: "70%", marginTop:"-50%"}}/></Grid></Grid>
                
           
            
                </Grid>
                </form>
               

        </div>
    )
}
}
export default Login;