"use client";

import { UserContext } from '../context/UserContext';
import { useUser } from '@clerk/nextjs';
import react, { useEffect, useState } from 'react';
function Provider({children}){

    const { user } = useUser();

    const [userDetail, setUserDetail] = useState();


    useEffect(() => {
        user && CreateNewUser();
    }, [user]);

    const CreateNewUser = async () => {
        const result = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
            }),
        });
        let data = null;
        const text = await result.text();
        try {
            data = text ? JSON.parse(text) : null;
        } catch (e) {
            console.error('Failed to parse JSON:', e);
        }
        console.log(data);
        setUserDetail(data);
    }

    return (
        <div>
            <UserContext.Provider value={{userDetail, setUserDetail}}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default Provider;