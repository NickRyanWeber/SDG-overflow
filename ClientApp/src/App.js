import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { FetchData } from './pages/FetchData'
import { Counter } from './pages/Counter'
import AskQuestionPage from './pages/AskQuestionPage.jsx'
import Login from './pages/Login.jsx'
import NewUser from './pages/NewUser.jsx'
import QuestionPage from './pages/QuestionPage.jsx'
import Testing from './Testing'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/hello" component={Testing} />
        <Route path="/new-question" component={AskQuestionPage} />
        <Route path="/login" component={Login} />
        <Route path="/new-user" component={NewUser} />
        <Route path="/{:qId}" component={QuestionPage} />
      </Layout>
    )
  }
}
