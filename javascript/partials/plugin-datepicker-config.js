let elem = document.querySelectorAll('.js-datepicker');
let elemAll = document.querySelectorAll('.js-datepicker-all');
let elem2 = gc('.js-datepicker-booking', document);
let now = new Date();
let twnty = now.setFullYear(now.getFullYear() - 30);

let options2 = {
	minDate: new Date(),
	format: "dd MM yyyy",
	leftArrow: '<',
	language: 'id',
	rightArrow: '>',
	container: '#js-datepicker-container',
	orientation: "bottom auto",
	startView: 0, 
	autohide: true
}
if(!!elem2) {
	const datepicker2 = new Datepicker(elem2, options2);
}
if(!!elemAll.length>0) {
	elemAll.forEach(function(item){
		let optionAll = {
			minDate: new Date(),
			format: "dd MM yyyy",
			leftArrow: '<',
			language: 'id',
			rightArrow: '>',
			container: '#'+item.parentElement.getAttribute('id'),
			orientation: "bottom auto",
			startView: 0, 
			autohide: true
		}
		const datepickerAll = new Datepicker(item, optionAll);
	})
}
if(!!elem.length>0) {
	elem.forEach(function(item){
		console.log(item.parentElement.getAttribute('id'))
		let options = {
			maxDate: new Date(),
			format: "dd MM yyyy",
			leftArrow: '<',
			language: 'id',
			rightArrow: '>',
			container: '#'+item.parentElement.getAttribute('id'),
			orientation: "bottom auto",
			defaultViewDate: twnty,
			startView: 2, 
			autohide: true
		}
		const datepicker = new Datepicker(item, options);
	});
	// elem.addEventListener('changeDate', function() {
	// 	elem.value = datepicker.getDate();
	// });
}

document.addEventListener('click', function(e){
	if (e.target.matches('.js-datepicker-now')) {
		let options = {
			maxDate: new Date(),
			format: "dd MM yyyy",
			leftArrow: '<',
			language: 'id',
			rightArrow: '>',
			container: '#'+e.target.parentElement.getAttribute('id'),
			orientation: "bottom auto",
			defaultViewDate: twnty,
			startView: 2, 
			autohide: true
		}
		let nsd = e.target.nextElementSibling
		if(!nsd) {
			let datepicker = new Datepicker(e.target, options);
			datepicker.show()
		// } else {
		// 	console.log(nsd)
		// 	if(nsd.classList.contains('datepicker')) {
		// 		datepicker.show()
		// 	}
		}
	}
})