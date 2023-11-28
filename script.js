import { drinks } from './data.js'

const drinkList = document.querySelector('.drink-list')

const items = drinks.map(drink => {
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
