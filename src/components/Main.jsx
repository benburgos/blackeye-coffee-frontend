import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';
import Basket from './Basket';

function Main(props) {
  const URL = 'https://blackeye-coffee-be.herokuapp.com/drinks/';
  const { drinks, getDrinks, onAdd, onRemove, cartItems } = props;

  const createDrinks = async (drink) => {
    // make post request to create drinks
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(drink),
    });
    getDrinks();
  };

  const updateDrinks = async (drinks, id) => {
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(drinks),
    });
    // update list of drinks
    getDrinks();
  };

  const deleteDrinks = async (id) => {
    await fetch(URL + id, {
      method: 'DELETE',
    });
    getDrinks();
  };

  useEffect(() => {
    getDrinks();
  }, [drinks]);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Index
              drinks={drinks}
              createDrinks={createDrinks}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
        <Route
          path="/drinks/:id"
          element={
            <Show
              drinks={drinks}
              updateDrinks={updateDrinks}
              deleteDrinks={deleteDrinks}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
        <Route
          path="/drinks/cart"
          element={
            <Basket
              drinks={drinks}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
