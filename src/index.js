import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store/store.js";
//import App from './containers/App';
//import showResults from "./showResults";
import Form from "./Form";
import ProgressBar from './components/ProgressBar';
import './styles/style.css';

ReactDOM.render(
     <Provider store={store}>
        <div className="app">
            <h2>Sign up</h2>
            <ProgressBar />
            <Form/>
            <p>Next-></p>
        </div>
     </Provider>,
    document.getElementById('root')
);
//<SimpleForm onSubmit={showResults} />
