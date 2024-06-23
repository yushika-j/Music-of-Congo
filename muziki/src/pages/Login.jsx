import React, { useState } from 'react';

const Login = () => {
    return (   <div>
                <h1>Log In</h1>
                <form method="POST">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Submit</button>
                </form>
        </div>
    );
};

export default Login;
