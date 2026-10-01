<div align="center">

# Copilot, Past the Prompt

---

### An exploration of work that starts with the outcome, not the instructions.

Eight desktop and mobile concepts for delegating a task, following its progress, and reviewing the finished work.

**[Open the portfolio](https://guy-d7.github.io/Microsoft-Copilot-PRD/) · [Browse the screens](https://guy-d7.github.io/Microsoft-Copilot-PRD/#prototype) · [Read the product context](context.md)**

<sub>Independent portfolio concept. Not affiliated with or endorsed by Microsoft.</sub>

</div>

## Overview
This repository documents and showcases a concept for an AI productivity experience focused on autonomous task execution. It combines product thinking, UX strategy, interaction design, architecture framing, and a polished portfolio presentation.

The goal is to present a credible, recruiter-friendly portfolio artifact that demonstrates the ability to think beyond feature delivery and toward end-to-end user outcomes, trust, and workflow automation.

## Why this project matters
AI products are moving beyond simple Q&A toward real task execution. The challenge is to help users move from asking questions to delegating work, while maintaining context, transparency, and trust.

This project explores that shift through a product concept where Copilot can:
- understand intent from a natural-language request
- orchestrate multi-step work across apps
- maintain state and resume work over time
- show progress and approvals without overwhelming the user
- execute within the user’s existing workflow instead of forcing a separate app

## Core concept
The experience centers on a command center where the user describes the outcome they want. The system plans, executes, monitors, and delivers the result with clear checkpoints and recovery paths.

## Explore the prototype

The case-study gallery includes eight curated Stitch screens, sequenced from intent to completion:

| Desktop · 4 screens | Mobile · 4 screens |
| --- | --- |
| Command center, live monitoring, consequential-action approval, and task completion | Command center, task plan, live execution, and approval request |

Use the **All**, **Desktop**, and **Mobile** filters in the prototype to explore each view. Desktop screens use a browser frame; mobile screens use a phone frame.

### Product principles
- Say what, not how
- Execute across connected apps, browser workflows, and fallback paths
- Support long-running autonomous work with persistent context
- Maintain transparency through logs, status, and approvals
- Design for trust, usability, and measurable adoption

## Project files
- [context.md](context.md) — product context, problem framing, goals, and non-goals
- [plan.md](plan.md) — implementation roadmap and milestone structure
- [index.html](index.html) — polished portfolio landing page and guided, filterable case-study gallery
- [styles.css](styles.css) — visual system and responsive layout for the prototype
- [script.js](script.js) — Desktop/Mobile gallery filters and interaction layer
- `assets/screenshots/desktop-*.png` — four curated desktop views from the `(1)` Stitch export
- `assets/screenshots/mobile-*.png` — four curated mobile views from the mobile Stitch export

The gallery presents all eight selected screens as a guided case study, with Desktop and Mobile filters and device-specific framing. The original Stitch export archives and workspaces are excluded from the GitHub repository; only these curated portfolio screens are included.

## Local preview
No build step or dependencies are required. From the repository root, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Live portfolio
The included workflow publishes the interactive prototype at [guy-d7.github.io/Microsoft-Copilot-PRD](https://guy-d7.github.io/Microsoft-Copilot-PRD/). For the first deployment, enable **Settings → Pages → Build and deployment → Source → GitHub Actions**. Subsequent site updates pushed to `main` deploy automatically.

## Portfolio positioning
This project is designed to showcase:
- product strategy and requirement analysis
- UX thinking and workflow design
- AI product vision and execution model
- system architecture and product prioritization
- portfolio storytelling for future product or AI roles

## Recommended next steps
1. Add research evidence and rationale behind the key workflow decisions.
2. Expand the visual walkthrough into a clickable end-to-end task flow.
3. Run accessibility and usability reviews across desktop and mobile.

## Summary
This independent concept is designed to be easy to explore, extend, and present as a product portfolio case study.
