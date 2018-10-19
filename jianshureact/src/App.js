import React, { Component } from 'react';
import  Header from './common/header';

import GlobalStype from './style.js';
import GlobalStypeIcon from './statics/iconfont/iconfont.js';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStype />
          <GlobalStypeIcon/>
        <Header/>
      </div>
    );
  }
}

export default App;
