import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {

  handleClick = () => { if(!this.props.isGameOn){
    this.props.changeIcon(this.props.icon)}
    /* console.log('click!', this.props.icon) */
  }

  render() {
    const theIcon = this.props.icon;
    console.log('this.props ', this.props);
    
    return (
      <React.Fragment>
        <div className="footer surface">Footer text</div>

        <div className="tile surface"></div>
        <div className="tile surface" id="iconPicker" onClick={() => this.handleClick(theIcon)}>{this.props.icon}</div>
        {/* <div className="tile surface"></div> */}
        <div className="tile surface"></div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    icon: state.pickIcon.icon,
    isGameOn: state.place.isGameOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeIcon: (icon) => { dispatch ({type: 'CHANGE_ICON', icon: icon});}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
