import React from 'react';
import { fetchGuides, deleteGuides } from '../actions/guideActions';
import { connect } from 'react-redux';

class GuidesList extends React.Component {
  
    componentDidMount() {
        this.props.fetchGuidesWithDispatch()
    }

    // This successfully deletes the guide but does not trigger a re-render.
    // There is an issue:
    // A guide that is assigned a reservation can be deleted causing an error on the
    //     reservation index page.
    handleDelete(guide) {
        let g = window.confirm("Are you sure you want to remove this guide?");
            if (g === true) {
                this.props.deleteGuidesWithDispatch(guide)
                // This is very sloppy
                window.location.replace('http://localhost:3001/guides')
        }
    }

    displayGuides() {
        return (    
            this.props.guides.map(guide => 
                <div key={guide.id} className="guideCard">
                    First Name: { guide.attributes.first_name }<br/>
                    Last Name: { guide.attributes.last_name }<br/>
                    <div>
                    <   button className="crudButtonGuide" onClick={() => this.handleDelete(guide)}>Delete</button>
                    </div>
                </div>)
        )
    }

    render() {
        return (
            <div>
                {this.props.guides ? this.displayGuides() : "Loading..."}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      guides: state.guidesReducer.guides.data,
      loading: state.guidesReducer.loading
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    deleteGuidesWithDispatch: (anyGuideObject) => dispatch(deleteGuides(anyGuideObject)),
    fetchGuidesWithDispatch: () => dispatch(fetchGuides())
  }
} 
  

export default connect(mapStateToProps, mapDispatchToProps)(GuidesList);