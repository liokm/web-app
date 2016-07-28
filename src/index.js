// @flow
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Router, useRouterHistory, IndexRedirect } from 'react-router';
import { Provider } from 'mobx-react';
import { createHistory } from 'history';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { WindowResizeListener } from 'react-window-resize-listener';
import uistore from './stores/ui';
import DriverHome from './components/driver/Home';
import ReportHome from './components/reports/Home';
import { findRoot } from './utils';

// For material-ui
injectTapEventPlugin();

const browserHistory = useRouterHistory(createHistory)({
  basename: '/Portal'
});

class App extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render() {
    return (
      <div>
        <WindowResizeListener onResize={uistore.onResize} />
        {this.props.children}
      </div>
    );
  }
}

class AppWrapper extends Component {
  render() {
    return (
      <Provider uistore={uistore}>
        <MuiThemeProvider>
          <Router history={browserHistory}>
            <Route path='/' component={App}>
              <IndexRedirect to='report/home' />
              <Route path='driver/driverhome' component={DriverHome} />
              <Route path='report/home' component={ReportHome} />
            </Route>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

render(<AppWrapper />, findRoot());

if (module.hot) {
  module.hot.accept();
}
