import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store/store.js";
import App from './containers/App';
//import showResults from "./showResults";
import './styles/style.css';

ReactDOM.render(
     <Provider store={store}>
        <App />
     </Provider>,
    document.getElementById('root')
);
//<SimpleForm onSubmit={showResults} />
