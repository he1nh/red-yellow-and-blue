console.log("debug: script loaded");
main();

function main() {

	console.log("debug: entered main");

	var red=document.getElementById('red');
	var yellow=document.getElementById('yellow');
	var blue=document.getElementById('blue');

	function update(el, url) {
		el.innerHTML = '';
		var start = new Date().getTime();
		var request = new XMLHttpRequest();
		request.onload = function() {
			var end = new Date().getTime();
			var delta =  end - start;
			console.log(start, delta);
			console.log("retrieved %s", url);
			el.innerHTML = this.responseText + delta;
		}

		request.open("GET", url);
		request.send();
	}

	// update content of elements
	update(red,"red.html");
	update(yellow,"yellow.html");
	update(blue,"blue.html");
}
