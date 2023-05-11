import { useContext } from "react";
import { useCount , useCountActions  } from "./CounterProvider";

const CounterOne = () =>
{

    const count = useCount();
    const {addOne,addFive,increment} = useCountActions();

    return ( 
        <>
            <h2>
            count is : {count}
            </h2>
            <button onClick={()=> addOne()}>
                add one
            </button>
            <button onClick={()=> addFive()}>
                add five
            </button>
            <button onClick={()=> increment()}>
                increment
            </button>
        </>
     );
}
 
export default CounterOne;