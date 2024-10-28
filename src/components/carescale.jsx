
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
function CareScale({scaleValue, careType}){

    // range pour l'echelle de 1 à 3
    const range=[1, 2,3]

    // declarer une variable scaleType et lui affecter une condition ternaire
    // si le careType = light excuter img de sun sinon water
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt="Sun-icone" />
    ) : (
        <img src={Water} alt='water-icone'/>
    )
    
    // on va mappe sur range en verifiant a chq fois si scaleValue et superier a elemt de range excute contenuer span où on va afficherle type
    return(
            <div>
                {range.map((rangeElm) => 
                 scaleValue >= rangeElm ? (
                    <span key={rangeElm.toString()}>{scaleType}</span>
                 ) : null
            )}
            </div>

    )

}
 export default CareScale