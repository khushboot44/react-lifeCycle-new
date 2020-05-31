import React, { Component } from 'react';

class Marks extends Component{
  constructor(props){
    console.log('Marks Constructor');
    super(props);
    this.state = {
      name: 'Manee',
      rollNo:props.rollNo
    }
  }
  handleChange = () => {
    this.setState({name:'tisha'});
  }
  static getDerivedStateFromProps(props, state){
console.log('getDerivedStateFromProps render student');
console.log(props, state);
if(props.rollNo !== state.roll){
  return {roll:props.roll}
}
return null;
  }
  componentDidMount(){
    console.log('componentDidMount Render student');
  }
  //  handleClick = () => {
  //   this.setState({
  //     roll: this.state.roll+1
  //   })
  // shouldComponentUpdate(nextState, nextProps){
  //   console.log('shouldComponentUpdate student');
  //   if(this.state.rollNo <10111){
  //     console.log('student>>>>>>',nextState,nextProps);
  //   }
  // }
  // }
  render(){
    console.log('Marks render');
    return(
      <div>
         <h3>
            Hello {this.state.name}
            </h3>
            <h3>
            Roll No: {this.state.rollNo}
         </h3>
         <button onClick={this.handleChange}>
         Click Marks
         </button>
        

      </div>
    )
  }
}

export default Marks;