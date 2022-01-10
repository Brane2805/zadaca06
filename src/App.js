import React, {useState} from 'react';
import {UserClass, UserFunction } from './user';

export default function App () {
  
  
  const [users, setUsers] =  useState(
    [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 }
    ],
  );
  
  function randomNbr(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function handleAddNewUser() {
    const updateUsers = users.map(user => {
      return {...user, years: randomNbr(18,99) };
    });
    setUsers(updateUsers);
  }



    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button onClick={handleAddNewUser}>Promjena godina</button>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserClass name={users[2].name} years={users[2].years} />
      </div>
    );
  }
