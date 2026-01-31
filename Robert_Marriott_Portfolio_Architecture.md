# Robert Marriott Portfolio: Application Architecture & Logic

This document analyzes and structures the content of Robert Marriott's portfolio into a data-driven architecture suitable for a prospect marketing website or application.

## 1. Core Identity & Value Proposition
**Headline:** Designing and Rebuilding Complex Learning Programmes at Scale.

**Summary:**
Specialist in designing, rescuing, and scaling complex Learning & Development (L&D) programmes in high-risk, low-trust environments.
- **Key Differentiator:** Consultative, evidence-led approach (Stakeholder engagement + Data Analytics + Governance).
- **Target Audience:** Directors and Boards facing programme complexity, risk, and visibility challenges.

## 2. Data Models

### 2.1. Competency Framework (The "Matrix")
The core navigation logic is based on **Level 7 Standards** (APM/CIPD aligned). These serve as the primary filtering/tagging system for the Case Studies.

| ID | Competency Name | Definition Summary |
| :--- | :--- | :--- |
| **C1** | **Strategic Leadership** | Translating long-term vision into strategies; influencing corporate decision-making. |
| **C2** | **Programme & Project Management** | Managing complex, multi-phase programmes; balancing cost/time/risk/quality/benefits. |
| **C3** | **Organisational Development** | Diagnosing performance/culture issues; designing OD interventions. |
| **C4** | **L&D Expertise** | Designing enterprise-wide learning strategies aligned to professional standards. |
| **C5** | **Consultancy Skills** | Diagnostic tools, critical inquiry, root cause analysis, executive influence. |
| **C6** | **Change Management** | Leading change across multi-stakeholder environments; managing resistance. |
| **C7** | **Stakeholder Engagement** | Managing diverse groups, coalition building, negotiation, psychological safety. |
| **C8** | **Data & Analytics** | Designing/interpreting complex data sets; ROI measurement; evidence-based improvement. |
| **C9** | **Operational Excellence** | Optimizing systems/workflows; reducing waste; systems-thinking. |
| **C10** | **Leadership & People Skills** | Emotionally intelligent leadership; coaching; trust-building. |
| **C11** | **Communication & Influence** | High-impact executive communication; narrative building. |
| **C12** | **Risk & Issue Management** | Identifying/mitigating strategic risks; managing high-stakes issues. |
| **C13** | **Governance & Quality Management** | Establishing frameworks, assurance, and compliance mechanisms. |

**App Logic:**
- *User Action:* User interacts with a matrix/grid of these competencies.
- *System Response:* Filtering the "Evidence" (Case Studies) to show specific examples (Phases/Actions) that demonstrate the selected competency.

---

### 2.2. Case Studies (The "Evidence")
The portfolio is built on 5 major pillars (Programmes). Each Programme follows a structured "Consultative & Project Management Lifecycle".

#### A. APC Programme (Assessment of Professional Competence)
*Context:* Rebuilding a failing flagship programme for Chartership (QS, PM, BS, Engineering).
*Legacy State:* Failing, weak design, distressed management (4 predecessors resigned), no budget.

**Phases (Logic Flow):**
1.  **Phase 1: Concept & Vision:** Consultative approach; PM Trilemma (Cost, Time, Quality, Risk, Scope).
2.  **Phase 2: Deep Investigation (Analytics):** Survey analysis, dashboard creation, root cause identification.
3.  **Phase 3: Trust Building:** "Safe space" roadshows (Leeds pilot), listening tours.
4.  **Phase 4: Alignment:** Power-Interest Stakeholder Grid, new RACI, obtaining Leadership Sponsor.
5.  **Phase 5: Insight Sharing:** Sharing data trends/themes; agreeing on solutions.
6.  **Phase 6: Business Case:** ROI analysis, Commercial approach, financial case.
7.  **Phase 7: PMP (Project Management Plan):** WBS, Gantt, Resource allocation.
8.  **Phase 8: Deployment:**
    *   *Assets:* 50+ Training Courses, Doc Checking, Presentation Training, Mock Interviews.
    *   *Ops:* Cross-functional Visio process flows; saving 2 days/week/person.
9.  **Phase 9: Transition:** Early completion (9 months vs 12).
10. **Phase 10: Benefits Realisation:**
    *   *Metric:* Pass rate increased from 60% -> 90%.
    *   *Outcome:* Awarded £1.5m budget for Technical Curriculum.

#### B. Technical Curriculum
*Context:* Scaling from 500 (APC) to 5000 (UK-wide) colleagues; Post-merger integration (Hyder).
*Goal:* Accreditation across multiple institutions (ICE, IMechE, etc.).

