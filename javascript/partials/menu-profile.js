// select expert
function selectExpert(el, xid, xname, search) {
	// set value input hidden
	let vk = document.querySelector('[data-expert-id]')
	let vn = document.querySelector('[data-expert-display]')
	
	// all element node to array 
	let se = [...document.querySelectorAll('[data-expert-select]')]

	// filter except this element
	let os = se.filter(function(e) {
		return e !== el;
	});
	
	// reset all
	if(os) {
		os.forEach(function(item) {
			item.setAttribute('data-expert-select', 'false')
		})
	}

	// toggle
	let attr = el.getAttribute('data-expert-select')
	if(attr=='false') {
		el.setAttribute('data-expert-select', 'true')
		if(vk && vn) {
			vk.value = xid
			vn.value = xname
			if(search) {
				syncExpert(xid, 'true')
			}
		}
	} else {
		el.setAttribute('data-expert-select', 'false')
		if(vk && vn) {
			vk.value = ''
			vn.value = ''
			if(search) {
				syncExpert(xid, 'false')
			}
		}
	}

}

function syncExpert(xid, val) {
	let lm = document.querySelectorAll('[data-expert-select]')
	if(lm) {
		lm.forEach(function(item){
			let go = item.getAttribute('data-expert-id')
			if(go==xid) {
				item.setAttribute('data-expert-select', val)
			}
		})
	}

}

// toggle radio button
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
					let ps = e.target.getAttribute('data-sort')
					
					// reset : hide all
					mk.forEach(function(i){
						let pp = i.getAttribute('data-form-toggle')
						if(pp=='true') {
							i.classList.add(h)
						}
					})
					// reset: sorting reset
					let ks = document.querySelectorAll('[data-sort-name]')
					if(ks) {
						ks.forEach(function(j){
							j.classList.remove('--first')
						})
					}

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
							
							// sort element first
							if(!!ps) {
								let fst = wo.querySelector('[data-sort-name='+ps+']')
								if(fst) {
									fst.classList.add('--first')
								}
							}

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