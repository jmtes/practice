import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });

  return (
    // By having just one root reducer, Redux eliminates the need to wrap your app with several different context providers! We can get by with just this one:
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
