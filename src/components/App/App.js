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
    const newRun = parseInt(this.state.newRun);
    const longestRun = parseInt(this.state.longestRun);
    
    if(newRun > longestRun){
      this.setState({
        recentRun: newRun,
        longestRun: newRun,
        newRun: '',
      })
    } else {
      this.setState({
        recentRun: newRun,
        longestRun: longestRun,
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