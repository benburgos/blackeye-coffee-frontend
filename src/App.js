import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';

function App() {
  const [drinks, setDrinks] = useState(null);
  const URL = 'https://blackeye-coffee-be.herokuapp.com/drinks/';

  const getDrinks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDrinks(data);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (drinks) => {
    const exist = cartItems.find((x) => x._id === drinks._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === drinks._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...drinks, qty: 1 }]);
    }
  };
  const onRemove = (drinks) => {
    const exist = cartItems.find((x) => x._id === drinks._id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== drinks._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === drinks._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
      <Main
        drinks={drinks}
        setDrinks={setDrinks}
        getDrinks={getDrinks}
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default App;
