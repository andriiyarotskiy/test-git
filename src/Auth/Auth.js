import React, {useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const Auth = ({children}) => {
        const [state, setIsAuth] = useState({
            name: '',
            accessToken: '',
            img: null
        })

        const responseGoogle = (response) => {
            if (response) {
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

        //FACEBOOK
        const responseFacebook = (response) => {
            console.log(response)
            setIsAuth({
                ...state,
                name: response.name,
                isAuth: true,
                img: response.picture.data.url
            })
        }


        return (
            <div style={{textAlign: "center"}}>
                {!state.isAuth
                    ? <div><GoogleLogin clientId="345999559557-l0djs7ot59j8914n1bp4mvkn08odsp4n.apps.googleusercontent.com"
                        /*       buttonText="Login with Google"*/
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        responseType='code,token'
                                        isSignedIn={true}
                                        render={renderProps =>
                                            <button onClick={renderProps.onClick} className="btn btn-dark">Sign in</button>
                                        }/>
                        <div>
                            <FacebookLogin
                                appId="399813427801800"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}/>
                        </div>

                    </div>

                    : <div>
                        <h1>{state.name ? state.name : null}</h1>
                        <img src={state.img} alt="ava"/>
                        <span>{children}</span>
                        <GoogleLogout
                            clientId={"345999559557-l0djs7ot59j8914n1bp4mvkn08odsp4n.apps.googleusercontent.com"}
                            buttonText={'Logout'}
                            onLogoutSuccess={logout}
                            onFailure={handleLogoutFailure}
                        />
                    </div>}
                {state.accessToken && <span> token : {state.accessToken}</span>}
            </div>
        );
    }
;

export default Auth;