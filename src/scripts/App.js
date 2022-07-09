import '@styles/main.scss'

import Loader from '@scripts/animations/Loader'
import Title from '@scripts/animations/Title'
import Images from '@scripts/animations/Images'
import Text from '@scripts/animations/Text'

export default class App {
	constructor() {
		if (App._instance) {
			return App._instance
		}

		App._instance = this

		this.dom = {
			app: document.querySelector('#app'),
			loader: document.querySelectorAll('[data-animation="loader"]'),
			images: document.querySelectorAll('[data-animation="image"]'),
			texts: document.querySelectorAll('[data-animation="text"]'),
			title: document.querySelectorAll('[data-animation="title"]')
		}
	}

	start() {
		this.dom.app.style.visibility = 'visible'

		this.setAnimations()
	}

	setAnimations = () => {
		this.dom.loader.forEach((element) => new Loader({ element }))
		this.dom.title.forEach((element) => new Title({ element }))
		this.dom.images.forEach((element) => new Images({ element }))
		this.dom.texts.forEach((element) => new Text({ element }))
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const app = new App()
	app.start()
})
