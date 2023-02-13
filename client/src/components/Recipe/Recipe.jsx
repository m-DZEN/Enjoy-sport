import React, {
  useState,
  useEffect,
} from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonChatAndMotivation from '../ButtonChatAndMotivation/ButtonChatAndMotivation';

export default function Recipe() {
  // const user = useSelector((store) => store.userStore);
  const { id } = useParams();

  const [recipe, getRecipe] = useState({});

  useEffect(() => {
    (async function () {
      const res = await fetch(`http://localhost:3001/recipe/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
        credentials: 'include',
      });

      const data = await res.json();
      // console.log('data---------->', data);

      getRecipe(data);
    }());
  }, []);

  // console.log('recipe---------->', recipe);

  return (
    <>
      <p>вторник</p>
      <p>{recipe?.title}</p>
      <p>{recipe?.description}</p>
      <ButtonChatAndMotivation />
    </>
  );
}
