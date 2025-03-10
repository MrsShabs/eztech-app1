// StreamList - homepage
// component takes in the user's input and displays it on the console.
import React, { useState } from 'react'; 
import '../StreamList.css'
 
class StreamList extends React.Component {
    constructor(props) {
        super(props); 
    this.state = { email:'', password:''};
    }
handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log(this.state)
    };
    
handleChange = (e) => {
    const {name,value} = e.target;
    this.setState({
        [name]: value
    });
};

render(){
    return (
    // form will take the user input 
        <form className="StreamList" onSubmit={this.handleSubmit}>
            <><div>
            <div className="container-flexible">
            <div className="emailTextBox">
                <label htmlFor="email"> Email: <span style={{ color: "red" }}>*</span> </label>
                <input type="text" id="email" name="email" className="inputEmailBox" placeholder="E-mail" onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="password"> Password: <span style={{ color: "red" }}>*</span> </label>
                <input type="text" id="password" name="password" placeholder="Password" onChange={this.handleChange} />
            </div><button type="submit" >Log In</button>
            </div>
            </div>
        </>
        </form>
    
    );
    }
}    // class close 
export default StreamList;
