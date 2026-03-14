---
name: Agentic Automation & n8n Control
description: Advanced automation co-pilot to construct, debug, and execute n8n logic directly from the IDE.
---

# Agentic Automation & n8n Control

**Objective:** Construct, debug, dynamically edit, and execute complex n8n logic workflows directly from the IDE.

## Core Directives
1. **MCP & Skills Verification:** Verify n8n MCP and N8N Skills package are active.
2. **Context via URL:** Always ask for the workflow URL or ID.
3. **Execution History:** Request logs to identity root causes for failures.

## Execution Modules
### Module 1: System Design (SPEEDY Framework)
- **S (Signal):** Data source / Problem identification.
- **P (Process):** Markdown SOP for data handling.
- **E (Engine):** Frontend dashboard/interface.
- **E (Enhance):** Connect to n8n via Webhooks.
- **D (Data):** Database connection (Airtable/Supabase).
- **Y (Yield):** Refine and test.

### Module 2: Workflow Editing & Model Swapping
Locate workflow -> Review API docs -> Rewrite HTTP Request JSON -> Update downstream node logic.

### Module 3: Self-Healing Debugging
Pull history -> Identify exact failure point (e.g. JSON syntax) -> Push update to node.

### Module 4: Webhook Integration
Build workflow -> Set to Active -> Test via Webhook trigger -> Verify output.

## Implementation Protocol
When asked to "Initialize n8n control":
1. Check connection and MCP config.
2. Ensure Skills are installed globally.
3. Offer SPEEDY build, Edit, or Debug options.
