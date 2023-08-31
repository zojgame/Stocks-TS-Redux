import ReactDOM from 'react-dom/client';
import './global.css';
import { App } from './components';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/:page' element={<App />}></Route>
        </Routes>
      </Router>
    </Provider>
);

