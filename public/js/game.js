var currentPlayer = 1; 
var win = false;

function changeCase(id) {
	
	if ( document.getElementById(id).classList.contains('player1') == false && document.getElementById(id).classList.contains('player2') == false )
	{		
		if(currentPlayer == 1 ){
			document.getElementById(id).classList.add('player1');
			document.getElementById(id).classList.remove('player2');			
			
		}else{
			document.getElementById(id).classList.add('player2');
			document.getElementById(id).classList.remove('player1');			
		}	
		testWin();
		changePlayer();
		testEnd();
	}else{
		alert('Cette case est déjà utilisée');
	}
   
}

function changePlayer() {
	if(!win){
		if(currentPlayer == 1){
		currentPlayer = 2;
		document.getElementById("turn").innerHTML = "Joueur 2 doit jouer";
		document.getElementById("turn").classList.add('font-player2');
	    document.getElementById("turn").classList.remove('font-player1');
		
		}else{
			currentPlayer = 1;
			document.getElementById("turn").innerHTML = "Joueur 1 doit jouer";
			document.getElementById("turn").classList.add('font-player1');
			document.getElementById("turn").classList.remove('font-player2');			
		}
	}
	
    
}

function testWin() {
	var classToSearch = "";
	
	var message = "";
	
	if(currentPlayer == 1){
		classToSearch = "player1";
		message = "Joueur 1 a gagné";
	}else{
		classToSearch = "player2";
		message = "Joueur 2 a gagné";		
	}
	
	//récupére le contenu de chaque case 
	 var c1 = document.getElementById("1").classList.contains(classToSearch);
	 var c2 = document.getElementById("2").classList.contains(classToSearch);
	 var c3 = document.getElementById("3").classList.contains(classToSearch);
	 var c4 = document.getElementById("4").classList.contains(classToSearch);
	 var c5 = document.getElementById("5").classList.contains(classToSearch);
	 var c6 = document.getElementById("6").classList.contains(classToSearch);
	 var c7 = document.getElementById("7").classList.contains(classToSearch);
	 var c8 = document.getElementById("8").classList.contains(classToSearch);
	 var c9 = document.getElementById("9").classList.contains(classToSearch);
	
	// test le resultat
	if( (c1 && c2 && c3) || (c4 && c5 && c6) || (c7 && c8 && c9 )){
		win = true;
	}else if ( (c1 && c4 && c7) || (c2 && c5 && c8) || (c3 && c6 && c9 )){
		win = true;
	}else if ( (c1 && c5 && c9) || (c3 && c5 && c7 )){
		win = true;
	}else{
		win = false;
	}
	
	if( win ){
		alert(message);
		disable();
		document.getElementById("turn").innerHTML = message;
	}
	
    
}

function restart() {
	
	location.reload();			
    
}

function disable() {
	
	for ( i =1; i <=9 ; i++){		
			document.getElementById(i).removeAttribute("onclick");			
		}			
    
}

function testEnd() {
	if( win == false ){			
		
		var i= 1;
		var empty = false;
		
		while ( empty == false && i <= 9 ){
			if(document.getElementById(i).classList.contains('player1') || document.getElementById(i).classList.contains('player2'))
			{
				empty = false;
			}else{				
				empty = true;
			}
			i++;
		}
		
		if( empty  == false){
			alert(" Egalité ");
		}		
		
	}
	
    
}