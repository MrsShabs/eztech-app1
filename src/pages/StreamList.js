import React from 'react'; 
import UserDetailC from './UserDetailC.js';
import UserLogInC from './UserLogInC.js';
import '../StreamList.css';

class StreamList extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
          users: []
        };
    }

    // Prevents the default form submission behavior   
    handleSubmit = (e) => {
        e.preventDefault(); // prevents default form submission behavior
        const { email, password } = e.target; // interested elements from the form
        const user = { email: email.value, password: password.value }; // creating a new user and its properties where email and password will be submitted through the form
        this.setState(          // modifying the state of user list 
            (prevState) => ({     
              users: [...prevState.users, user] // forcing append to the users array right after what is in the list already 
            })
        );
        e.target.reset(); // resetting the form after submission
    };

    handleDelete = (index) => {
        const users = [...this.state.users];
        users.splice(index, 1);
        this.setState({ users });
        console.log(this.state.users);
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
        });
        console.log(this.state.users);
    };

    render() {
        return (
            <>
                <div>
                    <UserLogInC user={this.state.users} handleSubmit={this.handleSubmit} />
                </div>
                <div>
                    <UserDetailC users={this.state.users} deleteCallBack={this.handleDelete} editUserDetail={this.editUserDetail} />
                </div>
            </>
        ); // return closing tag
    } // render closing tag
} // class closing tag

export default StreamList;