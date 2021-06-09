import './App.css';
import Header from './Components/Screens/Home/navbar';
import Home from './Components/Screens/Home/home';
import AddMoney from './Components/Screens/AddMoney/addMoney';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Login from './Components/Screens/Signin/login';
import LoginRedirect from './Components/Screens/Signin/LoginRedirect';
import RepresentativeDetails from './Components/Screens/Signup/representative-details/RepresentativeDetails';
import MyProfile from './Components/Screens/Home/profile';
import BusinessDetails from './Components/Screens/Signup/business-details/BusinessDetails';
function App() {

  return (
    <>
      {/* <Router>
        <div>
          <Route path='/login/krologin' exact={true} component={Login} />
        </div>
      </Router> */}
      <Router>
        <LoginRedirect />
        <Header />
        <div className="main">
          <Route path='/accounts' exact={true} component={Home} />
          <Route path='/addMoney/:account' component={AddMoney} />
          <Route path='/userDetails' component={RepresentativeDetails} />
          <Route path='/myProfile' component={MyProfile} />
          <Route path='/businessDetails' component={BusinessDetails} />
        </div>
      </Router>

    </>
  );
}

export default App;
