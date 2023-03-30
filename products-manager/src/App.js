import React from "react";
import { Component } from "react";
import ProductsList from "./components/ProductsList/ProductsList";


class App extends Component
{

    state = {
        products: [
            { title: 'React JS', id: Math.random(), price: 1200, quantity:1},
            { title: 'Node JS', id: Math.random(), price: 100, quantity:2},
            { title: 'Nuxt JS', id: Math.random(), price: 1400, quantity:3},
            { title: 'Mango JS', id: Math.random() , price: 1500, quantity:1},
        ]
    }

    incrementHanadler = (id) =>{
        const products = [ ...this.state.products ]
        const selectedItem = products.find( i => i.id === id );

        selectedItem.quantity++
        
        this.setState({products})
    }

    decrementHnadler = ( id ) =>
    {
        const products = [ ...this.state.products ]
        const selectedItem = products.find( i => i.id === id );

        selectedItem.quantity--

        if ( selectedItem.quantity )
            this.setState( { products } );
        else
            this.deleteHandler( id )
    }

    deleteHandler = ( id ) =>
    {
        const products = [ ...this.state.products ];
        const filteredIProducts = products.filter( ( i ) => i.id !== id );

        this.setState({products:filteredIProducts})
    }

    changeHandler = (e) =>
    {
        const id = e.target.parentElement.id;
        const products = [ ...this.state.products ];
        const selectedItem = products.find( item  => item.id === id );

        console.log(id,products,selectedItem)
    }

    renderProducts = () =>
    {
        if ( this.state.products.length )
            return (
            <ProductsList
                product={ this.state.products }
                onIncremet={ () => this.incrementHanadler }
                onDecrement={ () => this.decrementHnadler }
                onDelete = {()=> this.deleteHandler}
                onChange = {(e)=>this.changeHandler}
            />
        )
        else
            return(<div>your cart is empty</div>)
    }
        

    render ()
    {
        return (
            <div>
                { !this.state.products.length ? 'go to shooping' : null }
                {this.renderProducts()}
            </div>
        )
    }
}

export default App;
