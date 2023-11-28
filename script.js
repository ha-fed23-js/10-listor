import { drinks } from './data.js'
import { compareByName, compareByPrice } from './sort.js'

const drinkList = document.querySelector('.drink-list')
const sortByName = document.querySelectorAll('.sort-by-name')
const sortByPrice = document.querySelectorAll('.sort-by-price')

renderDrinkList(drinks)


function renderDrinkList(list) {
	drinkList.innerText = ''
	const items = list.map(drink => {
		const li = document.createElement('li')
		const nameSpan = document.createElement('span')
		const priceSpan = document.createElement('span')
		nameSpan.innerText = drink.name
		priceSpan.innerText = drink.price
		li.append(nameSpan)
		li.append(priceSpan)
		// li.innerText = `${drink.name} ... ${drink.price}`
		return li
	})
	items.forEach(item => {
		drinkList.append(item)
	})
}



sortByName.forEach(button => {
	button.addEventListener('click', () => {
		const sorted = drinks.toSorted(compareByName)
		renderDrinkList(sorted)
	})
})
sortByPrice.forEach(button => {
	button.addEventListener('click', () => {
		const sorted = drinks.toSorted(compareByPrice)
		renderDrinkList(sorted)
	})
})
