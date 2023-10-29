function reactionShare(el) {
	openModal(el)
}

function closeModal() {
	let mdl = document.getElementById('modal');
	if (!!mdl) {
		document.body.classList.remove('modal');
		let fc = mdl.firstElementChild;
		while (fc.firstChild) {
			fc.removeChild(fc.firstChild);
		}
	}
}

function clearModalsContent(el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}		
}

function openModal(el) {
	let active = 'modal'
	let tar = document.querySelector('[data-modal-target=' + el + ']')
	let bgcl = document.querySelector('[data-modal-bgclick]')
	let mdl = document.getElementById('modal');
	if (!!mdl) {
		if (!!tar) {
			// clear first
			let fc = mdl.firstElementChild;
			clearModalsContent(fc);

			// add body class and clone element
			document.body.classList.add(active);
			let ox = tar.cloneNode(true);

			// cek form manipulate
			let sq = ox.querySelectorAll('.form-select')
			if(sq) {
				sq.forEach(function(item){
					selectInit(item);
				})
			}

			fc.appendChild(ox);
		} else {
			console.log('unknown modal target');
			return;
		}

		// bgclick
		if(bgcl) {
			document.addEventListener('click', function(e){
				if (e.target.matches('#modal') || e.target.matches('.modal-parent')) {
					closeModal();
				}
			}) 
		}

		// dismiss modals
		mdl.addEventListener('click', function (e) {
			// console.log(e)
			if (e.target.matches('[data-modal-button=dismiss]')) {
				closeModal();
			}

		});
	} else {
		console.log('template modals not found');
		return;
	}

}

// accordion
function toggleAccordion(el) {
	let ac = '-active'
	// console.log(this);
	let tap = document.querySelector('[data-accordion-target=' + el + ']')
	if(!!tap) {
		tap = tap.parentElement
		// if (tap.classList.contains(ac)) {
		// 	tap.classList.remove(ac)
		// }
		
		tap.classList.toggle(ac)
	}
}

// toast
function reactionToast(msg, link) {
	// console.log(btn)
	let ts = document.querySelector('[data-toast]')
	if (ts) {
		// btn.setAttribute('disabled','disabled')
		ts.firstElementChild.innerHTML = msg
		ts.classList.remove('-hide')
		ts.classList.add('-show')
		let tsk = ts.getElementsByTagName('a')[0]
		let sec
		if (tsk) {
			if (link) {
				sec = 25 // 5 sec
				tsk.innerHTML = 'Open'
				tsk.href = link
			} else {
				sec = 15 // 3 sec
				tsk.innerHTML = 'Close'
				tsk.href = '#'
			}
			tsk.addEventListener('click', function (e) {
				e.preventDefault()
				if(link) {
					window.location.href=link
				} else {
					ts.classList.add('-hide')
				}
				// console.log('i')
			})
		}
		reactionAutoDismiss(ts, sec)
	}
}

function reactionLike(msg, msgdel, link) {
	const likes = document.querySelectorAll('.buttonLike');
	for (const like of likes) {
		if (like.classList.contains('-active')) {
			like.classList.remove('-active')
			reactionToast(msgdel);
		} else {
			like.classList.add('-active')
			const icos = document.querySelectorAll('.icoLike');
			for (const ico of icos) {
				ico.classList.add('animate', 'animateheadshake')
			}
			reactionToast(msg, link);
		}
	}
	const dlikes = document.querySelectorAll('.buttonDislike');
	for (const dlike of dlikes) {
		dlike.classList.remove('-active')
	}
}

function reactionDislike(msg, link) {
	const dlikes = document.querySelectorAll('.buttonDislike');
	for (const dlike of dlikes) {
		if (dlike.classList.contains('-active')) {
			dlike.classList.remove('-active')
		} else {
			dlike.classList.add('-active')
		}
	}
	const likes = document.querySelectorAll('.buttonLike');
	for (const like of likes) {
		if (like.classList.contains('-active')) {
			reactionToast(msg, link);
		}
		like.classList.remove('-active')
	}
	const icos = document.querySelectorAll('.icoLike');
	for (const ico of icos) {
		ico.classList.remove('animate', 'animateheadshake')
	}
}

function reactionBookmark(msg, msgdel, link, elem) {
	if (elem.classList.contains('-active')) {
		reactionToast(msgdel);
	} else {
		reactionToast(msg, link);
	}
    let prRead = 'reactionList'
    let prEl = elem.parentElement
    let bmarks
    if ((" " + prEl.className + " ").replace(/[\n\t]/g, " ").indexOf(prRead) > -1) {
        console.log(prEl)
        bmarks = document.querySelectorAll('.'+prRead+' .buttonBookmark');
    } else {
        bmarks = prEl.querySelectorAll('.buttonBookmark');
    }
	for (let bmark of bmarks) {
		bmark.classList.toggle('-active')
	}
}

function reactionAutoDismiss(el, sec) {
	let i = 1
	let pl = setInterval(() => {
		i++
		if (i == sec) {
			el.classList.remove('-show')
			el.classList.add('-hide')
		}
		if (i == (sec+1)) {
			el.classList.remove('-hide')
			// btn.removeAttribute('disabled')
			clearInterval(pl)
		}
	}, 200);
}

// toggle dropdown
let tdd = document.querySelectorAll('[data-dropdown]')
if(!!tdd) {
	tdd.forEach((el) => {
		let ddm = el.getAttribute('data-mobile-only')
		if(!ddm) {
			toggleDropdown(el)
		}
		if(ddm && mobileOnly()) {
			toggleDropdown(el)
		}
	});
}

function toggleDropdown(el) {
	el.addEventListener('click', function(e){
		e.preventDefault()
		el.parentElement.classList.toggle('-active')
	})
	document.addEventListener("click", function(e){
		// console.log(e.target)
		if(el.contains(e.target)) {
			// console.log(tdd)
		} else {
			el.parentElement.classList.remove('-active')
		}
	});
}

function mobileOnly() {
	if (window.innerWidth < 990) {
		return true
	}
	return false
}