"use client"
import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useSession } from "next-auth/react";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // Initialize socket connection
      const newSocket = io(process.env.SOCKET_URL);
      setSocket(newSocket);

      // Log when the socket is connected
      newSocket.on('connect', () => {
        console.log('Socket connected');
        if (session.user) {
          console.log(`Connected as ${session.user.username}`);
          // Emit 'new-user-add' event with userId and username
          newSocket.emit('new-user-add', { userId: session.user.id, username: session.user.username });
        }
      });

      // Log when the socket is disconnected
      newSocket.on('disconnect', () => {
        console.log('Socket disconnected');
      });

      // Clean up on component unmount
      return () => {
        newSocket.disconnect(); // Disconnect socket when unmounting
        newSocket.removeAllListeners(); // Remove all event listeners
      };
    }
  }, [session]);

  // Provide socket and sendMessage function to the context
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
