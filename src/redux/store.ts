import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware();

    /* istanbul ignore next */
    if (
      process.env.NODE_ENV === 'development' &&
      __DEV__ &&
      !process.env.JEST_WORKER_ID
    ) {
      /*
        createDebugger is required for the redux-flipper application.
        It is convenient to debug the application in it: state, warnings...
      */

      const createDebugger = require('redux-flipper').default;
      defaultMiddleware.push(createDebugger());
    }

    return defaultMiddleware;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
