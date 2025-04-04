import React, { useState, useCallback } from 'react';
import UserLogIn from '../Components/UserLogIn';

function Splash() {
    const [users, setUsers] = useState([]);

    const handleSubmit = useCallback((userData) => {
        // Logic to handle form submission
        setUsers([...users, userData]);
    }, [users]);

    return (
        <>
            <div className="home-container-flexible">
                <UserLogIn users={users} handleSubmit={handleSubmit} />
            </div>
        </>
    );
}

export default Splash;