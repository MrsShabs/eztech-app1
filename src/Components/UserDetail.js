import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash  } from '@fortawesome/free-solid-svg-icons';
import '../css/UserDetail.css';

function UserDetail({ users, deleteCallBack, editUserDetail }) {
    const [editIndex, setEditIndex] = useState(null); // variable holding edit index 
    const [editEmail, setEditEmail] = useState(''); // variable holding edit email 
    const [editPassword, setEditPassword] = useState(''); // variable holding edit index 

    // function for user to click fields to edit and save values within table 
    const handleEditClick = (index, email, password) => {
        setEditIndex(index);
        setEditEmail(email);
        setEditPassword(password);
    };

    // function to click save edited fields 
    const handleSaveClick = () => {
        editUserDetail(editIndex, editEmail, editPassword);
        setEditIndex(null);
        setEditEmail('');
        setEditPassword('');
    };
    // handleChanges - save the values of the changes for email and password
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEditEmail(value);
        } else if (name === 'password') {
            setEditPassword(value);
        }
    };

    return (
        <>
            <h3>User Details</h3>
            <div>
                <table className="UserDetailTable">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} id={index}> {/* write if statment */}
                                <td>
                                    {editIndex === index ? ( // this if statment will have only save button 
                                        <input
                                            name="email"
                                            value={editEmail}
                                            onChange={handleChange}
                                            placeholder="Update Email"
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? ( // this if statment will have only save button 
                                        <input
                                            name="password"
                                            value={editPassword}
                                            onChange={handleChange}
                                            placeholder="Update Password"
                                        />
                                    ) : (
                                        user.password
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? ( /* when user click save we call function  editUserDetail */
                                        <button onClick={handleSaveClick}>Save</button> 
                                    ) : (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faPenToSquare}
                                                style={{ color: "#990000" }}
                                                onClick={() => handleEditClick(index, user.email, user.password)}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                style={{ color: "#990000" }}
                                                onClick={() => deleteCallBack(index)}
                                            />
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserDetail;

