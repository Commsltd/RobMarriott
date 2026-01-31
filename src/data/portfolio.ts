// =============================================================================
// TYPES
// =============================================================================

export interface Profile {
    headline: string;
    summary: string[];
}

export interface Competency {
    id: string;
    title: string;
    description: string;
    insight: {
        challenge: string;
        solution: string;
        stat?: string;
    };
}

export interface ProjectPhase {
    id: string;
    title: string;
    description: string;
    narrative?: string;         // Full detailed narrative from source
    techniques?: string[];      // Methods/frameworks used
    challenge?: string;         // Key obstacle faced
    outcome?: string;           // Quantified result
    tags: string[];             // Competency IDs
}

export interface ProjectAnecdote {
    title: string;
    narrative: string;
}

export interface Project {
    id: string;
    title: string;
    company: string;           // Organisation where work was done
    context: string;
    initialState?: string;     // "Programme was on its knees..."
    methodology?: string;      // Consultative approach summary
    keyMetrics?: {
        before?: string;
        after?: string;
        improvement?: string;
    };
    phases: ProjectPhase[];
    anecdotes?: ProjectAnecdote[];
    evidenceLinks?: string[];
}

export interface CoachingService {
    type: 'executive' | 'skills';
    candidatesServed: number;
    organisationTypes: string[];
    methodology: string[];
    testimonialHighlight: string;
    distinctionRate?: string;
}

export interface TrainingModule {
    title: string;
    components: string[];
    audience: string;
}

// Consultancy Course Module - Full curriculum from source
export const CONSULTANCY_COURSE: TrainingModule = {
    title: "Management Consultancy Course",
    components: [
        "Data Analytics & Interpretation",
        "MECE Framework (Organizing & Managing Data)",
        "Bottom-Up Analysis Approach",
        "The Pyramid Principle (Top-Down Communication)",
        "Inductive, Deductive & Abductive Logical Reasoning",
        "Building & Maintaining Trust",
        "Client Presentation Skills (Teams Present to Audience)"
    ],
    audience: "Graduates & Senior Professionals"
};

// Coaching Services - Full detail from source
export const COACHING_SERVICES: CoachingService[] = [
    {
        type: 'skills',
        candidatesServed: 200,
        distinctionRate: "90%",
        organisationTypes: [
            "NHS",
            "Borough Councils",
            "MOD",
            "Home Office",
            "Management and asset consultancy organisations",
            "Severn Trent",
            "Retail organisations",
            "Other professional services"
        ],
        methodology: [
            "Facilitating Level 7 discussions",
            "Coaching to distinction-level competencies",
            "Project Management Standards alignment"
        ],
        testimonialHighlight: "Within four years, I coached approximately 200 candidates. 90% of my learners scored a distinction after their assessments. My learners' Line Managers were very impressed with my approach."
    },
    {
        type: 'executive',
        candidatesServed: 50,
        organisationTypes: ["Arcadis Directors", "Associates"],
        methodology: [
            "Discovery phase",
            "Mind mapping",
            "Identifying coalition of support across organisation",
            "Identifying market strengths",
            "Building bespoke training if required"
        ],
        testimonialHighlight: "I received very positive feedback with one director advising that I 'changed his life'."
    }
];

export const PROFILE: Profile = {
    headline: "Designing and Rebuilding Complex Learning Programmes at Scale",
    summary: [
        "I specialise in designing, rescuing and scaling complex Learning & Development programmes in environments where credibility has been lost, stakeholders are fragmented, and failure carries reputational and commercial risk.",
        "My work typically begins where programmes are already under strain: weak design, low trust, competing agendas, and limited or no budget. I lead end-to-end programme redesigns using a consultative, evidence-led approach - integrating stakeholder engagement, data analytics, governance, and benefits realisation to create learning systems that are sustainable and adopted.",
        "I have rebuilt national professional development programmes spanning multiple disciplines, regions and professional institutions, aligning learning pathways to chartership, organisational strategy and operational reality. These programmes required balancing time, cost, scope, quality and risk while coordinating senior leaders, subject-matter experts and operational teams across the business.",
        "The outcomes have been tangible and board-level: materially improved professional pass rates, restored engagement and confidence, scalable programme architectures, and increased investment in people development."
    ]
};

