import React from 'react';
import {useAlert} from "./AlertContext";

const Alert = () => {
    const alert = useAlert()
    if(!alert.visible) return null

    return (
        <div className={'alert alert-danger'} onClick={alert.toggle}>
            Danger message
        </div>
    );
};

export default Alert;