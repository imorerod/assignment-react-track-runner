import React, { Component } from 'react';

class App extends Component {
  state = {
    newRun: '', // value sitting in the input field
    recentRun: 0,
    longestRun: 0,
  }

// changing newRun value
  newRunChange = (event) => {
    this.setState({
      newRun: event.target.value
    })
   
  }


  clickNewRun = () => {
    if(Number(this.state.newRun) > Number(this.state.longestRun)){
      this.setState({
        recentRun: this.state.newRun,
        longestRun: this.state.newRun,
        newRun: '',
      })
    } else {
      this.setState({
        recentRun: this.state.newRun,
        longestRun: this.state.longestRun,
        newRun: '',
      })
    }
    
  }


  render() {
    return (
      <div className="topDiv">
        
          <header>
            <h1>React Track Runner</h1>
          </header>

          <input
            type="number"
            value={this.state.newRun}
            placeholder="Miles Ran"
            onChange={this.newRunChange} // onChange doesn't live update, in this case anyway
          />

          <button onClick={this.clickNewRun}>Add New Run</button>
          
          <div>Recent Run: {this.state.recentRun}</div>
          <div> Longest Run: {this.state.longestRun}</div>
       
      </div>
    
    );
  }
}

export default App;