import { App } from './components';
import { store } from './store';
import './global.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import { Provider } from 'react-redux';

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

