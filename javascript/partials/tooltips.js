Tooltip = function() {

	document.body.addEventListener("mouseover", function(e) {
		if (e.target.hasAttribute('aria-label') && e.target.hasAttribute('data-tooltip')) {
			let tooltip = document.createElement("div");
			tooltip.className = "tooltip" + " -" + e.target.getAttribute('data-tooltip');
			tooltip.innerHTML = e.target.getAttribute('aria-label');
	
			e.target.appendChild(tooltip);
		}	else {
			return
		}

	});

	document.body.addEventListener("mouseout", function(e) {
		if (e.target.hasAttribute('aria-label') && e.target.hasAttribute('data-tooltip')) {
				setTimeout(function() {
					let sr = e.target.querySelector(".tooltip")
					if(sr) {
						sr.remove();
					}
				}, 200);
			}
	});

}

let tltps = new Tooltip()