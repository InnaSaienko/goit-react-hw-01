import React from 'react';
import  "./FriendListItem.css";

export const FriendListItem = ({friend}) => {
    const { avatar, name, isOnline} = friend;
    return (
        <div className="friend-item">
            <img src={avatar} alt="Avatar" width="48" />
            <div className="friend-info">
                <p>{name}</p>
                <p className={`status ${isOnline ? 'online' : 'offline'}`}>{isOnline ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    );
}