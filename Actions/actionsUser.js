
export const addUser = (dispatch,username,password) => {
  password == "root" ? 
  dispatch({ type: "CONNECT_USER",data: {username,password} })
  : console.log('mauvais mot de passe');
}

export const deleteUser  = (dispatch) => { 
  dispatch({ type: "DELETE_USER" })
}

export const borrowBook = (dispatch,newData,books) => {
  if(books.find(book => book.data == newData.code))
  {
    dispatch({type: "BORROW_BOOK",data: {book: {...newData}}})
    return true;
  }
  else {
    return false;
  }

}

export const returnBook = (dispatch,book) => {
  dispatch({type: "RETURN_BOOK",data: {...book}})
}