**Key Logic Points:**
- **Matrix Strategy:** Mapping capabilities across industries (Buildings, Infrastructure, Water, Energy).
- **Discovery:** Qualitative (Director meetings) + Quantitative (70% survey engagement).
- **Recommendations:**
    1.  New Competency Framework.
    2.  Design & Engineering Academy (Inclusion focus).
    3.  PM Academy.
- **Operations:** Outsourced engineering training (APM procurement best practice); "Soft Launch" hybrid deployment.

#### C. Graduate Programme (Redesign)
*Context:* Urgent turnaround (1 week timeline) of a 3-day induction with poor feedback. Agile approach.

**Key Logic Points:**
- **Agile/Iterative:** Rapid risk analysis & prototyping.
- **Principles:** Engaging, Challenging, Transparent.
- **Content:**
    - Day 1: Vision/Structure.
    - Day 2: Collaboration + *Consultancy Training* (Data analytics, MECE, Pyramid Principle).
    - Day 3: Review ("Why we designed it this way").
    - Challenge: Client brief -> Present to CEO.
- **Philosophy:** Treat grads as adults; high expectations; "Credibility over Rank".

#### D. Apprenticeship Programme
*Context:* Partnering with University; 300 apprentices; 5-year chartership goal.
*Crisis:* University threatened withdrawal due to lack of Line Manager signatures.

**Key Logic Points:**
- **Negotiation:** BATNA/ZOPA preparation. Contingency (ChPP).
- **Compromise:** negotiated 70% signatures in 1 week -> 100% in 1 month.
- **Realism:** Shifted chartership timeline from 5 to 7 years (Ideology vs Reality).

#### E. Executive & Skills Coaching
*Context:* Coaching ~200 candidates (Level 6/7) and Directors.
*Methodology:* Discovery -> Mind Mapping -> Coalition Building -> Market Strengths.
*Metric:* 90% Distinction rate for Level 7 learners.

---

## 3. The Linkage Logic (The Matrix)

The core power of this portfolio is the **Many-to-Many** relationship between **Competencies** (The Definition) and **Programme Phases** (The Proof).

### 3.1. The Horizontal Logic: Universal Methodology
Every project follows a consistent recursive logic:
`Diagnosis (Discovery/Analytics) -> Strategy (Vision/Business Case) -> Alignment (Trust/Stakeholder) -> Execution (PMP/Deployment) -> Value (Benefits/ROI)`

### 3.2. The Vertical Logic: Competency Mapping (Example Schema)
This schema connects the Level 7 Standards (C1-C13) to specific "Evidence Nodes" within the projects.

| Competency | Connected Evidence Nodes (Examples) | Logic / Rationale |
| :--- | :--- | :--- |
| **Strategic Leadership (C1)** | APC Phase 1 (PM Trilemma) | Translating vision into strategy using established frameworks. |
| | Tech Curr Phase 2 (Recommendations) | Shaping organisational culture (Hyder integration) via strategic academies. |
| **Change Management (C6)** | APC Phase 3 (Trust Building) | Managing resistance via "Safe Space" roadshows. |
| | Grad Prog Phase 4 (Transition) | Managing the "shock" of new delivery methods. |
| **Stakeholder Engagement (C7)** | APC Phase 4 (Power-Interest Grid) | Mapping diverse groups with competing priorities (Directors vs Candidates). |
| | Apprenticeship (Negotiation) | Managing simple university ultimatum vs complex internal reality (BAU stress). |
| **Data & Analytics (C8)** | APC Phase 2 (Deep Investigation) | Changing survey questions to get "healthy data" (root causes). |
| | Tech Curr Phase 1 (Discovery) | Using quantitative data (70% engagement) to drive Board recommendations. |
| **Risk Management (C12)** | Apprenticeship (BATNA) | Preparing a contingency (ChPP) before high-stakes negotiation. |
| | Grad Prog (Risk Register) | Analysing risks of rapid 1-week turnaround (Time/Cost/Quality trade-offs). |

### 3.3. Application Navigation Flow
1.  **User Entry:** Selects "Strategic Leadership".
2.  **System Query:** `SELECT * FROM Activities WHERE Tags CONTAINS 'Strategic Leadership'`
3.  **Result:** Displays specific **Phases** (not just whole projects):
    *   *"How I used the Project Management Trilemma to reset expectations (APC)"*
    *   *"Creating the Design Academy to integrate legacy cultures (Tech Curriculum)"*

