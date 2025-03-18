import React from 'react';
import '../UserDetailC.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash  } from '@fortawesome/free-solid-svg-icons';



function UserDetailC({ users, deleteCallBack, editUserDetail }) {

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
                        <tr key={index} id={index}>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <FontAwesomeIcon icon={faPenToSquare} style={{color: "#990000",}} onClick={() => editUserDetail(users)}> </FontAwesomeIcon>  {/*edit button*/ }
                                <FontAwesomeIcon icon={faTrash} style={{color: "#990000",}} onClick={() => deleteCallBack(index)}> </FontAwesomeIcon> {/* delete button*/ }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    ); //closing tag for return
} // closing tag for UserDetailC

export default UserDetailC;


