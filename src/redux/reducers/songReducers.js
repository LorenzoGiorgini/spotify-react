import { GET_PLAYER_SONG } from "../actions/actions";



const songInitialState = {
  playerSong: {}
};


const songReducers = (state = songInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_PLAYER_SONG:
      return {
        ...state,
        playerSong: payload
      };
    default:
      return state;
  }
};


export default songReducers