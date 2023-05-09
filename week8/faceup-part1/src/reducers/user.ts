// src/reducers/user.ts
type UserState = {
    email: string;
  };
  
  const initialState: UserState = {
    email: '',
  };
  
  type UserAction = {
    type: 'SET_EMAIL';
    payload: string;
  };
  
  const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  