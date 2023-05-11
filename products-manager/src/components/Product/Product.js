import { Component , useContext} from "react";
import styles from './Product.module.css'
import { FaTrash } from "react-icons/fa";


const Product = (props)=>
{

    const { id, title, price, key, quantity, onChange, onDecrement, onIncremet, onDelete } = props;
        return (
            <div className={styles.product} id={ id } key={key}>
                <span>product title:{title }</span>
                <span> product price:{price} </span>
                <span> quantity:{quantity} </span>
                <input type="text" onChange={onChange()} />
                <button className={ styles.button } onClick={ () => onDecrement( id ) }>
                    { quantity === 1 ? <FaTrash className={ styles.delete} /> : '-' }
                </button>
                <button className={styles.button} onClick={ () => onIncremet(id)}>+</button>
                <button className={styles.button} onClick={ () => onDelete( id) }>delete</button>
            </div>
        )
}

export default Product;