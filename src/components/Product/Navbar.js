import styles from './navbar.module.css'

const Navbar = ( props ) =>
{
    return (
        <div className={`${styles.navbar}`}>
            <h1>
                Welcome to our shop 
            </h1>
            <span className={`${styles.counter}`}>
            {props.quantity}
            </span>
        </div>
    )
};

export default Navbar;