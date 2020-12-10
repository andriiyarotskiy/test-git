import React, {useContext, useReducer, useState} from 'react';

const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}
// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }


const reducer = (state, action) => {
    switch (action.type) {
        case 'show':
            return {...state, visible: true, text: action.text}
        case 'hide':
            return {...state, visible: false}
        default:
            return state
    }
}

const AlertProvider = ({children}) => {

    // const [alert, setAlert] = useState(false)

    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = text => dispatch({type: 'show', text})
    const hide = () => dispatch({type: 'hide'})

    // const toggle = () => setAlert(prev => !prev)

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show, hide
        }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertProvider;