
import { useState } from "react"
import '../styles/footer.css'



function Footer(){

    // inputValue : C'est une variable d'état qui stocke la valeur saisie par l'utilisateur dans le champ de texte.
    const [inputValue, setInputValue] = useState('')


    //Cette fonction est appelée chaque fois que l'utilisateur modifie le contenu du champ de saisie.
    function handleInput(e){
        // e.target.value:Cela récupère la valeur actuelle du champ de saisie et met à jour l'état inputValue avec cette valeur.
        setInputValue(e.target.value)
    }

    function handleBlur(){
        if(!inputValue.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
        }
    }
    return(

         <footer className="lmj-footer">

            <div className="lmj-footer-elem">
                 
                 Pour les passionnées de la plantes 🌿🌱🌵

            </div>
            <div className="lmj-footer-elem">Laissez-nous votre maiil:</div>
            <input 
              
                 placeholder="Entrez votre mail"
                 onChange={handleInput}
                 value={inputValue}
                 onBlur={handleBlur}
            
            />

         </footer>




    )


}

export default Footer
// Les formulaires contrôlés sauvegardent la valeur des champs dans le state local, et accèdent à la data entrée par l'utilisateur avec  onChange.