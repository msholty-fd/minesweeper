import reducers from './reducers';
import logger from 'redux-logger';

export default function configStore($ngReduxProvider) {
	const middlewares = [
		logger()
	];

	const storeEnhancers = window.devToolsExtension ? [ window.devToolsExtension() ] : undefined;

	$ngReduxProvider.createStoreWith(reducers, middlewares, storeEnhancers);
}
