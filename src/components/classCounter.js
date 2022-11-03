import React, { Component } from "react";


class CounterClass extends Component
{
    state = {
        count: 0
    }
    addOneHandler = () =>{
        this.setState( {
            count: this.state.count + 1
        } )
    }
    addTwoHandler = () =>
    {
        this.setState( {
            count: this.state.count + 2
        })
    }
    addFiveHandler = () =>
    {
        this.setState( {
            count: this.state.count + 5
        })
    }
    render ()
    {
        return (
            <div>
                <h1>counter:{ this.state.count }</h1>
                <button onClick={ this.addOneHandler }>add one</button>
                <button onClick={this.addTwoHandler}>add two</button>
                <button onClick={this.addFiveHandler}>add five</button>
            </div>
        )
    }
}

export default CounterClass;