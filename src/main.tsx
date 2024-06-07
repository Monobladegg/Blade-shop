import ReactDOM from "react-dom/client";
import App from "src/App";
import "./index.scss";

import { BrowserRouter } from "react-router-dom";

import store from "src/redux/store";

import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
