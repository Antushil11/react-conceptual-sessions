import React from 'react';

const User = ({user }) => {
    
    return (
        <div className='border-2 border-amber-600 gap p-4 rounded-2xl '>
            <img src={user.photo} alt="" />
            <h1>{user.name}</h1>
            
        </div>
    );
};

export default User;