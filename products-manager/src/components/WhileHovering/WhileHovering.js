const HoverBtn = (props) => {
    return ( 
        <button onMouseOver={props.mouseOverHandler}>hover me</button>
     );
}
 
export default HoverBtn;