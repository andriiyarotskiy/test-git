import React from 'react';

const Titles = (props) => {
    // const arr = Object.keys(props.titles)

    // console.log(Object.values(props.titles))
    return (
        <>
            <h1>Titles</h1>

            <ul>
                {Object.keys(props.titles).map((t) => {
                    return <div style={{listStyleType: "none"}}>

                        <h2>{t}</h2>
                        { props.titles[t].length > 0
                        ? props.titles[t].map(t => <li>{t.title}</li>)
                        : null
                        }
                    </div>
                })}
            </ul>

            <div>
            </div>
        </>
    );
};

export default Titles;
