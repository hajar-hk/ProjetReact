
// composent: reçcoit les props d'une plante , on a acceder a ces props qui sont definit dans shoppingList
//affichage de nom et image de la plante
// utiliser careScale pour recuperer scaleValue a partie de datas lighdi nst3mloha f carescale

import CareScale from "./carescale";
import '../styles/plantitem.css'

function PlantItem({cover, name, water, light,price}){

    const handleClick = (plantname) =>{
        alert(`vous voulez acheter 1 ${plantname}? Très bon choix 🌱✨`)
    }
    

    return( 
            <li  className="lmj-plant-item" onClick={()=>handleClick(name)}>
                <span className='lmj-plant-item-price'>{price}€</span>
		        <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			    {name}
                <div>
                    <CareScale careType= 'water' scaleValue={water} />
                    <CareScale careType= 'light' scaleValue={light} />
                </div>
            </li>


    )

}
export default PlantItem




