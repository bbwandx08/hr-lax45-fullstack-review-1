import axios from 'axios';
import React from 'react';

class ListElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      editToggled: false
    }
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeToggleHandler = this.changeToggleHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeNameHandler(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  }

  changeToggleHandler(e) {
    e.preventDefault();
    this.setState(
      {editToggled: !this.state.editToggled}
      )
  }

  handleSubmit() {
    axios.patch(`/api/students/${this.props.person._id}`, {
      name: this.state.name
    })
    .then(() => this.props.getStudents())
    .catch(err => console.error(err))
  }

  render() {
    if(!this.state.editToggled){
        return (
          <span>
            <div onClick={this.changeToggleHandler}>{this.props.person.name}</div>
            <img src={this.props.person.imageUrl}></img>
          </span>
        )
    } else {
      return (
        <span>
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeNameHandler}
            ></input>
          <div>{this.props.person.name}</div>
          <button onClick={this.changeToggleHandler}>Cancel</button>
          <button onClick={this.handleSubmit}>Update</button>
          <img src={this.props.person.imageUrl}></img>
        </span>
      )
    }

  }

}







export default ListElement
// <span>
//   <div>Julian</div>
//   <img src='https://ca.slack-edge.com/T02DNK3PH-UD0AF2EBH-73605fa7261b-512'></img>
// </span>