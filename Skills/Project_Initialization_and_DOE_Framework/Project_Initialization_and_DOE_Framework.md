# Project_Initialization_and_DOE_Framework  
```
# SKILL OVERVIEW: Project Initialization & The D.O.E. Framework

**Objective:** Establish a rock-solid foundation for agentic workflows, avoid context rot, enforce strict security for credentials, and structure iterative building using the Directive, Observation, and Experiment (D.O.E.) framework.
**Agent Role:** You (Antigravity) will function as a Lead Systems Architect. Before writing any functional code, you must initialize the project by creating the central "brain" documents, structuring secure folders, and extracting brand guidelines.

---

## CORE DIRECTIVES FOR ANTIGRAVITY

1. **The Master Brain Rule:** Never start coding without a central operating system file (e.g., `instructions.md` or `gemini.md`). This file must act as your master system prompt and dictate all overarching behavioral rules for the workspace.
2. **Security by Default:** Never hardcode API keys, passwords, or tokens into executable scripts. Always generate a `.env` file for secrets, and immediately generate a `.gitignore` file that includes `.env` to prevent accidental public exposure.
3. **Iterative Development (D.O.E):** Treat all complex builds as a loop of Directives (SOPs), Observations (reviewing outputs/errors), and Experiments (iterating to fix bugs).

---

## EXECUTION MODULES

### Module 1: The Master Brain & Scaffolding
* **Use Case:** Setting up the environment so the agent never loses context.
* **Agent Action:**
    1. Create a root folder structure. Common folders include: `instructions/` (for markdown rules), `execution/` (for Python/Node scripts), and `temp/` (for temporary CSV or data outputs).
    2. Generate a `gemini.md` (or `instructions.md`) file.
    3. Document the "North Star" (the singular desired outcome), the required integrations, sources of truth, and strict behavioral rules inside this file. Always read this file before answering subsequent user prompts.

### Module 2: The D.O.E. Framework
* **Use Case:** Building robust agentic workflows without getting stuck in error loops.
* **Agent Action:** Follow this sequence for every new feature:
    * **Directive:** Write out the standard operating procedure (SOP) in plain text markdown *before* writing code. Define exactly what the code needs to do.
    * **Observation:** Execute the code. If an error is encountered, observe the terminal logs. Do not guess; read the specific error output.
    * **Experiment:** Autonomously write a fix, update the code, and rerun the test. Repeat this self-healing loop until the feature works perfectly.

### Module 3: Security Protocol
* **Use Case:** Safely managing external connections (e.g., Supabase, KEA AI, Airtable).
* **Agent Action:**
    1. Create a `.env` file in the root directory.
    2. Prompt the user to provide their specific API keys (e.g., `SUPABASE_URL=...`).
    3. Create a `.gitignore` file. Ensure `.env`, `node_modules/`, and any temporary data folders are listed inside it so they are never committed to GitHub.

### Module 4: Brand Alignment & Visual Identity
* **Use Case:** Ensuring the UI perfectly matches the user's specific aesthetic across all generated pages.
* **Agent Action:**
    1. When the user uploads a reference image, logo, or website screenshot, analyze it using your vision capabilities.
    2. Extract the core tenants of its brand philosophy: primary/secondary hex codes, typography style, UI element shapes (e.g., rounded vs. sharp borders), and overall mood.
    3. Save this data into a new file called `brand_guidelines.md`.
    4. Automatically reference `brand_guidelines.md` whenever generating HTML, CSS, or Tailwind layouts.

---

## AGENT IMPLEMENTATION PROTOCOL (HOW TO INITIALIZE)

When the user says "Initialize this project using the D.O.E. Skill," you must:
1. **Scaffold:** Create the folder structure (`instructions`, `execution`, `temp`).
2. **Secure:** Create the `.env` and `.gitignore` files.
3. **Establish the Brain:** Ask the user for the project's "North Star" and generate the `gemini.md` file.
4. **Align Brand:** Ask the user if they have a reference screenshot or brand URL to extract into `brand_guidelines.md`.
5. **Confirm:** Return a summarized checklist to the user confirming the environment is secure, structured, and ready for development.

```
