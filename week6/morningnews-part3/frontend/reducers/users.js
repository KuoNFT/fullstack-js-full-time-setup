// reducers/user.js

const initialState = {
    isConnected: false,
    username: '',
  };
  
  export default function user(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
        return {
          isConnected: action.payload.isConnected,
          username: action.payload.username,
        };
      case 'LOGOUT_USER':
        return initialState;
      default:
        return state;
    }
  }
  