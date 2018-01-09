import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
//import Route from 'react-router-dom'
import { Route} from 'react-router-dom'
import store, { history } from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App'
import AppChat from './containers/chats'
import Lgn_one from './containers/lgn_one'
import Lgn_two from './containers/lgn_two'
import Lgn_three from './containers/lgn_three'
import Home from './containers/login'


import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div class="main">
        
         
        <Route exact path="/" component={Home} />    
     <Route exact path="/register" component={Lgn_one} />
     <Route exact path="/register_two" component={Lgn_two} />
     <Route exact path="/register_three" component={Lgn_three} />
     <Route exact path="/chats" component={AppChat} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)