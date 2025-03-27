import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store"
import "./Utils/styles.css"

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <div className='mainbody'>
        <App />
      </div>
    </Router>
  </Provider>
);
