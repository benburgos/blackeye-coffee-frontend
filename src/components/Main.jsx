import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"


function Main(props) {
    const [drinks , setDrinks] = useState(null)
    const URL = "https://blackeye-coffee-be.herokuapp.com/"

    const getDrinks = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setDrinks(data)
    }

    const createDrinks = async (drink) => {
        // make post request to create drinks
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(drink),
        })
        getDrinks()
    }
    const updateDrinks = async (drinks, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body:JSON.stringify(drinks),
        })
   // update list of drinks
   getDrinks()
}

    const deleteDrinks
     = async (id) =>{
        await fetch(URL + id, {
            method:'DELETE',
        })
        getDrinks()
    }

    useEffect(() => {
        getDrinks()
    }, [])

    return (
        <main>
            <Routes>
                <Route
                    path="/" element={<Index drinks={drinks} createDrinks={createDrinks} />} />
                <Route path="/drinks/:id" element={
                <Show
                    drinks={drinks}
                    updateDrinks={updateDrinks}
                    deleteDrinks
                    ={deleteDrinks
                    }
/>
                }
                />
            </Routes>
        </main>
    )
}

export default Main