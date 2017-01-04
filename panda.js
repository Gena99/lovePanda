$(document).ready(function(){
	$('button.panda').click(function()
	{
		var type= $(this).attr('data-type');
		var tendance= $(this).attr('data-tendance');
		if(tendance == "amour"){
			var debutPhrase = "J'éprouve de l'";
		}else{
			var debutPhrase = "J'éprouve de la ";
		}
		console.log(debutPhrase + tendance + ' pour les pandas ' + type);

	});






});
