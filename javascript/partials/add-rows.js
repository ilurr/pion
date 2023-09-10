function countIt(el, val) {
	let spn = document.querySelectorAll('[data-count=result]')
	if(spn) {
		spn.forEach(function(item){
			// parent
			let psp = item.closest('.form-row')

			// display
			let src = parseInt(item.textContent)
			src = src + Number(val)
			item.innerHTML = src

			// button
			let btnMin = psp.querySelector('[data-count=min]')
			if(btnMin && src<1) {
				btnMin.classList.add('-disabled')
			} else {
				btnMin.classList.remove('-disabled')
			}

			// form input hidden
			let fps = psp.querySelector('input[name=count_sesi')
			if(fps) {
				fps.value = src
			}
		})
	}
}

function addTreeRows(el) {
	// get parent
	let p = el.closest('.form-tree');

	// get id name
	let gid = p.getAttribute('id').split('_')

	// clone
	let pClone = p.cloneNode(true);

	// rename clone id
	pClone.id = gid[0]+'_'+(parseInt(gid[1]) + 1);

	// rename each forms id/name
	let formClone = pClone.querySelectorAll('input, select')
	if(formClone) {
		formClone.forEach(function(item){
			let qw = item.getAttribute('id').split('_')
			item.id = qw[0]+'_'+(parseInt(qw[1]) + 1);
			item.name = qw[0]+'_'+(parseInt(qw[1]) + 1);
			if(item.classList.contains('js-datepicker-now')) {
				let we = item.parentElement.getAttribute('id').split('_')
				item.parentElement.id = we[0]+'_'+(parseInt(we[1]) + 1);
			}
			item.value = ''
		})
	}

	// reset and remove datepicker
	let dpClone = pClone.querySelector('.datepicker')
	if(!!dpClone) {
		dpClone.remove()
	}

	// form manipulate: select
	let selClone = pClone.querySelector('.form-select')
	if(!!selClone) {
		selectInit(selClone)
	}

	// let remClone = pClone.querySelector('.form-tree-remove')
	// if(remClone) {
	// 	remClone.classList.remove('-hide')
	// }

	// insert
	insertAfter(p, pClone)

	// button add set hide
	el.classList.add('-hide')

	// button remove set to show, except first row 
	let bhi = p.querySelector('.form-tree-remove')
	if(!!bhi) {
		bhi.classList.remove('-hide')
	}
}

function removeTreeRows(el) {
	let p = el.closest('.form-tree');
	// console.log(p)
	p.remove()
}

function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