export const COMPETENCIES: Competency[] = [
    {
        id: 'c1',
        title: 'Strategic Leadership',
        description: 'Provide strategic direction for complex organisational initiatives, translating long-term vision into coherent strategies that align people, processes and resources. Influence corporate decision making through critical insight, challenge assumptions constructively and shape organisational culture and performance through evidence-based leadership.',
        insight: {
            challenge: "Complex initiatives often fail due to 'Strategy-Execution Gaps' - where fragmented long-term vision disconnects from immediate operational reality, causing resource misalignment and initiative fatigue.",
            solution: "I translate high-level vision into coherent, verifiable strategic roadmaps (using OGSM or Hoshin Kanri frameworks) that align decision-making models, unify divergent stakeholders, and ensure every resource deployment maps directly to critical corporate objectives.",
            stat: "Driven 90% blocker mitigation"
        }
    },
    {
        id: 'c2',
        title: 'Programme Management',
        description: 'Lead complex, multi-phase programmes using advanced project management methodologies. Define scope, governance, resource strategies and delivery models that balance cost, time, risk, quality and benefits. Proactively navigate ambiguity, interdependencies and constraints, enabling successful delivery of high-risk organisational programmes.',
        insight: {
            challenge: "High-stakes programmes frequently collapse under the weight of 'Scope Creep' and 'Ambiguity Paralysis' when governance structures lack the rigidity to handle complex interdependencies.",
            solution: "I implement rigorous MSP® and PRINCE2® aligned governance structures, balancing the 'Project Management Trilemma' (Cost, Time, Quality) through strictly engaged steering groups, critical path analysis, and proactive risk remediation protocols.",
            stat: "12-month rollout delivered in 9"
        }
    },
    {
        id: 'c3',
        title: 'Organisational Development',
        description: 'Diagnose organisational performance, culture, capability, and system issues through rigorous analysis and consultation. Design and embed OD interventions that enhance organisational effectiveness, transform behaviours and enable long-term workforce capability. Evaluate OD outcomes at structural, cultural and strategic levels.',
        insight: {
            challenge: "Capability growth is often derailed by 'Cultural Inertia' - where underlying behavioural norms and systemic blockers invisibly resist structural changes.",
            solution: "I avoid superficial fixes by conducting deep-dive diagnostic audits (Burke-Litwin / McKinsey 7S) to identify root-cause systemic friction, designing interventions that reshape organisational DNA rather than just its organogram.",
            stat: "70% engagement in diagnostics"
        }
    },
    {
        id: 'c4',
        title: 'L&D Expertise',
        description: 'Design, govern and evaluate enterprise-wide learning strategies that build organisational capability and professional competence. You create integrated development pathways aligned to professional standards, business objectives and talent strategies. Use data and organisational intelligence to drive continuous improvement and demonstrate impact on business performance.',
        insight: {
            challenge: "Learning strategies often suffer from 'Relevance Drop-off' - failing to connect academic theory with commercial reality, leading to low adoption and zero ROI.",
            solution: "I re-engineer learning architectures using the 70:20:10 model, embedding professional standards (RICS/APM) directly into workflow-aligned pathways that demand practical application, ensuring 'Learning Transfer' is measurable and commercially potent.",
            stat: "Pass rates raised 60% → 90%"
        }
    },
    {
        id: 'c5',
        title: 'Consultancy Skills',
        description: 'Operate as a senior consultant, using diagnostic tools, critical inquiry, and stakeholder insights to identify root causes and recommend high-value solutions. Challenge constructively, present strategic options, and influence decisions at executive level. Facilitate complex problem-solving and co-create solutions with diverse stakeholders.',
        insight: {
            challenge: "Organisations often treat 'Symptoms not Causes', wasting millions on efficient execution of the wrong solutions due to a lack of rigorous critical inquiry.",
            solution: "I act as a critical friend to the C-Suite, deploying rigorous diagnostic inquiry and hypothesis-led problem solving (Pyramid Principle) to peel back layers of dysfunction and identify the singular leverage points that drive value.",
            stat: "Highly rated by 200+ candidates"
        }
    },
    {
        id: 'c6',
        title: 'Change Management',
        description: 'Lead complex organisational change across multi-stakeholder environments using structured change frameworks. Plan and manage the strategic, people and process dimensions of change, anticipating resistance, shaping engagement strategies, and designing interventions that align culture, systems and behaviours to the desired future state.',
        insight: {
            challenge: "Change initiatives fail when they ignore the 'J-Curve of Despair' - forcing process adoption without managing the psychological transition of the people involved.",
            solution: "I manage the 'Human Side of Change' (ADKAR / Kotter) by building coalition networks and psychological safety, converting resistance into engagement by mapping individual motivations to the strategic future state.",
            stat: "Rebuilt University partnership"
        }
    },
    {
        id: 'c7',
        title: 'Stakeholder Engagement',
        description: 'Map and manage diverse stakeholder groups with competing priorities, building strong coalitions to enable organisational progress. You use influence, coaching and negotiation to align interests, gain commitment, and address conflict. You create psychologically safe environments that encourage transparency, inclusion and collaboration.',
        insight: {
            challenge: "Projects stall in 'Stakeholder Gridlock' when competing agendas, siloed politics, and low-trust environments paralyse decision-making.",
            solution: "I construct 'Coalitions of Support' by mapping influence vs. interest stakeholders, using active listening and interest-based negotiation to align diverse political agendas behind a single unified objective.",
            stat: "Unified 8 UK Offices"
        }
    },
    {
        id: 'c8',
        title: 'Data & Analytics',
        description: 'Design and interpret complex data sets to inform strategic decisions. Integrate qualitative and quantitative data, turning insights into actionable recommendations. Build evaluation frameworks that measure impact, demonstrate ROI, and drive evidence-based organisational improvement at scale.',
        insight: {
            challenge: "Strategic decisions lack impact when they rely on 'Gut Feeling' or isolated metrics that fail to reveal the true health of an initiative.",
            solution: "I integrate qualitative sentiment analysis with quantitative performance metrics to build 'Balanced Scorecards', transforming raw data into actionable, evidence-led narratives that secure board-level investment.",
            stat: "Secured £1.5m budget via data"
        }
    },
    {
        id: 'c9',
        title: 'Operational Excellence',
        description: 'Optimise systems, processes and workflows to improve efficiency, quality and performance. Design operational structures to reduce waste, strengthen accountability and improve the user experience. Apply continuous improvement and systems-thinking to embed sustainable operational capability across the organisation.',
        insight: {
            challenge: "Inefficient workflows create 'Hidden Factories' of rework and waste, obscuring accountability and draining high-potential talent.",
            solution: "I deploy Lean/Six Sigma principles to map Value Streams, systematically eliminating non-value-added steps and automating workflows to create transparent, high-velocity operational structures.",
            stat: "Visio flows saved 2 days/week"
        }
    },
    {
        id: 'c10',
        title: 'Leadership Skills',
        description: 'Role-model emotionally intelligent, values-driven leadership that enables people to perform at their best. Inspire trust, create belonging, coach for growth, and handle complex interpersonal dynamics with fairness, empathy and authority. Enable high performance and psychological safety simultaneously.',
        insight: {
            challenge: "High-pressure environments often trigger 'Toxic Performance' - where fear-based management stifles innovation and creates distinct failure points.",
            solution: "I role-model 'Situational Leadership' (Blanchard), balancing directive authority with supportive coaching to create psychological safety, enabling high-performing teams to take ownership of complex challenges.",
            stat: "Feedback: 'Changed my life'"
        }
    },
    {
        id: 'c11',
        title: 'Communication',
        description: 'Craft and deliver high-impact communication for executive audiences, translating complex information into compelling narratives. Use influence, reasoning and negotiation to secure alignment, shape decision-making and build momentum behind major initiatives. Adapt your communication style strategically to different audiences and environments.',
        insight: {
            challenge: "Complex strategies fail to land because they get lost in 'Cognitive Overload' - drowning stakeholders in detail without a compelling narrative arc.",
            solution: "I craft 'Executive-Ready' communications using Minto Pyramid principles, synthesising complex data into clear, top-down narratives that respect executive attention spans and compel immediate decision-making.",
            stat: "Invited to Westminster"
        }
    },
    {
        id: 'c12',
        title: 'Risk Management',
        description: 'Identify, evaluate and mitigate strategic and operational risks across complex programmes. You analyse interdependencies, emerging threats, and organisational vulnerabilities, developing proactive strategies to prevent failure. You manage high-stakes issues calmly, with clarity, transparency and robust decision-making.',
        insight: {
            challenge: "Programmes collapse when 'Optimism Bias' ignores critical path dependencies and emerging external threats until it's too late.",
            solution: "I institute 'Proactive Risk Registers' (RAID logs) that treat risks as live entities, ensuring every high-impact probability has a pre-approved mitigation strategy and owner before it impacts the critical path.",
            stat: "Mitigated 4 resignations history"
        }
    },
    {
        id: 'c13',
        title: 'Governance & Assurance',
        description: 'Establish and maintain robust governance frameworks that ensure accountability, compliance and quality standards. Design decision-making structures, reporting lines and assurance processes that provide visibility and control. Safeguard organisational integrity and protect reputation through ethical leadership and rigorous oversight.',
        insight: {
            challenge: "Without robustness, accountability dissolves into 'Decision Vacuums', where lack of clarity leads to quality erosion and reputational risk.",
            solution: "I establish 'Clear Line of Sight' governance frameworks, defining explicit decision gates and accountability flows to ensure quality standards are baked into the process, not just inspected at the end.",
            stat: "Standardised 50+ courses"
        }
    }
];

