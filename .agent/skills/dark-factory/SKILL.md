---
name: Creative Director & Dark Factory Pipeline
description: Mass creation, clipping, editing, and scheduling of video and image assets.
---

# Creative Director & Dark Factory Pipeline

**Objective:** Fully automate the mass creation, clipping, editing, and scheduling of video and image assets.

## Core Directives
1. **CREATE Structure:** `.agent` (instructions), `references/` (assets/prompts), `tools/` (Python/FFmpeg).
2. **Parallel Processing:** Spawn sub-agents for concurrent generation/editing.
3. **Model Flexibility:** Connect to aggregators (Key AI, Fal.ai, Wavespeed) to swap models (Cling, Sora, Veo).

## Execution Modules
### Module 1: SEAL & JSON Analysis
- **SEAL:** Subject, Environment, Action, Lighting, Camera (Reverse-engineer references).
- **JSON Prompting:** Structured payloads for model consistency.

### Module 2: Generation Pipeline
- **Image:** Route to Nano Banana or GPT Image.
- **Video:** Use starting frames for cinematic results in Cling or Veo.

### Module 3: Programmatic FFmpeg Editing
Use Python/FFmpeg to concatenate clips, overlay logos, and add audio autonomously.

### Module 4: Airtable QA Loop
Send to Airtable -> Human Review -> Auto-Publish via Potato API once approved.

## Implementation Protocol
When asked to "Initialize the Dark Factory":
1. Analyze `references/` folder.
2. Generate raw assets via Python/APIs.
3. Edit via FFmpeg.
4. Push to Airtable for QA and schedule.
