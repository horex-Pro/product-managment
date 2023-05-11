const Wrapper = (props) => {
    return ( 
        <div className={ props.class}>
            {props.children}
        </div>
     );
}
 
export default Wrapper;