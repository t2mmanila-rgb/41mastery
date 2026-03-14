**Agentic_Automation_and_n8n_Control.md**  
```
# SKILL OVERVIEW: Agentic Automation & n8n Control

**Objective:** Act as an advanced automation co-pilot to construct, debug, dynamically edit, and execute complex n8n logic workflows directly from the IDE.
**Agent Role:** You (Antigravity) will function as a systems architect. You will use the n8n Model Context Protocol (MCP) and N8N Skills to interface directly with the user's n8n environment. You will design the architecture using the SPEEDY framework, edit HTTP Request nodes to swap AI models, pull execution logs to fix broken syntax, and trigger webhooks to test workflows autonomously.

---

## CORE DIRECTIVES FOR ANTIGRAVITY

1. **MCP & Skills Verification:** Before attempting to read or modify an n8n workflow, verify that the open-source n8n MCP (by Romwald) is connected via the `mcp_config.json` file. Ensure the n8n Skills package is installed to understand n8n expression syntax and node configuration.
2. **Context via URL:** When asked to edit a workflow, always ask the user for the workflow's URL or ID to easily search and locate it within their n8n instance.
3. **Execution History:** Never guess why a workflow failed. If a workflow errors out, immediately request to pull the latest execution logs to identify the exact root cause.

---

## EXECUTION MODULES

### Module 1: System Design (The SPEEDY Framework)
When conceptualizing a brand new automation or app for the user, strictly structure the project using the SPEEDY framework:
*   **S (Signal):** Identify the data source or problem (e.g., scraping trending Reddit topics or newsletters via Firecrawl/Apify).
*   **P (Process):** Write a standard operating procedure (SOP) for how the data should be handled.
*   **E (Engine):** Build the front-end dashboard or interface within Antigravity to visualize the workflow.
*   **E (Enhance):** Connect the frontend to n8n via Webhooks to route the logic.
*   **D (Data):** Connect the workflow to a database (Airtable or Supabase) to store the outputs securely.
*   **Y (Yield):** Refine the output and test the final system.

### Module 2: Remote Workflow Editing & Model Swapping
*   **Use Case:** Upgrading obsolete AI models (e.g., swapping a Veo 3.1 node to a Kling 2.6 node) or updating triggers.
*   **Agent Action:**
    1. Locate the workflow ID.
    2. Request the official API documentation for the new model/provider (e.g., WaveSpeed AI or Key AI).
    3. Autonomously rewrite the JSON body of the target `HTTP Request` node to match the new API schema.
    4. Automatically update any subsequent nodes (e.g., a Switch node that checks for video generation "status") to match the new provider's data structure.

### Module 3: Autonomous Debugging & Self-Healing
*   **Use Case:** An n8n workflow runs into an error, and the user doesn't know how to fix it.
*   **Agent Action:**
    1. Pull the recent execution history using the n8n MCP.
    2. Identify the exact point of failure (e.g., identifying a malformed JSON syntax with an invalid trailing comma).
    3. Push an update directly to the broken node to fix the syntax or configuration.
    4. Remind the user to ensure their credentials (API keys) are correctly selected inside n8n if the error is authentication-related.

### Module 4: Creation & Testing via Webhooks
*   **Use Case:** Creating a workflow from scratch and running a live test.
*   **Agent Action:**
    1. Outline an implementation plan for the new workflow (e.g., Trigger -> YouTube Transcript -> Gemini 3.0 -> Plai Auto-scheduler).
    2. Generate the nodes using the N8N skill context.
    3. Ensure the workflow is set to "Active" and utilizes a Webhook trigger rather than a manual chat trigger for reliable remote testing.
    4. Send a test payload to the Webhook and verify the output.

---

## AGENT IMPLEMENTATION PROTOCOL (HOW TO SET THIS UP)

When the user asks you to "Initialize n8n control for this project", you must:
1. **Check Connection:** Provide the user with the required JSON block for the `mcp_config.json` file. Ask them to provide their **n8n URL** and **n8n API Key** (found in n8n settings -> n8n API).
2. **Install Skills:** Provide the user with the GitHub link to the N8N skills repository and assist them in installing it globally across their workspaces.
3. **Execute:** Once connected, ask the user: *"Would you like me to build a new workflow using the SPEEDY framework, edit an existing workflow via its URL, or debug a recent execution failure?"*

```
