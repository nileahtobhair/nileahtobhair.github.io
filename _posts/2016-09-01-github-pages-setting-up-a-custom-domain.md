---
layout: post
title:  "Setting up a custom domain for github pages with goDaddy"
date:   2016-09-02 18:41:29
categories: tutorial github goDaddy
visible : false
comments: True
icon : ""
---
As I've explained before, I use Github pages to develop this site and it is hosted using Github. Up to this point the domain for the site has been nileahtobhair.github.io , applied automatically when you host via Github. Using a custom domain is something that's been on the to-do list for a while but I hadn't gotten around to doing it. While there are a number or tutorials online on this subject and the process is really straightforward once you have figured it out ,I found the tutorials quite difficult to follow the first time. I wanted to write an up to date tutorial that quickly explained the steps involved in switching to a custom domain.

This tutorial assumes that you have a working github pages repo and site accessible at username.github.io , if not github pages getting started is well explained and accessible here. Naturally it's also nessecary to purchase a custom domain name, niamhlawlor.com in my case. I used goDaddy.com to do this, mainly because they are having a sale and so my particular domain happened to be cheap . They also seem to have a simple and easy to use UI , which is useful and seem to be a reputible company, name not withstanding (it kind of creeps me out). The article will reference goDaddy.com specifically but it is of course possible to use an alternative domain name provider and follow along.


There are three steps involved in this process :
<ul class='standard-list'>
<li>1)   Push a CNAME file to your github repo</li>
<li>2)   Setup a cname record (alias) with goDaddy</li>
<li>3)   Register a host with goDaddy</li>
</ul>
	
<h3 class='post-sub-title'>1) Github CNAME file</h3>

Add a file called CNAME to the root of your github repo where your site is located. The file should have no extension and the name should contain all captial letters. The cname file should contain only your new domain name with no extra characters. This cname file tells github what URL to respond to when trying to access your content

![cname]({{site.baseurl}}/pics/cname.png)

<h3 class='post-sub-title'>2) goDaddy CNAME file </h3>

Sign in to the goDaddy website. Click on your username in the top right hand corner and in the drop down menu select manage my domains.

![domain]({{site.baseurl}}/pics/mydomain.png)

On this DNS management page , scroll down to the records table. In the records table , click on the CNAME entry with the www host name attribute and in the text box of the attribute named 'points to ' enter your github domain name. (this should be your username followed by .github.io )

![cname]({{site.baseurl}}/pics/cnameDNS.png)

<h3 class='post-sub-title'>3) Registering a host </h3>

In the same records table, add another entry

My research online told me that the changes could take upwards of a couple of hours to propagate to the respective services. However my changes were implemented quickly and I was able to access my site at niamhlawlor.com almost immediately. I'd allow for a couple of hours in case this is not always the case.

