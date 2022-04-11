import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Todos } from './components/Todos/Todos';
import { Photos } from './components/Photos/Photos';
import { TodoId } from './components/Todos/TodoId';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <Link className="header__link" to='/'>Home</Link>
        <Link className="header__link" to='/photos'>Photos</Link>
        <Link className="header__link" to='/todos'>Todos</Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/todos/:id' element={<TodoId />} />
      </Routes>
    </div>
  );
}

export default App;
