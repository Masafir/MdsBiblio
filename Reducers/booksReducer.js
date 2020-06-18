/**
 * Reducer
 *  */

const initalState = {
  books: [{name: "Bel ami",author: "Maupassant"},{name: "Rhinocéros",author: "Ionesco"}],
}

export default function(state = initalState,action){
  switch (action.type) {
    case "ADD_BOOK":
      const newBooks = state.books;
      newBooks.push(action.data);
      return {
        ...state,
        books: [...newBooks]
      };
  
      default:
        return state;
  }
}