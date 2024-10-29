
// composent: reçcoit les props d'une plante , on a acceder a ces props qui sont definit dans shoppingList
//affichage de nom et image de la plante
// utiliser careScale pour recuperer scaleValue a partie de datas lighdi nst3mloha f carescale

import CareScale from "./carescale";
import '../styles/plantitem.css'

function PlantItem({id, cover, name, water, light}){

    return( 
            <li key={id} className="lmj-plant-item">
                <img  className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />{name}
                <div>
                    <CareScale careType= 'water' scaleValue={water} />
                    <CareScale careType= 'light' scaleValue={light} />
                </div>
            </li>


    )

}
export default PlantItem




