import React, { useState } from 'react';
import '../css/UserLogIn.css';


function UserLogIn({ handleSubmit }) {
    const [users, setUsers] = useState({ email: '', password: '' });


    return (
        <div>
            <form className="StreamList" onSubmit={handleSubmit}>
                <div>
                    <div className="container-flexible">
                        <div className="textBox">
                            <label htmlFor="email"> Email: <span style={{ color: "red" }}>*</span> </label>
                            <input type="text" id="email" name="email" className="inputEmailBox" placeholder="E-mail" onChange={(e) => setUsers(e.target.value)} />
                        </div>
                        <div calssName ="textBox">
                            <label htmlFor="password"> Password: <span style={{ color: "red" }}>*</span> </label>
                            <input type="text" id="password" name="password" placeholder="Password" onChange={(e) => setUsers(e.target.value)} />
                        </div>
                        <button className="log-in-btn">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserLogIn;  //  closing tag for UserLogInc
