---
layout: page
title: Blog
menu: true
permalink: /oldblog/
---


<div class="wrapper">
  <ul class="post-list">
    {% for post in site.posts %}
    	{% if post.visible %}
	      <li>
	        <span class="meta">{{ post.date | date: "%b %-d, %Y" }}</span>
			<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	        <p class="excerpt">{{ post.excerpt }} <a class="post-end-link" href="{{ post.url | prepend: site.baseurl }}"> Read on...</a> </p>	  
	      </li>
        {% endif %}
    {% endfor %}
  </ul>

</div>
