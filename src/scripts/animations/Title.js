import gsap, { Power3 } from 'gsap'
import SplitType from 'split-type'

import Animation from '@scripts/animations/Animations.js'

export default class extends Animation {
	constructor({ element }) {
		super({ element })

		this.leftEl = element.querySelector('.hero__title__inner--left')
		this.rightEl = element.querySelector('.hero__title__inner--right')
		this.bottomEl = element.querySelector('.hero__title__inner--bottom')

		this.splitText()
	}

	splitText() {
		this.splitedElement = new SplitType(
			[this.leftEl, this.rightEl, this.bottomEl],
			{
				types: 'words',
				tagName: 'span'
			}
		)
		const { words } = this.splitedElement

		gsap.set([words[0], words[4], words[1], words[3]], { scaleY: 0 })
		gsap.set(words[0], { y: 350 })
		gsap.set(words[2], { scaleX: 1.8, x: -700 })
	}

	animateIn() {
		const { words } = this.splitedElement
		gsap.timeline({ delay: this.delay ? this.delay : 0 })
			.to(words[0], {
				y: 0,
				scaleY: 1,
				duration: 1.2,
				ease: Power3.easeOut
			})
			.to([words[0], words[4], words[1], words[3]], {
				scaleY: 1,
				duration: 0.8,
				stagger: 0.1,
				delay: -1.2,
				ease: Power3.easeOut
			})
			.to(words[2], {
				x: 0,
				scaleX: 1,
				duration: 1.2,
				delay: -1.15,
				ease: Power3.easeInOut
			})
	}
}
