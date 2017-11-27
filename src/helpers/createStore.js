import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {
	const axiosInstance = axios.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: { cookie: req.get('cookie') || '' }
	});
	const store = createStore(reducers, {}, applyMiddleware(reduxThunk.withExtraArgument(axiosInstance)));
	return store;
}