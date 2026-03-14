# NotebookLM_RAG_Brain_and_Artifacts  
```
# SKILL OVERVIEW: NotebookLM RAG Brain & Artifacts

**Objective:** Leverage Google NotebookLM via Model Context Protocol (MCP) as an infinitely scalable memory bank, a deep internet researcher, a senior prompt engineer, and an automated multimedia artifact generator [1, 2].
**Agent Role:** You (Antigravity) will act as an orchestration manager. You will offload heavy documentation and context to NotebookLM to save tokens, query it for precise technical syntax, command it to perform deep web research, and instruct it to generate visual/audio assets directly from the source material [3-5].

---

## CORE DIRECTIVES FOR ANTIGRAVITY

1. **Token Preservation:** Never load massive technical manuals, entire codebases, or long HR policies directly into the active Antigravity chat window [4, 6]. Always upload them to NotebookLM and query the notebook via MCP only when specific context is needed [4, 5].
2. **Seamless Connection:** If the NotebookLM MCP is not active, prompt the user to authenticate the connection in their browser [7]. Once authenticated, the tokens will auto-refresh, allowing you continuous access to their notebooks [8].
3. **Source Grounding:** Ensure all generated content relies strictly on the uploaded sources within the specific notebook to prevent hallucinations [9, 10].

---

## EXECUTION MODULES

### Module 1: Persistent RAG Memory (The Project Brain)
* **Use Case:** Storing project instructions (`brain.md`), bug fix history, and overall system architecture without bloating the active context window [4, 5].
* **Agent Action:** 
    * When initializing a complex project, automatically create a new notebook in NotebookLM [4, 11].
    * Set this notebook as a "persistent RAG memory store" for the project [5]. 
    * Push all new project rules, brand guidelines, and resolved error logs into this notebook, and query it whenever you need historical context [5, 12].

### Module 2: The Senior Prompt Engineer
* **Use Case:** Writing perfect, parameter-accurate code for brand new or highly complex external APIs (e.g., Nano Banana Pro, Veo 3) [13].
* **Agent Action:** 
    * Instruct the user to download the official technical documentation (PDFs) of the required tool and upload them as sources to a new NotebookLM notebook [13].
    * Apply the following Custom Chat Instruction to the notebook: *"Act as a senior prompt engineer. Always reference the uploaded technical documentation. Provide the prompt and the technical reasoning."* [13, 14]
    * Query the notebook to generate the exact JSON payloads or API request syntax needed for the build [14].

### Module 3: Deep Research Engine
* **Use Case:** Gathering competitive intelligence, market trends, or structured data directly from the web [15, 16].
* **Agent Action:**
    * Use the **Discover Sources** feature to automatically pull up to 10 high-quality web sources on a user's topic, or trigger **Deep Research** to build a comprehensive report in the background [15].
    * Command NotebookLM to synthesize the gathered research and output it as a **structured data table** (with specific columns like Feature, Use Case, Benefit) so you can easily integrate that data into the Antigravity software build [17, 18].

### Module 4: Artifact & Multimedia Generation
* **Use Case:** Automatically turning project notes, code logic, or research into presentation-ready materials [19].
* **Agent Action:** 
    * Once a notebook is populated with sources, you can command NotebookLM to generate multiple artifacts without requiring third-party software [19].
    * **Slide Decks:** Generate full, editable Google Slides or PowerPoint presentations (e.g., "Produce a slide deck titled 'Project Overview' using presenter slides format") [20-22]. You can specifically revise individual slides (e.g., "change slide 3 to be simpler") [22, 23].
    * **Video Overviews:** Generate a narrated video walkthrough with structured scripts and automated visuals based purely on the uploaded documents [24, 25].
    * **Other Assets:** Programmatically request Audio Overviews, infographics, study guides, and flashcards [19]. 

---

## AGENT IMPLEMENTATION PROTOCOL (HOW TO BUILD WITH THIS)

When the user asks you to "Use the NotebookLM Skill for this project", you must:
1. **Assess:** Determine if the user needs Memory Storage, Technical API Help, Deep Research, or Artifact Generation.
2. **Initialize:** Ensure the NotebookLM MCP is connected. If setting up a new memory bank, create the notebook and ask the user to upload their source files (like a `brain.md` or PDF manuals) [7, 12, 26].
3. **Execute:** Send the specific query to the NotebookLM MCP. For data requests, demand structured tables [17]. For artifacts, specify the exact format (e.g., "Video Overview" or "Slide Deck") [22, 24].
4. **Integrate:** Take the output from NotebookLM (whether it is Python code, a structured CSV table, or a presentation link) and apply it directly into the active Antigravity codebase or workspace [18, 27, 28].

```
