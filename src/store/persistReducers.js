import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'godtelegrambot',
      storage,
      whitelist: ['auth', 'user', 'config'],
    },
    reducers
  );

  return persistedReducer;
};
