function triggerEvent(el, eventName) {
	let event = document.createEvent('HTMLEvents')
	event.initEvent(eventName, true, false)
	el.dispatchEvent(event)
}
  
let p = gca('.form-select');
if(!!p) {
	p.forEach(function(item, index){
		let select = item.querySelector('select');
		// console.log(select)
		select.addEventListener('change', function(e) {
			if(e.target.value == 0) {
				item.classList.add('init');
			} else {
				item.classList.remove('init');
			}
			//e.target.classList[e.target.value == 0 ? 'add' : 'remove']('empty')
		})
		triggerEvent(select, 'change')
	});
}

// upload img preview
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			console.log(input)
			console.log(e)
			// $(input).parent().find('img').attr('src', e.target.result);
			// $(input).parent().addClass('-active');
		};

		reader.readAsDataURL(input.files[0]);
	}
}
