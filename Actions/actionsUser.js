
export const addUser = (dispatch,username,password) => {
  password == "root" ? 
  dispatch({ type: "CONNECT_USER",data: {username,password} })
  : console.log('mauvais mot de passe');
}

export const deleteUser  = (dispatch) => { 
  dispatch({ type: "DELETE_USER" })
}