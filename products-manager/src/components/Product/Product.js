import { Component } from "react";
import styles from './Product.module.css'


class Product extends Component
{
    render ()
    {
        return (
            <div className={styles.product} id={ this.props.id } key={this.props.key}>
                <span>product title:{this.props.title }</span>
                <span> product price:{this.props.price} </span>
                <span> quantity:{this.props.quantity} </span>
                <input type="text" value={ this.props
                .title} />
                <button className={styles.button} onClick={ () => this.props.onDecrement(this.props.id)}>-</button>
                <button className={styles.button} onClick={ () => this.props.onIncremet(this.props.id)}>+</button>
                <button className={styles.button} onClick={ () => this.props.onDelete( this.props.id) }>delete</button>
            </div>
        )
    }
}

export default Product;