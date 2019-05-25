import React, {Component} from 'react';
import LanguageContext from "../contexts/LanguageContext";
import PropTypes from 'prop-types';

class Field extends Component {
    static contextType = LanguageContext;
  constructor(props){
    super(props);
  }
  render(){
     const text = this.context === 'en' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label> {text } </label>
        <input/>
      </div>
    )
  }
}
Field.propTypes = {
}

export default Field;