
import '../styles/panier.css'
function Cart(){

    const prixMonst = 8;
    const prixlierr = 8;
    const prixbqfleur = 8;

    const TotalPanier = () =>{

        let total = prixMonst+prixlierr+prixbqfleur;
        return total;
    }
    
    return(
        <div className='lmj-panier'>
         <h1>Panier</h1>
         <ul>
            <li>Monstera :{prixMonst}dh</li>
            <li>Lierre :{prixlierr}dh</li>
            <li>Fleurs :{prixbqfleur}dh</li>
         </ul>
         <h3>Total:{TotalPanier()}</h3>
        
        </div>
    )

}

export default Cart;