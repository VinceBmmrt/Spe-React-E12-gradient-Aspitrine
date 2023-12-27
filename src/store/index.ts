import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './reducers/color';

const store = configureStore({
  // A la création du store
  // Redux va exécuter chaque reducer avec l'action "@@INIT"
  reducer: {
    color: colorReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
