
import styles from './app.css'
import { Component } from "react";
import ProductsList from './components/Product/ProductsList';

class App extends Component
{
    render ()
    {
        return (
            <div className='app' style={styles.app}>
                <h1>shoping items</h1>
                <ProductsList />
            </div>
        )
    }
}

export default App;

