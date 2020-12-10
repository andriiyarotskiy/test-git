import React from 'react';
import {Button} from "react-bootstrap";
import {useAlert} from "./alert/AlertContext";

const Main = () => {
    const {show} = useAlert()

    return (
        <>
         <h1>Сontext</h1>
            <Button onClick={() => show('Текст из Main.js')} className={'btn btn-success'}>Показать alert</Button>
        </>
    );
};

export default Main;