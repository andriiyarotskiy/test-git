import React, {useEffect, useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

const Auth = () => {

        const [state, setIsAuth] = useState({
            isAuth: false,
            name: '',
            accessToken: ''
        })

        useEffect(() => {

        }, [])

        const responseGoogle = (response) => {
            if(response){
                setIsAuth({
                    ...state,
                    name: response.profileObj.name,
                    accessToken: response.accessToken,
                    isAuth: true
                })
            }
        }
        const logout = (response) => {
            setIsAuth({...state, isAuth: false, accessToken: ''})
        }
        const handleLogoutFailure = (response) => {
            alert('Failed to log out')
        }


        return (
            <div style={{textAlign: "center"}}>
                {!state.isAuth ?
                    <GoogleLogin clientId="345999559557-l0djs7ot59j8914n1bp4mvkn08odsp4n.apps.googleusercontent.com"
                        /*       buttonText="Login with Google"*/
                                 onSuccess={responseGoogle}
                                 onFailure={responseGoogle}
                                 cookiePolicy={'single_host_origin'}
                                 responseType='code,token'
                    />
                    : <div>
                        <h1>{state.name ? state.name : null}</h1>
                        <GoogleLogout
                            clientId={"345999559557-l0djs7ot59j8914n1bp4mvkn08odsp4n.apps.googleusercontent.com"}
                            buttonText={'Logout'}
                            onLogoutSuccess={logout}
                            onFailure={handleLogoutFailure}
                        ></GoogleLogout>
                    </div>}
                {state.accessToken && <h5> token : {state.accessToken}</h5>}
            </div>
        );
    }
;

export default Auth;