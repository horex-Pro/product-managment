import { useState } from "react";

const HookCounter = () =>
{
    const [ count, setCount ] = useState( 0 );

    const addOneHandler = () =>
    {
        setCount( count + 1 );
    };
    const addTwoHandler = () =>
    {
        setCount( count + 2 );
    };
    const addFiveHandler = () =>
    {
        for ( let i = 0; i < 5; i++){
            setCount((preCount) => preCount+1)
        };
    };

    console.log(count)

    return (
        <div>
            <h1>counter:{ count }</h1>
            <button onClick={addOneHandler}>add one</button>
            <button onClick={addTwoHandler}>add two</button>
            <button onClick={addFiveHandler}>add five</button>
        </div>
    )
};

export default HookCounter; 