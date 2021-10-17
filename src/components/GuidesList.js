import React from 'react';
import { deleteGuides } from '../actions/guideActions';
import { fetchGuides } from '../actions/guideActions';
import { connect } from 'react-redux';

class GuidesList extends React.Component {
  
    componentDidMount() {
        this.props.fetchGuidesWithDispatch()
    }

    handleDelete(guide) {
        let g = window.confirm("Are you sure you want to remove this guide?");
            if (g == true) {
                this.props.deleteGuidesWithDispatch(g)
        }
    }

    // Why is this.props.guides undefined?
    render() {
        console.log(`Guide List ${this.props.guides}`)
    return (
        <div></div>
    //   this.props.guides.map(guide => 
    //     <div key={guide.id} className="guideCard">
    //         First Name: { guide.first_name }<br/>
    //         Last Name: { guide.last_name }<br/>
    //         <div>
    //           <button className="crudButton" onClick={() => this.handleDelete(guide)}>Delete</button>
    //         </div>
    //     </div>)
    )
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
    deleteGuidesWithDispatch: (anyGuideObject) => dispatch(deleteGuides(anyGuideObject)),
    fetchGuidesWithDispatch: () => dispatch(fetchGuides())
  }
} 
  

export default connect(null, mapDispatchToProps)(GuidesList);