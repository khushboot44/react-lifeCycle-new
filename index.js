import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Student from './student';


class App extends Component {
  constructor(){
    console.log('Contructor render');
    super();
    this.state = {
      name : "Khushboo",
      roll: 101
    }
  }
  static getDerivedStateFromProps(props, state){
console.log('getDerivedStateFromProps render');
console.log(props,state);
return null;
  }

  componentDidMount(){
    console.log('componentDidMount Render');
  }
  
   shouldComponentUpdate(nextState, nextProps){
    console.log('shouldComponentUpdate student');
    if(this.state.roll < 10111){
      console.log('student>>>>>>',nextState,nextProps);
      return true;
      // console.log('student>>>>>>',nextState,nextProps);
    }
    return false;
    
  }

  handleClick = () => {
    this.setState({
      name:'Pooja'
    })
  };
  handleChange = () => {
    this.setState({
      roll: this.state.roll+1
    })
  }
  
  
  render(){
    console.log('render render');
    return(
      <div>
      <Student name={this.state.name} mroll={this.state.roll}/>
      <h1>
      hello {this.state.name}
      </h1>
      <h3>
      roll No: {this.state.roll}
      </h3>
      <button onClick={this.handleClick}>
      Click Me
      </button>
      <button onClick={this.handleChange}>
      Click Me fo roll no
      </button>
     
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
