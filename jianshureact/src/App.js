import React, { Component } from 'react';
import { Provider }  from 'react-redux';
import {BrowserRouter, Route } from 'react-router-dom';

import  Header from './common/header';
import store from './store';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';
import  Detail from './pages/detail/loadable';


class App extends Component {
  render() {
    return (
        <div>
      <Provider store = {store}>
          <div>

        {/*<GlobalStype />*/}
          {/*<GlobalStypeIcon/>*/}
          <BrowserRouter>

          <div>
              <Header/>
              {/*<Route path="/" exact rende={()=><div>home</div>}> </Route>*/}
              {/*<Route path="/detail" exact rende={()=><div>detail</div>}></Route>*/}
              <Route path ="/login" exact component={Login} />
              <Route path ="/" exact component={Home} />
              <Route path ="/detail/:id" exact component={Detail} />
              <Route path ="/write" exact component={Write}/>
          </div>
          </BrowserRouter>
          </div>
      </Provider>
        </div>
    );
  }
}

export default App;
