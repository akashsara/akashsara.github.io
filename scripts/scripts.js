$(document).ready(function() {
    window.sr = ScrollReveal();

    sr.reveal('.scrollFadeIn', {
        duration: 1500,
        origin:'top',
        easing:'ease',
        move: 0,
    });

    sr.reveal('.fadeInBox', {
        duration: 1000,
     }, 50);
	 
	$(document).ready(function(){
		$('.scrollspy').scrollSpy({
			scrollOffset: 50
		});
	});
        
	/*
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	########### Easter Egg Code Below. Scroll at your own risk.############
	#######################################################################
	*/
	
	/* https://www.simoahava.com/gtm-tips/add-konami-code-to-your-site/ */
	var konamiCode = '38,38,40,40,37,39,37,39,66,65';
	var keyPresses = [];
	var checkKonami = function(e) {
		keyPresses.push(e.keyCode);
		if (keyPresses.slice(keyPresses.length-10).join() === konamiCode) {
			alert("Code Accepted. Activating new site...")
			gamer_mode();
		}
	};
	document.addEventListener('keyup', checkKonami);
	
	$('.gamer-mode').click(gamer_mode);
	
});

function gamer_mode() {
	$('.full-name').text("zZz Lan zZZ");
	$('.designation').html("League of Legends | CoD4 | Civilization V");
	$('.about-main').html("Oh, you actually found this. Not bad. Not bad at all. Welcome to my Game World. You play anything? Hit me up, we'll play a few games. I don't play DoTA, PUBG or CS:GO if you're one of those folks. And no mobile games either. <br /><br /> Or do you wanna talk about books? Man I love reading. The Wheel of Time is one of my favorite series ever. The Stormlight Archive is pretty good too. Kingkiller Chronicles is good but you know, the next book isn't gonna release anytime soon. I'm a big Harry Potter fanboy too. Look at the portfolio section for something cool. Oh and there's this new series I loved, 'An Ember in the Ashes'. Check it out. <br /><br /> Okay so movies and games are done. How about some good old TV? I watch a ton of anime and a lot of TV shows too. My favorite show ever is Avatar: The Last Airbender. Hunter x Hunter, One Punch Man and My Hero Academia are pretty close to it on the list though. I love Silicon Valley, The Good Place and The Expanse as well. The MCU shows are pretty good too. <br /><br /> Hmm, did I leave anything out? Well I don't really watch too many movies, but I always watch anything related to Marvel, DC & Star Wars. I even have a lightsaber! Wait. LORD OF THE RINGS. LORD OF THE RINGS IS AMAZING. The movies at least. I didn't like the books that much. plsdontkillme. Ooh and I have a lot of cool action figures. Check out the 'portfolio' (Heh. Portfolio xD) section.");
	
	$('.reddit-image').attr("src", "images/action_figures.jpg");
	$('.reddit-title').html("My Action Figures <3<i class=\"material-icons right\">more_vert</i>");
	$('.reddit-reveal-title').html("My Action Figures <3<i class=\"material-icons right\">close</i>");
	$('.reddit-text').text("Look at 'em! Kakashi, Kylo Ren, the Joker, a Stormtrooper, Megatron (Dinosaur), Gogeta, a Batman Funko Pop, Rex, a couple of other Batman. Cool right? :D :D :D ");
	$('.reddit-link').attr("href", "images/action_figures.jpg")
	
	$('.fer-image').attr("src", "images/hp.jpg");
	$('.fer-title').html("The Deathly Hallows<i class=\"material-icons right\">more_vert</i>");
	$('.fer-reveal-title').html("The Deathly Hallows<i class=\"material-icons right\">close</i>");
	$('.fer-text').text("Look at this beauty. The Elder Wand. With this uber duper cool custom made stand. Got the idea from a reddit post.");
	$('.fer-link').attr("href", "images/hp.jpg")
	
	$('.whatsapp-image').attr("src", "images/books.jpg");
	$('.whatsapp-title').html("NEED MORE BOOKS<i class=\"material-icons right\">more_vert</i>");
	$('.whatsapp-reveal-title').html("NEED MORE BOOKS<i class=\"material-icons right\">close</i>");
	$('.whatsapp-text').text("Yeah, so like 90% of this is just fantasy. That's pretty much all I read. Cause fantasy is well fantastic. You just dive into this other world and that's just amazing.");
	$('.whatsapp-link').attr("href", "images/books.jpg")
}