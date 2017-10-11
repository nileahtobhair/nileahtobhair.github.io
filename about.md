---
layout: default
title: About
permalink: /about/
menu: true
---

<div class='background-container'>
	
	<div class='big-content'>
	    <h3 class='big-heading'>
	    	About
	    	<span class='social-links'>
			    <a target="_blank" id="github" href="http://www.github.com/nileahtobhair">
			    	<img src="{{site.baseurl}}/pics/github.svg">
			    </a>
			    <a target="_blank" href="https://twitter.com/nileahtobhair">
			      	<img src="{{site.baseurl}}/pics/twitter2.svg">
			    </a>
			      <a target="_blank" class="insta-container" href="https://instagram.com/niamhslawlor">
			      	<img id="insta-link" src="{{site.baseurl}}/assets/instagram.svg">
			      </a>
			      
			      <a target="_blank" href="https://www.linkedin.com/in/nlawlor/">
			            <img id='linkedin-link' src="{{site.baseurl}}/pics/linkedin.svg">
			      </a>
	    </span>
	    </h3>
	    <h4>Maker. Traveller. Overthinker.</h4>
	    <p>My name is Niamh.</p>
	    <p>I am a Software Developer.</p>
	    <p>I love to travel.</p>
	    <p>Contact me <a href="/contact">here.</a></p>
	    
	</div>
	    	
	<img class='home-me' src="../assets/cutout.png"/>
	
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
	var $ = jQuery; 

	$( document ).ready(function() {
		var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=38657779.afbeea0.d46de61ceadb4fe1b1714fac67212736&count=18";
		
	    $.ajax({
	        method: "GET",
	        url: url,
	        dataType: "jsonp",
	        jsonp: "callback",
	        jsonpCallback: "jsonpcallback",
	        success: function(data) {
	           if(data && data.data){
	           	data.data.map((photo,index)=>{
	           		var image_url = photo.images.thumbnail.url;
	           		/*$("ul#instagram-images").append('<li><a href="https://www.instagram.com/niamhslawlor/" target="_blank"> <img src='+image_url+' alt="instagram"/></a></li>');*/
	           		$('.site-nav').append('<a class="insta-append" href="https://www.instagram.com/niamhslawlor/" target="_blank"> <img src='+image_url+' alt="instagram"/></a>');
	           	})
	           }
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	         	console.log('error',errorThrown);
	        }
    	});
	});
	
</script>

