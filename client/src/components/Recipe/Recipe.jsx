import React, {
  useState,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import styles from './Recipe.module.scss';
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

      getRecipe(data);
    }());
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div>
          <p>{recipe?.title}</p>
        </div>
        <div>
          <p>{recipe?.description}</p>
        </div>
      </div>
      <ButtonChatAndMotivation />
    </>
  );
}
