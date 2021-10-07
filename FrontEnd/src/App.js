import React, { Component } from 'react';
import Vehicles from './components/vehicles';
import {Route , Redirect, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import About from './components/about';
import Faq from './components/faq';
import NotFound from './components/notFound';
import Navbar from './components/common/navbar';
import VehicleForm from './components/vehicleForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <ToastContainer/>
      <Navbar/>
      <main className="container">
        <Switch>
        <Route path="/vehicles/:id" component={VehicleForm}></Route>
        <Route path="/loginForm" component={LoginForm}></Route>
        <Route path="/registerForm" component={RegisterForm}></Route>
        <Route path="/vehicles" component={Vehicles}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/faq" component={Faq}></Route>
        <Route path="/notFound" component={NotFound}></Route>
        <Redirect from="/" exact to="/vehicles"/>
        <Redirect to="/notFound"/>
        </Switch>
      </main>
      </React.Fragment> 
     );
  }
}
 
export default App;