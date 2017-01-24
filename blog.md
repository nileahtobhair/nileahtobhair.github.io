---
layout: page
title: Blog
menu: true
permalink: /blog/
---


<div class="wrapper">

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

     
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                <p class="post-excerpt">{{ post.excerpt }} <a class="post-end-link" href="{{ post.url | prepend: site.baseurl }}"> Read on...</a> </p>
  
      </li>
    {% endfor %}
  </ul>

</div>
