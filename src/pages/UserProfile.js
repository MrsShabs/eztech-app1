import React, { Component } from 'react';

import '../css/UserProfile.css';

class UserProfile extends Component {
        constructor(props) {
          super(props); 
          this.state = { 
            name:'', 
            birthday:'', 
            email:'',
            password:'', 
            errors:{}};
          } // closing UserProfile Component
    
    //Load user data from local storage 
    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            this.setState({
                name: userData.Data.name || '',
                birthday: userData.Data.birthday || '',
                email: userData.Data.email || '',
                password: userData.password || ''
            });
        }
    } // closing tag for componenDidMount
    
    // methods for handling input and form submission
    handleSubmit= (e)=>{
        e.preventDefault();
        const errorObject =  window.ValidateForm(this.state.email);
        if (Object.keys(errorObject).length > 0){
            this.setState({errors:errorObject});
        }
        else {
            // clear errors and save user data
            this.setState({errors: {} });
            this.props.addUser(this.state);
            // save updated user data to local storage
            localStorage.setItem('user', JSON.stringify(this.state));
            this.setState({
                name:'', 
                birthday:'', 
                email:'', 
                password:'' 
            });
        }
    }; // closing tag for handleSubmit
    
    handleChange= (e)=>{
        const {name,value} = e.target;
        this.setState({
            [name]: value
        });
    };// closing tag for handleChange
    
render() {
    return (
        <>
            <div className="profile-container">
                <div className="profile-image">
                    <div className="d-flex justify-content-left">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="profile"
                            width="400"
                            height="400"
                        />
                        <div className="d-flex justify-content-left">
                            <form className="userProfileForm" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        Name: <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />

                                    <label htmlFor="birthday">
                                        Birthday: <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="birthday"
                                        name="birthday"
                                        placeholder="Birthday"
                                        value={this.state.birthday}
                                        onChange={this.handleChange}
                                    />

                                    <label htmlFor="email">
                                        Email: <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    {this.state.errors.email && (
                                        <p style={{ color: 'red' }}>{this.state.errors.email}</p>
                                    )}

                                    <label htmlFor="password">
                                        Password: <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="btn-profile">
                                        <button type="submit" className="savebt">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ); //closing tag for return 
}// closing tag for render 


} // closing tag for UserProfile
export default UserProfile;