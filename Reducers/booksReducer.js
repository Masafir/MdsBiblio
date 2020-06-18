/**
 * Reducer
 *  */

const initalState = {
  books: [{name: "Bel ami",author: "Maupassant"},{name: "Rhinocéros",author: "Ionesco"}],
}

export default function(state = initalState,action){
  switch (action.type) {
    case "value":
      
      break;
  
      default:
        return state;
  }
}