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

		var phrase = debutPhrase + tendance + ' pour les pandas ' + type;

		$('body').append('<div>' + phrase + '</div>')
		console.log(phrase);

	});






});
