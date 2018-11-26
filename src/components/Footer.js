import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer surface">Footer text</div>

        <div className="tile surface"></div>
        <div className="tile surface"></div>
        <div className="tile surface"></div>
      </React.Fragment>
    )
  }
}

export default Footer
