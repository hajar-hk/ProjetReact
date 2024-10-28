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




