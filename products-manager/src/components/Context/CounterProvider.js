import React, { useState , useContext } from "react";

const CounterContext = React.createContext();
const CounterContextDispacher = React.createContext();


const CounterProvider = ({children}) =>
{

    const [ count, setCount ] = useState( 0 );

    return (
        <CounterContextDispacher.Provider value={setCount}>
            <CounterContext.Provider value={ count }>
                { children }
            </CounterContext.Provider>
        </CounterContextDispacher.Provider>
     );
}
 
export default CounterProvider;


export const useCount = () => useContext( CounterContext );
export const useCountActions = () =>
{

    const setCount = useContext(CounterContextDispacher)

    const addOne = () =>
    {
        setCount( ( prevCount ) => prevCount + 1 );
    }
    const addFive = () =>
    {
        setCount( ( prevCount ) => prevCount + 5 );
    }
    const increment = () =>
    {
        setCount( ( prevCount ) => prevCount - 1 );
    }

    return{addOne,addFive,increment}
};