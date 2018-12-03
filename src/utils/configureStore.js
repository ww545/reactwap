import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

 const  JiuNiPi= () => {
    let store = createStore(persistedReducer,compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():fn=>fn
    ));
    let persistor = persistStore(store)
    return { store, persistor }
}
export default JiuNiPi