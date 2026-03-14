---
name: Sovereign API Routing
description: Manage resources to bypass paywalls using free-tier API endpoints.
---

# Sovereign API Routing

**Objective:** Bypass expensive subscriptions by routing tasks through free-tier providers.

## Core Directives
1. **Cost Minimization:** Never default to paid endpoints for bulk testing.
2. **Fallback Logic:** Automatically swap providers if rate limits are hit.
3. **Security:** Use `.env` for all provider keys.

## Routing Modules
### A. High-Volume (Google AI Studio)
1M tokens/day. Best for content generation and data synthesis.

### B. Reasoning & Coding (GitHub Models / Nvidia Build)
DeepSeek V3, Kimmy K 2.5. Best for logic and Python/Node coding.

### C. Fast Inference (Groq)
Best for real-time apps and custom chatbots.

### D. Zero-Cost Preview (OpenRouter)
Filter for $0.00/token models for beta testing.

### E. Open-Source Edge (Cloudflare Workers)
Best for Llama variants and Kimmy K2 on edge.

## Implementation Protocol
When asked to "Build an AI tool using the Sovereign Routing Skill":
1. Match app function to the best free provider.
2. Initialize `.env` and request keys.
3. Develop logic using official provider documentation.
4. Verify zero-cost infrastructure.
