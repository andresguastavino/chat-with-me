"use client";

import { useRef } from 'react';
import { Button } from './Button';

export const HomeComponent = () => {

  const usernameInputRef = useRef();

  return (
    <section className="flex flex-wrap h-full content-between p-5">
      <header class="w-full text-center">
        <h1 class="text-2xl font-bold">Chat With Me! ;)</h1>
      </header>
      <main className="w-full">
        <div className="w-full flex flex-wrap justify-center">
          <label className="w-full pb-2" for="username">Username:</label>
          <input className="px-2 py-1 w-full" type="text" id="username" name="username" placeholder="Jhonny98" ref={usernameInputRef}></input>
        </div>
      </main>
      <footer className="w-full content-end">
        <Button label="Create new room" bgColor="bg-teal-500"></Button>
        <Button label="Join room" bgColor="bg-teal-500" otherStyles={[ 'mt-4' ]}></Button>
      </footer>
    </section>
  );
}