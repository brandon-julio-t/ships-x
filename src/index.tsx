import React from 'react';
import ReactDom from 'react-dom';
import Routing from './routing';
import Bootstrap from './bootstrap';

function App() {
  return (
    <Bootstrap>
      <Routing />
    </Bootstrap>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
