import React from 'react';
import Items from './components/Items';
import Nav from './components/Nav';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name:["讀書", "寫作業", "畫畫"],
      item: []
    }
  }
  componentWillMount(){
    this.setState({
      item: [
        {name:"讀書", completed: "", id: "i1"},
        {name:"寫作業", completed: "", id: "i2"},
        {name:"畫畫", completed: "", id: "i3"}
      ]
    })
  }
  render() {
    return(
      <div className="container">
        <p className="title">To Do List</p>
        <input type="text"/><span><button>Add</button></span>
        <Nav />
        <Items name={this.state.item} />
      </div>    
    );
  }
}

export default App;
