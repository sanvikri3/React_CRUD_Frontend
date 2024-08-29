import './App.css';

//Components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Allusers from './components/AllUsers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';
import { useState } from 'react';

const initialUsers = [
  {
    _id: 1,
    name: 'Sanvi',
    username: 'sanvi',
    email: 'sanvi123@example.com',
    phone: '1234567890',
  },
  {
    _id: 2,
    name: 'John',
    username: 'john',
    email: 'john@example.com',
    phone: '9876543210',
  },
  {
    _id: 3,
    name: 'Emma',
    username: 'emma',
    email: 'emma@example.com',
    phone: '5555555555',
  },
];

function App() {
  const [AllUsers, setAllUsers] = useState(initialUsers);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/all"
              element={<Allusers users={AllUsers} setUsers={setAllUsers} />}
            />
            <Route
              path="/add"
              element={<AddUser users={AllUsers} setUsers={setAllUsers} />}
            />
            <Route
              path="/edit/:id"
              element={<EditUser users={AllUsers} setUsers={setAllUsers} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
