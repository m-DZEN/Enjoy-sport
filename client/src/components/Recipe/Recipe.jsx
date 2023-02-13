import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonChatAndMotivation from '../ButtonChatAndMotivation/ButtonChatAndMotivation';

export default function Recipe() {
  const user = useSelector((store) => store.userStore);
  const { day } = useParams();
  const parametrs = useParams();
  console.log('parametrs', parametrs);

  const [recipe, getRecipe] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(`http://localhost:3001/nutrition/${day}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
        credentials: 'include',
      });

      const data = await res.json();
      console.log('data', data);

      getRecipe((pre) => ([...pre, ...data]));
    }());
  }, []);
  console.log('recipe', recipe);

  return (
    <>
      <p>вторник</p>
      <p>завтрак</p>
      <p>рецепт</p>
      <ButtonChatAndMotivation />
    </>
  );
}
