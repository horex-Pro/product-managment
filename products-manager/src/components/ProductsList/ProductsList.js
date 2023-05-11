import { Component, useContext } from "react";
import Product from "../Product/Product";

import styles from './ProductList.module.css'


class ProductsList extends Component
{

    render ()
    {
        return (
            <div className={styles.productsList}>
                {
                    this.props.product.map( i =>
                    {
                        return (
                            <Product
                                title={ i.title }
                                price={ i.price }
                                quantity={ i.quantity }
                                id={ i.id }
                                key={ i.id }
                                onIncremet={ this.props.onIncremet() }
                                onDecrement={this.props.onDecrement()}
                                onDelete={ this.props.onDelete() }
                                onChange={this.props.onChange}
                            />
                        )
                    } )
                    
                }
            </div>
        )
    }

}

export default ProductsList;