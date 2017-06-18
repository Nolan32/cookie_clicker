var message =["tu es lent,allez accélère","plus vite","deja une crampe ?","pourquoi tu es aussi lent ?","toujours la ?"];
console.log(message);
var affichage =0
var count =0

$('#add').click(function(){
	count ++
	console.log(count)
	$('#message').html('')
	 if(count%15 ===0){
		$('#message').html(message[2])
		$('#result').html('')
	}else if(count%5 ===0){
		$('#message').html(message[1])
		$('#result').html('')
	}
	else if(count%3 ===0 ){
		$('#message').html(message[0]);
		$('#result').html('')
	}else {

	$('#result').html(count)
	}
})



