import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';

const PersistLogin = () => {
    const effectRan = useRef(false);
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAuth();


    useEffect(() => {
        let isMounted = true;
        if(effectRan.current === true){
            const verifyRefreshToken = async () => {
                try {
                    await refresh();
                }
                catch (err) {
                    console.error(err);
                }
                finally {
                    isMounted && setIsLoading(false);
                }
            }

            // persist added here AFTER tutorial video
            // Avoids unwanted call to verifyRefreshToken
            !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
        }
        return () => {
            isMounted = false;
            effectRan.current = true;
        };
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    }, [isLoading])

    return (
        <>
            {!persist
                ? <Outlet />
                : isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin