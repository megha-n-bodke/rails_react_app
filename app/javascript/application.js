import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Greetings from "./Greetings";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Hello World!!!!!!</h1>
        <Greetings />
      </Provider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
