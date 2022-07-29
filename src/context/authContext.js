import createDataContext from './createDataContext';
const AuthReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  {},
  { isSignedIn: false }
);
