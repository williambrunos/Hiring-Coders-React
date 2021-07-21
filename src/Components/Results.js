import React from 'react';
import '../Styles/Results.css';

export default function Results(props) {
  const n1 = props.n1;
  const n2 = props.n2;
  return (
    <>
      <p>A soma de { n1 } + { n2 } é { props.sum(n1, n2)}</p>
    </>
  );
}