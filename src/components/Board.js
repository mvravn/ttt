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


    return (
      <div className="board">
        {/* <div className="tile surface" id="tile_0" onClick={this.handleClick}>&nbsp;X</div> */}
        {/* Bør loopes ud i stedet for at blive hardcoded */}
        {/* 
        <div className="tile surface" id="tile_0" onClick={() => this.handleClick(0)}>&nbsp;X</div>
        <div className="tile surface" id="tile_1" onClick={() => this.handleClick(1)}>&nbsp;X</div>
        <div className="tile surface" id="tile_2" onClick={() => this.handleClick(2)}>&nbsp;X</div>
        <div className="tile surface" id="tile_3" onClick={() => this.handleClick(3)}>&nbsp;X</div>
        <div className="tile surface" id="tile_4" onClick={() => this.handleClick(4)}>&nbsp;X</div>
        <div className="tile surface" id="tile_5" onClick={() => this.handleClick(5)}>&nbsp;X</div>
        <div className="tile surface" id="tile_6" onClick={() => this.handleClick(6)}>&nbsp;X</div>
        <div className="tile surface" id="tile_7" onClick={() => this.handleClick(7)}>&nbsp;X</div>
        <div className="tile surface" id="tile_8" onClick={() => this.handleClick(8)}>&nbsp;X</div> 
        https://stackoverflow.com/questions/10179815/get-loop-counter-index-using-for-of-syntax-in-javascript
        */}
        {this.props.board.forEach((value, i) => console.log('tileIndex: ', this.props.board[i]))}

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
