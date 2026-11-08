---
layout: default
title: about
permalink: /
description: Zhitong Chen — LLM agents, planning, and evaluation.
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}?v=4">
<link rel="stylesheet" href="{{ '/assets/css/academic-home.css' | relative_url }}?v=3">

<div class="academic-topbar">
  <div class="academic-topbar-inner">
    <a class="academic-wordmark" href="{{ '/' | relative_url }}">Zhitong Chen<span class="wordmark-dot">.</span></a>
    <nav class="academic-navigation" aria-label="Main navigation">
<a href="{{ '/' | relative_url }}#about-me">About Me</a>
<a href="{{ '/' | relative_url }}#news">News</a>
<a href="{{ '/research/' | relative_url }}">Research</a>
<a href="{{ '/publications/' | relative_url }}">Publications</a>
<a href="{{ '/' | relative_url }}#education">Education</a>
<a href="{{ '/cv/' | relative_url }}">CV</a>
<a href="{{ '/' | relative_url }}#service">Service</a>
</nav>
  </div>
</div>

<div class="academic-shell">
  <aside class="academic-sidebar" aria-label="Personal information">
    <div class="profile-photo-frame"><img class="profile-photo" src="{{ '/assets/img/zhitong-chen.jpg' | relative_url }}" alt="Zhitong Chen" width="144" height="168"></div>
    <h1>Zhitong Chen</h1>
    <p class="profile-role">Ph.D. Student in Computer Science</p>
    <a class="profile-university" href="https://www.tamu.edu/">Texas A&amp;M University</a>
    <p class="profile-focus">Studying how language models reason, plan, and use tools reliably.</p>
    <div class="profile-topics" aria-label="Research interests">
      <span>LLM Agents</span><span>Planning</span><span>Evaluation</span>
    </div>
    <div class="profile-contact">
      <p><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>College Station, TX, USA</span></p>
      <a href="mailto:zhitong.chen18@tamu.edu"><i class="fa-regular fa-envelope" aria-hidden="true"></i><span>zhitong.chen18@tamu.edu</span></a>
      <a href="https://scholar.google.com/citations?user=B3YFm44AAAAJ"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><span>Google Scholar</span></a>
      <a href="https://github.com/TamuChen18"><i class="fa-brands fa-github" aria-hidden="true"></i><span>GitHub</span></a>
      <a href="{{ '/cv/' | relative_url }}"><i class="fa-regular fa-file-lines" aria-hidden="true"></i><span>Curriculum Vitae</span></a>
    </div>
    <a class="profile-contact-button" href="mailto:zhitong.chen18@tamu.edu">Get in touch <span aria-hidden="true">↗</span></a>
  </aside>

  <article class="academic-content">

    <section class="academic-section about-section" id="about-me" aria-labelledby="about-heading">
      <p class="section-eyebrow">REASONING · PLANNING · RELIABILITY</p>
      <h2 id="about-heading">About Me</h2>
      <p>I am a Ph.D. student in <strong>Computer Science at Texas A&amp;M University</strong>, advised by <a href="https://urbanresilience.ai/research">Prof. Ali Mostafavi</a>. I also collaborate with <a href="https://people.engr.tamu.edu/caverlee/">Prof. James Caverlee</a>.</p>
      <p>My research focuses on <strong>LLM agents, tool-use planning, and evaluation</strong>. I study how language models compose tools into valid workflows, reason with imperfect evidence, and select reliable answers at inference time. My broader interests include agent learning, post-training, and reinforcement learning.</p>
      <p>My recent work includes <a href="https://arxiv.org/abs/2611.00579">auditing test-time inference and candidate selection</a>, <a href="https://aclanthology.org/2026.findings-emnlp.1665/">DisasterBench</a> for interface-constrained tool planning, and <a href="https://aclanthology.org/2026.findings-acl.756/">DisastQA</a> for evidence-grounded question answering.</p>
      <div class="opportunity-note"><span class="opportunity-marker" aria-hidden="true"></span><p><strong>Open to Summer 2027 research internships.</strong><br>I am interested in opportunities in LLM agents, planning, and evaluation. <a href="mailto:zhitong.chen18@tamu.edu">Let’s connect.</a></p></div>
    </section>

    <section class="academic-section" id="news" aria-labelledby="news-heading">
      <div class="section-title-row"><h2 id="news-heading">News</h2><span class="section-caption">Recent updates</span></div>
      <ul class="news-list">
        <li><time datetime="2026-10-31">Oct 2026</time><p>New preprint: <a href="https://arxiv.org/abs/2611.00579">From Apparent Search Gains to Selection Failures</a>, on auditing test-time inference in structured workflow planning.</p></li>
        <li><span class="news-date">2026</span><p><strong>DisasterBench</strong> accepted to <strong>Findings of EMNLP 2026</strong>.</p></li>
        <li><span class="news-date">2026</span><p><strong>DisastQA</strong> published in <strong>Findings of ACL 2026</strong> and presented as a poster at ACL.</p></li>
        <li><time datetime="2025-12">Dec 2025</time><p>Completed my <strong>M.S. in Computer Science</strong> at Texas A&amp;M University.</p></li>
      </ul>
    </section>

    <section class="academic-section" id="publications" aria-labelledby="publications-heading">
      <div class="section-title-row"><h2 id="publications-heading">Publications &amp; Manuscripts</h2><a class="section-more" href="{{ '/publications/' | relative_url }}">Full list <span aria-hidden="true">↗</span></a></div>
      <p class="publication-note">* Equal contribution. Figures are from the corresponding papers. Click a figure to enlarge.</p>
      <div class="publications">
        {% bibliography --query @*[selected=true]* %}
      </div>
    </section>

    <section class="academic-section" id="education" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <div class="education-entry"><div class="education-years">2026 — Present</div><div><h3>Texas A&amp;M University</h3><p>Ph.D. in Computer Science</p><p class="education-detail">Advisor: Prof. Ali Mostafavi · College Station, TX</p></div></div>
      <div class="education-entry"><div class="education-years">2023 — 2025</div><div><h3>Texas A&amp;M University</h3><p>M.S. in Computer Science</p><p class="education-detail">College Station, TX</p></div></div>
      <div class="education-entry"><div class="education-years">2018 — 2022</div><div><h3>University of Liverpool</h3><p>B.Sc. in Information and Computing Science (Computer Science)</p><p class="education-detail">UK</p></div></div>
    </section>

    <section class="academic-section service-section" id="service" aria-labelledby="service-heading">
      <h2 id="service-heading">Academic Service</h2>
      <p><strong>Reviewer</strong> · NeurIPS 2026, Evaluations and Datasets Track (4 papers)</p>
      <p><strong>Poster Presenter</strong> · ACL 2026, San Diego, CA</p>
    </section>

</article>
</div>
