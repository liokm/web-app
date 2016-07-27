import React, { Component } from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import { Route, Router, useRouterHistory, IndexRedirect } from 'react-router';
import { Provider } from 'mobx-react';
import { createHistory } from 'history';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import ReportPage from './components/ReportPage';

// For material-ui
injectTapEventPlugin();

const browserHistory = useRouterHistory(createHistory)({
  basename: '/Portal'
});

class DriverHome extends Component {
  render() {
    return (
      <div>Driver Home</div>
    );
  }
}

class ReportHome extends Component {
  render() {
    return (
      <div>Reports Home</div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <AppBar title='EROAD' />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

class AppWrapper extends Component {
  render() {
    return (
      <Provider state={{}}>
        <MuiThemeProvider>
          <Router history={browserHistory}>
            <Route path='/' component={App}>
              <IndexRedirect to='/driver/driverhome' />
              <Route path='driver/driverhome' component={DriverHome} />
              <Route path='report/home' component={ReportHome} />
            </Route>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

render(<AppWrapper />, document.getElementById('web-app'));

if (module.hot) {
  module.hot.accept();
}
