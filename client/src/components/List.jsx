import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.list.map((person) => (
      <ListElement getStudents={props.getStudents} person={person} key={person._id}/>
    ))
  }
  </div>


export default List
 
