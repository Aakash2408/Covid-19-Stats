import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";


import About from "./Components/About";
import Home from "./Components/Home";

import { connect } from "react-redux";
import loader from "./Components/Images/loader.svg";
import "./App.css"
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.props.fetchStateWise();
  // }

  render() {
    return (
      <div className="App">
        {this.props.loading?
        <div className="loader">
          <img style={{ width: "10em" }} src={loader} alt="a" />
        </div>:null }
        {/* <Hello></Hello> */}
        <BrowserRouter>
          <Header />

          <Switch>
           
            <Route exact path={"/about"} component={About} />{" "}
            <Route path={"/"} component={Home} />{" "}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     stateData: state.stateData,
//     loading:state.loading
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchStateWise: () => dispatch(fetchStateWise()),
//   };
// };
export default  App ;
// export default App;
