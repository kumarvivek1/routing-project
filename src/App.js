import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import UserShow from './UserShow'
import Posts from './Posts'
import ShowPost from './ShowPost'
import './style.css'

function App() {
  return (
    <div>
      <ul id='nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
      </ul>
      <Route path='/' component={Home} exact={true} />
      <Route path='/users' component={Users} exact={true} />
      <Route path='/posts' component={Posts} exact={true} />
      <Route path='/users/:id' component={UserShow} />
      <Route path='/posts/:id' component={ShowPost} />
    </div>
  );
}

export default App;
