// import React, {Component} from 'react';
// import './App.css';
// import Header from './Components/Screens/Home/navbar';
// import Home from './Components/Screens/Home/home';
// import AddMoney from './Components/Screens/AddMoney/addMoney';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// //import Login from './Components/Screens/Signin/login';
// import LoginRedirect from './Components/Screens/Signin/LoginRedirect';
// import RepresentativeDetails from './Components/Screens/Signup/representative-details/RepresentativeDetails';
// import MyProfile from './Components/Screens/Home/profile';
// import BusinessDetails from './Components/Screens/Signup/business-details/BusinessDetails';
// export class App extends Component {
//   constructor(props){
//     super(props)
//     this.state={

//     }
//     this.fetchData=this.fetchData.bind(this)
//   }
//   fetchData(){

//   }
//   render(){
//     return (
//       <>
//         {/* <Router>
//           <div>
//             <Route path='/login/krologin' exact={true} component={Login} />
//           </div>
//         </Router> */}
//         {/* <Router>
//           <LoginRedirect />
//           <Header />
//           <div className="main">
//             <Route path='/accounts' exact={true} component={Home} />
//             <Route path='/addMoney/:account' component={AddMoney} />
//             <Route path='/userDetails' component={RepresentativeDetails} />
//             <Route path='/myProfile' component={MyProfile} />
//             <Route path='/businessDetails' component={BusinessDetails} />
//           </div>
//         </Router> */}

//         <button onClick={this.fetchData}
//         className="btn btn-primary">Fetch
//         </button>
  
//       </>
//     );
//   }
// }

// export default App;



import React, { Component } from 'react'

import {connect, connet} from 'react-redux'

import {fetchData} from './redux/actions'
export class App extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleFetchData =this.handleFetchData.bind(this)
  }
  
  handleFetchData() {
    this.props.fetchData(6);
  }
  render() {
    return (
      <div>
        <button
        onClick={this.handleFetchData}
        className="btn btn-primary"
        >Fetch</button>

        <div>
          {this.props.user}
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchData:(id)=>{
      dispatch(fetchData(id))
    }
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(App)