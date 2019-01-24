import React, { Component } from 'react'
import { connect } from 'react-redux'

/* Ændre og animere https://stackoverflow.com/questions/34700425/react-animate-element-when-property-changes/34704054 

https://www.reddit.com/r/reactjs/comments/6pofq9/how_to_trigger_an_animation_when_prop_changes/
*/

class Board extends Component {

  handleClick = (boardlocation) => {
    this.props.placePiece(this.props.board[boardlocation].tileIndex)
  }

  componentDidUpdate(prevProps){
    console.log("prevProps ", prevProps);
    console.log("prevProps.current ", prevProps.current);

    /* if (prevProps.current !== this.props.current){
      if (prevProps.current === this.props.id){runBlueEmpty()}
      if (this.props.current === this.props.id){runBlueFill()}
    } */
  }

  render() {
    console.log("Board state: ", this.props.board);
    console.log("Props on board: ", this.props);
    
    const tiles = this.props.board;
    const boardLayout = tiles.map(tile => {
      var piece = '';
      if (tile.occupant === 1) { piece = this.props.icon }
      else if (tile.occupant === 2) {
        if(this.props.icon === 'X'){ piece = 'O' }
        else{ piece = 'X' }
      }
      return (
        <div className="tile surface" id={`tile_${tile.tileIndex}`} onClick={() => this.handleClick(tile.tileIndex)} key={tile.tileIndex}>{piece}</div>
      )
    }
    
    /* console.log("prevProps ", prevProps);
    
    Skal dette ind her?
    componentDidUpdate(prevProps, prevState){
      if (prevProps.current !== this.props.current){
        if (prevProps.current === this.props.id){runBlueEmpty()}
        if (this.props.current === this.props.id){runBlueFill()}
      }
    } */
   
    )

    return (
      <div className="board">
        { boardLayout }
      </div>
    )
  }
}

/* https://youtu.be/sh6hZKt-jh0?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&t=209 Her sættes rootReducerens ekstra key (place) på */
const mapStateToProps = (state) => {
  return {
    board: state.place.board,
    icon: state.pickIcon.icon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placePiece: (tileIndex) => { dispatch ({type: 'PLACE_PIECE', tileIndex: tileIndex});}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
