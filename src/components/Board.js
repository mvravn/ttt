import React, { Component } from 'react'
import { connect } from 'react-redux'

class Board extends Component {
  
  /* handleClick = () => {
    console.log('this.props.board[0]: ',this.props.board[0]);
    this.props.placePiece(this.props.board[0].tile)
  } */

  handleClick = function(value){
    this.props.placePiece(this.props.board[value].tileIndex)
  }

  /* 
  Kig på: https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method 
  */

  render() {
    console.log(this.props.board);

    const tiles = this.props.board;
    const boardLayout = tiles.map(tile => {
      /* console.log(tile); */
      var piece = ' ';
      if (tile.occupant === 1) { piece = 'X' }
      else if (tile.occupant === 2) { piece = 'O' }
      
      return (
        <div className="tile surface" id={`tile_${tile.tileIndex}`} onClick={() => this.handleClick(tile.tileIndex)}>{piece}</div>
      )
    })

    return (
      <div className="board">
        {/* https://stackoverflow.com/questions/10179815/get-loop-counter-index-using-for-of-syntax-in-javascript */}
        { boardLayout }
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
    placePiece: (tileIndex) => { dispatch ({type: 'PLACE_PIECE', tileIndex: tileIndex});}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
