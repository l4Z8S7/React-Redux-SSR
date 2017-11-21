import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../client/reducers';

export default () => {
	const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
	return store;
}