import React from 'react';
import {  Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SideBar from '../../components/SideBar';

/**
 * Pages
 */
import Home from '../Home';
import InputTest from '../InputTest';

const Main = () => {
  return (
    
      <div className="wrapper">
        <SideBar />
        <div className="main-panel">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/antonym/input-test" component={InputTest}/>
          <Footer />
        </div>
      </div>
    
  )
};


export default withRouter(connect()(Main));