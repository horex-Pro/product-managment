import React ,{ Component, Fragment } from "react";
import Product from "./Product";

class ProductsList extends Component
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
        console.log( 'deleted ' + id );
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

    renderProducts = () =>
    {
        return (
            <div className="container">
                {
                    this.state.products.map( (item,index) =>
                {
                return (
                    <Product
                        product={item}
                        key={ index }
                        onDelete={ () => this.oneDelete( item.id ) }
                        onIncrement={ () => this.onIncrement( item.id ) }
                        onDecrement={ () => this.onDecrement( item.id ) }
                        onChange = {(event)=> this.onChange(event,item.id)}
                    />
                )
            })
                }
            </div>
        )
    }

    render ()
    {
        return (
            <Fragment>
                {
                    this.state.products.length ? this.renderProducts() : <div>your card is empty</div>
            }
            </Fragment>
        )
    }

};

export default ProductsList;