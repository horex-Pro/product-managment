import React, { useState } from "react";


const UserData = () =>
{
    const [ user, setUser ] = useState( {
        firstName: "",
        lastName: "",
    } );

    const firstNameHandler = ( e ) =>
    {
        setUser({ ...user, firstName: e.target.value });
    };
    const lastNameHandler = ( e ) =>
    {
        setUser( {...user, lastName: e.target.value} );
    };

    return (
        <div>
            <h1>my first name is: { user.firstName}</h1>
            <h2>my last name is: { user.lastName }</h2>
            
            <form>
                <input value={ user.firstName } onChange={ firstNameHandler }></input>
                <br/>
                <br/>
                <input value={user.lastName} onChange={lastNameHandler}></input>
            </form>
        </div>
    )
};

export default UserData;