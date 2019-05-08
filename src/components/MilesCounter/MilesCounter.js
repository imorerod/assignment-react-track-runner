import React, { Component } from 'react';

class MilesCounter extends Component {
  render() {
    return (
          <div>
              Recent Run: {this.props.recent}
              Longest Run: {this.props.logLongestRun}
          </div>
    );
  }
}

export default MilesCounter;