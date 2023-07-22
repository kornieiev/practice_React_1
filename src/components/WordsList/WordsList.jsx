import React from 'react';

export default function WordsList({ words }) {
  return (
    <ul>
      {words.map(word => {
        return (
          <li key={word.id}>
            <p>{word.ukr}</p>
            <p>{word.eng}</p>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
