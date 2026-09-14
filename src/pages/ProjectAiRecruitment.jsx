import { useEffect, useRef, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ProjectSectionNav from '../components/ProjectSectionNav'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/siteFrame.css'
import heroSift from '../assets/images/ai-recruitment/hero-sift.png'
import personaMeeraPhoto from '../assets/images/ai-recruitment/persona-meera-photo.png'
import personaSmithaPhoto from '../assets/images/ai-recruitment/persona-smitha-photo.png'
import userFlowDiagram from '../assets/images/ai-recruitment/user-flow-diagram.png'
import iaDiagram from '../assets/images/ai-recruitment/ia-diagram.png'
import siftFlowDiagram from '../assets/images/ai-recruitment/sift-flow-diagram.png'
import traditionalFlowDiagram from '../assets/images/ai-recruitment/traditional-flow-diagram.png'
import wireDashboard from '../assets/images/ai-recruitment/wireframe-dashboard.png'
import wireScreening from '../assets/images/ai-recruitment/wireframe-screening-queue.png'
import wireCandidate from '../assets/images/ai-recruitment/wireframe-candidate-evaluation.png'
import wireCommunication from '../assets/images/ai-recruitment/wireframe-communication.png'
import wireGovernance from '../assets/images/ai-recruitment/wireframe-governance.png'
import hifiDashboard from '../assets/images/ai-recruitment/hifi-dashboard.png'
import cropPriorityQueue from '../assets/images/ai-recruitment/crop-priority-queue.png'
import cropParityMonitor from '../assets/images/ai-recruitment/crop-parity-monitor.png'
import hifiScreening from '../assets/images/ai-recruitment/hifi-screening-queue.png'
import cropQueueTabs from '../assets/images/ai-recruitment/crop-queue-tabs.png'
import cropMatchConfidence from '../assets/images/ai-recruitment/crop-match-confidence.png'
import cropBulkActions from '../assets/images/ai-recruitment/crop-bulk-actions.png'
import hifiCandidate from '../assets/images/ai-recruitment/hifi-candidate-evaluation.png'
import cropFactorBreakdown from '../assets/images/ai-recruitment/crop-factor-breakdown.png'
import hifiCommunication from '../assets/images/ai-recruitment/hifi-communication-modal.png'
import hifiCommunicationCard from '../assets/images/ai-recruitment/hifi-communication-card.png'
import hifiGovernance from '../assets/images/ai-recruitment/hifi-governance.png'
import cropParityMatrix from '../assets/images/ai-recruitment/crop-parity-matrix.png'
import cropOverrideDist from '../assets/images/ai-recruitment/crop-override-distribution.png'
import './ProjectAiRecruitment.css'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'business-context', label: 'Business context' },
  { id: 'personas', label: 'Personas' },
  { id: 'human-factors', label: 'Human factors' },
  { id: 'ai-capability', label: 'AI capability' },
  { id: 'scope', label: 'Scope' },
  { id: 'ux-principles', label: 'UX principles' },
  { id: 'comparison', label: 'Comparison' },
  { id: 'process-flow', label: 'Process flow' },
  { id: 'user-flow', label: 'User flow' },
  { id: 'ia', label: 'Architecture' },
  { id: 'wireframes', label: 'Wireframes' },
  { id: 'screens', label: 'High-fidelity' },
  { id: 'ai-model', label: 'AI model' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'reflection', label: 'Reflection' },
]

