import { appReducer } from 'containers/App/store';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const hasExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeWith = hasExtension
  ? compose(applyMiddleware(thunk), hasExtension)
  : compose(applyMiddleware(thunk));

const staticReducers = {
  app: appReducer,
};

// Configure the store
function configureStore(initialState) {
  const store = createStore(createReducer(), initialState, composeWith);

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Return the modified store
  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

const store = configureStore();

export default store;
