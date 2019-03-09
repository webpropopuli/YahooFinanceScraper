import React, { Component } from "react";

export default class SweepBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { showData: false };
  }

  checkNow = () => this.setState({ showData: true });

  render() {
    if (!this.state.showData)
      return (
        <>
          {" "}
          <p>
            Check for snapshots? <button onClick={this.checkNow}>Sweep now</button>
          </p>
        </>
      );
    else return <Sweeper />;
    //TBD when Sweeper done I need to change the state??? Lift Props up here
  }
}

/* Show nothing until a sweep is made (btn click). Then show how many snapshots were found and prompt to add to main db
 */
class Sweeper extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{}], showData: false };
  }

  componentDidMount() {
    this.getSweepData();
  }

  // Collect snapshots from TBLsbapshots
  getSweepData = () => {
    fetch("http://localhost:5001/api/sweeper")
      .then(res => res.json())
      .then(data => this.setState({ data, showData: true }));
  };

  // Remove data, force reprompt.
  resetData = () => this.setState({ data: null, showData: false });

  render() {
    if (!this.state.showData) return <></>;

    // const { data } = this.state;

    return (
      <div>
        {`Found ${this.state.data.length} snapshots in database. Do you want to import them to your account?`}
        <button onClick={this.resetData}>{` YES `}</button>
        <button onClick={this.resetData}>{` NO `}</button>
      </div>
    );
  }
}
