import React from "react";
import {BsFillPlayFill} from 'react-icons/bs'

import {connect} from "react-redux"

import { GET_PLAYER_SONG } from "../redux/actions/actions";


const mapStateToProps = (state) => {
  return state.song
}

const mapDispatchToProps = (dispatch) => ({
  changePlayerSong : (track) => {
    dispatch({
      type: GET_PLAYER_SONG,
      payload: track
    })
  }
})

const Song = ({ track , song , changePlayerSong }) => (
  <div className="py-3 trackHover">
    <BsFillPlayFill  onClick={() => {
      return changePlayerSong(track)
    }}/>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);

export default connect(mapStateToProps , mapDispatchToProps)(Song);