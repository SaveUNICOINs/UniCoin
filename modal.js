
// Get the modal
var bc2 = document.getElementById('blockchain2');
var bc = document.getElementById('blockchain');
// Get the button that opens the modal
var btn_getUnicoins_2 = document.getElementById("getUnicoins_2");
var btn_getUnicoins = document.getElementById("getUnicoins");
var btn_buyUNC = document.getElementById("buyUNCbtn");
var btn_getFeedDialog = document.getElementById("getFeedDialog");
var btn_feedunicorn = document.getElementById("feedunicornbtn");
// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn_getUnicoins_2.onclick = function() {
	$("#blockchain").fadeOut('fast');
	$("#blockchain2").fadeIn('fast');
}

btn_getUnicoins.onclick = function() {
	$("#blockchain2").fadeIn('fast');
}
btn_getFeedDialog.onclick = function() {
	//alert("before set to block");
    //bc.style.display = "block";
	$("#blockchain").fadeIn('fast');
	//$('.form_buywithmeta').css('display', 'block');
    //alert("set to block");
}

btn_buyUNC.onclick = function() {
	//alert("before set to block");
    //bc2.style.display = "none";
	$("#blockchain2").fadeOut('fast');
	//$('.form_buywithmeta').css('display', 'block');
    //alert("set to block");
}
btn_feedunicorn.onclick = function() {
	//alert("before set to block");
    //bc.style.display = "none";
	$("#blockchain").fadeOut('fast');
	//$('.form_buywithmeta').css('display', 'block');
    //alert("set to block");
}
/* When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	//alert("window.onclick");
    if (event.target == bc2) {
        //bc2.style.display = "none";
		$("#blockchain2").fadeOut('fast');
		//alert("event.target == modal");
		//$('.form_buywithmeta').css('display', 'none');
    }
    if (event.target == bc) {
        //bc.style.display = "none";
		$("#blockchain").fadeOut('fast');
		//alert("event.target == modal");
		//$('.form_buywithmeta').css('display', 'none');
    }
	
}
