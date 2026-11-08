---
layout: page
permalink: /research/
title: research
nav: true
nav_order: 1
description: LLM agents, structured planning, and reliable evaluation.
---

## Test-Time Inference for Structured Planning

**From Apparent Search Gains to Selection Failures: Auditing Test-Time Inference in Structured Workflow Planning**<br>
Preprint · Under review · 2026

When search finds a correct workflow, does the final answer actually use it? This work separates candidate discovery, structural validation, and selection to diagnose inference pipelines. Controlled comparisons reveal how candidate generation and majority voting affect the final result.

[Paper](https://arxiv.org/abs/2611.00579) · [Code](https://github.com/TamuChen18/Found-but-Not-Chosen)

## DisasterBench

**Benchmarking LLM Planning under Typed Tool Interface Constraints**<br>
Findings of EMNLP 2026

DisasterBench evaluates whether language models can compose disaster-response tools into interface-valid workflows. It examines tool choice, parameter binding, and dependency propagation, with First-Point-of-Failure analysis to locate the earliest error in a plan.

[Paper](https://aclanthology.org/2026.findings-emnlp.1665/) · [Code & data](https://github.com/TamuChen18/DisasterBench_Open)

## DisastQA

**A Comprehensive Benchmark for Evaluating Question Answering in Disaster Management**<br>
Findings of ACL 2026

DisastQA contains 3,000 expert-annotated questions across eight disaster types. It evaluates multiple-choice and open-ended question answering under different evidence conditions, with keypoint-based assessment of factual completeness.

[Paper](https://aclanthology.org/2026.findings-acl.756/) · [Code & data](https://github.com/TamuChen18/DisastQA)
