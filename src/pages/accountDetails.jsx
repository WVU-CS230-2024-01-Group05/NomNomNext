import React, { useState, useEffect } from 'react';
import { useFetchUserAttributes } from '../Account-Details';
import { Link } from 'react-router-dom';

//Function to call the account attributes from the database
const AccountDetails = () => {
    const { fetchUserAttributes } = useFetchUserAttributes();
    const [userAttributes, setUserAttributes] = useState(null);

    useEffect(() => {
        const getUserAttributes = async () => {
            try {
                const attributes = await fetchUserAttributes();
                setUserAttributes(attributes);
            } catch (error) {
                console.error('Error fetching user attributes:', error);
            }
        };

        getUserAttributes();
    }, [fetchUserAttributes]);

        console.log(`The username: ${userAttributes}`);

//Return section to display the attributes retrieved for the user
    return (
        <div className="account-details">
            <h1>Account Details</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={userAttributes.id} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={userAttributes.name} readOnly />
                    </div>
             <Link to="/">Home</Link>
        </div>
    );
};

export default AccountDetails;