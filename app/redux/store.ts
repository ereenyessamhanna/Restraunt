import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { rootReducer, AppState } from './reducers';
import { ReduxAction } from './actions/types';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, ReduxAction>),
);

export default store;
