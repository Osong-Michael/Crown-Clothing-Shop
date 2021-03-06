import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './rootReducer';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middlewares));

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);