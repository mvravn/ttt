import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Board extends Component {
  
  handleClick = () => {
    console.log('this.props.board[0]: ',this.props.board[0]);
    this.props.placePiece(this.props.board[0].tile)
  }

  /* Kig på: https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method */

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
    board: state.board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placePiece: (tile) => { dispatch ({type: 'PLACE_PIECE', tile: tile})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
