import { Routes, Route, Link, HashRouter } from 'react-router-dom';

import './App.scss';

import { Home } from './components/Home/Home';
import { Todos } from './components/Todos/Todos';
import { Photos } from './components/Photos/Photos';
import { TodoId } from './components/Todos/TodoId';

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <Link className="header__link" to='/'>Home</Link>
        <Link className="header__link" to='/photos'>Photos</Link>
        <Link className="header__link" to='/todos'>Todos</Link>
      </header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/todos' element={<Todos />} />
        <Route exact path='/photos' element={<Photos />} />
        <Route exact path='/todos/:id' element={<TodoId />} />
      </Routes>
    </div>
  );
}

export default App;
