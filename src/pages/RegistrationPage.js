import React, { useState, useEffect } from 'react';

const RegistrationPage = () => {

    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const saveRegistration = async () => {
        const result = await fetch(`/api/registration/add-registration`, {
            method: 'post',
            body: JSON.stringify({ fullName: nameText, email: emailText, password: passwordText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setNameText('');
        setEmailText('');
        setPasswordText('');
    }

    return (
        <>
            <h1>Registration</h1>
            <div id="add-registration-form">
                <h3>Enter your Registration details</h3>
                <label>
                    Full Name:
                <input type="text" value={nameText} onChange={(event) => setNameText(event.target.value)} />
                </label>

                <label>
                    Email Address:
                <input type="text" value={emailText} onChange={(event) => setEmailText(event.target.value)} />
                </label>
                <label>
                    Password:
                <input type="password" value={passwordText} onChange={(event) => setPasswordText(event.target.value)} />
                </label>
                <button onClick={() => saveRegistration()}>Submit</button>
            </div>
        </>
    );
};

export default RegistrationPage;