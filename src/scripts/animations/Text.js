import gsap, { Power3 } from 'gsap'
import SplitType from 'split-type'

import Animation from '@scripts/animations/Animations.js'

export default class extends Animation {
	constructor({ element }) {
		super({ element })

		this.splitText()
	}

	splitText() {
		this.splitedElement = new SplitType(this.element, {
			types: 'lines'
		})
		this.splitedElement.lines.forEach((line) => {
			const span = document.createElement('span')
			span.appendChild(line)
			this.element.appendChild(span)

			gsap.set(line, {
				y: ' 100%'
			})
		})
	}

	animateIn() {
		gsap.to(this.splitedElement.lines, {
			y: 0,
			duration: 1.15,
			stagger: 0.1,
			delay: this.delay ? this.delay : 0,
			ease: Power3.easeOut
		})
	}
}
