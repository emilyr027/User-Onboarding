import React from 'react';

function User({ user }) {
    if (!user) {
        return <h4>loading...</h4>
    };

    return (
        <div className='userContainer'>
            <h3>{`user.first_name + user.last_name` ? user.first_name + ' ' + user.last_name : 'No name provided'}</h3>
            <p>Email: {user.email ? user.email : 'No email provided'}</p>
            <p>Password: {user.password ? user.password : 'No password provided'}</p>
            <p>Role: {user.role ? user.role : 'No role provided'}</p>
            <p>Accepted Terms? {user.termsOfService ? 'Yes' : 'No, there is a problem'}</p>
        </div>
    );
}

export default User