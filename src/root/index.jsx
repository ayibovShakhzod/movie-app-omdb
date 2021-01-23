import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import store from '../redux/store';
import App from '../container/App';
import MovieState from '../context/movie/state';
// export default () => (
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>
// );

export default () => (
  <MovieState>
    <Router>
      <App />
    </Router>
  </MovieState>
);