export const PROJECTS: Project[] = [
    {
        id: 'p1',
        title: 'The APC Programme',
        company: 'Arcadis',
        context: 'Restoring trust and rebuilding a failing national assessment programme for professional chartership via RICS.',
        initialState: 'In 2015, the APC (Assessment of Professional Competence) programme was seriously failing. The programme is approximately three to four years and focuses on a structured training and developmental approach to ensuring grads, apprentices and seniors are fully prepared for chartership within QS, PM, BS, and Engineering disciplines. The programme was on its knees due to weak design, leadership and management. My four predecessors resigned due to stress owing to the complexity and the challenge of managing multiple stakeholders with competing agendas.',
        methodology: 'I presented the project management "trilemma" which actually consisted of five concepts: Cost, Time, Quality, Risk, and Scope. I explained the importance of establishing an equilibrium between all five areas. "Why is there never enough time to get it right first time, but always enough time to rework it afterwards?"',
        keyMetrics: {
            before: '60% pass rate',
            after: '90% pass rate',
            improvement: '+30% within 12 months'
        },
        phases: [
            {
                id: 'p1-ph1',
                title: 'Phase 1: Stakeholder Identification & Vision',
                description: 'Presented vision, benefits, and high-level plan to secure mandate.',
                narrative: 'I needed to persuade my Talent Lead to allow me approximately one year to ensure this re-build would be successful. At first she expected a three-month turnaround. I explained that to succeed where so many had failed, I needed to learn lessons from previous attempts and follow a consultative approach aligned to APM best practice. I presented an executive summary covering: The vision, How the vision aligns to organisational strategy, The benefits, and The high-level plan.',
                techniques: ['Hybrid project lifecycle', 'Executive Summary/Business Case'],
                tags: ['c1', 'c2', 'c11']
            },
            {
                id: 'p1-ph2',
                title: 'Phase 2: Deep Investigation - Data Analytics',
                description: 'Reviewing survey questions, creating dashboards to understand failure patterns.',
                narrative: 'Look at the current survey results. Are they asking the right questions? Do I need to change the wording? Do I need to ask more focused questions? Does the assessment criteria align to the vision? Do the metrics align to the assessment criteria? How do I arrive to the qualitative and quantitative data? What\'s my approach to analysing the data and how would my stakeholders like it shared/presented? Created dashboard once all data elements were agreed.',
                techniques: ['Survey redesign', 'Dashboard creation', 'Data integrity assessment'],
                tags: ['c8', 'c3']
            },
            {
                id: 'p1-ph3',
                title: 'Phase 3: Rebuild Trust & Share Vision',
                description: '"Safe space" roadshows starting with Leeds pilot.',
                narrative: 'Travelled to all offices across the UK inviting all stakeholders, candidates and any colleagues interested. Started with Leeds as a pilot. Introduced myself as the new APC Lead and apologised for the experiences over the past few years. Highlighted that my intent was to change it from a failing programme to the most successful in the entire organisation. Started by providing a safe space for directors and candidates to share every frustration and grievance. Recorded the themes and patterns. Asked if there were any colleagues who wanted involvement in helping rebuild.',
                techniques: ['Safe space facilitation', 'Qualitative data gathering', 'Pilot approach'],
                tags: ['c7', 'c10', 'c11']
            },
            {
                id: 'p1-ph4',
                title: 'Phase 4: UK-Wide Office Alignment',
                description: 'Aligning all 8 UK offices using Power-Interest Grid analysis.',
                narrative: 'As the pilot worked very well in Leeds, and I had support from the most influential leads and directors, I used this momentum to gently persuade leadership and candidates across the other offices: Leeds, Birmingham, Bristol, London (head office), Manchester, Liverpool, Glasgow, Belfast. Presented the vision, new org structure and asked for support. "For this to succeed, I need support from all levels across the organisation." I aligned my message to the organisation\'s values including "collaboration". Asked for a leadership sponsor (director) for strategic decisions, and a coordinator for each office.',
                techniques: ['Power-Interest Grid', 'Coalition building', 'RACI establishment'],
                outcome: 'Received overwhelming support across all offices.',
                tags: ['c7', 'c11', 'c2']
            },
            {
                id: 'p1-ph5',
                title: 'Phase 5: Share Analytics & Insights',
                description: 'Shared data trends, proposed 5 options, achieved 90% blocker identification.',
                narrative: 'At this point, I had: The vision agreed, supported and advocated for via leads and candidates. The new org structure agreed and communicated. The RACI agreed and communicated. The trust of 90% of the organisation. I shared the results of the data, observations, patterns, trends and themes. Based on the data, I shared five options to the capability leads. They agreed with two recommended solutions, and I communicated this to all stakeholders for feedback. This approach brings people with you along the journey. Transparency, honesty and clarity. I had already identified 90% of the blockers and used the influencers to convince the potential blockers.',
                techniques: ['Options analysis', 'Change management principles', 'Blocker mitigation'],
                outcome: '90% blockers identified and mitigated through influencer engagement.',
                tags: ['c5', 'c8', 'c12']
            },
            {
                id: 'p1-ph6',
                title: 'Phase 6: Business Case Development',
                description: 'Strategic context, ROI analysis, procurement strategies, governance approach.',
                narrative: 'Main areas covered within the business case: Strategic context - the case for change. Economic analysis - ROI, based on investment appraisal. Commercial approach - procurement strategies. Financial case - affordability within the agreed timeframe (budget management). Management approach - governance, roles and responsibilities.',
                techniques: ['Business case methodology', 'ROI analysis', 'Procurement strategy'],
                challenge: 'The Manchester office felt disillusioned and frustrated with lack of HR/L&D support over the years.',
                tags: ['c1', 'c8', 'c11', 'c10']
            },
            {
                id: 'p1-ph7',
                title: 'Phase 7: Project Management Plan',
                description: 'WBS, Gantt chart, RACI, Risk/Issue management setup.',
                narrative: 'The PMP consisted of: Benefits – covering why the redesign was crucial for Arcadis\' reputation and offering a people-first service. Time saved for operations. Scope – covering the work breakdown structure: training courses, new preparation structure (sessions six months before final assessment), and new approach to operations. Time – high level Gantt chart. Resources – RACI including the new org structure. Delivery logistics – where work is likely to take place. Management – communications, risks, issues, change control mechanism, quality management.',
                techniques: ['APM PMP methodology', 'RACI', 'Gantt planning', 'Change control'],
                tags: ['c2', 'c12', 'c13']
            },
            {
                id: 'p1-ph8',
                title: 'Phase 8: Deployment',
                description: 'Built 50 training courses with SMEs, established RICS prep sessions.',
                narrative: 'Training courses: The leads who agreed to support provided SMEs for Quantity Surveying, Project Management, Engineering (civil), and Building Surveying. Approximately 50 training courses to build. Preparation sessions: Through generosity of stakeholders, I had access to approximately £5k to procure RICS fellows. I scheduled: Documents checking session, Presentation training, Pre-qualification interview (with a lead, myself and RICS fellow), and for those who pass – a mock interview with the RICS fellow.',
                techniques: ['SME collaboration', 'Professional body engagement', 'Structured assessment prep'],
                tags: ['c4', 'c9', 'c2']
            },
            {
                id: 'p1-ph9',
                title: 'Phase 9: Transition to BAU',
                description: 'Rolled out in 9 months (ahead of 12-month schedule).',
                narrative: 'After various reviews and check-ups, the deployment phase was completed slightly before intended time. This enabled roll out within nine months rather than the expected year. Quality assessments and metrics were completed, dashboard was accepted. The transition to BAU was welcomed and accepted by all stakeholders and candidates.',
                outcome: 'Delivered 3 months ahead of schedule.',
                tags: ['c6', 'c2']
            },
            {
                id: 'p1-ph10',
                title: 'Phase 10: Benefits Realisation',
                description: 'Pass rate increased from 60% to 90%. Awarded £1.5m budget for expansion.',
                narrative: 'The major benefit requested by the CEO was to ensure the pass rate for Arcadis via the RICS went from around 60% to above 80%. Within a year, the average pass rate went up to 90%. A huge win. In addition, the board required improvement on engagement and satisfaction from the leads and candidates across the UK business. This went up exponentially. To such a degree that it resulted in my being awarded a £1.5 million budget to build a wider technical curriculum for the UK business following the merger with Hyder.',
                outcome: 'Pass rate: 60% → 90%. Engagement increased exponentially. Awarded £1.5m for Technical Curriculum.',
                tags: ['c4', 'c8', 'c1']
            }
        ],
        anecdotes: [
            {
                title: 'The Manchester Office Challenge',
                narrative: 'The Manchester office (mainly the directors and candidates) felt quite disillusioned, jaded and frustrated with the lack of support from HR/L&D over the years. I showed complete understanding and advised that they were more than welcome to continue with their own approach. I also welcomed them to join our programme if they wished. At this time, I had buy-in from the board, the CEO, the COO, and all other offices. I could have used this authority to pressure them into alignment. Instead, I used a very empathetic, inspirational, influential and soft approach. This resulted in alignment within six months inside the transition phase. This was a new approach for me, and I realised that keeping an open door and welcoming, supporting and guiding a frustrated group really helps build back trust. I also offered to join their APC sessions to provide personal presentations, offer extra support and guidance. This was a huge success and secured the trust I intended to build back.'
            },
            {
                title: 'Operational Process Transformation',
                narrative: 'Given the potential complexity created for the coordinators to resource the leads for training courses and prep sessions, I worked hard to ensure coordinators were motivated. My proposal was to empower them to decide what the operational process would look like. I worked as their consultant to build whatever they wanted. Their vision: efficient, easy, simple, fast, supportive. I used MS Visio to build a cross-functional process flow with connected hyperlinks leading to drafted meeting requests and emails. This new approach saved approximately two days per week, per person, enabling them to collaborate on strategic elements. Less admin, more thought and recommendation. I received excellent feedback which led to an incredible amount of trust. Aligns nicely to Hersey and Blanchard and Herzberg leadership models.'
            }
        ],
        evidenceLinks: ['Appendix 2 - COO Peter Madden feedback']
    },
    {
        id: 'p2',
        title: 'Technical Curriculum',
        company: 'Arcadis',
        context: 'Scaling professional development from 500 candidates (APC) to 5000 (entire UK business) following merger with Hyder.',
        initialState: 'Whilst my first programme focused primarily on approximately 500 candidates becoming chartered via the RICS, my new task was to build a technical curriculum that captured all UK colleagues which amounted to 5000. Essentially the entire UK business. This meant I needed to help Arcadis become accredited with multiple institutions: APM, ICE, IMechE, CIWEM, IchemE, EIT.',
        methodology: 'My approach was much like the APC programme strategy except I needed to learn about new industries: Buildings (which I already knew), Infrastructure, Industrial Manufacturing, Transport, and Energy. Given that Arcadis are a matrix style organisation, I also needed to appreciate the capabilities that cross-over all industry sectors.',
        keyMetrics: {
            before: '0 accreditations in new disciplines',
            after: 'Full curriculum covering 5000 colleagues',
            improvement: '£1.5m budget investment'
        },
        phases: [
            {
                id: 'p2-ph1',
                title: 'Phase 1: Discovery',
                description: 'Consultative approach with qualitative (Director meetings) & quantitative (70% survey engagement) data.',
                narrative: 'Given the success of the consultative approach with the last programme, I decided to follow it again. Questions I asked: What do we have and Hyder have in place already? How can we leverage what has already been developed? Are there cross-over training courses that might support other industry sectors? How do the directors, leaders and candidates feel about what is in place to date? How will I ensure healthy and transparent data with integrity? For qualitative data, I scheduled meetings with directors from legacy Hyder to understand how they feel about the merge and Arcadis. For quantitative, I sent a survey to all UK colleagues which received around 70% engagement – a great result.',
                techniques: ['Consultative discovery', 'Cross-industry analysis', 'Stakeholder sentiment mapping'],
                outcome: '70% survey engagement rate.',
                tags: ['c3', 'c5', 'c8']
            },
            {
                id: 'p2-ph2',
                title: 'Phase 2: Board Recommendations',
                description: 'Proposed Competency Framework, Design & Engineering Academy, and PM Academy.',
                narrative: 'Given the discussions with leads across the UK business, I found the organisation didn\'t have a strong competency framework that covered all disciplines and was analysable. My first recommendation: Build a new competency framework to analyse competency, skills and knowledge gaps. This helps the board with portfolio management. My second recommendation: Build a specific Design and Engineering Academy so new leads feel prioritised, not like they\'re piggybacking into an existing programme. There was a general perception that Arcadis was not prioritising colleagues from legacy Hyder. I highlighted the importance of making leads and candidates feel they belong and were truly heard. My third recommendation: Build PM Academy for the same reasons. This approach received very positive feedback from the board and my leadership thinking was commended.',
                techniques: ['Competency framework design', 'Academy structure', 'Integration psychology'],
                outcome: 'Board approved all three recommendations with commendation.',
                tags: ['c5', 'c4', 'c1']
            },
            {
                id: 'p2-ph3',
                title: 'Phase 3: Business Case',
                description: '£1.5m budget secured with detailed financial and commercial cases.',
                narrative: 'While writing the business case, I had already drafted the new competency framework which generated very positive feedback. This enabled quick prioritisation for a more detailed business case. The business case contained: Strategic context - the case for change. Economic analysis - ROI, based on investment appraisal. Commercial approach - procurement strategies (much more detailed than APC). Financial case - affordability within agreed timeframe, much bigger area given the £1.5m budget. Management approach - governance, roles and responsibilities.',
                techniques: ['£1.5m budget management', 'Earned value analysis', 'Commercial procurement'],
                outcome: '£1.5 million budget secured.',
                tags: ['c1', 'c11']
            },
            {
                id: 'p2-ph4',
                title: 'Phase 4: Project Management Plan',
                description: 'Detailed procurement structure reassuring CFO and procurement lead.',
                narrative: 'The PMP was written in the same format as the APC programme, though it contained more on procurement and budgeting. I even provided an earned value piece. Main areas: Benefits – why specific programmes should be created and value to the wider business, connected to retention especially within engineering. Scope – WBS, training courses, how most will be procured (high level), competency framework build, PM courses. Time – Gantt chart. Resources – RACI. Delivery logistics – required much more travel due to different capabilities. Management – communications, risks, issues, change control, quality management. Plus detailed procurement structure that reassured the CFO and procurement lead I was spending strategically and in alignment with the business case.',
                techniques: ['Earned value management', 'Procurement planning', 'CFO stakeholder management'],
                tags: ['c2', 'c13']
            },
            {
                id: 'p2-ph5',
                title: 'Phase 5: Deployment',
                description: 'Competency framework completed. New coordinator hired. Engineering training outsourced.',
                narrative: 'At this point the competency framework was completed. This enabled me to go straight into collaborating with various SMEs, leads and directors to build and roll out training courses. This phase also enabled me to build a structure that emulated the APC programme prep for final assessments: Documents checking, Presentation training, Pre-qualification interview with relevant institution fellows (CIWEM, ICE, IMechE, IchemE), and mock interviews for those who pass. Operational changes: While this created more work for coordinators, I was able to employ a new coordinator (built into the budget). The board saw this as a great investment. Procurement approach: Given the number of training courses needed, the board agreed with my recommendation on outsourcing much of the engineering training. I wanted the legacy Hyder directors to appreciate the investment in their people\'s professional development. This was highly appreciated and helped new directors feel they belong with us.',
                techniques: ['Competency framework deployment', 'Institution partnerships (ICE, IMechE, CIWEM, IchemE)', 'Strategic outsourcing'],
                outcome: 'Full competency framework operational. Engineering training outsourced to specialists.',
                tags: ['c9', 'c2', 'c4']
            },
            {
                id: 'p2-ph6',
                title: 'Phase 6: Transition & Benefits Realisation',
                description: 'Hybrid/soft launch approach. High appreciation from capability leads.',
                narrative: 'This phase was followed in a "hybrid" fashion as I wanted to make a start deploying training courses and the new structure helping engineers and other capabilities prepare for chartership asap. Some call it a soft launch. In terms of adoption and benefits realisation, there were no issues. Just huge appreciation from the capability leads and candidates. Received very positive feedback.',
                techniques: ['Soft launch methodology', 'Hybrid transition'],
                outcome: 'High appreciation and positive feedback from all capability leads.',
                tags: ['c6', 'c7']
            }
        ],
        anecdotes: [
            {
                title: 'Legacy Hyder Integration',
                narrative: 'With the merge with Hyder, I needed to consider that approximately 50% of the organisation would be taking a different route towards chartership. The RICS is more built environment focused, whereas the PMs and Engineers from legacy Hyder are more infrastructure-focused – meaning the commercial interest shifts from RICS to institutions like APM, ICE, IMechE, CIWEM, IchemE. I created a high-level matrix based on my understanding and presented to the board. I persuaded the board to allow me to create something specific as there was a general perception that Arcadis was not prioritising our new colleagues. I highlighted the importance of making them feel they belong with us and they were truly heard. This approach received very positive feedback and my leadership thinking was commended.'
            }
        ]
    },
    {
        id: 'p3',
        title: 'Graduate Programme',
        company: 'Arcadis',
        context: 'Urgent rebuild of a 3-day induction following poor feedback with a 1-week turnaround.',
        initialState: 'When 90% of the programmes that comprised of the technical curriculum were completed, I was asked by the Talent Lead to rebuild the Graduate Training Programme. This was due to the recent three-day Graduate Induction resulting in many complaints from the graduates. Given my already positive relationship with most of the Graduates owing to the redesign of the APC Programme, I felt that I had an upper hand with regards to trust.',
        methodology: 'I agreed on two conditions: 1) I was given full autonomy (with the caveat that my approach and design align to the needs of the capability leads), and 2) I work with a colleague who is an expert at opening and closing (as this was a weakness of mine). Given the requirement of incredibly quick turnaround, my colleague and I got to work straight away. Before any work started, I highlighted various risks and provided risk analysis to my Talent Lead. Given the obvious risks due to prioritising time, she understood how this might pull on cost, scope, and quality. She agreed to an Agile/iterative approach to the build.',
        keyMetrics: {
            before: 'Many complaints, poor engagement',
            after: 'Standing ovation, course requested for Seniors',
            improvement: '1 week turnaround under emergency conditions'
        },
        phases: [
            {
                id: 'p3-ph1',
                title: 'Phase 1: Rapid Root Cause Analysis',
                description: 'Very quick analysis and high-level root cause identification.',
                narrative: 'Whilst the assessment criteria was seen to be quite weak, I agreed and took the following approach: Analyse the data that we already have and come to high-level inferences. Some were: The materials being weak. Lessons chaotic with no firm learning outcomes. Not engaging. Not challenging enough. After discussion with the Talent Lead, I recommended continuing using the current assessment criteria to demonstrate improvement. Once improvement was demonstrated, I would write a more targeted and deeper set of assessment criteria to ensure we are providing the wider business with what they require. Talent Lead and board agreed.',
                techniques: ['Rapid data analysis', 'High-level inference', 'Assessment criteria review'],
                challenge: 'Only 1 week to completely redesign and deliver the programme.',
                tags: ['c5', 'c12', 'c8']
            },
            {
                id: 'p3-ph2',
                title: 'Phase 2: Course Design',
                description: 'Developed governing principles: Engaging, Challenging, Transparent, Aligned.',
                narrative: 'Given the quick analysis, I developed a set of governing principles to follow while building the new three-day induction. These principles were: Engaging. Challenging. Transparent with stated learning objectives. Aligned to the vision and strategy of the organisation. Aligned to what the capability leads require.',
                techniques: ['Design principles methodology', 'Capability alignment'],
                tags: ['c4', 'c1', 'c3']
            },
            {
                id: 'p3-ph3',
                title: 'Phase 3: Deliver Grad Induction',
                description: '3-day structured programme with CEO challenge, receiving standing ovation.',
                narrative: 'From a structural perspective, I designed: Day 1 – Introductions, vision and strategy, very high-level three-year structure. Three-day agenda, physical activity based on project management principles. Presentation based on career paths and development. Day 2 – Half day with a service provider for fun activities with a firm lesson on collaboration and project management. Second, I delivered consultancy training to the grads. Despite expecting this to be boring, most grads preferred my course (my personal design). Day 3 – Review of days one and two, facilitated by myself to help the audience understand why I designed it this way. This discussion went a long way and really engaged the audience. My colleague Tom closed the three-day induction, resulting in a standing ovation.',
                techniques: ['Experiential learning', 'Consultancy skills training', 'CEO challenge', 'Peer facilitation'],
                outcome: 'Standing ovation. Talent Lead asked us to deliver all future grad inductions.',
                tags: ['c4', 'c5', 'c11']
            },
            {
                id: 'p3-ceo-challenge',
                title: 'The CEO Challenge',
                description: 'Client brief presented to grads with CEO lunch prize.',
                narrative: 'Before the induction: I came up with the idea to ask one capability lead to come up with a challenge they are experiencing from a strategic perspective. I turned this into a client brief and presented this to the grads. Put them into 10 groups of five and advised that they now have three months to leverage on what I taught them (management consultancy) and use these skills to present their recommendations to the CEO. The winners get to have lunch with the CEO. This challenge was welcomed by the grads.',
                techniques: ['Real-world challenge', 'Management consultancy application', 'Executive exposure'],
                outcome: 'Graduates highly engaged with the competitive challenge format.',
                tags: ['c7', 'c11', 'c10']
            },
            {
                id: 'p3-ph4',
                title: 'Phase 4: Three-Year Programme Redesign',
                description: 'After longer analysis, found limited change needed. Focus on delivery excellence.',
                narrative: 'After slightly longer analysis, I found that this didn\'t need much change. Just change with who delivers, demonstrating more contextual understanding which comprises mainly of commercial, technical, and professional know-how and experience.',
                tags: ['c3', 'c4']
            },
            {
                id: 'p3-success',
                title: 'Consultancy Course Success',
                description: 'Personal course design highly rated, requested for Seniors organisation-wide.',
                narrative: 'Our Talent Lead was incredibly impressed and proud of us both (my colleague Tom and I). She asked if we could deliver all grad inductions for the foreseeable future. She was particularly impressed with the consultancy course I designed and asked if I could deliver it to seniors across the organisation. The consultancy course mainly consisted of: Data analytics, How to organise and manage data (MECE), Once organised present the bottom-up approach, The Pyramid Principle (top-down approach), Inductive, deductive, and abductive logical reasoning, How to build and maintain trust, The finished product (teams present to the audience).',
                techniques: ['MECE', 'Pyramid Principle', 'Logical reasoning frameworks', 'Trust building'],
                outcome: 'Consultancy course requested for Senior professionals across the organisation.',
                tags: ['c5', 'c4', 'c11']
            },
            {
                id: 'p3-transition',
                title: 'Transition to BAU',
                description: 'Minimal shock to organisation. Only real challenge was trainer confidence.',
                narrative: 'Due to the wider programme not requiring much change, I was able to roll out without too much "shock" to the organisation. The only major changes were focused primarily on the three-day grad induction. Other changes were based on monthly training sessions which only required some tweaking.',
                challenge: 'Two trainers who took over 50% of delivery received negative feedback. In my opinion, this was owing more to the change rather than incompetence.',
                tags: ['c6', 'c10']
            }
        ],
        anecdotes: [
            {
                title: 'Building Graduate Trust',
                narrative: 'Despite the very fast and Agile approach, this was a very challenging undertaking. After reflection, I put this to it being very difficult to impress graduates given their expectations when they complete university. After much study, I found that the new generations expect a very high standard. I treated the graduates like very smart and intelligent adults. Whilst they had high expectations of me, I had high expectations of them too. I felt that honesty, transparency, and creating a very safe environment went a very long way regarding trust. I tried hard not to pass judgement and listen to everything they had to say. If I didn\'t agree, I would question them with genuine inquiry utilising a coaching approach. I felt that I needed to be very careful about going into mentoring territory given the difficulty of building a graduate\'s trust. Around 90% need to see credibility, knowledge and experience before they trust you. Rank within the organisation didn\'t seem to mean much to them.'
            },
            {
                title: 'Trainer Coaching Recovery',
                narrative: 'Only real challenge was around two trainers who were required to take over some of the delivery. The two trainers in the team who I asked to take over 50% of the delivery unfortunately received negative feedback. In my opinion, this was owing more to the change rather than incompetence from the trainers. My approach was to coach the trainers and work incredibly hard to build back their confidence. I also discussed this with various graduates who had complained and asked if they could show some understanding and look at it from the trainer\'s perspective. I also tried to highlight how difficult the job is and if they could give the two trainers another opportunity to win back their trust. They agreed.'
            }
        ],
        evidenceLinks: ['Appendix 3 - Graduate Programme feedback']
    },
    {
        id: 'p4',
        title: 'Apprenticeship Programme',
        company: 'Arcadis',
        context: 'Managing 300 apprentices in partnership with a University, navigating contractual disputes and unrealistic timelines.',
        initialState: 'With the apprenticeship programme, I simply copied as much as I could from the three-day graduate induction programme. Given that Arcadis were partnering with a university to get the Apprentices through their Level 6 degree and then through to chartership (Level 7) within five years, I was quite shocked that the organisation saw this as realistic. My Line Manager who wanted to hand over the apprenticeship programme to me was not happy with the university and asked me to end the contract and look for another university to partner with.',
        methodology: 'From a negotiation perspective, I had planned my BATNA (best alternative to a negotiated agreement) and ZOPA (zone of potential agreement). I ensured there was no risk to the organisation as I had a contingency planned – I had already built the ChPP (Chartered Project Professional – APM) which was ready to take on the apprentices if negotiations broke down.',
        keyMetrics: {
            before: 'Failing university partnership, 5-year unrealistic timeline',
            after: 'Partnership rebuilt, 7-year realistic timeline',
            improvement: 'Invited to Westminster by Earl of Lytton'
        },
        phases: [
            {
                id: 'p4-discovery',
                title: 'Discovery Phase',
                description: 'Identified two main issues to solve: Line Manager engagement and unrealistic timeline.',
                narrative: 'As a result of my discovery phase, there were two main issues to solve: The issue around Line Manager engagement for the 300 apprentices, and the five-year structure that aimed to have the apprentices chartered which was unrealistic given how consultancy organisations work and how resourcing works.',
                techniques: ['Root cause analysis', 'Stakeholder pain point mapping'],
                tags: ['c3', 'c5']
            },
            {
                id: 'p4-ch1',
                title: 'Line Manager Negotiation',
                description: 'Used BATNA/ZOPA to negotiate compromise after University ultimatum.',
                narrative: 'The relationship manager representing the university gave me an ultimatum and advised that if 100% of the apprenticeship Line Managers do not sign the apprentice\'s coaching reviews within a week, they will withdraw all candidates. Given the behaviours reported to me via my Line Manager (who previously ran the programme), I wasn\'t surprised by the rather aggressive approach. I apologised and explained that our Line Managers are working approximately 60-70 hours per week and are incredibly stressed. Whilst this is not an excuse, I asked for understanding and a compromise. I offered a compromise of getting 70% of manager signatures within a week and then 100% within a month. The relationship manager did not accept and advised he would withdraw the apprentices. The capability lead was in the room when we were negotiating and entrusted me to push back as I had already advised him of their approach. I advised that they were likely to bluff and I would call it. I advised the relationship manager that we (Arcadis) are a people-first organisation, and I wasn\'t willing to put our Line Manager\'s psychological safety at risk. If they will not compromise, then to withdraw the candidates. The relationship manager agreed to the compromise.',
                techniques: ['BATNA', 'ZOPA', 'Psychological safety advocacy', 'Strategic bluff calling'],
                outcome: 'University agreed to compromise: 70% in 1 week, 100% in 1 month.',
                tags: ['c7', 'c12', 'c11']
            },
            {
                id: 'p4-ch2',
                title: 'Chartership Timeline Realignment',
                description: 'Presented commercial reality to realign from 5-year ideology to 7-year practicality.',
                narrative: 'During negotiations, I presented the likely timeframe that the grads follow when preparing for chartership. I had a concern that the university didn\'t quite understand how consultancy organisations work and how resourcing works. Given my experience working with leaders to ensure that as many grads and apprentices are given the opportunity to do "Level 7 work", I needed to advise of the commercial challenge. Essentially, I needed to provide a distinction between ideology and reality. Needless to say, it didn\'t land too well, though I had full support from my capability lead (the programme sponsor). The university quickly agreed to change structure from five to seven years.',
                techniques: ['Commercial reality framing', 'Expectation management', 'Sponsor alignment'],
                outcome: 'University agreed to realistic 7-year timeline.',
                tags: ['c1', 'c6', 'c11']
            },
            {
                id: 'p4-ch3',
                title: 'Relationship Rebuilding',
                description: 'Re-built trust through transparent, honest approach over six months.',
                narrative: 'Throughout my discussions with the relationship manager, he soon realised that I was working hard for the apprentices and line managers across Arcadis. I believe this led to respect and trust given my transparent and honest approach. I also felt the need to reassure him that I was committed to rebuilding the relationship for both Arcadis and the university.',
                techniques: ['Trust rebuilding', 'Transparent communication', 'Partnership commitment'],
                tags: ['c7', 'c10']
            },
            {
                id: 'p4-outcome',
                title: 'Westminster Recognition',
                description: 'Invited to lunch with Earl of Lytton at Westminster.',
                narrative: 'Approximately six months later, I won the respect of the relationship manager and was invited to Westminster for lunch with the then Earl of Lytton.',
                outcome: 'Formal recognition through Westminster invitation from Earl of Lytton.',
                tags: ['c7', 'c11']
            }
        ],
        anecdotes: [
            {
                title: 'The BATNA Strategy',
                narrative: 'From a negotiation perspective, I had planned my BATNA (best alternative to a negotiated agreement) and ZOPA (zone of potential agreement). With this in mind, I already built the ChPP (Chartered Project Professional - APM) which was ready to take on the apprentices if negotiations broke down. Note: I ensured there was no risk to the organisation as I had a contingency planned.'
            },
            {
                title: 'Apprentice Performance Observation',
                narrative: 'After the fifth time delivering both grad and apprenticeship three-day inductions, I realised that the apprentices seemed to perform better with the second day event essentially being designed to have them fail, learn to deal with failure and collaborate with potential competitors (as a lesson learned). With the likelihood of failure in mind, most of the apprenticeship groups succeeded. This led to much debate and discussion amongst my peers and sponsors.'
            }
        ],
        evidenceLinks: ['Appendix 4 - Apprenticeship Programme evidence', 'Westminster invitation']
    },
    {
        id: 'p5',
        title: 'Executive & Skills Coaching',
        company: 'QA/Northumbria University & Arcadis',
        context: 'Tutored ~200 candidates (Level 6/7) over 4 years at QA/Northumbria University, and coached Directors/Associates at Arcadis.',
        initialState: 'Given my experience in consulting, project and programme management, I thought I would spend some time tutoring and coaching candidates from various industries achieve their Level 6 degree. This was an amazing experience, and I feel honoured to have been part of their journey.',
        methodology: 'For executive coaching, the approach was through: Discovery phase, Mind mapping, Identifying their coalition of support across the organisation, Identifying their market strengths, and if required, building bespoke training.',
        keyMetrics: {
            before: 'Candidates seeking Level 6/7 qualification',
            after: '90% distinction rate at Level 7',
            improvement: 'Director feedback: "Changed his life"'
        },
        phases: [
            {
                id: 'p5-skills',
                title: 'Skills Coaching',
                description: 'Coached 200 candidates at QA (Northumbria University) across 8 organisation types.',
                narrative: 'Within four years, I coached approximately 200 candidates. Given my experience, most of my cohort were managers and leaders within various organisational types. Despite the above, approximately 20% of my learners were at the starting point of their careers. Through my tenure at QA (Northumbria University) I found myself facilitating level 7 discussions with most of my learners as they advised they wanted to score a distinction. This meant that they needed to demonstrate level 7 competencies across the Project Management Standards. As a result, approximately 90% of my learners scored a distinction. In addition, my learners\' Line Managers were very impressed with my approach.',
                techniques: ['Level 7 competency development', 'Project Management Standards', 'Distinction-level coaching'],
                outcome: '90% of learners scored distinctions. Line Managers impressed with approach.',
                tags: ['c4', 'c10', 'c5']
            },
            {
                id: 'p5-diversity',
                title: 'Cross-Industry Exposure',
                description: 'Coached across NHS, MOD, Home Office, Councils, Consultancies, Retail.',
                narrative: 'In terms of how I developed in this role, it helped me understand much more about how different organisations operate from a culture, climate, and best practice perspective. Much of these organisations were: NHS, Borough Councils, MOD, Home Office, Management and asset consultancy organisations, Severn Trent, Retail organisations, Other professional services.',
                techniques: ['Cross-industry adaptation', 'Culture mapping', 'Best practice synthesis'],
                tags: ['c3', 'c5']
            },
            {
                id: 'p5-exec',
                title: 'Executive Coaching',
                description: 'Coached Directors/Associates using structured 5-step methodology.',
                narrative: 'During my time at Arcadis, I coached many directors and associates, helping them discover their true potential and aligning to the vision and strategy of Arcadis. The approach was through: Discovery phase, Mind mapping, Identifying their coalition of support across the organisation, Identifying their market strengths, If required, build bespoke training.',
                techniques: ['Discovery coaching', 'Mind mapping', 'Coalition building', 'Market strength identification', 'Bespoke training development'],
                tags: ['c10', 'c5', 'c7']
            },
            {
                id: 'p5-feedback',
                title: 'Impact & Recognition',
                description: 'Received transformational feedback from coached executives.',
                narrative: 'I received very positive feedback with one director advising that I "changed his life". I was honoured and surprised to receive such positive feedback from learners.',
                outcome: 'Director feedback: "Changed his life".',
                tags: ['c10']
            }
        ],
        evidenceLinks: ['Appendix 1 - Feedback from learners and colleagues', 'LinkedIn testimonials']
    }
];

