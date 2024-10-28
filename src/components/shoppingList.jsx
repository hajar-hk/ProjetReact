import { plantList } from "../datas/plantList"
import '../styles/shoppingList.css'
import PlantItem from "./plantitem"


function ShoppingList(){
     
    // on va cree un tab unique
    // extraire les catego unique
    const categories = plantList.reduce(
        (acc,plant) => 
            // si la categorie de la plante actuelle est deja presente dans acc
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return(

        <div>
            <ul>
                {categories.map((cat) =>(
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className="lmj-plat-list">
					{plantList.map(({ id, cover, name, water, light }) => (
                        <PlantItem
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                    ))}
            </ul>
        </div>


    )
}
export default ShoppingList