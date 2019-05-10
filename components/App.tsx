import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import apiAgent from '@/api/ApiAgent';
import CurrentIssues from './PatientIssues/currentIssues';
import Issues from './PatientIssues/Issues';
import './App.css';

class App extends React.Component<any> {
  render() {
    return (
      <BrowserRouter basename="/">
        <div>
         <Link className="issuesLink" to="/issues">Current Issues</Link>
          <Route path="/" exact component={CurrentIssues} />
          <Route path="/issues" exact component={Issues} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);