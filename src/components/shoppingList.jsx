import { plantList } from "../datas/plantList"
import '../styles/shoppingList.css'
import PlantItem from "./plantitem"


function ShoppingList({cart, updateCart}){
     
    // on va cree un tab unique
    // extraire les catego unique
    const categories = plantList.reduce(
        (acc,plant) => 
            // si la categorie de la plante actuelle est deja presente dans acc
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    const addToCart = (name, price) => {
        const currentPlantSaved = cart.find((plant)=> plant.name === name)
        if(currentPlantSaved){
            const cartFiltereCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFiltereCurrentPlant,
                {name,price, amount: currentPlantSaved.amount +1}
            ])
        }else{
            updateCart([...cart, {name,price,amount:1}])
        }
    }

    return (

        <div className="lmj-shopping-list">
            <ul>
                {categories.map((cat) =>(
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className="lmj-plat-list">
					{plantList.map(({ id, cover, name, water, light,price }) => (
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
                    ))}
            </ul>

        </div>

    )
}
export default ShoppingList
