import React from 'react';
import {FriendListItem} from "../FriendListItem/FriendListItem.jsx";
import "./FriendList.css";

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            ))}
        </ul>
    );
};

export default FriendList;