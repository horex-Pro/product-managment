
import styles from './app.css'
import { Component } from "react";
import ProductsList from './components/Product/ProductsList';
import Navbar from "./components/Product/Navbar";


class App extends Component
{
    state = {
        products: [
            { title: 'reactjs', price: '1200$', id: Math.floor( Math.random() * 10 ), quantity:1 },
            { title: 'node.js', price: '1050$', id: Math.floor( Math.random() * 10 ), quantity:2 },
            { title: 'mango.db', price: '800$', id: Math.floor( Math.random() * 10 ), quantity: 5 },
        ]
    }
    oneDelete = ( id ) =>
    {
        const filteredItems = this.state.products.filter(item => item.id !== id)
        
        this.setState( {
            products:filteredItems
        })
    }
    onIncrement = ( id ) =>
    {
        const products = [ ...this.state.products ];
        const clickedItem = products.find( item => item.id === id );
        clickedItem.quantity++;

        this.setState( {
            products: products
        })
        
    }
    onDecrement = ( id ) =>
    {
        const products = [ ...this.state.products ];
        const clickedItem = products.find( item => item.id === id );
        clickedItem.quantity--;

        if ( clickedItem.quantity === 0 )
        {
            this.oneDelete( id );
        }
        else
        {
            this.setState( {
                products: products
            } );
        }
    }
    onChange = (event,id) =>
    {
        const productsList = [ ...this.state.products ];
        const clickedItem = productsList.find( item => item.id === id );
        clickedItem.title = event.target.value;

        this.setState( {
            products:productsList
        })
        

    }

    render ()
    {
        return (
            <div className='app' style={ styles.app }>
                <Navbar
                    quantity={this.state.products.length}
                />
                <h1>shoping items</h1>
                <ProductsList
                    products={ this.state.products }
                    oneDelete={ this.oneDelete }
                    onIncrement={ this.onIncrement }
                    onDecrement={ this.onDecrement }
                    onChange={ this.onChange }
                />
            </div>
        )
    }
}


export default App;

