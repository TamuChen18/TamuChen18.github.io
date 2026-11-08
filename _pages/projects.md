---
layout: default
title: research
permalink: /research/
description: Research by Zhitong Chen in LLM agents, planning, and evaluation.
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}?v=5">
<link rel="stylesheet" href="{{ '/assets/css/academic-home.css' | relative_url }}?v=5">

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
      <a href="{{ '/research/' | relative_url }}" aria-current="page"><i class="fa-solid fa-flask" aria-hidden="true"></i>Research</a>
      <a href="{{ '/publications/' | relative_url }}"><i class="fa-solid fa-book-open" aria-hidden="true"></i>Publications</a>
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
<section class="academic-section page-intro"><p class="section-eyebrow">RESEARCH</p><h2>Research</h2><p>I study how language models reason, plan with tools, and use evidence reliably — from inference-time search to benchmarks and information access.</p><div class="research-topics"><a href="#planning">Reasoning &amp; Planning</a><a href="#evaluation">Evaluation</a><a href="#retrieval">Information Access</a></div></section><h2 class="research-group-title" id="planning">Reasoning &amp; Planning</h2><section class="research-project"><a class="research-figure" href="{{ '/assets/img/publication_preview/search.webp' | relative_url }}"><img src="{{ '/assets/img/publication_preview/search.webp' | relative_url }}" alt="From Apparent Search Gains to Selection Failures framework" loading="lazy"></a><div><p class="project-kicker">TEST-TIME INFERENCE</p><h3><a href="https://arxiv.org/abs/2611.00579">From Apparent Search Gains to Selection Failures</a></h3><p class="project-title">Auditing Test-Time Inference in Structured Workflow Planning</p><p class="project-venue">Preprint · Under review · 2026</p><p class="project-description">When search finds a correct workflow, does the final answer use it? This work separates candidate discovery, structural validation, and selection to diagnose inference pipelines under controlled comparisons.</p><div class="project-links"><a href="https://arxiv.org/abs/2611.00579">Paper <span aria-hidden="true">↗</span></a><a href="https://github.com/TamuChen18/Found-but-Not-Chosen">Code &amp; resources <span aria-hidden="true">↗</span></a></div></div></section><section class="research-project"><a class="research-figure" href="{{ '/assets/img/publication_preview/disasterbench.webp' | relative_url }}"><img src="{{ '/assets/img/publication_preview/disasterbench.webp' | relative_url }}" alt="DisasterBench framework" loading="lazy"></a><div><p class="project-kicker">TOOL-USE PLANNING</p><h3><a href="https://aclanthology.org/2026.findings-emnlp.1665/">DisasterBench</a></h3><p class="project-title">Benchmarking LLM Planning under Typed Tool Interface Constraints</p><p class="project-venue">Findings of EMNLP 2026</p><p class="project-description">A benchmark of 233 tasks and 26 tools for interface-valid workflow planning. First-Point-of-Failure analysis localizes errors in tool choice, parameter binding, and dependency propagation.</p><div class="project-links"><a href="https://aclanthology.org/2026.findings-emnlp.1665/">Paper <span aria-hidden="true">↗</span></a><a href="https://github.com/TamuChen18/DisasterBench_Open">Code &amp; resources <span aria-hidden="true">↗</span></a><a class="dataset-link" href="https://huggingface.co/datasets/tamuzc/DisasterBench"><span aria-hidden="true">🤗</span> Dataset</a></div></div></section><h2 class="research-group-title" id="evaluation">Evidence-Grounded Evaluation</h2><section class="research-project"><a class="research-figure" href="{{ '/assets/img/publication_preview/disastqa.webp' | relative_url }}"><img src="{{ '/assets/img/publication_preview/disastqa.webp' | relative_url }}" alt="DisastQA framework" loading="lazy"></a><div><p class="project-kicker">EVIDENCE-GROUNDED EVALUATION</p><h3><a href="https://aclanthology.org/2026.findings-acl.756/">DisastQA</a></h3><p class="project-title">A Comprehensive Benchmark for Evaluating Question Answering in Disaster Management</p><p class="project-venue">Findings of ACL 2026</p><p class="project-description">A benchmark of 3,000 expert-annotated questions across eight disaster types. Multiple-choice and open-ended tasks test factual completeness under different evidence conditions.</p><div class="project-links"><a href="https://aclanthology.org/2026.findings-acl.756/">Paper <span aria-hidden="true">↗</span></a><a href="https://github.com/TamuChen18/DisastQA_open">Code &amp; resources <span aria-hidden="true">↗</span></a><a class="dataset-link" href="https://huggingface.co/datasets/tamuzc/DisastQA"><span aria-hidden="true">🤗</span> Dataset</a></div></div></section><h2 class="research-group-title" id="retrieval">Retrieval &amp; Information Access</h2><section class="research-project"><a class="research-figure" href="{{ '/assets/img/publication_preview/floodsql.webp' | relative_url }}"><img src="{{ '/assets/img/publication_preview/floodsql.webp' | relative_url }}" alt="FloodSQL-Bench framework" loading="lazy"></a><div><p class="project-kicker">GEOSPATIAL DATABASE REASONING</p><h3><a href="https://arxiv.org/abs/2512.12084">FloodSQL-Bench</a></h3><p class="project-title">A Retrieval-Augmented Benchmark for Geospatially-Grounded Text-to-SQL</p><p class="project-venue">AAAI Symposium Series · 2026</p><p class="project-description">Text-to-SQL evaluation across heterogeneous flood-management datasets. Key-based, spatial, and hybrid joins connect social, infrastructure, and hazard data in geographically grounded queries.</p><div class="project-links"><a href="https://arxiv.org/abs/2512.12084">Paper <span aria-hidden="true">↗</span></a></div></div></section><section class="research-project"><a class="research-figure" href="{{ '/assets/img/publication_preview/disastrag.webp' | relative_url }}"><img src="{{ '/assets/img/publication_preview/disastrag.webp' | relative_url }}" alt="DisastRAG framework" loading="lazy"></a><div><p class="project-kicker">RETRIEVAL-AUGMENTED GENERATION</p><h3><a href="https://arxiv.org/abs/2605.05210">DisastRAG</a></h3><p class="project-title">A Multi-Source Disaster Information Integration and Access System Based on Retrieval-Augmented Large Language Models</p><p class="project-venue">Preprint · 2026</p><p class="project-description">A multi-source disaster information system connecting document retrieval, structured records, and external web fallback. Query understanding and strategy routing select evidence pathways for response generation.</p><div class="project-links"><a href="https://arxiv.org/abs/2605.05210">Paper <span aria-hidden="true">↗</span></a></div></div></section><p class="figure-credit">Figures are reproduced from the corresponding papers.</p>
</article>
</div>