## 4. State Logic Diagram (User Journey)

The following state machine visualizes how the user navigates the "Matrix Logic"—moving between the **Vertical** (Competency-based) and **Horizontal** (Time-based) dimensions.

```mermaid
stateDiagram-v2
    [*] --> Homepage_Matrix: Start Session
    
    state "Homepage (Competency Grid)" as Homepage_Matrix {
        [*] --> Idle
        Idle --> Filtering: User Hovers Competency (e.g., Strategic Leadership)
        Filtering --> Idle: Mouse Out
    }

    Homepage_Matrix --> Summary_View: Click Competency (C1)

    state "Director's Summary (Meta-Layer)" as Summary_View {
        note right of Summary_View
            Synthesis of the Competency:
            "Across 5 programmes, Rob navigated
            Stakeholder Conflict using [Tool X]..."
        end note
        [*] --> Synthesis_Card
        Synthesis_Card --> Filtered_Evidence_View: "Show me the proof (3 Examples)"
    }
    
    state "Filtered Evidence View" as Filtered_Evidence_View {
        state "Evidence Cards" as Cards
        Cards --> Cards: Scroll/Browse
    }
    
    note right of Filtered_Evidence_View
        System executes:
        SELECT Phases 
        FROM Projects 
        WHERE Competency_Tags CONTAINS 'C1'
    end note

    Filtered_Evidence_View --> Phase_Detail_View: Select Specific Evidence (e.g., APC Phase 1)

    state "Phase Detail View (The Content)" as Phase_Detail_View {
        
        state "Horizontal Navigation (Time)" as Linear_Logic {
            [*] --> Current_Phase
            Current_Phase --> Next_Phase: "Next Step in Process"
            Next_Phase --> Current_Phase: "Previous Step"
            note right of Next_Phase
                Universal Methodology:
                Discovery -> Strategy -> Execution
            end note
        }

        state "Vertical Navigation (Theme)" as Lateral_Logic {
            Current_Phase --> Related_Node: "Jump to same theme in diff project"
            note right of Related_Node
                Context Card:
                "See how this same risk model 
                was applied to a Scaling problem"
            end note
        }
    }

    Phase_Detail_View --> Homepage_Matrix: Reset / Home
    Phase_Detail_View --> Summary_View: Back to Summary
```

## 5. Application UX/UI Logic

To build this as a marketing tool, the following structure is recommended:

### 5.1. The "Director's Summary" (Meta-Layer) **[NEW]**
*   **Purpose:** To provide an immediate "Executive Synthesis" before the user has to dig into details.
*   **Content:** A dynamic summary that aggregates the user's selected competency across all projects.
*   **Example:** *"Rob has delivered **Strategic Leadership** in 3 distinct contexts: turning around a failing project (APC), scaling a team (Tech Curriculum), and negotiating with partners (Apprenticeship)."*

### 5.2. The "Interactive Competency Matrix" (Homepage/Hero)
*   **Visual:** A dynamic grid of the 13 Competencies.
*   **Interaction:** Hovering/Clicking a competency highlights related "Case Study Nodes".
*   **Logic:** `Select(Strategic Leadership)` -> `Show(APC Phase 1, Tech Curriculum Phase 2, Grad Prog Leadership)`.

### 5.3. The "Lifecycle" View (Narrative Flow)
*   **Visual:** A horizontal timeline or scrollable path representing the universal methodology Rob applies (Discovery -> Strategy -> Engagement -> Deployment -> Benefits).
*   **Content:** Mapping specific examples from the 4 Case Studies onto this universal timeline to show consistency of approach.

### 5.4. The "Evidence Vault" (Deep Dive)
*   **Visual:** Filterable repository of "Artifacts" (simulated or real).
*   **Tags:** `#DataAnalytics`, `#CrisisManagement`, `#Negotiation`, `#CurriculumDesign`.
*   **Content:**
    *   *Snippet:* "How I negotiated with a hostile university partner" (Apprenticeship).
    *   *Snippet:* "The 5-Point Project Trilemma" (APC).
    *   *Snippet:* "Consultancy Training Curriculum" (Grad Prog).

## 4. Technical Constraints & Requirements
*   **Source Material:** Text extraction complete from `Rob's Portfolio1.docx`.
*   **Missing Assets:**
    *   Specific "Click here" links from the docx were internal hyperlinks or pointed to appendices not fully detailed in the derived text (Appendices 1-4 contain headers but the raw evidence files/images are static in the original doc).
    *   *Action:* App should use placeholder "Evidence Cards" where specific testimonials or data charts would go.
