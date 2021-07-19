import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      imgurl: ''
    }
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }

  componentDidMount() {
    this.getRandomStudent();
  }

  getRandomStudent(){
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.props.studentList.length);
    // Todo: Add your logic here to grab one random student
    this.setState({
      name: this.props.studentList[ind].name,
      imgurl: this.props.studentList[ind].imageUrl
    })

  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.imgurl}></img>
          <h1>name: {this.state.name}</h1>
        </div>
        <button onClick={this.getRandomStudent}>Randomize</button>
      </div>
    )
  }
}