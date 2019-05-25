import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserCreate from "../UserCreate";
import LanguageContext from "../../contexts/LanguageContext";

class App extends Component {
  state = { language: null };
  constructor(props){
    super(props);
  }
  onLanguageChange = lng => {
    this.setState({language: lng})
  }
  render(){
    return (
      <div className="ui container">
        <div>
          select Language: 
          <i className="flag us" onClick={ () => this.onLanguageChange('en') }/>
          <i className="flag nl" onClick={ () => this.onLanguageChange('du') }/>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate/>
        </LanguageContext.Provider>
      </div>
    )
  }
}
App.propTypes = {
}

export default App;