// Evidence Appendices structure
export interface EvidenceAppendix {
    id: string;
    title: string;
    description: string;
    linkedProgramme: string;
    hasLinkedIn: boolean;
}

export const EVIDENCE_APPENDICES: EvidenceAppendix[] = [
    {
        id: 'appendix-1',
        title: 'Feedback from Learners & Colleagues',
        description: 'Screenshots and testimonials from coached candidates across various industries.',
        linkedProgramme: 'p5',
        hasLinkedIn: true
    },
    {
        id: 'appendix-2',
        title: 'APC Programme Feedback',
        description: 'Feedback connected to APC Programme including COO Peter Madden testimonial.',
        linkedProgramme: 'p1',
        hasLinkedIn: true
    },
    {
        id: 'appendix-3',
        title: 'Graduate Programme Feedback',
        description: 'Extensive feedback and testimonials from Graduate Programme participants.',
        linkedProgramme: 'p3',
        hasLinkedIn: false
    },
    {
        id: 'appendix-4',
        title: 'Apprenticeship Programme Evidence',
        description: 'Evidence including Westminster invitation from Earl of Lytton.',
        linkedProgramme: 'p4',
        hasLinkedIn: false
    }
];

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    // relation: string; REMOVED
    date: string;
    content: string;
    // linkedInRequest: boolean; REMOVED
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Peter Madden',
        role: 'Executive Global Program Director',
        company: 'Arcadis',
        date: 'December 2025',
        content: "Robert's consultative approach to rebuilding our professional qualifications programme was exceptional. He supported our people on their journey to chartership in an empathetic and collaborative way."
    }
];
