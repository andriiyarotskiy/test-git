import React, {useEffect, useState} from 'react';
import Auth from "./Auth/Auth";


const useLogger = (value) => {
    useEffect(() => {
        // console.log('Value changed', value)
    }, [value])
}
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.currentTarget.value)
    }
    const clear = () => {
        setValue('')
    }
    return {
        bind: {value, onChange},
        value,
        clear
    }
}

function App() {

    const input = useInput('')
    useLogger(input.value)

    return (
        <>
            {/*<AlertProvider>
                <div className="container pt-3">
                    <Alert/>
                    <Main toggle={() => {
                    }}/>
                </div>
            </AlertProvider>*/}
            <div className="container pt-3">
                <input type="text" {...input.bind}/>
                <button className="btn btn-warning" onClick={() => input.clear()}>Очистить</button>
                <hr/>
                <h1>{input.value}</h1>
            </div>
            <hr/>
            <h1>Авторизация с помощью гугла</h1>
            <Auth>
                <div>авторизован</div>
                <div>не авторизован!!!</div>
            </Auth>
        </>

    );
}

export default App;
