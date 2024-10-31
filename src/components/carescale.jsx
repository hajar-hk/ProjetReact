 

// composent: pour l'echelle de soin pour la lumiere et l'eau.

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


    // quantityLabel

    const quantityLabel = {
        1: 'peu',
        2: 'modérement',
        3: 'beaccoup'
    }
    
    // on va mappe sur range en verifiant a chq fois si scaleValue et superier a elemt de range excute contenuer span où on va afficher l'icone type
    // kifach aysra hde chi:
    // ghadi par exemple nkhdmo alla plante: monstera: ghadi nchdo props careType (ligne 10 dans compnt plantitem) ghadi nchofo bila water ok cad on est face d'executer icon de water
    //  apres ndkhlo return, ghadi nnchofo la valeur(scaleValue lijbdnaha tahia b props , ici on a dans datas water:3
    // donc 3 > 1(premier elmt de range) oui dc afficher icone water ,comme ça ankmlo hta elemt 3 de range wghadi l9aw rasna affichina 3 icone de water
    // ila mchina pour careType= light ligne 11 ds compnt plantitem  , on  est face d'executer sun 
    // nous on a light = 2 (selon datas) dc apres les comparaisons ghadi nsd9o affichina 2 icone de sun. 
    return(
             <div

                  onClick={() =>
                           alert(
                              `Cette plante requiert ${quantityLabel[scaleValue]} ${
                                careType === 'light' ? 'de lumière' : "d'arrosage"  
                               }`                            
                           )
                 
                 
                 
                 }
                 >

                {range.map((rangeElm) => 
                 scaleValue >= rangeElm ? (
                    <span key={rangeElm.toString()}>{scaleType}</span>
                 ) : null
            )}
            </div>

    )

}
 export default CareScale