import React, { Component, Fragment } from "react";
import Product from "./Product";

class ProductsList extends Component
{

    renderProducts = () =>
    {
        return (
            this.props.products.map( ( item, index ) =>
            {
                return (
                    <Product
                        product={ item }
                        key={ index }
                        onDelete={ () => this.props.oneDelete( item.id ) }
                        onIncrement={ () => this.props.onIncrement( item.id ) }
                        onDecrement={ () => this.props.onDecrement( item.id ) }
                        onChange={ ( event ) => this.props.onChange( event, item.id ) }
                    />
                );
            } )
                
        )
    }

    render ()
    {
        return (
            <Fragment>
                { this.props.products.length ? this.renderProducts() : <div>your card is empty</div> }
            </Fragment>
        )
    }

};

export default ProductsList;