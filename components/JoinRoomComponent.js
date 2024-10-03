'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

export const JoinRoomComponent = () => {

  const router = useRouter()

  const [roomId, setRoomId] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoinRoomClick = () => {
    validateRoomId()
      .then(valid => {
        if (valid) {
          router.push(`/room/${ roomId }`);
        }
      })
  }

  const validateRoomId = () => {
    return new Promise((resolve, reject) => {
      const value = roomId?.trim();
  
      let errorMessage = '';
      if (value === undefined || value === '') {
        errorMessage = 'Room Id is a mandatory field.';
      } else {
        setError(false);
        resolve(true);
      }
  
      setErrorMessage(errorMessage);
      setError(true);
      resolve(false);
    })
  }

  return (
    <section className="flex flex-wrap h-full content-between p-5">
      <header class="w-full text-center">
        <h1 class="text-2xl font-bold">Chat With Me! ;)</h1>
      </header>
      <main className="w-full">
        <div className="w-full flex flex-wrap justify-center">
          <label className="w-full pb-2" htmlFor="room-id">Room Id:</label>
          <input className={`px-2 py-1 text-black w-full border-2 border-solid ${ error ? 'border-red-600' : 'border-black '}`} type="text" id="room-id" name="room-id" placeholder="FAD313" value={roomId} onChange={(e) => setRoomId(e.target.value)}></input>
          {
            error && <span className="w-full mt-2 text-red-600">{errorMessage}</span>
          }
        </div>
      </main>
      <footer className="w-full content-end">
        <Button label="Join room" bgColor="bg-teal-500" clickHandler={handleJoinRoomClick}></Button>
      </footer>
    </section>
  );
}