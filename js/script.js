function show(id) {
	var project = document.getElementById(id);
	var pos = window.scrollY;
	pos = pos + (pos * .05);
	project.style.top = pos + 'px';
	project.style.zIndex = 100;
	// project.style.display = 'block';
	project.classList.remove("hide");
	project.classList.add("show");
}

function hide(id) {
	var project = document.getElementById(id);
	// project.style.display = 'none';
	project.classList.remove("show");
	project.classList.add("hide");
	setTimeout(function(){ 
		project.style.zIndex = -100;
	}, 200);
}

