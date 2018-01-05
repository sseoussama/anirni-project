import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'
const store=createStore(reducers,{},applyMiddleware(reduxThunk)); 
ReactDOM.render(
    <Provider store={store}>
     <App/>
    </Provider>
   , document.getElementById('root'));
registerServiceWorker();
