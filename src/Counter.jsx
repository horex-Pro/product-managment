import React  , {Component} from "react";

class ClassCounter extends Component
{
    state = {
        name: "",
        counter: 0,
    };
    componentDidMount ()
    {
        document.title = `clicked ${ this.state.counter } times!`
    }
    componentDidUpdate (prevProps,prevState)
    {
        if ( prevState.counter !== this.state.counter )
        {
            console.log( "document title updating..." );
            document.title = `clicked ${this.state.counter} times!`
            document.title = `clicked ${ this.state.counter } times! ${this.state.name}`
        }
    }
    render ()
    {
        return (
            <div>
                <input type="text" placeholder="name:" onChange={(e)=> this.setState({name: e.target.value})} />
                <button onClick={ () => this.setState( { counter: this.state.counter + 1 } ) }>add one {this.state.counter}</button>
            </div>
        )
    }
}

export default ClassCounter;