---
layout: projects
title: Projects
permalink: /projects/
menu: true
---

<h3 class='projects-title'> Projects</h3>
<div class='row projects-page'>
	<ul class='list-of-projects'>
	{% for project in site.projects  %}
	<li class="portfolio-project" data-content="{{project.title}}" onclick="redirect('{{site.baseurl}}{{project.permalink}}')">
	<a href="{{site.baseurl}}{{project.permalink}}" class="image-container"><img class="project-thumbnail" id="{{project.title}}" src="{{site.baseurl}}/assets/{{project.thumbnail}}"/></a>
	 </li>
	{% endfor %}
	</ul>
</div>

<script>
function redirect(link){
	window.location = link;
}
</script>