function ProjectAiRecruitment() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const [overHero, setOverHero] = useState(true)
  const [overHeroAtBottom, setOverHeroAtBottom] = useState(true)
  useScrollReveal(containerRef)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return undefined
    const handleScroll = () => {
      const heroBottom = el.getBoundingClientRect().bottom
      setOverHero(heroBottom > 88)
      setOverHeroAtBottom(heroBottom > window.innerHeight - 90)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="pr-page" ref={containerRef}>
      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="Portfolio" onDark={overHero} />
      </div>
      <ProjectSectionNav sections={SECTIONS} />

      <header className="pr-hero" ref={heroRef} style={{ backgroundImage: `url(${heroSift})` }} />

      <main>
        <section id="overview" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">Overview</h2>
          <dl className="pr-overview__facts">
            <dt>Role</dt>
            <dd>UX Research | UX Design | AI Interaction | Product design</dd>
            <dt>Core idea</dt>
            <dd>Let AI handle the volume, so recruiters can focus on the decisions that matter.</dd>
            <dt>Timeline</dt>
            <dd>72-hour design challenge · September 2026</dd>
            <dt>Focus</dt>
            <dd>AI assisted recruitment</dd>
            <dt>Problem scape</dt>
            <dd>
              High-volume recruitment sits at the intersection of scale, speed, judgment, and trust. Recruiters
              are expected to move through <strong>large volumes of applications</strong> while consistently
              evaluating qualifications, conducting pre-screening, identifying relevant candidates, and
              communicating next steps. As volume increases, repetitive screening work consumes recruiter
              attention and introduces decision fatigue, inconsistent evaluation, delayed responses, and the risk
              of overlooking qualified candidates.
              <br />
              <br />
              <strong>Introducing AI can reduce this operational burden, but it also creates a new layer of
              complexity</strong>
              <ul>
                <li>How much should the system decide?</li>
                <li>When should a recruiter intervene?</li>
                <li>How can a recruiter trust a recommendation without blindly accepting it?</li>
              </ul>
              The problem scape therefore extends beyond automating screening.
              <br />
              <br />
              <strong>
                It is about designing a human&ndash;AI decision system where AI can process volume and surface
                evidence, while recruiters retain visibility, control, accountability, and the ability to
                challenge the system.
              </strong>
            </dd>
          </dl>
        </section>

        <section id="business-context" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">Overview</h2>
          <h3 className="pr-italic-head">Business Context</h3>
          <p>
            High-volume, low-complexity roles (such as support and call center positions) represent the ideal use
            case for AI-assisted screening: massive applicant volume, highly structured criteria, and strict
            limits on per-candidate cost. The core business risk is not whether to deploy AI, but whether
            recruiters will trust its decisions, candidates will feel respected by the process, and legal teams
            can defend it during an equity or regulatory audit.
          </p>

          <h3 className="pr-italic-head">Opportunity: Existing market solutions fail to combine</h3>
          <ul>
            <li>A legible, factor-by-factor explanation of every AI recommendation.</li>
            <li>A default-on override flow with mandatory reasoning capture.</li>
            <li>A live fairness monitor displayed to recruiters before demographic bias turns into legal exposure.</li>
          </ul>

          <h3 className="pr-italic-head">Competitive Matrix</h3>
          <div className="pr-table-scroll">
            <table className="pr-table pr-table--matrix">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Paradox</th>
                  <th>HireVue</th>
                  <th>Eightfold.ai</th>
                  <th>SeekOut</th>
                  <th>XOR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-table__rowhead">Core Mechanism</td>
                  <td>Conversational chatbot</td>
                  <td>Video interview + AI scoring</td>
                  <td>Talent intelligence platform</td>
                  <td>Sourcing & enrichment</td>
                  <td>Recruiting chatbot</td>
                </tr>
                <tr>
                  <td className="pr-table__rowhead">Screening Approach</td>
                  <td>Scheduling, FAQ, and basic qualification</td>
                  <td>Structured video Q&amp;A scored by AI models</td>
                  <td>Skill-graph matching against job roles</td>
                  <td>Candidate discovery and sourcing</td>
                  <td>WhatsApp / SMS pre-screening interactions</td>
                </tr>
                <tr>
                  <td className="pr-table__rowhead">Transparency Level</td>
                  <td>Low: Black-box automated routing</td>
                  <td>Historically low: Criticized for opacity</td>
                  <td>Model-level: Lacks candidate-level clarity</td>
                  <td>N/A</td>
                  <td>Low: Raw transcript logging</td>
                </tr>
                <tr>
                  <td className="pr-table__rowhead">Human Oversight Model</td>
                  <td>Sees final outcomes, not model reasoning</td>
                  <td>Reviews overall score with limited drilldown</td>
                  <td>Strong recruiter-level pipelines and dashboards</td>
                  <td>N/A</td>
                  <td>Manual and unassisted transcript review</td>
                </tr>
                <tr>
                  <td className="pr-table__rowhead">Gap &amp; Market Opportunity</td>
                  <td>No visible &ldquo;why&rdquo; provided behind pass/fail decisions.</td>
                  <td>Significant trust deficit driven by past bias controversies.</td>
                  <td>Built for pipeline-wide talent discovery, not per-candidate screening.</td>
                  <td>Sourcing platform only; not a direct competitor for screening workflows.</td>
                  <td>Lacks a structured confidence rating or factor-based scoring layer.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="personas" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">User Personas</h2>
          <div className="pr-personas">
            <article className="pr-persona">
              <div className="pr-persona__head">
                <img className="pr-persona__photo" src={personaMeeraPhoto} alt="Meera, Talent Acquisition Specialist" />
                <div>
                  <p className="pr-persona__tag">Primary Persona</p>
                  <h4 className="pr-persona__name">Meera</h4>
                  <p className="pr-persona__role">Talent Acquisition Specialist</p>
                </div>
              </div>
              <div className="pr-persona__grid">
                <div>
                  <p className="pr-persona__label">Operational Context</p>
                  <p>
                    Manages 3&ndash;4 open requisitions simultaneously, evaluating 25+ applications per requisition
                    daily during peak hiring. Evaluated on time-to-fill and quality-of-hire.
                  </p>
                </div>
                <div>
                  <p className="pr-persona__label">Job To Be Done (JTBD)</p>
                  <p className="pr-persona__italic">
                    &ldquo;When a new batch of applicants arrives, I want to know within seconds who&rsquo;s worth
                    my time, so I can spend my day interviewing qualified people instead of scanning
                    resumes.&rdquo;
                  </p>
                </div>
                <div>
                  <p className="pr-persona__label">Fears &amp; Friction</p>
                  <p>
                    Fear of being held accountable for an AI error, losing candidate intuition gained from live
                    conversations, and facing compliance exposure from discriminatory screening.
                  </p>
                </div>
                <div>
                  <p className="pr-persona__label">Trust Condition</p>
                  <p className="pr-persona__italic">
                    Will gladly delegate initial candidate processing, but will never delegate the final decision.
                  </p>
                </div>
              </div>
            </article>

            <article className="pr-persona">
              <div className="pr-persona__head">
                <img className="pr-persona__photo" src={personaSmithaPhoto} alt="Smitha, the candidate" />
                <div>
                  <p className="pr-persona__tag">Secondary Persona</p>
                  <h4 className="pr-persona__name">Smitha</h4>
                  <p className="pr-persona__role">The Candidate</p>
                </div>
              </div>
              <div className="pr-persona__grid">
                <div>
                  <p className="pr-persona__label">Operational Context</p>
                  <p>
                    High-volume hourly and entry-level job seekers expect automation but are sensitive to feeling
                    processed rather than evaluated.
                  </p>
                </div>
                <div>
                  <p className="pr-persona__label">Perceptions of SIFT</p>
                  <p className="pr-persona__italic">
                    The rapid response time, clear progress feedback, and lack of &ldquo;application black
                    holes.&rdquo; She values that pre-screening happens immediately via chat rather than waiting
                    weeks for a human to scan a resume.
                  </p>
                </div>
                <div>
                  <p className="pr-persona__label">Fears &amp; Friction</p>
                  <p>
                    Silence and unexplained rejections (the two largest candidate experience failures identified
                    by Talent Board / CandE benchmarks).
                  </p>
                </div>
                <div>
                  <p className="pr-persona__label">Design Imperatives</p>
                  <p className="pr-persona__italic">
                    Every touchpoint must disclose AI involvement, deliver rapid responses, and provide a clear,
                    deterministic next step.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="human-factors" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">Human Factors &amp; UX Constraints</h2>
          <ul>
            <li>
              <strong>Automation Bias Mitigation:</strong> Displays model uncertainty and confidence levels
              alongside scores to prevent recruiters from over-trusting AI recommendations.
            </li>
            <li>
              <strong>Cognitive Load Management (Miller&rsquo;s Law):</strong> Limits scoring breakdowns to a
              maximum of 4&ndash;5 core factor chunks so recruiters reviewing 25+ candidates can process data
              without working-memory overload.
            </li>
            <li>
              <strong>Vigilance Decay Countermeasures:</strong> Introduces intentional UX friction (a typed
              override rationale) for bulk actions or low-confidence overrides to prevent rubber-stamping during
              late-day fatigue.
            </li>
            <li>
              <strong>Calibrated Trust Principles:</strong> Calibrates visually presented trust markers directly
              against real AI accuracy rather than aesthetic UI polish.
            </li>
          </ul>

          <h3 className="pr-italic-head">How Might We (HMW) Framework</h3>
          <ul>
            <li>HMW allow the AI to absorb repetitive screening tasks without recruiters losing their felt sense of personal judgment and accountability?</li>
            <li>HMW make the underlying reasoning of an AI recommendation as fast to scan as its numerical match score?</li>
            <li>HMW design override interactions so they are effortless when justified, yet impossible to trigger accidentally?</li>
            <li>HMW surface real-time demographic bias risks to recruiters before systemic patterns turn into legal or ethical liabilities?</li>
            <li>HMW keep automated candidate communications fast and consistent without making them feel robotic, cold, or dismissive?</li>
          </ul>
        </section>

        <section id="ai-capability" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">AI Capability &amp; Responsibility Mapping</h2>
          <div className="pr-table-scroll">
            <table className="pr-table pr-table--dark">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>AI Capability Today</th>
                  <th>Model Confidence</th>
                  <th>Required Human Oversight Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Parse Resume / Application Data</td>
                  <td>High (Mature NLP / Extraction)</td>
                  <td>High</td>
                  <td>Spot-check verification only.</td>
                </tr>
                <tr>
                  <td>Check Hard Qualifications</td>
                  <td>High (Rules Engine + LLM Extraction)</td>
                  <td>High</td>
                  <td>Exception review only for edge cases.</td>
                </tr>
                <tr>
                  <td>Conduct Pre-Screening (Chat/Voice)</td>
                  <td>Medium&ndash;High</td>
                  <td>Medium</td>
                  <td>Review flagged or ambiguous conversation transcripts.</td>
                </tr>
                <tr>
                  <td>Score &amp; Rank Candidates</td>
                  <td>Medium (Requires Domain Calibration)</td>
                  <td>Medium</td>
                  <td>Always reviewable; never auto-finalized.</td>
                </tr>
                <tr>
                  <td>Judge Soft Signals &amp; Cultural Fit</td>
                  <td>Low (High Risk of Bias)</td>
                  <td>Low</td>
                  <td>Always routed to a human recruiter.</td>
                </tr>
                <tr>
                  <td>Final Advance / Reject Decision</td>
                  <td>Not Delegated by Design</td>
                  <td>N/A</td>
                  <td>Always executed by a human.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pr-pullquote">
            <p className="pr-pullquote__label">The Gap</p>
            <hr />
            <blockquote>
              &ldquo;Existing high-volume screening tools force a trade-off between black-box automation and slow
              manual reviews because no market solution combines factor-level AI explainability, mandatory human
              override accountability, and real-time demographic parity safeguards in a single workflow.&rdquo;
            </blockquote>
            <hr />
          </div>

          <div className="pr-pullquote">
            <p className="pr-pullquote__label">How Might We</p>
            <hr />
            <blockquote>
              &ldquo;How might we design an exception-first screening interface that leverages AI to eliminate
              high-volume candidate bottlenecks while enforcing explainable reasoning, recruiter accountability,
              and real-time compliance oversight?&rdquo;
            </blockquote>
            <hr />
          </div>
        </section>

        <section id="scope" className="pr-section pr-reveal">
          <div className="pr-panel">
            <h2 className="pr-eyebrow">Assumptions &amp; Constraints</h2>
            <div className="pr-three-col">
              <div>
                <h4 className="pr-panel__head">Technical &amp; Systems</h4>
                <p className="pr-label">Assumptions</p>
                <ul>
                  <li>Integrated via API on top of an existing ATS (system of record).</li>
                  <li>Job requisitions contain codifiable, structured criteria (certs, availability, experience).</li>
                  <li>Candidates apply via digital channels supporting chat/form pre-screening.</li>
                </ul>
                <p className="pr-label">Constraints</p>
                <ul>
                  <li>Dependent on underlying ATS API reliability for data synchronization.</li>
                  <li>Conversational screening quality relies on LLM/ASR capability with accented and non-native English speech.</li>
                </ul>
              </div>
              <div>
                <h4 className="pr-panel__head">Legal &amp; Regulatory</h4>
                <p className="pr-label">Assumptions</p>
                <ul>
                  <li>Legal teams have pre-approved candidate data categories used for AI scoring.</li>
                </ul>
                <p className="pr-label">Constraints</p>
                <ul>
                  <li>Must comply with EEOC disparate-impact rules, GDPR candidate rights, and NYC Local Law 144 mandates.</li>
                  <li>Full audit trails and bias tracking must be built into the core UX, not added as a post-hoc bolt-on.</li>
                </ul>
              </div>
              <div>
                <h4 className="pr-panel__head">Organizational &amp; Behavioral</h4>
                <p className="pr-label">Assumptions</p>
                <ul>
                  <li>Recruiters will adopt AI tools if framed as decision-support rather than decision-makers.</li>
                </ul>
                <p className="pr-label">Constraints</p>
                <ul>
                  <li>Recruiters present the primary adoption risk; interfaces that feel like black-box replacements will be gamed or ignored.</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="pr-eyebrow pr-eyebrow--spaced">Scope Boundaries</h2>
          <div className="pr-two-col">
            <div>
              <h3 className="pr-italic-head">In scope</h3>
              <ul>
                <li>Application intake and structured parsing.</li>
                <li>AI qualification screening, factor scoring, and exception triage.</li>
                <li>Automated conversational pre-screening (chat/voice).</li>
                <li>Recruiter evaluation, override mechanics, and audit trail logging.</li>
                <li>Candidate-facing status communications and AI disclosures.</li>
              </ul>
            </div>
            <div>
              <h3 className="pr-italic-head">Out of Scope</h3>
              <ul>
                <li>Full ATS platform replacement.</li>
                <li>Sourcing or outbound candidate discovery.</li>
                <li>Post-screening interview logistics and panel scheduling.</li>
                <li>Offer management, background checks, and onboarding workflows.</li>
                <li>Hiring manager review portals.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ux-principles" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">Problem-to-Solution Mapping &amp; UX Principles</h2>
          <p className="pr-section__intro">
            Our design approach directly maps identified recruiter and candidate pain points to targeted UX
            solutions, backed by established psychological principles to ensure the platform remains intuitive,
            transparent, and accountable.
          </p>
          <div className="pr-table-scroll">
            <table className="pr-table pr-table--dark">
              <thead>
                <tr>
                  <th>Identified Pain Point</th>
                  <th>UX Design Solution</th>
                  <th>Psychological Principle / UX Law</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Opaque AI Scoring</td>
                  <td>Factor-level score breakdown exposed alongside match ratings by default.</td>
                  <td>Jakob&rsquo;s Law &amp; Explainability-by-Default</td>
                </tr>
                <tr>
                  <td>Cognitive Overload in Queues</td>
                  <td>Exception-first queue ordering prioritizes low-confidence and flagged cases.</td>
                  <td>Miller&rsquo;s Law &amp; Hick&rsquo;s Law</td>
                </tr>
                <tr>
                  <td>Automation Bias / Rubber-Stamping</td>
                  <td>Mandatory typed one-line rationale required for AI overrides and bulk actions.</td>
                  <td>Norman&rsquo;s Forcing Function</td>
                </tr>
                <tr>
                  <td>Distrust of Automated Processing</td>
                  <td>Persistent, real-time fairness and parity gauge visible across key screens.</td>
                  <td>Visibility of System Status</td>
                </tr>
                <tr>
                  <td>Candidate Ghosting &amp; Alienation</td>
                  <td>Context-aware messaging with clear AI disclosure and explicit next steps.</td>
                  <td>Peak-End Rule</td>
                </tr>
                <tr>
                  <td>Inconsistent Recruiter Workflows</td>
                  <td>Shared component library standardizing queues, profiles, and governance views.</td>
                  <td>Consistency &amp; Standards</td>
                </tr>
                <tr>
                  <td>Action Paralysis / Visual Clutter</td>
                  <td>Single high-emphasis primary action per candidate review panel.</td>
                  <td>Fitts&rsquo;s Law &amp; Aesthetic-Usability Effect</td>
                </tr>
                <tr>
                  <td>Perceived AI Latency</td>
                  <td>Incrementing progress indicators showing active parsing steps instead of generic spinners.</td>
                  <td>Doherty Threshold</td>
                </tr>
                <tr>
                  <td>Overlooked Critical Edge Cases</td>
                  <td>Dedicated, high-contrast visual accent treatment reserved exclusively for exception flags.</td>
                  <td>Von Restorff Effect</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="comparison" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">Operational Differences</h2>
          <p className="pr-section__intro">
            This comparative matrix highlights how SIFT transforms traditional, sequential resume screening into a
            high-throughput, exception-first workflow &mdash; replacing manual parsing, unchecked discretion, and
            delayed outreach with explainable AI scoring, mandatory override rationales, and real-time equity
            safeguards.
          </p>
          <div className="pr-table-scroll">
            <table className="pr-table pr-table--dark">
              <thead>
                <tr>
                  <th>Architectural Layer</th>
                  <th>Traditional High-Volume Screening</th>
                  <th>SIFT (AI Co-Pilot Workflow)</th>
                  <th>Primary Advantage / Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Queue Architecture</td>
                  <td>First In, First Out: sequential evaluation based on application timestamp.</td>
                  <td>Exception-First Queue: automated ranking that surfaces low-confidence scores, missing data, and bias flags to the top.</td>
                  <td>Eliminates late-day decision fatigue; prioritizes cases requiring human judgment.</td>
                </tr>
                <tr>
                  <td>Data Extraction</td>
                  <td>Manual Resume Parsing: recruiter reads PDFs line-by-line to extract qualifications.</td>
                  <td>Structured AI Parsing &amp; Pre-Screen: auto-parses applications and conducts conversational pre-screens (voice/chat).</td>
                  <td>Drops average evaluation time from 6.5 mins down to ~3.2 mins per candidate.</td>
                </tr>
                <tr>
                  <td>Candidate Scoring</td>
                  <td>Implicit Intuition: mental checklists applied subjectively across hundreds of profiles.</td>
                  <td>Explainable Factor Scorecard: 0&ndash;100 match score paired with 4&ndash;5 plain-language factor breakdowns (+/&ndash; points).</td>
                  <td>Provides transparent context behind every recommendation.</td>
                </tr>
                <tr>
                  <td>Human Oversight</td>
                  <td>Unchecked Discretion: status changes applied in ATS without documenting reasoning.</td>
                  <td>Forcing Function Engine: mandatory typed rationale required whenever a recruiter overrides an AI score.</td>
                  <td>Prevents rubber-stamping and creates an auditable record of human oversight.</td>
                </tr>
                <tr>
                  <td>Candidate Messaging</td>
                  <td>Batch Copy-Paste Templates: batch email sends leading to delays and candidate ghosting.</td>
                  <td>Human-Approved AI Drafts: context-aware draft generation with persistent, mandatory AI-disclosure notices.</td>
                  <td>Reduces time-to-first-response to under 24 hours.</td>
                </tr>
                <tr>
                  <td>Compliance &amp; Equity</td>
                  <td>Retrospective Auditing: compliance checks run quarterly or annually post-hire.</td>
                  <td>Real-Time Parity Monitoring: dashboard widget tracks the four-fifths rule (0.80&ndash;1.20 parity) continuously.</td>
                  <td>Maintains continuous compliance with EEOC and NYC Local Law 144 standards.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="process-flow" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">End-to-End Decision &amp; Process Flow</h2>
          <p className="pr-section__intro">
            This process map illustrates the architectural shift from traditional, linear FIFO screening &mdash;
            defined by manual scanning bottlenecks and undocumented discretion &mdash; to SIFT&rsquo;s automated
            pre-screening loop, which filters hard requirements, surfaces AI flags to an exception-first queue, and
            enforces auditable human oversight before candidate outreach.
          </p>

          <h3 className="pr-flow-title">Traditional User Flow</h3>
          <img className="pr-flow-image pr-flow-image--traditional" src={traditionalFlowDiagram} alt="Traditional user flow: candidate applies, FIFO queue, manual scanning, manual outreach, intuition-based decision, mass email send" />

          <h3 className="pr-flow-title">SIFT AI Co-Pilot Flow</h3>
          <img className="pr-flow-image pr-flow-image--sift" src={siftFlowDiagram} alt="SIFT AI co-pilot flow: candidate applies, AI parsing and pre-screening, exception-first queue, recruiter review, override or approve, audit log, human-approved draft sent" />
        </section>

        <section id="user-flow" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">User Flow</h2>
          <p className="pr-section__intro">
            This user flow maps the recruiter&rsquo;s interaction path through SIFT, detailing how candidates are
            filtered by hard requirements, routed via exception-first queuing based on AI confidence, and evaluated
            through human-in-the-loop decision checkpoints with mandatory audit logging and approved
            communications.
          </p>
          <img className="pr-user-flow-image" src={userFlowDiagram} alt="Detailed SIFT recruiter user flow diagram with decision points and end states" />
          <div className="pr-legend">
            <p className="pr-legend__title">Legend</p>
            <div className="pr-legend__items">
              <div className="pr-legend__item">
                <span className="pr-legend__swatch pr-legend__swatch--page" />
                Page
              </div>
              <div className="pr-legend__item">
                <span className="pr-legend__swatch pr-legend__swatch--interaction" />
                Interaction
              </div>
              <div className="pr-legend__item">
                <span className="pr-legend__swatch pr-legend__swatch--decision" />
                Decision
              </div>
              <div className="pr-legend__item">
                <span className="pr-legend__swatch pr-legend__swatch--startend" />
                Start/End
              </div>
              <div className="pr-legend__item">
                <span className="pr-legend__swatch pr-legend__swatch--outside" />
                Outside Platform
              </div>
            </div>
          </div>
        </section>

        <section id="ia" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">Information Architecture</h2>
          <p className="pr-section__intro">
            This Information Architecture outlines SIFT&rsquo;s platform structural hierarchy, mapping navigation
            from macro-level queue monitoring down to granular candidate evaluation tools, audit logs, and
            compliance dashboards to ensure a seamless, low-friction recruiter workflow.
          </p>
          <img className="pr-ia-image" src={iaDiagram} alt="SIFT information architecture tree: Header Navigation, Dashboard, Screening Queue, Candidate Workspace & Evaluation, Communication Centre, Admin Governance & Audit" />
        </section>

        <section id="wireframes" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">Initial Hand-Drawn Wireframes</h2>
          <p className="pr-section__intro">
            These early low-fidelity sketches capture the raw conceptual evolution of SIFT, detailing how initial
            layouts for exception queues, factor breakdowns, and compliance gauges were rapidly iterated on paper
            to validate core interaction patterns before moving to digital wireframes.
          </p>
          <div className="pr-wireframe-stack">
            <img src={wireDashboard} alt="Hand-drawn wireframe sketch of the recruiter dashboard" />
            <img src={wireScreening} alt="Hand-drawn wireframe sketch of the screening queue" />
            <img src={wireCandidate} alt="Hand-drawn wireframe sketch of the candidate evaluation screen" />
            <img src={wireCommunication} alt="Hand-drawn wireframe sketch of the communication draft modal" />
            <img src={wireGovernance} alt="Hand-drawn wireframe sketch of the governance and audit screen" />
          </div>
        </section>

        <section id="screens" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">High-Fidelity Wireframes</h2>
          <p className="pr-section__intro">
            These high-fidelity wireframes translate the low-fidelity conceptual layouts into pixel-perfect,
            production-ready interfaces &mdash; applying a crisp design system, real data density, and clear visual
            hierarchy to validate the final SIFT user experience.
          </p>

          <article className="pr-screen">
            <img className="pr-screen__main" src={hifiDashboard} alt="SIFT recruiter dashboard" />
            <h3 className="pr-screen__title">Recruiter Dashboard</h3>
            <p>
              The Recruiter Dashboard eliminates decision fatigue and prevents unqualified resumes from
              overwhelming hiring teams by replacing linear First In, First Out (FIFO) processing with an
              exception-first interface that isolates automated throughput from high-risk edge cases while
              maintaining continuous legal compliance.
            </p>

            <img className="pr-screen__crop" src={cropPriorityQueue} alt="Priority review exception-first queue table" />
            <h4 className="pr-screen__feature">Priority Exception Queue</h4>
            <p>
              Automated triage for high-risk applications surfaces low-confidence scores, missing data, and
              potential bias flags at the top of the queue so recruiters immediately focus on applications
              requiring human judgment.
            </p>

            <img className="pr-screen__crop" src={cropParityMonitor} alt="Real-time fairness and parity monitor" />
            <h4 className="pr-screen__feature">Real-Time Parity Monitor</h4>
            <p>
              Continuous regulatory compliance auditing displays live selection-rate metrics across demographic
              groups against EEOC and NYC Local Law 144 guidelines before hiring biases compound.
            </p>
          </article>

          <article className="pr-screen">
            <img className="pr-screen__main" src={hifiScreening} alt="SIFT screening queue and triage screen" />
            <h3 className="pr-screen__title">Screening Queue</h3>
            <p>
              The Screening Queue resolves the challenge of high-volume triage by segmenting candidates into
              distinct, actionable queue states that allow recruiters to seamlessly alternate between rapid batch
              approvals for standard applicants and deep analytical reviews for complex edge cases.
            </p>

            <img className="pr-screen__crop" src={cropQueueTabs} alt="Exception, standard, and auto-decline queue tabs" />
            <h4 className="pr-screen__feature">Auto-Decline Staging Tab</h4>
            <p>
              A reversible buffer against false negatives holds candidates who failed baseline requirements in a
              24-hour review window before automated rejection notices dispatch, protecting against erroneous AI
              declines.
            </p>

            <img className="pr-screen__crop" src={cropMatchConfidence} alt="Match score and confidence table" />
            <h4 className="pr-screen__feature">Confidence Banding</h4>
            <p>
              Paired fit and system certainty indicators pair the 0&ndash;100 candidate match score with a High,
              Medium, or Low confidence rating to instantly alert recruiters to ambiguous or low-certainty data.
            </p>

            <img className="pr-screen__crop" src={cropBulkActions} alt="Floating bulk action bar" />
            <h4 className="pr-screen__feature">Floating Bulk Action Dock</h4>
            <p>
              Reversible batch processing for high-fit candidates allows multi-select approvals and rejections for
              unflagged, high-confidence candidates to drastically reduce repetitive manual clicks and speed up
              pipeline throughput.
            </p>
          </article>

          <article className="pr-screen">
            <img className="pr-screen__main" src={hifiCandidate} alt="SIFT candidate evaluation screen for Priya Sharma" />
            <h3 className="pr-screen__title">Candidate Evaluation Workspace</h3>
            <p>
              The Candidate Profile workspace establishes an explainable and accountable human-in-the-loop
              screening environment through a split-panel interface that pairs transparent AI score calculations
              on the left with raw, highlight-mapped candidate transcripts and resumes on the right.
            </p>

            <img className="pr-screen__crop" src={cropFactorBreakdown} alt="AI factor score breakdown bar chart" />
            <h4 className="pr-screen__feature">Waterfall Factor Breakdown Chart</h4>
            <p>
              Transparent score attribution converts black-box composite scores into a visual contribution bar
              chart displaying the exact positive (+pts) and negative (&ndash;pts) impact of individual skills and
              experiences.
            </p>
          </article>

          <article className="pr-screen">
            <img className="pr-screen__main" src={hifiCommunication} alt="SIFT candidate communication draft modal" />
            <h3 className="pr-screen__title">Candidate Communication</h3>
            <p>
              The Candidate Communication modal eliminates candidate ghosting and accelerates response times by
              automatically drafting context-aware email and SMS updates based on evaluation decisions while
              keeping the recruiter as the final approving gatekeeper.
            </p>

            <img className="pr-screen__crop" src={hifiCommunicationCard} alt="Close-up of the candidate communication draft card" />
            <h4 className="pr-screen__feature">Human-in-the-Loop Review</h4>
            <p>
              Editable pre-dispatch quality control ensures no outbound message is sent automatically by
              presenting editable AI drafts that recruiters can customize for tone or specific context before
              dispatching.
            </p>

            <h4 className="pr-screen__feature">Immutable AI Disclosure Notice</h4>
            <p>
              Guaranteed candidate transparency embeds an uneditable watermark into every outbound message
              informing the candidate that the communication was drafted with AI assistance and approved by a
              human.
            </p>

            <h4 className="pr-screen__feature">Contextual Data Merging</h4>
            <p>
              Automated application fact insertion pulls explicit details from the candidate&rsquo;s resume and
              pre-screening transcript directly into the draft text to deliver personalized candidate updates at
              scale.
            </p>
          </article>

          <article className="pr-screen">
            <img className="pr-screen__main" src={hifiGovernance} alt="SIFT governance, bias audit and calibration screen" />
            <h3 className="pr-screen__title">Governance &amp; Audit Center</h3>
            <p>
              The Governance &amp; Audit workspace equips talent acquisition leaders and compliance officers with
              real-time oversight of algorithmic equity and recruiter behavior, shifting compliance tracking from
              retrospective annual audits into an always-on operational dashboard.
            </p>

            <img className="pr-screen__crop" src={cropParityMatrix} alt="Selection rate parity matrix table" />
            <h4 className="pr-screen__feature">4/5ths Rule Selection Matrix</h4>
            <p>
              Real-time demographic parity tracking automatically calculates selection-rate ratios across
              demographic groups against the legal 0.80&ndash;1.20 target range and flags potential adverse impact
              risks instantly.
            </p>

            <img className="pr-screen__crop" src={cropOverrideDist} alt="Override reason distribution donut chart" />
            <h4 className="pr-screen__feature">Override Reason Distribution Chart</h4>
            <p>
              Root-cause model analysis categorizes the primary reasons recruiters override AI recommendations to
              provide talent operations teams with precise data for tuning screening rubrics and prompts.
            </p>
          </article>
        </section>

        <section id="ai-model" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">AI Interaction Model</h2>
          <p className="pr-section__intro">
            This AI interaction model details the co-pilot framework between SIFT and the recruiter, defining how
            autonomous system actions hand off to human judgment through clear governance levels, explainable
            feedback loops, and intentional friction.
          </p>
          <div className="pr-table-scroll">
            <table className="pr-table pr-table--dark">
              <thead>
                <tr>
                  <th>Interaction Dimension</th>
                  <th>AI Autonomous Execution</th>
                  <th>Recruiter Human Governance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Triage &amp; Routing</td>
                  <td>Parses resumes, conducts pre-screen chats, computes scores, flags low-confidence data.</td>
                  <td>Reviews exception-queue priorities and overrides automated route assignments.</td>
                </tr>
                <tr>
                  <td>Explainability</td>
                  <td>Generates waterfall factor charts (+/&ndash; pts) and highlights source transcript evidence.</td>
                  <td>Cross-examines AI reasoning against highlighted raw evidence.</td>
                </tr>
                <tr>
                  <td>Decision &amp; Overrides</td>
                  <td>Recommends advance/reject decisions based on weighted job rubrics.</td>
                  <td>Executes final decision; submits mandatory written rationale when overriding AI.</td>
                </tr>
                <tr>
                  <td>Communication</td>
                  <td>Auto-drafts personalized email/SMS updates with an embedded AI transparency notice.</td>
                  <td>Reviews, edits, and manually approves drafts before candidate dispatch.</td>
                </tr>
                <tr>
                  <td>System Learning</td>
                  <td>Tracks parity ratios and logs override patterns to detect drift.</td>
                  <td>Recalibrates scoring rubrics and prompt logic based on override audit logs.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="metrics" className="pr-section pr-reveal">
          <h2 className="pr-eyebrow">Success Metrics &amp; Impact</h2>
          <p className="pr-section__intro">
            This framework measures SIFT&rsquo;s performance across operational efficiency, evaluation accuracy,
            regulatory compliance, and candidate experience &mdash; demonstrating how exception-first AI design
            transforms high-volume recruitment.
          </p>
          <div className="pr-table-scroll">
            <table className="pr-table pr-table--dark">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Key Performance Indicator (KPI)</th>
                  <th>UX &amp; Operational Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Operational Efficiency</td>
                  <td>Avg. Time to Screen Candidate</td>
                  <td>Exception-first triage routes recruiters directly to flagged profiles, bypassing manual scanning for high-confidence matches.</td>
                </tr>
                <tr>
                  <td>Operational Efficiency</td>
                  <td>Time-to-Hire / Time-to-Fill</td>
                  <td>Automated pre-screening and context-aware messaging eliminate application backlogs and speed up early-stage hiring velocity.</td>
                </tr>
                <tr>
                  <td>Decision Accuracy</td>
                  <td>False Negative / Reversal Rate</td>
                  <td>Auto-decline staging creates a safety buffer, enabling human recruiters to catch and reverse wrongful automated rejections.</td>
                </tr>
                <tr>
                  <td>Decision Accuracy</td>
                  <td>Recruiter Override Consistency</td>
                  <td>Mandatory override rationales eliminate arbitrary decisions while preventing automation bias (blind trust in AI).</td>
                </tr>
                <tr>
                  <td>Compliance &amp; Equity</td>
                  <td>Selection Rate Parity (4/5ths Rule)</td>
                  <td>Continuous parity monitoring flags demographic variance during screening, preventing adverse impact before pipeline progression.</td>
                </tr>
                <tr>
                  <td>Candidate Experience</td>
                  <td>Candidate Response / Ghosting Rate</td>
                  <td>Contextual auto-drafted communications ensure every applicant receives timely, personalized status updates with full AI disclosure.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="reflection" className="pr-section pr-reflection pr-reveal">
          <p className="pr-reflection__label">Learning</p>
          <div className="pr-reflection__box">
            <p>
              Designing SIFT demonstrated that the true value of AI in high-volume recruitment lies not in full
              automation, but in establishing an exception-first interface that pairs transparent algorithmic
              explainability with mandatory human governance to ensure fast, fair, and accountable hiring
              decisions.
            </p>
          </div>
          <hr className="pr-reflection__rule" />
          <p className="pr-reflection__signoff">IIT Hyderabad, India</p>
          <p className="pr-reflection__signoff">2026</p>
        </section>
      </main>

      <div className="site-fixed-footer site-fixed-footer--transparent">
        <SiteFooter onDark={overHeroAtBottom} />
      </div>
    </div>
  )
}

export default ProjectAiRecruitment
