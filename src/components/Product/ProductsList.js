import React, { Component, Fragment } from "react";
import Product from "./Product";

class ProductsList extends Component
{

    renderProducts = () =>
    {
        const {products , oneDelete , onIncrement , onDecrement , onChange} = this.props
        return (
            products.map( ( item, index ) =>
            {
                return (
                    <Product
                        product={ item }
                        key={ index }
                        onDelete={ () => oneDelete( item.id ) }
                        onIncrement={ () => onIncrement( item.id ) }
                        onDecrement={ () => onDecrement( item.id ) }
                        onChange={ ( event ) => onChange( event, item.id ) }
                    />
                );
            } )
                
        )
    }

    render ()
    {
        const { products } = this.props;
        return (
            <Fragment>
                { products.length ? this.renderProducts() : <div>your card is empty</div> }
            </Fragment>
        )
    }

};

export default ProductsList;