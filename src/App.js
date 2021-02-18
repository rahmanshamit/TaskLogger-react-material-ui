
import React, {Fragment, useEffect} from 'react';
import SearchBar from  './components/layout/SearchBar';
import Logs from  './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import { Provider } from 'react-redux';
import store from './store.js';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

function App() {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar/>
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <Logs />
      </div>
    </Fragment>
    </Provider>
  );
}

export default App;
