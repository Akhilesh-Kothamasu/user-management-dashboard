import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css'

const App = () => {
  const [view, setView] = useState('list');
  const [currentUser, setCurrentUser] = useState(null);

  const handleAdd = () => {
    setCurrentUser(null);
    setView('form');
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setView('form');
  };

  const handleSubmit = () => {
    setView('list');
  };

  return (
    <div>
      {view === 'list' && <UserList onAdd={handleAdd} onEdit={handleEdit} />}
      {view === 'form' && <UserForm user={currentUser} onSubmit={handleSubmit} />}
    </div>
  );
};

export default App;
