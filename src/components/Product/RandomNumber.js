import React, { useState } from "react";

const NumberGenerator = () =>
{
    const [ item, setItem ] = useState([]);
    
    const addOneHandler = ()=>{
        setItem(
            [
                ...item, {
                    id: item.length, number: Math.floor( Math.random() * 10 )
                }
            ]
        )
        console.log(item)
    }

    return (
        <div className="test">
            <button onClick={ addOneHandler }>add one</button>
            <ol>
                { item.map( i =>
            {
                return <li key={item.id}>{ i.number}</li>
            })}
            </ol>
        </div>
    )

};

export default NumberGenerator;