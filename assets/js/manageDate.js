var date_input = document.getElementById('date_de_saisie');
if (date_input.type=='text') {
	date_input.id='datepicker';
	date_input.style='background-color:white;';
	var today=new Date();
	date_input.value='' +(today.getMonth()+1) + '/' + today.getDate()+ '/' + today.getFullYear();
	document.getElementById('label_date_saisie').forHtml('datepicker');
}
else{
	document.getElementById('date_de_saisie').valueAsDate = new Date();
}