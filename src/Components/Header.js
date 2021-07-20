import React from 'react';

export default function Header(props) {
  return(
    <p>
      Nome: { props.name }
      Idade: { props.age }
      Cidade: { props.city }
    </p>
  );
}