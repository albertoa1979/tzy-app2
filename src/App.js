import Product from './Components/Product';
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import CheckoutPage from './Components/CheckoutPage';
import CheckoutCard from './Components/CheckoutCard';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Footer from './footer/footer';



function App () {
  return (
    <Router>
      <div className="App">  
        <Navbar />
        
        <Switch>
          <Route path='/checkoute-page'>
            <CheckoutPage />
          </Route>
          <Route path='/'>
            <Products/>  
            <Footer />
          </Route>
        </Switch>
        
        
    </div>
    </Router>
  );
}

export default App;
