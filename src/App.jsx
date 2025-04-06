import Profile from "./components/Profile/Profile.jsx";
import UserData from "./constants/userData.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import {transactions} from "./constants/transactions.js";
import FriendList from "./components/FriendList/FriendList.jsx";
import {friends} from "./constants/friends.js";
import './App.scss';

export default function App() {
    return (
        <>
            <Profile user={UserData.user}/>
            <TransactionHistory items={transactions}/>
            <FriendList friends={friends}/>
        </>
    )
}

