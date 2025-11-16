import './App.css';
import AddBook from './components/books/AddBook';
import BookList from './components/books/BookList';
import UserList from './components/UserList';
import ViewBook from './components/books/ViewBook';
import PersonList from './components/PersonList';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
       {/* <BrowserRouter> 
          <h1>Axios Examples</h1>
          <nav>
            <NavLink to="/">Users</NavLink> |{' '}
            <NavLink to="/books">Books</NavLink> |{' '}
            <NavLink to="/add-book">Add Book</NavLink>
          </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path='/view-book/:bookId' element={ <ViewBook />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
       </BrowserRouter> 
        
      <hr /> */}
      <PersonList/>
    </div>
    
  );
}

export default App;
