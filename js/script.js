/*------------------------------ popup menu ------------------------------*/

let menuLink = document.querySelector('.header__link--menu');
let menuPopup = document.querySelector('.header__menu-popup');

menuLink.addEventListener('click', function (e) {
	e.stopPropagation();
	menuPopup.classList.toggle('header__menu-popup--visible');
});
menuPopup.addEventListener('click', function (e) {
	e.stopPropagation();
});


let searchInput = document.querySelector('.header__search-input input');
let searchLink = document.querySelector('.header__link--search');
let searchPopup = document.querySelector('.header__search-popup');

searchLink.addEventListener('click', function (e) {
	e.preventDefault();
	e.stopPropagation();
	searchPopup.classList.toggle('header__search-popup--visible');
	searchInput.focus();
});

searchPopup.addEventListener('click', function (e) {
	e.stopPropagation();
});

let wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', function () {
	searchPopup.classList.remove('header__search-popup--visible');
	menuPopup.classList.remove('header__menu-popup--visible');
});


$(function () {
	$('.adventure__slider').slick({
		arrows: false,
		slidesToShow: 4,		// - количество показываемых слайдов, чтобы слайды начинались с начала первого, нужно вставить variableWidth: true  а количество слайдов изменить на “1”
		infinite: true,
		// variableWidth: true,
		dragable: false,
		responsive:
			[
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 980,
					settings: {
						slidesToShow: 2,
						dots: true,
						appendDots: ('.adventure__slider-dots'),
					}
				},
				{
					breakpoint: 870,
					settings: {
						slidesToShow: 3,
						variableWidth: false,
						dots: true,
						appendDots: ('.adventure__slider-dots'),
					}
				},
				{
					breakpoint: 790,
					settings: {
						slidesToShow: 2,
						variableWidth: false,
						dots: true,
						appendDots: ('.adventure__slider-dots'),
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						variableWidth: false,
						dots: true,
						appendDots: ('.adventure__slider-dots'),
					}
				},

			],

		waitForAnimate: false,
	})
})

$('.adventure__slider-prev').on('click', function (e) {
	e.preventDefault()
	$('.adventure__slider').slick('slickPrev')
})
$('.adventure__slider-next').on('click', function (e) {
	e.preventDefault()
	$('.adventure__slider').slick('slickNext')
});

$(function () {
	$('.shop__slider').slick({
		arrows: false,
		slidesToShow: 1,
		infinite: true,
		dragable: false,
		waitForAnimate: false,
		variableWidth: true,
		responsive:
			[
				{
					breakpoint: 500,
					settings: {
						dots: true,
						appendDots: ('.shop__slider-dots'),
					}
				},
			],
		arrows: false,
	})
});

$('.shop__slider-prev').on('click', function (e) {
	e.preventDefault()
	$('.shop__slider').slick('slickPrev')
})
$('.shop__slider-next').on('click', function (e) {
	e.preventDefault()
	$('.shop__slider').slick('slickNext')
})


$('.footer__menu-title').on('click', function () {
	$(this).next().slideToggle()
})


/*==================================== ANIMATION ====================================*/

window.onload = function () {
	let loadings = document.querySelectorAll('.loading');

	for (let loading of loadings) {
		loading.classList.add('loaded');
	}
};

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 4
			let animItemPoint = window.innerHeight - (animItemHeight / animStart);

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
				animItem.classList.add('anim-item--active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anim-item--active');
				}
			}

			function offset(elem) {
				let rect = elem.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		}
	}
}
