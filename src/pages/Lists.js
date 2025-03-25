import React, { useState, useEffect } from 'react';



const Lists = () => {
    const [lists, setLists] = useState([]);
    const [newListName, setNewListName] = useState('');

    useEffect(() => {
        // Fetch existing lists from an API or local storage
        // Example: setLists(fetchedLists);
    }, []);

    const handleAddList = () => {
        if (newListName.trim() === '') return;
        const updatedLists = [...lists, { name: newListName }];
        setLists(updatedLists);
        setNewListName('');
        // Optionally, save the updated lists to an API or local storage
    };

    return (
        <div>
            <h1>My Lists</h1>
            <ul>
                {lists.map((list, index) => (
                    <li key={index}>{list.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder="New list name"
            />
            <button onClick={handleAddList}>Add List</button>
        </div>
    );
};

export default Lists;