import React from 'react';
import {useGoogleLogout} from "react-google-login";
import google_icon from "../../../../../mini-shop/src/assets/google_icon_131222.svg";
import {clientId} from "./LoginHooks";

const LogoutHooks = () => {
    const onLogoutSuccess = () => {
        console.log('Logout made successfully')
    }

    const onFailure = () => {
        console.log('Handle Failure cases')
    }

    const {signOut} = useGoogleLogout({
        onLogoutSuccess,
        onFailure,
        clientId,
    })
    return <button onClick={signOut}
                   className="button">
        <img src={google_icon} width="20" height="20"></img>
        <span className="buttonText">Sign out</span>
    </button>
};

export default LogoutHooks;