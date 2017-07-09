import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDKPo7ouVbLwqex7rU2oBPqN4qBqoEtlAE';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDom.render(<App />, document.querySelector('.container'))
