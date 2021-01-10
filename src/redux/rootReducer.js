import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
const rootPersistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
});

export default persistReducer(rootPersistConfig, rootReducer);
