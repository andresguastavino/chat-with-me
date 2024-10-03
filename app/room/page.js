"use client";

import { useEffect, useState } from "react";
import { socket } from "../../components/socket";

export default function Room() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState('N/A');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }
    
    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);
      
      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }
    
    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }
    
    function onMessage(newMessage) {
      console.log('message received', newMessage)
      setMessages((prevMessages) => [ ...prevMessages, newMessage ]);
    }
    
    socket.on("message", onMessage);
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("message", onMessage);
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  const postMessage = () => {
    socket.emit('message', message);
    setMessage('');
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.code === 'Enter') {
      postMessage();
    }
  }

  return (
    <div>
      <p>Status: { isConnected ? "connected" : "disconnected" }</p>
      <p>Transport: { transport }</p>
      <div>
        { 
            messages.map((message, i ) => (<p key={i}>{message}</p>))
        }
      </div>
      <input type="text" value={message} onChange={handleMessageChange} onKeyDown={handleKeyDown}></input><br/>
      <button type="button" onClick={postMessage}>Send</button>
    </div>
  );
}