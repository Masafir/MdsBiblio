/**
 * Reducer
 *  */

 const initalState = {
   username: "",
   lastname: "",
   firstname: "",
   studies: "mds",
   connected: false,
   borrowed: ["bite"]
 }

 export default function(state = initalState,action){
   switch (action.type) {
      case "CONNECT_USER":
       return {...state,connected: true,username: action.data.username}
      case "DELETE_USER":
        return {...state,connected: false,username: ''}
      case "BORROW_BOOK":
        return {...state,books: action.data.book}
     default:
       return state;
   }
 }