(function() {
	new Timer(function() {
	    alert("Done!");
	}, 1000);
	document.getElementById("app-container").className += " show";
})();