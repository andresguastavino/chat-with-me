"use client";

import { useState } from 'react';
import { Button } from './Button';

export const HomeComponent = () => {

  const [username, setUsername] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewRoomClick = () => {
    validateUsername();
  }

  const handleJoinRoomClick = () => {
    validateUsername();
  }

  const validateUsername = () => {
    const value = username?.trim();

    let errorMessage = '';
    if (value === undefined || value === '') {
      errorMessage = 'Username is a mandatory field.';
    } else if (value.length <= 3) {
      errorMessage = 'Username must be longer than 3 characters.';
    } else {
      setError(false);
      return;
    }

    setError(true);
    setErrorMessage(errorMessage);
  }

  return (
    <section className="flex flex-wrap h-full content-between p-5">
      <header class="w-full text-center">
        <h1 class="text-2xl font-bold">Chat With Me! ;)</h1>
      </header>
      <main className="w-full">
        <div className="w-full flex flex-wrap justify-center">
          <label className="w-full pb-2" htmlFor="username">Username:</label>
          <input className={`px-2 py-1 text-black w-full border-2 border-solid ${ error ? 'border-red-600' : 'border-black '}`} type="text" id="username" name="username" placeholder="Jhonny98" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          {
            error && <span className="w-full mt-2 text-red-600">{errorMessage}</span>
          }
        </div>
      </main>
      <footer className="w-full content-end">
        <Button label="Create new room" bgColor="bg-teal-500" clickHandler={handleNewRoomClick}></Button>
        <Button label="Join room" bgColor="bg-teal-500" otherStyles={[ 'mt-4' ]} clickHandler={handleJoinRoomClick}></Button>
      </footer>
    </section>
  );
}