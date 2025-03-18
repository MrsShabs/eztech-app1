import React, { useState } from 'react';

function UserLogInC({ handleSubmit }) {
    const [users, setUsers] = useState({ email: '', password: '' });


    return (
        <div>
            <form className="StreamList" onSubmit={handleSubmit}>
                <div>
                    <div className="container-flexible">
                        <div className="emailTextBox">
                            <label htmlFor="email"> Email: <span style={{ color: "red" }}>*</span> </label>
                            <input type="text" id="email" name="email" className="inputEmailBox" placeholder="E-mail" onChange={(e) => setUsers(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password"> Password: <span style={{ color: "red" }}>*</span> </label>
                            <input type="text" id="password" name="password" placeholder="Password" onChange={(e) => setUsers(e.target.value)} />
                        </div>
                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserLogInC;  //  closing tag for UserLogInc
