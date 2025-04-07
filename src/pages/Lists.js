import React, { useState, useEffect } from 'react';
import '../css/Lists.css';

const Lists = ({ favorites, deleteMovieFromFavorites }) => {
    const [lists, setLists] = useState([]);
    const [newListName, setNewListName] = useState('');
    const [editingListId, setEditingListId] = useState(null);
    const [editingListName, setEditingListName] = useState('');

    useEffect(() => {
        // Fetch existing lists from an API or local storage
        const savedLists = JSON.parse(localStorage.getItem('userLists')) || [];
        setLists(savedLists);
    }, []);

    // Save lists to local storage
    const saveListsToLocalStorage = (updatedLists) => {
        localStorage.setItem('userLists', JSON.stringify(updatedLists));
    };


    // create new list
    const handleNewList = () => {
        if (newListName.trim() === '') return;
        const updatedLists = [...lists, { id: Date.now(), name: newListName }];
        setLists(updatedLists);
        saveListsToLocalStorage(updatedLists); // Save to local storage
        setNewListName('');
    };

    // edit list name
    const handleEditList = (id) => {
        if (editingListName.trim() === '') {
            setEditingListId(null);
            setEditingListName('');
            return;
        }
        const updatedLists = lists.map((list) =>
            list.id === id ? { ...list, name: editingListName } : list
        );
        setLists(updatedLists);
        saveListsToLocalStorage(updatedLists); // Save to local storage
        setEditingListId(null);
        setEditingListName('');
    };

    // delete list
    const handleDeleteList = (id) => {
        const updatedLists = lists.filter((list) => list.id !== id);
        setLists(updatedLists);
        saveListsToLocalStorage(updatedLists); // Save to local storage
    };

    return (
        <div>
            <div className="lists-container-fluid">
                <input
                    className="lists-input"
                    type="text"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    placeholder="New list name"
                />
                <button className="btn-lists" onClick={handleNewList}>Create</button>
            </div>
            <div>
                {favorites.length > 0 && (
                    <div className="list-item">
                        <div className="list-name">Favorites </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex">
                                    {favorites.map((movie, index) => (
                                        <div key={index} className="favorite-movie">
                                            <p className="list-movie-title">{movie.title}</p>
                                            <img
                                                className="img-responsive img-thumbnail"
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt={movie.title}
                                            />
                                            <button
                                                className="btn-lists"
                                                    onClick={() => deleteMovieFromFavorites(movie)}>
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Render other user-created lists */}
                {lists.map((list) => (
                    <div key={list.id} className="list-item">
                        {editingListId === list.id ? (
                            <input
                                type="text"
                                value={editingListName}
                                onChange={(e) => setEditingListName(e.target.value)}
                                placeholder="Edit list name"
                            />
                        ) : (
                            <span className="span-list-name">{list.name}</span>
                        )}
                        <div className="lists-buttons">
                            <button
                                className="btn-lists"
                                onClick={() => {
                                    if (editingListId === list.id) {
                                        handleEditList(list.id);
                                    } else {
                                        setEditingListId(list.id);
                                        setEditingListName(list.name);
                                    }
                                }}
                            >
                                {editingListId === list.id ? 'Save' : 'Edit'}
                            </button>
                            <button
                                className="btn-lists"
                                onClick={() =>
                                    handleDeleteList(list.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lists;

