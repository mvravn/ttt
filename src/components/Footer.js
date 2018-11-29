import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {

  /* handleClick = () => {
    this.props.changeIcon()
  } */

  render() {
    return (
      <React.Fragment>
        <div className="footer surface">Footer text</div>

        <div className="tile surface"></div>
        {/* <div className="tile surface" id="iconPicker" onClick={() => this.handleClick(icon)}>this.props</div> */}
        <div className="tile surface"></div>
        <div className="tile surface"></div>
      </React.Fragment>
    )
  }
}
/* 
const mapStateToProps = (state) => {
  return {
    icon: state.icon.icon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeIcon: (icon) => { dispatch ({type: 'CHANGE_ICON', icon: icon});}
  }
}
*/
export default Footer
