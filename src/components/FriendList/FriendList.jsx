import React from 'react';
import {FriendListItem} from "../FriendListItem/FriendListItem.jsx";
import "./FriendList.css";

const FriendList = ({friends}) => {
    return (
        <div className="friend-list">
            <ul className="list">
                {friends.map(friend => (
                    <li key={friend.id}>
                        <FriendListItem friend={friend}/>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default FriendList;