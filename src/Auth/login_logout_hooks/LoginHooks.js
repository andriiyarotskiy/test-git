import React from 'react';
import {refreshTokenSetup} from "../utils/refreshToken";
import {useGoogleLogin} from "react-google-login";
import google_icon from "../google_icon_131222.svg";



export const clientId = "345999559557-l0djs7ot59j8914n1bp4mvkn08odsp4n.apps.googleusercontent.com"

const LoginHooks = () => {
    const onSuccess = res => {
        console.log('[login Success] currentUser:', res.profileObj)
        refreshTokenSetup(res)
    }
    const onFailure = res => {
        console.log('[login Failed] res:', res)
    }

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        accessType: 'offline',
        isSignedIn: true
    })

    return (
        <button onClick={signIn} className="button">
            <img src={google_icon} width="20" height="20"/>
            <span className="buttonText">Sign in with Google</span>
        </button>
    )
};

export default LoginHooks;