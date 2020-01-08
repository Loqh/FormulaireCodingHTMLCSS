var conteneur_autre_info = document.getElementById('autres_informations');
var conteneur_premiere_formation = document.getElementById('premiere_formation');
console.log(conteneur_autre_info);
conteneur_autre_info.style='width:' + conteneur_premiere_formation.offsetWidth + 'px;';

window.addEventListener('resize', redimensionne, false)

function redimensionne(){
	var conteneur_autre_info = document.getElementById('autres_informations');
var conteneur_premiere_formation = document.getElementById('premiere_formation');
console.log(conteneur_autre_info);
conteneur_autre_info.style='width:' + conteneur_premiere_formation.offsetWidth + 'px;';
}