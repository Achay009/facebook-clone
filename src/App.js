import React from 'react';
import './App.css';
import './Header'
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="App">
      {!user 
      ?
      (<Login/>)
      :
      (
        <>
            {/* <h1>Facebook clone with Uche</h1> */}
            <Header />
            {/* App body */}
            <div className="app__body">
              {/* Sidebar  */}
              <Sidebar />
              {/* Feed */}
              <Feed />
              {/* Widgets */}
              <Widgets />
            </div>
        </>
      )}
    </div>
  );
}

export default App;
