import React, { useEffect , useState } from "react";




const CounterFunction = () =>
{
    const [ counter, setCounter ] = useState(0)
    const [ name, setName ] = useState( '' )

    useEffect( () =>
    {
        document.title = `clicked ${ counter } times!`
        console.log( "document title updating..." );
    },[counter])
    
    return (
        <div className="container">
                <input type="text" placeholder="name:" onChange={(e)=> setName(e.target.value)} value={name} />
                <button onClick={ () => setCounter(counter+1) }>add one {counter}</button>
        </div>
    )
};



export default CounterFunction;

