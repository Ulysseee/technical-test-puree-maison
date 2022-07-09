import gsap, { Power3 } from 'gsap'

import Animation from '@scripts/animations/Animations.js'

export default class extends Animation {
	constructor({ element }) {
		super({ element })

		this.imageContent = document.querySelector('.hero__image__content')
		this.imageInner = this.imageContent.querySelectorAll(
			'.hero__image__content__inner'
		)

		this.setAnim()
	}

	setAnim() {
		gsap.set(this.imageContent, {
			scale: 0
		})
		const images = [...this.imageInner]
		gsap.set(images[0], {
			scale: 1.8
		})
		const [a, ...rest] = images
		gsap.set(rest, {
			scale: 0
		})
	}

	animateIn() {
		gsap.timeline({
			onComplete: () => {
				this.reveal()
			}
		})
			.to(this.imageContent, {
				scale: 1,
				duration: 1.5,
				delay: this.delay ? this.delay : 0,
				ease: Power3.easeInOut
			})
			.to(this.imageInner[0], {
				scale: 1,
				duration: 1.25,
				delay: -1,
				ease: Power3.easeOut
			})
			.to(this.imageContent, {
				css: { borderRadius: 16 },
				duration: 0.5,
				delay: -0.5,
				ease: Power3.easeOut
			})
	}

	reveal() {
		gsap.timeline()
			.to(this.imageInner[0], {
				scale: 1.8,
				duration: 1.5,
				delay: 2,
				ease: Power3.easeInOut
			})
			.to(this.imageInner[1], {
				scale: 1,
				duration: 1.5,
				delay: -1.4,
				ease: Power3.easeInOut
			})
			.to(this.imageInner[1], {
				scale: 1.8,
				duration: 1.5,
				delay: 1,
				ease: Power3.easeInOut
			})
			.to(this.imageInner[2], {
				scale: 1,
				duration: 1.5,
				delay: -1.4,
				ease: Power3.easeInOut
			})
	}
}
