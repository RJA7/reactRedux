import React from 'react';
import UserList from '../containers/userList';
import UserInfo from '../containers/userInfo';

export default () => (
    <div>
        <div>Users list</div>
        <UserList />
        <hr />
        <div>User Info</div>
        <UserInfo />
    </div>
)
