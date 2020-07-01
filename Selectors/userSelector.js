import { createSelector } from 'reselect';

const selectUser = state => state.user;

const makeSelectUsername = () =>
  createSelector(
    selectUser,
    userState => userState.username,
  );
const makeSelectFirstname = () =>
createSelector(
  selectUser,
  userState => userState.firstname,
); 
const makeSelectLastname = () =>
  createSelector(
    selectUser,
    userState => userState.lastname,
  );
const makeSelectStudies = () =>
createSelector(
  selectUser,
  userState => userState.studies,
);
const makeSelectConnected = () =>
createSelector(
  selectUser,
  userState => userState.connected,
);
const makeSelectBooks = () => createSelector(selectUser,userState => userState.books);

export { makeSelectUsername,makeSelectFirstname,makeSelectLastname,makeSelectStudies,makeSelectConnected,makeSelectBooks };