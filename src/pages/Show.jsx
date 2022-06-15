import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function Show(props) {
  const { id } = useParams();
  const drinks = props.drinks;
  const drink = drinks.find((p) => p._id === id);
  let navigate = useNavigate();

  const [editForm, setEditForm] = useState(drink);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateDrinks(editForm, id);
    navigate('/');
  };

  const removeDrinks = () => {
    props.deleteDrinks(id);
    navigate('/');
  };

  return (
    <div className="drink-edit">
      <h1>{drink.name}</h1>
      <h2>{drink.price}</h2>
      <h2>{drink.Ingredients}</h2>
      <img src={drink.image} alt={drink.name} />

      <br />

      <button id="delete" onClick={removeDrinks}>
        DELETE
      </button>

      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.Ingredients}
          name="Ingredients"
          placeholder="Ingredients"
          onChange={handleChange}
        />
        <input type="submit" value="Update Drink" />
      </form>
      <button onClick={() => props.onAdd(drinks)}>Add To Cart</button>
    </div>
  );
}

export default Show;
