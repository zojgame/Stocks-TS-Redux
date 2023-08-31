import './App.css';
import { StocksContainer, Pagination, Panel } from '../';

function App() {

  return (
    <div className="App">
        <Panel />
        <StocksContainer />      
        <Pagination />
    </div>
  );
}

export { App };
