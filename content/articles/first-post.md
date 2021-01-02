---
title: Post 0.0.1
description: 'Finally. I have decided to start writing down the nonsense in my head.'
categories: ['news', 'dev']
tags: ['nuxt', 'tailwind', 'SEO', 'netlify']
image: { src: https://images.prismic.io/bareblends/6bf7d75a-05cb-4103-9688-d01914ff45cc_bare-mushies.jpg, alt: "mushrooms"}
---

This site will be an ongoing digital journal of everything I find interesting in the universe. From my trials and tribulations of building <a href="https://bareblends.com.au">Bare Blends</a> with <a href="https://github.com/razza12">razza</a>, to my random programming adventures, to my strange obsession with SpaceX, to my thoughts on the meta of the world.

## Starting with how this site is made...


This is mostly for the programming nerds, so if you are not interested in programming then this is probably not your cup of tea. 

This will not be a setup guide, rather just a quick overview of the technology used, I will do a setup post when the site is fully fleshed out.

### The site is:
tldr; Nuxt + Nuxt Content + Tailwind + Tailwind Typography + Netlify
<a href="https://github.com/oscarmanderj/personal-site">(Find source here)</a>
<ul>
    <li>$0 for-ever (excluding domain name)</li>
    <li>SEO optimised & fully static</li>
    <li>0 lines of custom CSS</li>
    <li>PWA</li>
    <li>Optimised for reading via nuxt content</li>
    <li>Publishable via github</li>
    <li><a href="https://github.com/oscarmanderj/personal-site">open source :)</a></li>
</ul>

<hr>

# Nuxt & Nuxt Content
<a href="https://nuxtjs.org/">Nuxt</a>

Nuxt is beloved by thousands of devs, and for great reason. It's an intuitive, super performant vuejs framework that does all the benign tasks for you. (Have you noticed the speed of this site?)

Need a statically generated site hosted on Netlify for free? No problem (like this site)

Need a SSR site hosted on Vercel for free? No problem (Like <a href="https://bareblends.com.au">Bare Blends</a>)

The beautiful thing about Nuxt is it's community. There are amazing modules you can install into your project that instantly add the functionality to you are looking for. I will discuss <a href="https://content.nuxtjs.org/">Nuxt Content</a> below, but I would suggest you just go looking for modules that suit your needs.

If you are new to Vuejs then I would suggest starting by learning the basics of Vuejs first. Then dive into Nuxt headfirst and build your first static site. Simply run the following and you have a bootstrapped project ready to go.



```bash
  yarn create nuxt-app <project-name>
```


<a href="https://content.nuxtjs.org/">Nuxt Content</a>

Nuxt content is a Mongo-like API which allows you to fetch Markdown, JSON, YAML, XML and CSV files which are stored in your 'content' directory. 

I chose to use Nuxt content because I wanted to be able to manage all my content from this repo. So now I can either, write Markdown files in my IDE, or I can write directly into the git repo. Netlify then reruns the site generation via a hook, and Voila! My new post is live on my site. No 3rd party CMS at all.

Other features (pulled straight from <a href="https://content.nuxtjs.org/">Nuxt Content</a>)
<ul>
<li>Blazing fast hot reload in development</li>
<li>Vue components in Markdown</li>
<li>Full-text search</li>
<li>Support static site generation with `nuxt generate`</li>
<li>Powerful QueryBuilder API (MongoDB like)</li>
<li>Syntax highlighting to code blocks in markdown files using PrismJS.</li>
<li>Table of contents generation</li>
<li>Handles Markdown, CSV, YAML, JSON(5), XML</li>
<li>Extend with custom parsers</li>
<li>Extend with hooks</li>
<ul>
<hr>

## Tailwind & Tailwind Typography
<a href="https://v1.tailwindcss.com/">Tailwind</a>


In 2020 I don't think tailwind needs much of an introduction, but if you have not jumped on the bandwagon yet you should seriously consider it for your next project.

I fooled around with bootstrap for years and I loved it. However, at the end of every major site, there was always junk css that ended up in the codebase or overly convoluted scss structures that made it hard to instantly pickup where I left off.

This is where tailwind shines. You don't write any custom css. Every css class you can think of is already in the framework, so you simple craft away at your components by adding 1-20 classes per html element. This sounds like a lot, but once you learn the classes, you can whip up pages faster than any other method.

#### Example button


```html
<a href="#" class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-purple-800 uppercase bg-purple-200 hover:shadow-lg hover:-translate-y-2 transform duration-150">button</a>
```



<a href="#" class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-purple-800 uppercase bg-purple-200 hover:shadow-lg hover:-translate-y-2 transform duration-150">Epic button</a>

Combine this with the component structure of a NuxtJs or NextJs project and you have the best UI stack available right now. 


<a href="https://github.com/tailwindlabs/tailwindcss-typography">Tailwind Typography</a>

Tailwind typography is your answer to perfectly formatted blogs. Optimised for reading without any custom css. Simply add the class 'prose' to your high-level element and everything within it will be perfectly formatted for reading. Below is the complete structure of this page. Simple right?


  ```html
  <template>
    <div class="prose my-20">
      <h1>{{ article.title }}</h1>
      <p class="text-xl">{{ article.description }}</p>
      <nuxt-content :document="article" />
    </div>
  </template>
  ```

<hr>

# Netlify

<a href="https://www.netlify.com/">Netlify</a>
Netlify is the perfect hosting solution for static sites and it has been on a tear for a few years now. Forget managing servers and complicated environments, just connect and forget!

The first time I discovered Netlify, my developer life changed forever. I now host almost all my sites on it. And the best part is that it is free! Well, if you just want to do simple sites that is. I am currently hosting about 12 sites saving $100's a year.

Hosting a site is as simple as connecting up your github repo and clicking deploy. After that is done, you can choose to have your site built on every commit.

# Performance of the stack

I'll admit, there is not much on this site so of course it is going to be fast, but still...



