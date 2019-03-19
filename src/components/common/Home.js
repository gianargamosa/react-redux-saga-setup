// @flow

import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import PostsPage from '../PostsPage'
import NewPostPage from '../NewPostPage'
import EditPostPage from '../EditPostPage'
import PostPage from '../PostPage'

type Props = {
    match: {
        url: string
    }
}

export default function Home({match: {url}}: Props) {
  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/home" className="header-brand">
            Home
          </Link>
        </div>
      </div>
      <div className="container">
        <Switch>
          <Route 
            exact
            path={`${url}`}
            render={ () => <Redirect to={`${url}/posts`} />}
          />
          <Route exact path={`${url}/posts`} component={PostsPage} />
          <Route exact path={`${url}/posts/new`} component={NewPostPage}/>
          <Route exact path={`${url}/posts/:id`} component={PostPage} />
          <Route 
            exact
            path={`${url}/posts/:id/edit`}
            component={EditPostPage}
          />
          <Redirect to="/error" />
        </Switch>
      </div>
    </div>
  )
}
