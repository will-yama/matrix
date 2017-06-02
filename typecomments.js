//This code uses tinytyper - make sure to load tinytyper before running this code https://github.com/lourenc/tinytyper

function runCode(t) {
	setTimeout(function() {
		if (document.getElementsByClassName("ocean-ui-comments-commentbase-text")!==undefined){
			var comment_elements  = document.getElementsByClassName("ocean-ui-comments-commentbase-text");
			var options = new Array();
			var instance = new Array();

			for (i=0; i<comment_elements.length; i++){

				typeComments(i);
			}

			function typeComments(j) {
				setTimeout(function() {
					options[j]  = {
						text: comment_elements[j].innerText,
						textSpeed: 95,
						blinkSpeed: 0.06
					}

					instance[j] = new tinytyper(comment_elements[j], options)
				}, 2000 * j)
			}
		}
	}, 2000 * t)
}

document.onreadystatechange = function () {
	if(document.readyState === "complete"){
		runCode(1);
	}
}
