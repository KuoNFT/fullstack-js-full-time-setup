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
        return { ...state, places: [...state.places, action.payload] };
  
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
  