let mk = document.querySelectorAll('[data-form-toggle]');
let h = '-hide'
if(!!mk) {
	mk.forEach(function(item){
		// console.log(item)
		let sl = item.querySelectorAll('[type=radio]');
		if(!!sl) {
			sl.forEach(function(i2){
				i2.addEventListener('change', function(e){
					let pe = e.target.getAttribute('data-target')
					
					// reset : hide all
					mk.forEach(function(i){
						let pp = i.getAttribute('data-form-toggle')
						if(pp=='true') {
							i.classList.add(h)
						}
					})

					// dont hide me
					item.classList.remove(h)

					// set parent for not affected to hide if child el change
					let pi = item.getAttribute('id')
					if(pi==null) {
						item.setAttribute('data-form-toggle', 'false')
					}

					// show element who has target id
					if(!!pe) {
						let wo = document.getElementById(pe)
						if(!!wo) {
							wo.classList.remove(h)
						}
					}
				})
			})
		}
	})
}

// accordion
// Listen for click on the document
let aaa = '-active'
document.addEventListener('click', function (event) {
  
  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains('accordion-toggle')) return;
  
  // Get the target content
  var content = document.querySelector(event.target.hash);
  if (!content) return;
  
  // Prevent default link behavior
  event.preventDefault();
  
  // If the content is already expanded, collapse it and quit
  if (content.classList.contains(aaa)) {
    content.classList.remove(aaa);
		event.target.classList.remove(aaa);
    return;
  }
  
  // Get all open accordion content, loop through it, and close it
  // var accordions = document.querySelectorAll('.accordion-content.-active');
  // for (var i = 0; i < accordions.length; i++) {
    //accordions[i].classList.remove('active');
  // }
  
  // Toggle our content
  event.target.classList.toggle(aaa);
  content.classList.toggle(aaa);
})


//
window.addEventListener("scroll", function() {
	let st = window.pageYOffset || document.documentElement.scrollTop;
	if(st > 120) {
		document.body.classList.add('scrolling')
	} else {
		document.body.classList.remove('scrolling')
	}
});