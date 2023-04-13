let i = 0;
let string = "Welcome to Ani Port Folio"

function remove (){

	location.href="index2.html"
}


function main(){
	

	if (i< string.length){
		document.getElementById("mango").innerHTML += string[i]
		i++
		setTimeout(main,150)
	}



	else{



	setTimeout(remove,10)


	}





	console.log("ellwre")
}