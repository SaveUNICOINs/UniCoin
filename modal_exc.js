
// Get the modal
var bc_buy = document.getElementById('blockchain4');
var bc2 = document.getElementById('blockchain2');
var bc = document.getElementById('blockchain6');
// Get the button that opens the modal
var btn_getUnicoins = document.getElementById("getUnicoins");
var btn_buyUNC = document.getElementById("buyUNCbtn");
var btn_getSellDialog = document.getElementById("getSellDialog");
var btn_sellorder = document.getElementById("placeSellOrderbtn");
var btn_getBuyDialog = document.getElementById("getBuyDialog");
var btn_buyorder = document.getElementById("placeBuyOrderbtn");
// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn_getUnicoins.onclick = function() {
	//alert("before set to block");
    bc2.style.display = "block";
	//$('.form_buywithmeta').css('display', 'block');
    //alert("set to block");
}
btn_buyUNC.onclick = function() {
	//alert("before set to block");
    bc2.style.display = "none";
	//$('.form_buywithmeta').css('display', 'block');
    //alert("set to block");
}


btn_getSellDialog.onclick = function() {
    bc.style.display = "block";
}
btn_sellorder.onclick = function() {
    bc.style.display = "none";
}

btn_getBuyDialog.onclick = function() {
    bc_buy.style.display = "block";
}


btn_buyorder.onclick = function() {
    bc_buy.style.display = "none";
}
/* When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	//alert("window.onclick");
    if (event.target == bc2) {
        bc2.style.display = "none";
		//alert("event.target == modal");
		//$('.form_buywithmeta').css('display', 'none');
    }
    if (event.target == bc) {
        bc.style.display = "none";
		//alert("event.target == modal");
		//$('.form_buywithmeta').css('display', 'none');
    }
    if (event.target == bc_buy) {
        bc_buy.style.display = "none";
		//alert("event.target == modal");
		//$('.form_buywithmeta').css('display', 'none');
    }
	
}
