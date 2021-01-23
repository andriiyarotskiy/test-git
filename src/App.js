import React, {useState} from 'react';
import Titles from "./Titles";


function App() {

    const [titles, setTitles] = useState({
        'City': [],
        'First Name': [],
        'Last Name': [{title : "Andrii"}, {title: "Artsiom"}],
    })

    return (
        <div className="App">
            <Titles titles={titles}/>
        </div>
    );
}

export default App;
