import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './routes/Routes';

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <Routes/>
    </>
  );
}

