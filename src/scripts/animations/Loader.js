import gsap, { Power2, Power3, Expo } from 'gsap'

import Animation from '@scripts/animations/Animations.js'

export default class extends Animation {
	constructor({ element }) {
		super({ element })

		this.smiley = document.querySelector('.smiley')
		this.eye = this.smiley.querySelectorAll('.eye')
		this.mouse = this.smiley.querySelector('.mouth')
		this.counter = this.smiley.querySelector('.counter')

		this.setAnim()
	}

	setAnim() {
		gsap.set(this.eye, {
			attr: { r: '0' }
		})
	}

	animateIn() {
		gsap.timeline({ onComplete: this.reveal() }).to(this.counter, {
			textContent: 100,
			duration: 4,
			snap: { textContent: 1 },
			duration: 1.5,
			ease: Power3.easeOut
		})
	}

	reveal() {
		gsap.timeline({
			delay: 1.5,
			onComplete: () => {
				this.smiley.classList.add('rotate')
			}
		})
			.to('.loader', {
				duration: 2.4,
				height: 0,
				ease: Expo.easeInOut
			})
			.to(this.counter, {
				scale: 0,
				duration: 0.75,
				delay: -2,
				ease: Power2.easeIn
			})
			.to(this.eye, {
				attr: { r: '20' },
				delay: -1.5,
				duration: 1,
				stagger: 0.2,
				ease: Power3.easeOut
			})
	}
}
