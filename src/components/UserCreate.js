import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Button from "./Button";

class UserCreate extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="ui form">
        <Field/>
        <Button/>
      </div>
    )
  }
}
UserCreate.propTypes = {
}

export default UserCreate;