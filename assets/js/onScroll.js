

	(function(w,d,undefined){
 		var header = d.getElementById('header');
 		var conteneur_avant_information = d.getElementById('conteneur_avant_information');
		var el_html = d.documentElement,
			el_body = d.getElementsByTagName('body')[0],
			nav_header = d.getElementById('nav_header'),
			moveImageOnScroll = function(triggerElement) {


				var wScrollTop	= w.pageYOffset || el_body.scrollTop,
					navHeight	= nav_header.offsetHeight,
					bodyRect	= el_body.getBoundingClientRect(),
					scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 600;


				
				//bouge le nav selon le scroll
				//nav_header.style.top='' + (10+wScrollTop/10) +'px';

				//si le haut de l'ecran touche le haut du nav 
				if (nav_header.getBoundingClientRect().top<=0) {
					nav_header.style='position:fixed;top:0px;z-index:1;';
					conteneur_avant_information.style='margin-top: '+ 2*navHeight + 'px;';
				}
				/*
				if (header.getBoundingClientRect().bottom>=0) {
					nav_header.style='position:relative;';
					conteneur_avant_information.style='margin-top: ' + navHeight + 'px;';
				}*/


				if (nav_header.getBoundingClientRect().top-16<header.getBoundingClientRect().bottom) {
					nav_header.style='position:relative;';
					conteneur_avant_information.style='margin-top: ' + navHeight + 'px;';
				}



			},
			onScrolling = function() {
				// on exécute notre fonction moveImageOnScroll()
				// dans la fonction onScrolling()
				moveImageOnScroll( d.getElementById('conteneur_formulaire') );

				// on pourrait faire plein d'autres choses ici 
			};
	 
		// quand on scroll
		w.addEventListener('scroll', function(){
			// on exécute la fonction onScrolling()
			w.requestAnimationFrame( onScrolling );
		});
	 
	}(window, document));

	
