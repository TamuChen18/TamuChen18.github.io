---
layout: default
title: publications
expand_publication_overviews: true
permalink: /publications/
description: Publications and manuscripts by Zhitong Chen.
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}?v=5">
<link rel="stylesheet" href="{{ '/assets/css/academic-home.css' | relative_url }}?v=7">

<div class="academic-topbar">
  <div class="academic-topbar-inner">
    <a class="academic-wordmark" href="{{ '/' | relative_url }}">Zhitong Chen<span class="wordmark-dot">.</span></a>
    <nav class="academic-navigation" aria-label="Homepage sections">
      <a href="{{ '/' | relative_url }}#about-me">About Me</a>
      <a href="{{ '/' | relative_url }}#news">News</a>
      <a href="{{ '/' | relative_url }}#publications">Publications</a>
      <a href="{{ '/' | relative_url }}#education">Education</a>
      <a href="{{ '/' | relative_url }}#service">Service</a>
    </nav>
  </div>
</div>

<div class="academic-shell">
  <aside class="academic-sidebar" aria-label="Personal information">
    <div class="profile-photo-frame"><img class="profile-photo" src="{{ '/assets/img/zhitong-chen.jpg' | relative_url }}" alt="Zhitong Chen" width="144" height="168"></div>
    <h1>Zhitong Chen</h1>
    <p class="profile-role">Ph.D. Student in Computer Science</p>
    <p class="profile-university">Texas A&amp;M University</p>
    <p class="profile-focus">Studying how language models reason, plan, and use tools reliably.</p>
    <div class="profile-topics" aria-label="Research interests">
      <span>LLM Agents</span><span>Planning</span><span>Evaluation</span>
    </div>
    <nav class="sidebar-navigation" aria-label="Pages">
      <a href="{{ '/' | relative_url }}"><i class="fa-solid fa-house" aria-hidden="true"></i>Home</a>
      <a href="{{ '/research/' | relative_url }}"><i class="fa-solid fa-flask" aria-hidden="true"></i>Research</a>
      <a href="{{ '/publications/' | relative_url }}" aria-current="page"><i class="fa-solid fa-book-open" aria-hidden="true"></i>Publications</a>
      <a href="{{ '/cv/' | relative_url }}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i>CV</a>
    </nav>
    <div class="profile-contact">
      <p><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>College Station, TX, USA</span></p>
      <a href="mailto:zhitong.chen18@tamu.edu"><i class="fa-regular fa-envelope" aria-hidden="true"></i><span>zhitong.chen18@tamu.edu</span></a>
      <a href="https://scholar.google.com/citations?user=B3YFm44AAAAJ"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><span>Google Scholar</span></a>
      <a href="https://github.com/TamuChen18"><i class="fa-brands fa-github" aria-hidden="true"></i><span>GitHub</span></a>
      <a href="https://www.linkedin.com/in/zhitong-chen-76225b287/"><i class="fa-brands fa-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
      <a href="https://huggingface.co/tamuzc"><span class="profile-social-icon" aria-hidden="true">🤗</span><span>Hugging Face</span></a>
    </div>
    <a class="profile-contact-button" href="mailto:zhitong.chen18@tamu.edu">Get in touch <span aria-hidden="true">↗</span></a>
  </aside>

  <article class="academic-content">

<section class="academic-section page-intro"><p class="section-eyebrow">PAPERS &amp; OPEN RESEARCH</p><h2>Publications</h2><p>Research on LLM agents, structured tool planning, and evidence-grounded evaluation.</p></section>
<section class="academic-section"><p class="publication-note">* Equal contribution. Click a figure to enlarge.</p>
{% include bib_search.liquid %}
<div class="publications">{% bibliography %}</div></section>

</article>
</div>
