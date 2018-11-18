
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Board extends Component {
  
  handleClick = () => {
    this.props.placePiece(this.props.board)
  }
   
  render() {
    console.log(this.props.board);

    return (
      <div className="board">
        <div className="tile surface" id="tile_0" onClick={this.handleClick}>&nbsp;X</div>
        <div className="tile surface" id="tile_1">&nbsp;X</div>
        <div className="tile surface" id="tile_2">&nbsp;X</div>
        <div className="tile surface" id="tile_3">&nbsp;X</div>
        <div className="tile surface" id="tile_4">&nbsp;X</div>
        <div className="tile surface" id="tile_5">&nbsp;X</div>
        <div className="tile surface" id="tile_6">&nbsp;X</div>
        <div className="tile surface" id="tile_7">&nbsp;X</div>
        <div className="tile surface" id="tile_8">&nbsp;X</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tiles: state.tiles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placePiece: (tile) => { dispatch ({type: 'PLACE_PIECE', tile: tile})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
