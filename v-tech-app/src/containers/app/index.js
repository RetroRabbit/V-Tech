import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../login'
import Lgn_one from '../lgn_one'
import Lgn_two from '../lgn_two'
import Lgn_three from '../lgn_three'

const App = () => (
  <div>
      <header>
      <Link to="/">Home</Link>
      <Link to="/register">About</Link>
    </header>
    <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Lgn_one} />
        <Route exact path="/register_two" component={Lgn_two} />
        <Route exact path="/register_three" component={Lgn_three} />
    </main>
  </div>
)

export default App