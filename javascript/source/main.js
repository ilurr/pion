////////////////////////////////// TAB ///////////////////////////////////
//=include '../partials/tab.js'
//=include '../partials/menu-profile.js'
//=include '../partials/reaction.js'
///////////////////////////////// SHOW PASSWORD ///////////////////////////////////
//=include '../partials/toggle-password.js'
////////////////////////////////// COLOR AVATAR ///////////////////////////////////
//=include '../partials/color-avatar.js'
//////////////////////////////// FORM MANIPULATE //////////////////////////////////
//=include '../partials/form-manipulate.js'
/////////////////////////////////// DATEPICKER ////////////////////////////////////
//=include '../partials/plugin-datepicker.js'
//=include '../partials/plugin-datepicker-locale.js'
//=include '../partials/plugin-datepicker-config.js'
//=include '../partials/plugin-counter.js'
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// FUNCTION /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//=include '../partials/global-function.js'

var mswiper = new Swiper(".swiper-client", {
	slidesPerView: 2,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	loop: true,
	breakpoints: {
    768: {
      slidesPerView: 7,
    },
	}
});

var mswiper2 = new Swiper(".swiper-testi", {
	slidesPerView: 1,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
});

var mswiper3 = new Swiper(".swiper-media", {
	// slidesPerView: 2,
	slidesPerView: "auto",
	spaceBetween: 15,
	freeMode: true,
	navigation: {
		nextEl: ".media-arrow-next",
		prevEl: ".media-arrow-prev",
	},
	breakpoints: {
		// 500: {
			// 	slidesPerView: 2,
    // },
    768: {
			loop: true,
			slidesPerView: 3,
			freeMode: false,
    },
    1200: {
      slidesPerView: 4,
    },
	}
});


