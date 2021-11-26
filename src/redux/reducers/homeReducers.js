import { GET_ARTIST_DATA } from "../actions/actions";
import { initialState } from "../store/store";

const homeReducers = (state = initialState.home, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ARTIST_DATA:
      return {
        ...state,
        homeData: payload,
      };
    default:
      return state;
  }
};

export const handleArtist = (artistName, category) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers: new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          }),
        }
      );
      let result = await response.json();
      let songInfo = result.data;
      
      dispatch({
        type: GET_ARTIST_DATA,
        payload: {key: category, data: songInfo[0]},
      })
      
    } catch (err) {
      console.log(err);
    }
  };
};



export default homeReducers;