import React from 'react';

export default function Clock() {
  return (
    <>
      <h1>{ new Date().toLocaleTimeString() }</h1>
    </>
  );
}