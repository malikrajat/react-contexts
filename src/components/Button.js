import React, {Component} from 'react';
import LanguageContext from "../contexts/LanguageContext";
import PropTypes from 'prop-types';

class Button extends Component {
  static contextType = LanguageContext;
  constructor(props){
    super(props);
  }
  render(){
    // const text = this.context === 'en' ? 'Submit' : 'dutch-submit';
    return (
      <div className="">
        <button className="ui primary"> 
        {/* {text} */}
          <LanguageContext.Consumer>
            { value => value === 'en' ? 'Submit' : 'dutch-submit' }
          </LanguageContext.Consumer>
        </button>
      </div>
    )
  }
}
Button.propTypes = {
}

export default Button;