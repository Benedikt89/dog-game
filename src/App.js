import React from 'react';
import './App.css';
import Game from "./components/Game";
import {Provider} from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Game />
      </Provider>
    </div>
  );
};

export default App;
