import { useState } from "react"
import { Link } from "react-router-dom"

export default function Index(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        // clear the form to start aFresh
        name: "",
        image: "",
        price: "",
        Ingredients: ""
    })

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createDrinks(newForm)
        setNewForm({
            name: "",
            image: "",
            price: "",
            Ingredients: ""
       
        })
    }

    // loaded function
    const loaded = () => {
        return props.drinks.map((drink) => (
            <div key={drink._id} className="drink">
                <Link to={`/drinks/${drink._id}`}>
                    <h1>{drink.name}</h1>
                </Link>
                <img src={drink.image} alt={drink.name} />
                <h3>Title: {drink.title} </h3>
            </div>
        ))
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.price}
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.Ingredients}
                    name="Ingredients"
                    placeholder="Ingredients"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Drink" />
            </form>
            {props.drinks ? loaded() : loading()}
        </section>
    )
}