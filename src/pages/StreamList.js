import React from 'react'; 
import UserLogIn from '../Components/UserLogIn.js';
import '../css/StreamList.css';

class StreamList extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
          users: JSON.parse(localStorage.getItem('users')) || []
        };
    }

    // Save users to local storage
    saveToLocalStorage = (users) => {
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Prevents the default form submission behavior   
    handleSubmit = (e) => {
        e.preventDefault(); // prevents default form submission behavior
        const { email, password } = e.target; // interested elements from the form
        const user = { email: email.value, password: password.value }; // creating a new user and its properties where email and password will be submitted through the form
        this.setState(          // modifying the state of user list 
            (prevState) => {     
                const updatedUsers = [...prevState.users, user];
                this.saveToLocalStorage(updatedUsers); // Save to local storage
                return { users: updatedUsers };
            }
        );
        e.target.reset(); // resetting the form after submission
    };

    handleDelete = (index) => {
        const users = [...this.state.users];
        users.splice(index, 1);
        this.setState({ users }, () => {
            this.saveToLocalStorage(this.state.users);
        });
    };  

    editUserDetail = (index, email, password) => {
        this.setState({
            users: this.state.users.map((user, i) => {
                if (i === index) {
                    return {
                        ...user,
                        email: email,
                        password: password
                    };
                }
                return user;
            })
        }, () => {
            this.saveToLocalStorage(this.state.users);
        });
    };

    render() {
        return (
            <>
                <div className="home-container-flexible">
                    <UserLogIn user={this.state.users} handleSubmit={this.handleSubmit} />
                </div>
            </>
        ); // return closing tag
    } // render closing tag
} // class closing tag

export default StreamList;