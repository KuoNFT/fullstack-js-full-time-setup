import '../styles/globals.css';
import Head from 'next/head';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import activitiesReducer from '../reducers/activities';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


const rootReducer = combineReducers({
  activities: activitiesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};



const store= configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});




const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Time tracker</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
