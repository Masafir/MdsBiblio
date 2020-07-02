/**
 * Reducer
 *  */

 const initalState = {
   username: "",
   lastname: "",
   firstname: "",
   studies: "mds",
   connected: false,
   borrowed: []
 }

 export default function(state = initalState,action){
   switch (action.type) {
      case "CONNECT_USER":
       return {...state,connected: true,username: action.data.username}
      case "DELETE_USER":
        return {...state,connected: false,username: ''}
      case "BORROW_BOOK":
        return {...state,borrowed: [...borrowed.push(action.data.book)]}
      case "RETURN_BOOK":
        return {...state,borrowed: borrowed.filter(book => book.code != action.data.code)}
     default:
       return state;
   }
 }