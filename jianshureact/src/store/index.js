import { createStore, applyMiddleware, compose  } from 'redux';
import  reducer from './reducer';
import thunk from 'redux-thunk';
// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export  default  store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,  composeEnhancers(
    applyMiddleware(thunk)
));
export default store;