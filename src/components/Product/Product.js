import styles from './product.module.css'
import { AiFillDelete } from "react-icons/ai";

const Product = ( { onChange, onDecrement, onIncrement, onDelete , product } ) =>
{

    return (
        <div className={styles.product}>
            <h1>
                {product.title}
            </h1>
            <h2>
                {product.price}
            </h2>
            <span>
                {product.quantity}
            </span>
            <input onChange={onChange} value={product.title} className={`${styles.buttons}`}/>
            <button onClick={onIncrement } className={`${styles.buttons}`}>+</button>
            <button onClick={onDecrement } className={`${styles.remove} ${styles.buttons}`}>{
                product.quantity > 1 ? '-' : <AiFillDelete/>
            }</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}


export default Product;