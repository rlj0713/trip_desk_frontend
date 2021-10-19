import React from 'react';
import { connect } from 'react-redux';
import { createGuide } from '../actions/guideActions';

class GuideNew extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          first_name: '',
          last_name: ''
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleFirstNameChange(e) {        
        e.preventDefault();
        this.setState({
            first_name: e.target.value
          })  
    }

    handleLastNameChange(e) {        
        e.preventDefault();
        this.setState({
            last_name: e.target.value
          })  
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.createGuideWithDispatch(this.state)
        window.location.replace(`http://localhost:3001/guides`)
      }

    render() {
        return (
          <form className="new-guide" onSubmit={this.onFormSubmit}>
              
            <input className="input"
                name="first_name"
                type="text"
                placeholder="First Name"
                onChange={this.handleFirstNameChange}
            />
            <input className="input"
                name="last_name"
                type="text" 
                placeholder="Last Name"
                onChange={this.handleLastNameChange}
            />
            <button type="submit">Add Guide</button>
          </form>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      guides: state.guides,
      loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createGuideWithDispatch: (userInput) => dispatch(createGuide(userInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuideNew)