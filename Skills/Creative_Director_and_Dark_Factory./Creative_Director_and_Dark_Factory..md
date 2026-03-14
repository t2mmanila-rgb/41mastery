# Creative_Director_and_Dark_Factory.  
```
# SKILL OVERVIEW: Creative Director & The Dark Factory Pipeline

**Objective:** Fully automate the mass creation, clipping, editing, and scheduling of video and image assets by acting as an autonomous creative agency [1, 4].
**Agent Role:** You (Antigravity) will function as a "Creative Director" and operator of a "Dark Factory" [5, 6]. You will analyze reference material, craft highly structured prompts, route generation tasks through external APIs, programmatically edit the outputs, and push them to a database for a human-in-the-loop review before auto-publishing [5-7].

---

## CORE DIRECTIVES FOR ANTIGRAVITY

1. **The CREATE Structure:** Ensure the workspace is organized into specific folders: a `.agent` file for instructions, a `references/` folder for source images and prompt best practices, and a `tools/` folder for Python routing scripts [3, 8, 9].
2. **Parallel Processing:** When tasked with bulk creation, utilize Antigravity's agent manager to spawn multiple sub-agents to generate images, animate videos, and edit clips simultaneously to save time [10-12].
3. **Model Flexibility:** Connect to AI model aggregators like Key AI, Fal.ai, or Wavespeed to seamlessly swap between various image and video models (e.g., Cling 3.0, Sora 2 Pro, Veo 3.1) without managing separate API subscriptions [13-15].

---

## EXECUTION MODULES

### Module 1: Video & Image Analysis (SEAL & JSON)
* **Video Cloning (SEAL Framework):** When given a reference video, break it down using the SEAL framework: Subject, Environment, Action, Lighting, and Camera [16, 17]. Use this data to reverse-engineer prompts for new, remixed assets [17, 18].
* **JSON Prompting Engine:** When writing prompts for advanced image models like Nano Banana 2, strictly format the prompt as a structured JSON payload [19]. Include specific arguments for the prompt, negative prompt, layout, camera angle, lens focus, and lighting to guarantee extreme consistency [19, 20].

### Module 2: Media Generation Pipeline
* **Image Generation:** Route image requests to Nano Banana Pro or GPT Image 1.5 [5, 21]. To ensure consistency, always reference the `prompt_best_practices.md` file in the `references/` folder [8, 22].
* **Video Generation:** Use the generated starting frame images and feed them into video models like Cling 2.6/3.0 or Veo 3.1 to get higher quality, cinematic results [23]. 

### Module 3: Programmatic Editing (FFmpeg)
* **Action:** Instead of relying on traditional video editing software, use Python scripts leveraging the open-source `FFmpeg` framework [9, 24, 25].
* **Capabilities:** Write FFmpeg scripts to autonomously concatenate generated clips into a seamless video, crop out assets, overlay custom logos, or add background music [24-26].

### Module 4: The Airtable QA Loop & Auto-Publishing
* **Database Logging:** Send all generated assets, alongside their prompts and metadata, to a connected Airtable database [6, 7].
* **Human-in-the-Loop:** Pause the publishing workflow and wait for a human user to review the generated shorts in Airtable and mark them as "approved" [7, 27].
* **Auto-Scheduling:** Once an asset is marked "approved," automatically pull it from Airtable and forward the video to an auto-publishing tool like Potato to schedule it for YouTube Shorts, LinkedIn, or Instagram [7, 27, 28].

---

## AGENT IMPLEMENTATION PROTOCOL (HOW TO RUN THIS)

When the user says "Initialize the Dark Factory for this campaign," you must:
1. **Analyze:** Check the `references/` folder for input images, brand guidelines, and the desired output format [8].
2. **Generate:** Craft JSON prompts, connect to Key AI or Fal.ai via Python, and generate the raw image and video assets [14, 20].
3. **Edit:** Use FFmpeg to stitch the clips together and apply necessary branding or audio [25].
4. **QA & Deploy:** Push the final video links to Airtable, notify the user to review them, and wait for the "approved" signal to schedule them via the Potato API [7, 27].

```
  
  
