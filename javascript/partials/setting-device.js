//switchAkses
function switchAkses_dialog(msg, link) {
	// console.log(btn)
	let ts = document.querySelector('[data-dialog]')
	if (ts) {
		ts.firstElementChild.innerHTML = msg
		ts.classList.remove('-hide')
		ts.classList.add('-show')
		let sec = 15;

		switchAkses_AutoDismiss(ts, sec)
	}
}

function switchAkses_AutoDismiss(el, sec) {  
	let i = 1
	let pl = setInterval(() => {
    // console.log(sec)
		i++
		if (i == sec) {
			el.classList.remove('-show')
			el.classList.add('-hide')
		}
		if (i == (sec+1)) {
			el.classList.remove('-hide')
			clearInterval(pl)
		}
	}, 200);
}

function switchAkses(msg, msgdel) {
  let elem = document.getElementById('switchKompasplus');
  let device = elem.getAttribute('data-limitdevice');

  if(device == 'true'){
    document.getElementById("kgmDialog-confirm-limit-device").classList.add('-show');
    document.getElementById("checkbox-kompasplus").checked = true;
    
  }else{
    document.getElementById("kgmDialog-confirm-limit-device").classList.remove('-show');

    const aktive_ = document.querySelectorAll('.switchAkses');
    for (const aktive of aktive_) {
      if (aktive.classList.contains('-active')) {
        aktive.classList.remove('-active')
        switchAkses_dialog(msgdel);
      } else {
        aktive.classList.add('-active')
        switchAkses_dialog(msg);
      }
    }
  }
}