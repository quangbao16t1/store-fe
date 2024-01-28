import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import LoginComponent from "./features/login/login";
import RegisterComponent from "./features/register/register";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  Routes,
} from "react-router-dom";
import HeaderComponent from "./layout/header";
import FooterComponent from "./layout/footer";
import MainBody from "./layout/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path="/home" Component={MainBody} />
        </Routes>
        <Routes>
          <Route path="/login" Component={LoginComponent} />
          <Route path="/register" Component={RegisterComponent} />
        </Routes>
      </Router>
      <FooterComponent />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
