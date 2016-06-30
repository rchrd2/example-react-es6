import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Layout from './layout.jsx';
import Home from './home.jsx';
import SearchResults from './search-results.jsx';

// For memory history (no url changes)
// import { createMemoryHistory } from 'react-router';
// var RouterHistory = createMemoryHistory('/');

// For hash history (#/foo/bar)
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
var RouterHistory = useRouterHistory(createHashHistory)({ queryKey: false });

class ExampleReactComponent extends React.Component {
  render() {
    return (
      <Router history={RouterHistory}>
        <Route path="/" component={Layout}>
          <Route path="/search/*" component={SearchResults}></Route>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
};

window.ExampleReactComponent = ExampleReactComponent;
export { ExampleReactComponent };
