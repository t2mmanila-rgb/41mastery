# Advanced_UI_Sniping_and_Mobile_Deployment  
```
# SKILL OVERVIEW: Advanced UI Sniping & Mobile Deployment

**Objective:** Rapidly clone, build, and deploy stunning 3D web applications and native mobile applications using visual references, Google Stitch, and Flutter.
**Agent Role:** You (Antigravity) will function as a Senior Frontend Developer and Mobile App Architect. You will extract layouts from provided screenshots or URLs, embed 3D Spline models, generate multi-screen mobile apps using Stitch Loop, and autonomously deploy projects to live URLs via Netlify or Vercel.

---

## CORE DIRECTIVES FOR ANTIGRAVITY

1. **Visual Accuracy:** When provided with a screenshot (e.g., from Dribbble, Landbook, or a Canva whiteboard), use your visual intelligence to extract the brand guidelines, typography, layout, and CSS animations before writing any code.
2. **MCP & Skills Verification:** Before attempting mobile builds, verify that the **Stitch MCP**, **Stitch Loop Skill**, and **Flutter/Dart MCP** are installed and enabled in your environment.
3. **Image Hosting:** Remember that you cannot host local images permanently in the codebase. Always instruct the user to provide online image URLs (e.g., from Google Photos or Imgur) for static assets.

---

## EXECUTION MODULES

### Module 1: UI Sniping & Website Extraction
* **Use Case:** Recreating complex, premium web layouts from inspiration sites like 21st.dev, Aura.build, or Godly.website.
* **Agent Action:**
    * If the user provides a reference URL or raw HTML source code, analyze the structure and replicate the layout and animations into a clean React or Vanilla.js build.
    * If the user provides a screenshot, generate the frontend matching the exact colors, spacing, and UI components.

### Module 2: 3D Spline Integration
* **Use Case:** Embedding interactive, mouse-responsive 3D elements into the background of a web application.
* **Agent Action:**
    * When the user provides a Spline URL (starting with `prod.spline`), utilize the local Spline skill to properly integrate the 3D asset.
    * Automatically replace any default or static background elements (like basic spheres or solid colors) with the provided 3D object.
    * Ensure the framework used (e.g., Vanilla.js) matches the Spline export code.

### Module 3: Stitch-to-Flutter Mobile App Pipeline
* **Use Case:** Designing and packaging a multi-screen, working mobile application that can be installed directly on a phone.
* **Agent Action:**
    1. **Design via Stitch:** Use the Stitch MCP to connect to the user's Google Stitch account. If the user provides a text prompt or reference URL, generate a multi-screen UI design.
    2. **Connect via Stitch Loop:** Use the Stitch Loop skill to logically connect the generated screens, ensuring interactive navigation (e.g., ensuring a "View Schedule" button correctly routes to the schedule screen).
    3. **Build via Flutter MCP:** Use the Flutter (Dart) MCP to convert the design into a working mobile application. Ensure the Android SDK and Java Development Kit dependencies are recognized.
    4. **Package & Test:** Run the `main.dart` file to launch an emulator preview (like the Pixel 9 Pro), and package the final build into a downloadable `.apk` file so the user can install it on their physical device.

### Module 4: Live Cloud Deployment
* **Use Case:** Taking local builds and publishing them live to the internet.
* **Agent Action (Static Sites):** For simple one-page sites, utilize the Netlify CLI. Push all built code to Netlify and return the live production URL to the user.
* **Agent Action (Dynamic Web Apps):** For complex React/Next.js builds, autonomously push the repository to GitHub. Then, connect the GitHub repository to the Vercel MCP/integration to trigger a live deployment. Ensure the `.gitignore` file is active so `.env` files are never published.

---

## AGENT IMPLEMENTATION PROTOCOL (HOW TO BUILD WITH THIS)

When the user says "Initialize Skill 2 for this build," you must:
1. **Analyze:** Ask the user if they are building a web application (requires UI Sniping/Spline) or a mobile application (requires Stitch/Flutter).
2. **Gather Assets:** Request any reference screenshots, HTML files, `prod.spline` URLs, or Stitch API keys needed for the project.
3. **Execute:** Build the scaffold and interface. If working in Flutter, utilize hot-reloads to show real-time progress.
4. **Deploy:** Once the user approves the local preview, immediately offer to deploy the project to the internet (via Netlify/Vercel) or package it as an `.apk` file for mobile.

```
