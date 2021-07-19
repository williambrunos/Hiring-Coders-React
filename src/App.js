import { React, useState } from 'react';

export default function App(props) {
  return (
    <>
      <input type="text" name="usuario" className="usuarioInput" placeholder="Usuário"/>
      <button type="submit">Pesquisar</button>
    </>
  );
}
