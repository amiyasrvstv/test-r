import React from 'react';
import moment from 'moment';
import './currentIssues.css';

interface CurrentIssuesData {
  description: String,
  date: String
};


export default class CurrentIssues extends React.Component {
  state = {
    apiData: [
      {
        description: 'Enroll in Care Coordination',
        date: '10/08/2018',
      },
      {
        description: 'Gap in care identified',
        date: '08/10/2016',
      },
    ]
  };
  constructor(props: any) {
    super(props)
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByDescription = this.sortByDescription.bind(this);
  };

  createTableData(apiData: CurrentIssuesData, index: number) {
    return (
      <div className="row" key={index}>
          <div className="box d">{apiData.description}</div>
          <div className="box e">{apiData.date}</div>
      </div>
    );
  }

  sortByDescription() {
    const table = this.state.apiData.sort();
    this.setState({ apiData: table });
  }

  sortByDate() {
    const table = this.state.apiData.sort((a, b) => {
      return moment(a.date, "D/M/YYYY").valueOf() - moment(b.date, "D/M/YYYY").valueOf();
    });
    this.setState({ apiData: table });
  }

  createHeader() {
    return (
      <React.Fragment>
        <div className="box a" onClick={this.sortByDescription}>Description</div>
        <div className="box b" onClick={this.sortByDate}>Earliest Target Completion Date</div>
      </React.Fragment>
    )
  };

  render() {
    return(
      <div className="wrapper">
        {this.createHeader()}
        {this.state.apiData.map((data, index) => this.createTableData(data, index))}
      </div>
    )
  };
}