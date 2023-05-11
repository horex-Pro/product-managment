


// class ClassRef extends Component
// {

import { useEffect, useRef, useState } from "react";

    
//     constructor (props)
//     {
//         super( props );
//         this.myInputRef = createRef();
//     }

//     componentDidMount() {
//         this.myInputRef.current.focus()
//     }


//     render() { 
//         return (
//             <input type="text"  ref={this.myInputRef}/>
//         );
//     }
// }
 
// export default ClassRef;

const FunctionalRef = () =>
{
    const [value, setValue ] = useState("")
    
    let myInputRef = useRef();

    useEffect( () =>
    {
        myInputRef.current.focus();
    }, [] );

    const changeHandler = (e) =>
    {
        setValue( { name: e.target.value } );
        console.log(value)
    }

    const clickHandler = () =>
    {
        myInputRef.current.value = ''
    }

    return ( 
        <>
            <input type="text" ref={ myInputRef } onChange={changeHandler} />
            <input type="reset" onClick={()=>clickHandler()} />
        </>
     );
}
 
export default FunctionalRef;