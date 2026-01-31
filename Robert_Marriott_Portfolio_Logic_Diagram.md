# Robert Marriott Portfolio: Logic Visualisation

This diagram represents the user journey and logic flow for the portfolio application, connecting the Competency Framework (Vertical Logic) with the Case Study Lifecycle (Horizontal Logic).

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

## Logic Explanation

1.  **Homepage Matrix:** The user starts at the grid of 13 Competencies.
2.  **Filtering:** Selecting a competency (e.g., "Strategic Leadership") filters the database for specific *moments* (Phases) across all projects that demonstrate that skill.
3.  **Phase Detail:** Once inside a specific example (e.g., "APC Phase 1"), the user has two navigation options:
    *   **Horizontal:** Move forward/backward in time within that specific project (The "Universal Methodology").
    *   **Vertical:** Jump lateral to a different project that shares the same theme (The "Competency Logic").
