import React, {useEffect, useState} from 'react';
import firebase from "firebase";


function App() {

    const [value, setValue] = useState({
        email: '',
        password: '',
        isAuth: false
    })

    useEffect(() => {
        const db = firebase.database()

        const playersRef = firebase.database().ref("players/")
        playersRef.set({
            John: {
                number: 1,
                age: 30
            },
            Amanda: {
                number: 2,
                age: 20
            }
        });
    }, [])

    const onChangeHandler = (e) => {
        setValue({...value, [e.currentTarget.name]: e.currentTarget.value})
    }
    // registration
    const createAcc = () => {
        const {email, password} = value
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
    //login
    const signIn = () => {
        const {email, password} = value
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => setValue({...value, isAuth: true}))
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
    const signOutClick = () => {
        firebase.auth().signOut()
            .then(() => {
                setValue({...value, isAuth: false})
            })
            .catch((error) => {
                console.log('error!!!')
            })
    }
    //google
    const provider = new firebase.auth.GoogleAuthProvider();
    const gSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider).then(function (result) {
            const token = result.credential.accessToken;
            const user = result.user;

            setValue({...value, isAuth: true})
        }).catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode)
            console.log(errorMessage)
        });
    }
    const gSignOut = () => {
        firebase.auth().signOut()
            .then(function () {
                setValue({...value, isAuth: false})
            }, function (error) {
                console.log('Signout Failed')
            });
    }
    //Data Recording

    const setUsers = ()=> {
        const playersRef = firebase.database().ref("players/");
        playersRef.set ({
            John: {
                number: 1,
                age: 30
            },

            Amanda: {
                number: 2,
                age: 20
            }
        });
    }

    return (
        <div className="App">
            {value.isAuth
                ? <div>
                    <h1>test-firebase</h1>
                    <button onClick={signOutClick}>sign out</button>
                    <div>
                        <button onClick={gSignOut}>sign out google</button>
                        <button onClick={setUsers}>create users</button>
                    </div>
                </div>
                : <div>
                    <input value={value.email} name="email" type="text" onChange={onChangeHandler}/>
                    <input value={value.password} name="password" type="text" onChange={onChangeHandler}/>
                    <button onClick={signIn}>Login</button>
                    <div>
                        <button onClick={gSignIn}>sign in google</button>
                    </div>
                    <div>
                        <button onClick={createAcc}>Registration</button>
                    </div>
                </div>}
        </div>
    );
}

export default App;
