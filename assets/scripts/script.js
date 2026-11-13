class StickyNavigation {

	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// Use the click event jQuery passes in, rather than the global
		// window.event, which not every browser provides.
		$('.et-hero-tab').on('click', (event) => {
			this.onTabClick(event, $(event.currentTarget));
		});
		$(window).on('scroll', () => this.onScroll());
		$(window).on('resize', () => this.onResize());

		// Set the sticky state and slider straight away, so they are right
		// when the page is opened part-way down or reloaded mid-scroll.
		this.onScroll();
	}

	onTabClick(event, element) {
		event.preventDefault();
		const id = element.attr('href');
		const scrollTop = $(id).offset().top - this.tabContainerHeight + 1;
		$('html, body').stop().animate({ scrollTop: scrollTop }, this.reduceMotion ? 0 : 600);
		// Keep the address bar in step, so the link to a section can be shared.
		history.replaceState(null, '', id);
	}

	onScroll() {
		this.checkTabContainerPosition();
		this.findCurrentTabSelector();
	}

	onResize() {
		if (this.currentId) {
			this.setSliderCss();
		}
	}

	checkTabContainerPosition() {
		const offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		$('.et-hero-tabs-container').toggleClass('et-hero-tabs-container--top', $(window).scrollTop() > offset);
	}

	findCurrentTabSelector() {
		let newCurrentId;
		let newCurrentTab;
		const scrollTop = $(window).scrollTop();
		const tabContainerHeight = this.tabContainerHeight;
		$('.et-hero-tab').each(function () {
			const id = $(this).attr('href');
			const offsetTop = $(id).offset().top - tabContainerHeight;
			const offsetBottom = $(id).offset().top + $(id).height() - tabContainerHeight;
			if (scrollTop > offsetTop && scrollTop < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if (this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}

	setSliderCss() {
		let width = 0;
		let left = 0;
		if (this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css({ width: width, left: left });
		// Tell screen readers which section is on screen.
		$('.et-hero-tab').removeAttr('aria-current');
		if (this.currentTab) {
			this.currentTab.attr('aria-current', 'true');
		}
	}

}

new StickyNavigation();
