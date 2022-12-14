import styles from './product.module.css'
import { AiFillDelete } from "react-icons/ai";

const Product = ( props ) =>
{
    return (
        <div className={styles.product}>
            <h1>
                {props.product.title}
            </h1>
            <h2>
                {props.product.price}
            </h2>
            <span>
                {props.product.id}
            </span>
            <span>
                {props.product.quantity}
            </span>
            <input onChange={props.onChange} value={props.product.title}/>
            <button onClick={ props.onIncrement }>+</button>
            <button onClick={ props.onDecrement }>{
                props.product.quantity > 1 ? '-' : <AiFillDelete/>
            }</button>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}


export default Product;