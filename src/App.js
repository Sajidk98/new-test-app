import React, { useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import saga from "./saga";
import Main from "./containers/main";

const sagaMiddleWare = createSagaMiddleware(); // for saga
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(saga);

const App = () => {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
