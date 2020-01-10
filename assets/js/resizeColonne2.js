
var conteneur_autre_info = document.getElementById('autres_informations');

var conteneur_premiere_formation = document.getElementById('premiere_formation');
var top_premiere_formation = conteneur_premiere_formation.getBoundingClientRect().top;

var conteneur_formulaire = document.getElementById('conteneur_formulaire');
var h2 = document.getElementsByTagName('h2');
refund();


window.addEventListener('resize', refund, false)


function refund(){
	conteneur_autre_info.style='width:' + (conteneur_premiere_formation.clientWidth-40) + 'px;';
	//dans l'ideal il faudrait recuperer le padding du  conteneur_premiere_formation pour avoir bien la même taille
	current_top_autre_info = conteneur_autre_info.getBoundingClientRect().top;
	if (top_premiere_formation!=current_top_autre_info) {
		conteneur_formulaire.style='justify-content:center; align-content:center;';	
	}

	
	
}