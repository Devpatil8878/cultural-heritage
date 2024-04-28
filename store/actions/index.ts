// actions.js
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER'



export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});


export const setUSER = (user: any) => ({
  type: SET_USER,
  payload: {
    fullname: user.displayName,
    email: user.email,
  }
})




