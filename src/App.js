
import styles from './app.css'
import { Component } from "react";
import ProductsList from './components/Product/ProductsList';
import Navbar from "./components/Product/Navbar";


class App extends Component
{
    state = {
        products: [
            { title: 'reactjs', price: '1200$', id: Math.random(), quantity:1 },
            { title: 'node.js', price: '1050$', id: Math.random(), quantity:2 },
            { title: 'mango.db', price: '800$', id: Math.random(), quantity: 5 },
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
        const index = this.state.products.findIndex( (item) => item.id === id );
        const selectedProduct = { ...this.state.products[ index ] };
        selectedProduct.quantity++;

        const products = [...this.state.products] ;

        products[index] = selectedProduct;

        this.setState({products})

        
    }

    onDecrement = ( id ) =>
    {
        const index = this.state.products.findIndex( (item) => item.id === id );
        const selectedProduct = { ...this.state.products[ index ] };
        selectedProduct.quantity--;

        const products = [...this.state.products] ;

        products[index] = selectedProduct;

        this.setState({products})
    }

    onChange = (event,id) =>
    {
        
        const index = this.state.products.findIndex( ( item ) => item.id === id );
        const selectedProduct = { ...this.state.products[ index ] };
        selectedProduct.title = event.target.value;

        const products = [ ...this.state.products ];

        products[ index ] = selectedProduct;

        this.setState({products})
    }

    componentDidUpdate ( prevProps, prevState )
    {
        console.log( prevState )
        return true
    }

    render ()
    {
        const { products } = this.state
        return (
            <div className='app' style={ styles.app }>
                <Navbar
                    quantity={products.length}
                />
                <h1>shoping items</h1>
                <ProductsList
                    products={ products }
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

