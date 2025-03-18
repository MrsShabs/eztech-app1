import React, { Component } from 'react';
import '../UserProfile.css';

class UserProfile extends Component{
        constructor(props) {
          super(props); 
          this.state = {name:'', birthday:'', email:'', password:'', errors:{}};
          }
    
    // methods for handling input and form submission
    handleSubmit= (e)=>{
        e.preventDefault();
        const errorObject =  window.ValidateForm(this.state.email);
        if (Object.keys(errorObject).length > 0){
            this.setState({errors:errorObject});
        }
        else {
            // clear
            this.setState({errors:{}});
            this.props.addUser(this.state);
            this.setState({
                name:'', birthday:'', email:'', password:'' 
            });
        }
    };
    
    handleChange= (e)=>{
        const {name,value} = e.target;
        this.setState({
            [name]: value
        });
    };
render () {   
    return (
        <>
            <h1>Profile</h1>
            
            <form className="userProfileForm" onSubmit={this.handleSubmit}>
                <div className="form-group">   
                <label htmlFor="name"> Name: <span style={{ color: "red" }}>*</span> </label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="bithday"> Birthday: <span style={{ color: "red" }}>*</span> </label>
                    <input type="text" className="form-control" id="birthday" name="birthday" placeholder="Birthday" />
                </div>
                <div className="form-group">
                    <label htmlFor="email"> Email: <span style={{ color: "red" }}>*</span> </label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="Email" />
                    {this.state.errors.email && <p style={{ color: "red" }}>{this.state.errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password: <span style={{ color: "red" }}>*</span> </label>
                    <input type="text" className="form-control" id="password" name="password" placeholder="Password" />
                </div>
                <div className="row">
                <div className="col-4">
                    <button type="submit" className="savebt"> Save </button>
                </div>
                </div>
            </form> 
        </>
        )

    } // render closing tag

} //class closing tag
  
export default UserProfile;