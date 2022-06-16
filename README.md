# BlackEye Coffee

Our e-commerce website allows users to purchase coffee and snacks. Inspired by the Netherlands, users will be able to add THC to any coffee. We will have a variety of snacks that are also THC friendly.

## Links
- [Live Site](https://blackeye-coffee.netlify.app/)
- [Backend Repo](https://github.com/benburgos/blackeye-coffee-backend)

## Libraries and dependencies:

MongoDB , Express, NodeJS, React, Morgan, CORS, Nodemon, dot.env, CSS, React-Router-Dom, momentjs. 


## Routes for React:
- App.Jsx: Has Within it Header and Main, Header (has a back to Index function, etc.) component renders a Header for our app, Main includes a multitude of functions and the API call to be passed.
- Main component: Routes to "/" element Index, passes createDrink (could be for Admin, create order for customer). Also "/drinks/:id, element Show, shows specific drink allows for update and delete)
- It is possible to pass state through the Link component in react to the new routes, which allow more flexibility when it comes to continue using the information that has been obtained( or modded) further along the way from the original API call (using the parameter state= {props} )

    - 

## App component

### Create state

- [drinks, setDrinks] = useState
- [cartItems, setCartItems] = useState
- CRUD functions to create
- Fetch index of drinks (Product), useEffect
- Pass data to setDrinks state
- handleCreate
- handleUpdate
- handleDelete

#### Other to create
- handleSave()
- Const emptyDrink for form
- Return
- Header

`<Drinks menu />`
State to pass: list of drinks
Function to pass: handleDelete, handleSave

`<Form />`
Pass createDrink
Functions to pass: handleCreate, handleUpdate

Drink Menu component
Map over props list of drinks
Return
`<div>` for drinks, ( price, ingredients, picture)
`<button/> `to remove drink from menu( or order)
onClick=props.handleDelete

Form component
[formData, setFormData] = useState
Create handleChange
Props received: router props, emptyDrink handleCreate, handleUpdate
Return
`<form />`
props.handleCreate, props.handleUpdate
`<input />` for Name of drink
onChange=handleChange
`<input />` for Ingredients
onChange=handleChange
`<input />` for Price
onChange=handleChange
`<input />` for Image URL
onChange=handleChange
`<input />` submit button to add / update drink

## App Screenshots
- Main Landing Page
![Main Page](https://i.imgur.com/oA94Zko.png)
- Product Page
![Product Page](https://i.imgur.com/2pieJS5.png)
- Checkout Page
![Checkout Page](https://i.imgur.com/fAky56m.png)