# Sovereign_API_Routing  
  
  
```
# SKILL OVERVIEW: Sovereign API Routing (The Sovereign Access Framework)

**Objective:** Bypass expensive AI subscription paywalls and maintain zero-cost infrastructure by intelligently routing API calls and reasoning tasks through generous free-tier providers and terminal extensions.
**Agent Role:** You (Antigravity) will act as an intelligent resource manager. Before executing heavy code generation, bulk content creation, or data analysis, you must assess the task and route it through the appropriate free-tier model using the configurations provided below.

---

## CORE DIRECTIVES FOR ANTIGRAVITY

1. **Never default to paid API endpoints** for bulk processing or testing unless explicitly instructed by the user.
2. **Always check the `.env` file** for the corresponding provider's API key before initiating a connection.
3. **Handle Rate Limits:** If a chosen free provider hits a rate limit (e.g., Nvidia Build's 40 req/min limit), automatically fall back to the next available free provider in the framework.

---

## 1. TERMINAL INTEGRATION: OPENCODE
**Use Case:** Accessing over 150+ premier models directly inside the Antigravity environment without leaving the IDE.

**Execution Steps:**
* When the user requests a model switch via OpenCode, open a new terminal panel within Antigravity.
* Ensure OpenCode is active by running the command: `open code --version`.
* Connect to external providers (OpenAI, Anthropic, OpenRouter) by running the connection protocol in the terminal and prompting the user to authenticate if required.

---

## 2. API ROUTING LOGIC & ENDPOINT CONFIGURATIONS

When generating code to build apps, webhooks, or automation logic for the user, use the following "Sovereign Access" providers based on the task requirement:

### A. High-Volume Processing (Google AI Studio)
* **Best For:** Content generation tools, massive client workflows, text/audio/video processing.
* **Capacity:** 1 million tokens per day (Free).
* **Agent Action:** When building apps that require massive data synthesis, use the Gemini API endpoint. Prompt the user for their Google AI Studio API key and construct the payload for Gemini.

### B. Advanced Reasoning & Coding (GitHub Models / Nvidia Build)
* **Best For:** Deep reasoning, competitive research workflows, and complex Python/Node coding.
* **Nvidia Build Models:** DeepSeek V3, Kimmy K 2.5.
    * *Constraint:* 40 requests per minute.
* **GitHub Models:** GPT-5, DeepSeek V3.
    * *Auth Method:* Generate and use a GitHub Personal Access Token as the API key.
* **Agent Action:** When writing data-scraping scripts or complex logic, route the HTTP requests to these endpoints to preserve local context limits.

### C. Blazing Fast Inference (Groq)
* **Best For:** Real-time applications, custom chatbots for restaurants, or customer support tools.
* **Agent Action:** Use the Groq API endpoint for any feature requiring instant user-facing responses. Use the provided sample code from Groq's dashboard to build the Node/Python request.

### D. Zero-Cost Beta Sniping (OpenRouter)
* **Best For:** Accessing experimental, high-quality preview models entirely for free.
* **Agent Action:** When querying OpenRouter via API, instruct the payload to specifically filter for and target models listed at `$0.00` per token (beta/preview models).

### E. Open-Source Ecosystem (Cloudflare Workers)
* **Best For:** Llama variants and Kimmy K2.
* **Agent Action:** When the user wants edge-deployed AI models, write JavaScript, Python, or Curl requests aimed at Cloudflare's AI section.

---

## AGENT IMPLEMENTATION PROTOCOL (HOW TO BUILD WITH THIS)

When the user asks you to "Build an AI tool using the Sovereign Routing Skill", you must:
1. **Analyze:** Determine the core function of the app (e.g., is it a fast chatbot? -> Choose Groq. Is it a mass document reader? -> Choose Google AI Studio).
2. **Initialize:** Create an `.env` file and request the specific API key from the user for the chosen free provider. Ensure `.gitignore` is active.
3. **Develop:** Write the Python or Node.js backend logic using the documentation natively provided by these platforms (do not hallucinate the API structure; search the provider's quick-start docs if needed).
4. **Deploy:** Run the tool locally or prepare it for deployment, confirming to the user that their operational infrastructure costs are currently $0.00.

```
