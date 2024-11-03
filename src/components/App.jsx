import Banner from './banner'
import Cart from './cart'
import ShoppingList from './shoppingList'
import logo from '../assets/logo.png'
import Footer from './footer'
import '../styles/layout.css'
import { useEffect, useState } from 'react'


function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() =>{
		localStorage.setItem('cart' , JSON.stringify(cart))
	}, [cart])
	return (
		<div>
			<Banner>

			    <img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			
			</Banner>
			<div className='lmj-layout-inner'>
			  < Cart cart={cart} updateCart={updateCart} />
              <ShoppingList cart={cart} updateCart={updateCart} /> 
			</div>
			<Footer />
		</div>
	)
}

export default App

// Lorsque l'application est lancée, App rend Banner et ShoppingList.
// ShoppingList extrait les catégories des plantes et les affiche, puis rend les items de plantes en utilisant PlantItem.
// Chaque PlantItem affiche les détails de la plante, y compris ses besoins en soins via CareScale.
// ffffffffffff