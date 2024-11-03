import { useState } from "react"
import { plantList } from "../datas/plantList"
import '../styles/shoppingList.css'
import PlantItem from "./plantitem"
import Categories from "./categories"


function ShoppingList({cart, updateCart}){

    // activeCategory : État qui stocke la catégorie active sélectionnée par l'utilisateur. 
    const[activeCategory,setActiveCategory] = useState('')
     
    // extraction des categ uniques
    // on va cree un tab unique
    // extraire les catego unique
    const categories = plantList.reduce(
        (acc,plant) => 
            // si la categorie de la plante actuelle est deja presente dans acc
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    // Fonction d'ajout au panier
    const addToCart = (name, price) => {
        //On cherche si la plante est déjà dans le panier.
        const currentPlantSaved = cart.find((plant)=> plant.name === name)
        // Si elle est trouvée 
        if(currentPlantSaved){
            //  on filtre le panier pour retirer la plante actuelle
            const cartFiltereCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            //  puis on met à jour le panier avec une nouvelle entrée qui augmente la quantité de la plante de 1.
            updateCart([
                ...cartFiltereCurrentPlant,
                {name,price, amount: currentPlantSaved.amount +1}
            ])
            // Si la plante n'est pas trouvée, on ajoute une nouvelle entrée avec une quantité de 1.
        }else{
            updateCart([...cart, {name,price,amount:1}])
        }
    }

    return (

        <div className="lmj-shopping-list">
            <Categories
                   categories={categories}
                   setActiveCategory={setActiveCategory}
                   activeCategory={activeCategory}
                />
            <ul className="lmj-plant-list">
					{plantList.map(({ id, cover, name, water, light,price,category }) => 
                       !activeCategory || activeCategory === category?(
                    <div key={id}>
                         <PlantItem
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            price={price}
                         />
                        <button onClick={()=> addToCart(name,price)}>Ajouter</button>
                    </div>
                    ):null
                )}
            </ul>

        </div>

    )
}
export default ShoppingList
