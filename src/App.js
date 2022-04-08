import { Routes, Route, Link} from 'react-router-dom';

import './App.scss';

import { Home } from './components/Home/Home';
import { Todos } from './components/Todos/Todos';
import { Photos } from './components/Photos/Photos';

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <Link className="header__link" to='/'>Home</Link>
        <Link className="header__link" to='/todos'>Todos</Link>
        <Link className="header__link" to='/photos'>Photos</Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/todos' element={<Todos />}/>
        <Route path='/photos' element={<Photos />}/>
      </Routes>
    </div>
  );
}

export default App;
