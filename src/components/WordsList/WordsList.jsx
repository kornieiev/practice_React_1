import React from 'react';

export default function WordsList({ words, deleteWord }) {
  return (
    <ul>
      {words.map(word => {
        return (
          <li key={word.id}>
            <p>{word.ukr}</p>
            <p>{word.eng}</p>
            <button onClick={() => deleteWord(word.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );

}
