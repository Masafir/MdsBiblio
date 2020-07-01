/**
 * Reducer
 *  */

 const initalState = {
   username: "",
   lastname: "",
   firstname: "",
   studies: "mds",
   connected: false,
   books: []
 }

 export default function(state = initalState,action){
   switch (action.type) {
     case "CONNECT_USER":
       return {...state,connected: true,username: action.data.username}
      case "DELETE_USER":
        return {...state,connected: false,username: ''}
     default:
       return state;
   }
 }