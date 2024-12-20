import { useEffect, useState } from 'react'
import '../styles/cart.css'
function Cart({cart, updateCart}){

    //isOpen : Un état qui détermine si le panier est ouvert ou fermé. Initialisé à true, cela signifie que le panier est ouvert par défaut.
    const [isOpen, setIsOpen] = useState(true)
    const items = Object.keys(cart)
    const total = cart.reduce(
        (acc,plantType) => acc + plantType.amount * plantType.price,
        // valeur initale
         0

    )
    
    useEffect(()=>{
        document.title =`LMJ: ${total}€ d'achats`
    }, [total])
    
    return isOpen ? (

        <div className='lmj-cart'> 
            <button
                  className='lmj-cart-toggle-button'
                  onClick={() => setIsOpen(false)}
            > 
                 Fermer 
            </button>
            {cart.length >0 ? (
                <div>

                     <h2>Panier</h2>
                     <ul>
                        {cart.map(({name, price , amount}, index) =>(
                           <div key={`${name}-${index}`}>
                           {name} {price}€ x {amount}
                           </div>
                    
                        ))}
                     </ul>
           
                     <h3>Total :{total}€</h3>
                     <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            
             ) : (  
         
             <div>Votre panier est vide</div>
             )}
        </div>
    ):(
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                ouvrir le panier
            </button>
        </div>

         )

    }


    
export default Cart


