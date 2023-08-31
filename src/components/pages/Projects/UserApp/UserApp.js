import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UsersList from './components/UsersList';
import './UserApp.css';



function UserApp() {
    const [usersList, setUsersList] = useState([]);

    const handleData = (userName, userAge) => {
        setUsersList((prevList) => {
            return [
                ...prevList, 
                {name: userName, age: userAge, id: Math.random().toString()}
            ];
        });
    };

    return (
      <React.Fragment>
       <UserInput onAddUser={handleData} />
       <UsersList users={usersList}/>
    </React.Fragment>
    );
}

export default UserApp;