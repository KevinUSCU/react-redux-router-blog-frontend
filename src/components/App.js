import React, { Component } from 'react';
import BlogPostList from '../containers/BlogPostList'
import BlogPost from '../containers/BlogPost'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='jumbotron'>
          <div className='container'>
            <div className='row'>
              <div className='display-3'>
                SyntaxError
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <BrowserRouter>
                <Switch>
                  <Route path='/blogposts/:id' component={BlogPost} />
                  <Route path='/' component={BlogPostList} />
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
