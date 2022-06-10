import React, {Component} from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Logout from "./components/Logout/Logout";
import Auth from "./containers/Auth/Auth";
import Quiz from "./containers/Quiz/Quiz";
import QuizCreator from "./containers/QuizCreatore/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Layout from "./hoc/Layout/Layout";
import { autoLogin } from "./store/actions/auth";

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes = (
      <Routes>
      <Route path="/auth" element={ <Auth /> } />
      <Route path="/quiz/:id" element={ <Quiz /> } />
      <Route path="/" element={ <QuizList /> } />
      <Route path="/logout" element={ !this.props.isAuthenticated ? (<Navigate to="/auth" />) : null}/>
    </Routes>
    )

      if (this.props.isAuthenticated) {
        routes = (
          <Routes>
          <Route path="/quiz-creator" element={ <QuizCreator /> } />
          <Route path="/quiz/:id" element={ <Quiz /> } />
          <Route path="/" element={ <QuizList /> } />
          <Route path="/logout" element={ <Logout /> }/>
          <Route path="/auth" element={ this.props.isAuthenticated ? (<Navigate to="/" />) : null } />
          {/* <Route path="/auth" element={ <Auth /> } /> */}
          {/* <Navigate to="/" /> */}
        </Routes>
        )
      }
    return (
   <Layout>
     { routes }
   </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
