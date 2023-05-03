// reducers/user.js
const initialState = {
    nickname: '',
    places: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NICKNAME':
        return { ...state, nickname: action.payload };
  
      case 'ADD_PLACE':
        const updatedPlaces = [...state.places, action.payload];
        console.log('UpdatedPlaces is'+ updatedPlaces);
        return { ...state, places: updatedPlaces };
  
      case 'DELETE_PLACE':
        return {
          ...state,
          places: state.places.filter((place) => place.name !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  