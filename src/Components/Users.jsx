import React, { use } from 'react';
import User from './User';

const Users = ({ fetcUser }) => {
    const users = use(fetcUser)
    console.log(users)
    return (
        <div>
            <h1> Hello </h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    users.map((user) => <User user={user}></User>)
                }
            </div>
        </div>
    )

};

export default Users;