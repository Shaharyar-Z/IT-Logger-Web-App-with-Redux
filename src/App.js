import React, { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddDeveloperModal from "./components/developers/AddDeveloperModal";
import DeveloperListModal from "./components/developers/DeveloperListModal";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // initialize Materialize js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddDeveloperModal />
          <DeveloperListModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
};

export default App;
