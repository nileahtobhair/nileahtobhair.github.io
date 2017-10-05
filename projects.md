---
layout: home
title: Projects
permalink: /projects/
menu: true
---

<div class='background-container projects-page'>

	<div class='big-content'>
	   <h3 class='projects-title'> Projects</h3>
	   <ul class='list-of-projects'>
			{% for project in site.projects  %}
				{% if project.visible %}
					<li class="portfolio-project" data-content="{{project.title}}" onclick="redirect('{{site.baseurl}}{{project.permalink}}')">
						<a href="{{site.baseurl}}{{project.permalink}}" class="image-container"><img class="project-thumbnail" id="{{project.title}}" src="{{site.baseurl}}/assets/{{project.thumbnail}}"/></a>
			 		</li>
		 		{% endif %}
			{% endfor %}
		</ul>
	</div>
	    	
</div>

<script>
	function redirect(link){
		window.location = link;
	}
</script>