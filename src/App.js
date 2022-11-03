// import React , {Component , useState} from "react";
// import CounterClass from './components/classCounter';
// import HookCounter from './components/Product/HookCounter';
// import NumberGenerator from './components/Product/RandomNumber'

import './app.css'
import { Component } from "react";
// import Product from "./components/Product/Product";
import ProductsList from './components/Product/ProductsList';

// // const App = () =>
// // {
// //     return (
// //         <div id="container" className="container">
// //             <h1>hello world my name is Hossein Horex</h1>
// //             <Product name='iphone 13 promax' price="1200$"/>
// //             <Product name='macbook pro m1' price="1300$"/>
// //             <Product name='apple watch ultra' price="900$">
// //                 <p>available status: true</p>
// //             </Product>
// //         </div>
// //     );
// // };

// class App extends Component
// {
//     state = {
//         products: [
//             { name: 'iphone 13 promax', price: "1200$" }, { name: "macbook pro m1", price: "1300$" }, { name: 'apple watch ultra', price: '900$' }
//         ]
//     };

//     clickHandler = ()=>
//     {
//         this.setState( {
//             products: [
//             { name: 'iphone 13 promax', price: "21200$" }, { name: "macbook pro m1", price: "21300$" }, { name: 'apple watch ultra', price: '2900$' }
//         ]
//         })
//     }

//     render ()
//     {
//         return (
//             <div id="container" className="container">
//                 <h1>hello world my name is Hossein Horex</h1>
//                 { this.state.products.map( ( item ) =>
//                 {
//                     return <Product name={item.name } price={item.price} />
//                 } ) }
//                 <button onClick={this.clickHandler}>
//                     click to change prices
//                 </button>
//             </div>
//         )
//     }
// }

// export default App;

// const App = () =>
// {
//     const [products,setProducts] = useState( [
//         { name: 'iphone 13 promax', price: "1200$" }, { name: "macbook pro m1", price: "1300$" }, { name: 'apple watch ultra', price: '900$' }
//     ] );
    
//     const clickHandler = () =>
//     {
//         setProducts( [
//             { name: 'iphone 13 promax', price: "1300$" }, { name: "macbook pro m1", price: "1400$" }, { name: 'apple watch ultra', price: '1200$' }
//         ])
//     }

//     return (
//        <div id="container" className="container">
//             <h1>hello world my name is Hossein Horex</h1>
//             {products.map( ( item ) =>
//                 {
//                      return <Product name={item.name } price={item.price} />
//                  } ) }
//                 <button onClick={clickHandler}>
//                     click to change prices
//             </button>
            
//             {hookCounter}
//         </div>     
//     )
// };

class App extends Component
{
    // state = {
    //     products: [ { title: 'reactjs', price: '1200$', id: Math.floor( Math.random() * 10 ) },
    //         { title: 'node.js', price: '1050$', id: Math.floor( Math.random() * 10 ) },
    //         { title: 'mango.db', price: '800$', id:Math.random() * 100 }
    //     ]
    // }

    // constructor ( props )
    // {
    //     super( props )
        
    //     this.clickHandler = this.clickHandler.bind( this );
    // }
    
    // clickHandler (id)
    // {
    //     console.log(id)
    //     this.setState( {
    //         products: [ { title: 'reactjs', price: '500$', id: Math.floor( Math.random() * 10 ) },
    //         { title: 'node.js', price: '200$', id: Math.floor( Math.random() * 10 ) },
    //         { title: 'mango.db', price: 'free$', id:Math.random() * 100 }]
    //     })
    // }

    render ()
    {
        return (
        //     <div className="container">
        //         { this.state.products.map( (item) =>
        //         {
        //             return (
        //                 <div>
        //                     <Product
        //                         name={ item.title }
        //                         price={ item.price }
        //                         id={ item.id }
        //                         click={ () => this.clickHandler( "new title" ) }
        //                     />
        //                 </div>
        //             )
        //         })}
        //         <button onClick={()=>this.clickHandler(2)}>change price</button>
        //    </div>
            <ProductsList />
        )
    }
}

// function App ()
// {
//     return (
//         <div className="container">
//             <Product name="react.js" price="2000$"/>
//             <Product name="node.js" price="300$"/>
//             <Product name="mango db" price="1200$"/>
//         </div>
//     )
// }

export default App;

