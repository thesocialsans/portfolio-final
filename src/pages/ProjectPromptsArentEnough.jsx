import { useRef } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SiteMascot from '../components/SiteMascot'
import FloatingPortfolioCTA from '../components/FloatingPortfolioCTA'
import ProjectSectionNav from '../components/ProjectSectionNav'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/siteFrame.css'
import diaryCover from '../assets/images/prompts/diary-cover.jpg'
import diaryEntry from '../assets/images/prompts/diary-entry-18-july.jpg'
import diaryChecklist from '../assets/images/prompts/diary-phase-checklist.jpg'
import sketchIceberg from '../assets/images/prompts/sketch-iceberg.png'
import sketchLoop from '../assets/images/prompts/sketch-intent-loop.png'
import trackingCard from '../assets/images/prompts/chatgpt-tracking-card.jpg'
import p01Sheet from '../assets/images/prompts/p01-session-sheet.jpg'
import p02Prompt from '../assets/images/prompts/p02-long-prompt.jpg'
import p03Reply from '../assets/images/prompts/p03-prompt-reply.jpg'
import p03Sheet from '../assets/images/prompts/p03-session-sheet.jpg'
import p04Table from '../assets/images/prompts/p04-tabular-format.jpg'
import stillP01 from '../assets/images/prompts/still-p01-email.jpg'
import stillP03Typing from '../assets/images/prompts/still-p03-typing.jpg'
import stillP03Reading from '../assets/images/prompts/still-p03-reading.jpg'
import concept01 from '../assets/images/prompts/concept-01-scope-check.png'
import concept02 from '../assets/images/prompts/concept-02-still-missing.png'
import concept03 from '../assets/images/prompts/concept-03-reading-it-as.png'
import concept04 from '../assets/images/prompts/concept-04-not-that.png'
import concept05 from '../assets/images/prompts/concept-05-split-it.png'
import concept06 from '../assets/images/prompts/concept-06-show-dont-tell.png'
import concept07 from '../assets/images/prompts/concept-07-remember-this.png'
import concept08 from '../assets/images/prompts/concept-08-what-got-you-there.png'
import './ProjectPromptsArentEnough.css'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'empathize', label: 'Empathize' },
  { id: 'define', label: 'Define' },
  { id: 'ideate', label: 'Ideate' },
  { id: 'next', label: 'Prototype · Test · Implement' },
  { id: 'reflection', label: 'Learning' },
]

const STATS_ONE = [
  { n: '0 of 8', l: 'Sessions where the AI asked before answering', s: 'Field study' },
  { n: '6 of 8', l: 'Where the deciding constraint came only after a wrong answer', s: 'Field study' },
  { n: '0 of 8', l: 'Where the goal changed. Only the wording did.', s: 'Post-task interviews' },
]

const STATS_TWO = [
  { n: '32', l: 'Runs in round one, four assistants', s: 'Tool audit' },
  { n: '1 of 8', l: 'Prompts where ChatGPT asked a question', s: 'Round one' },
  { n: '6 of 8', l: 'Prompts where Gemini asked', s: 'Round one' },
  { n: '3', l: 'Behaviours: ask, guess, or refuse', s: 'Eight tools' },
]

const STEPS = [
  ['01', 'Empathize', false],
  ['02', 'Define', false],
  ['03', 'Ideate', false],
  ['04', 'Prototype', true],
  ['05', 'Test', true],
  ['06', 'Implement', true],
]

const LIT_ROWS = [
  { cells: [<>Technical / NLP<small>clarifying questions</small></>, 'No', 'System side only', 'No participants'] },
  {
    cells: [
      <>General users<small>mental models; Why Johnny Can’t Prompt</small></>,
      'Not the focus',
      'Yes',
      'Yes',
    ],
  },
  { cells: [<>Designers on AI<small>factorial surveys; “Hey Alexa”</small></>, 'Yes', 'No: attitudes', 'Surveys'] },
  { hl: true, cells: ['This study', 'Yes', 'Yes', 'Yes, real tasks'] },
]

const TOOL_ROWS = [
  { cells: ['ChatGPT', 'Live, twice', 'Asked 1 of 8, weeks later 3–4 of 8'] },
  { cells: ['Gemini', 'Live', 'Asks on open requests'] },
  {
    cells: [
      'Claude',
      <>Self-test in a chat with project history<small>not a clean test</small></>,
      'Asks with nothing to go on',
    ],
  },
  { cells: ['Copilot', 'Handwritten pass', 'Asks; slow to converge'] },
  { cells: ['Perplexity', 'Live, 2 of 8, then a sign-up wall', 'Most thorough question'] },
  { hl: true, cells: ['NotebookLM', 'Documentation only', 'Refuses outside its sources'] },
  { cells: ['Figma Make', 'Documentation only', 'Guesses silently'] },
  { cells: ['Figma Agent', 'Documentation only', 'Defaults to recent components'] },
]

const PARTICIPANTS = [
  { cells: ['P01', 'In person', 'Formal email to the HOD', '2', 'Sheet + recording'] },
  { cells: ['P02', 'In person', 'A thesis research framework', '1', 'Screenshots + video'] },
  { cells: ['P03', 'In person', 'Wildlife–train collision fixes', '1', 'Sheet + export'] },
  { cells: ['P04', 'In person', 'Market scan for an app idea', '3', 'Export + recording'] },
  { hl: true, cells: ['P05', 'Phone', 'Synthesis of 8 user interviews', '3', 'Recalled, no notes'] },
  { cells: ['P06', 'Phone', 'Visual direction, skincare brand', '3', 'Call notes'] },
  { cells: ['P07', 'Phone', 'Enterprise finance dashboard', '3', 'Call notes'] },
  { cells: ['P08', 'Phone', 'Elderly patient’s hospital-booking journey', '4', 'Call notes'] },
]

const TURNS_P01 = [
  {
    cells: [
      '1',
      '“Compose email to my God(Design Department IITH). TOPIC - Easy key access of the classroom for the students (M.Des)… The mail should be formal, crisp and in modern english.”',
      'A full formal letter, five paragraphs, signed in his name',
      '“God” for “HOD” went unnoticed, and the AI read it right from context',
    ],
  },
  {
    hl: true,
    cells: [
      '2',
      '“Make it more short and crisp”',
      'The same request in three short paragraphs',
      'A length repair, not a meaning repair',
    ],
  },
]

const TURNS_P03 = [
  {
    cells: [
      '1',
      '“I am working on a project (signals before Impact) it is regarding accidents that takes place because of trains focusing on endangered animals like elephant, gaurs etc can you tell me current solution available for this problem”',
      '“Bro, yes.” Ten solutions, mapped to “the Castle Rock–Kulem railway corridor”, and a nod to “a workflow involving a proximity sensor, a Beat Officer” from his earlier chats',
      'It fit first time because months of personalised history filled the frame he never typed',
    ],
  },
]

const TURNS_P04 = [
  {
    cells: [
      '1',
      '“I’m working on an emergency app can search which all apps currently cater all these.”',
      'A long survey of about a dozen apps in three groups, plus “gaps you can target”',
      'A broad ask got a broad guess',
    ],
  },
  {
    cells: [
      '2',
      '“Make a comparison of atleast 3 best apps available in market”',
      'Three apps compared in prose, with a side-by-side table at the end',
      'He narrowed the scope',
    ],
  },
  {
    hl: true,
    cells: [
      '3',
      '“I need it in tabular format”',
      'One table, 11 rows by 3 apps',
      'Then he fixed the format. The content was never wrong.',
    ],
  },
]

const TURNS_P08 = [
  {
    cells: [
      '1',
      '“Create a user journey for elderly people using a hospital appointment app.”',
      '“This is too surface-level.”',
      'The AI read “elderly” as an accessibility problem',
    ],
  },
  {
    cells: [
      '2',
      '“Include the difficulties they might face at each stage.”',
      '“Accessibility isn’t the only issue.”',
      'More detail didn’t fix the frame',
    ],
  },
  {
    cells: [
      '3',
      'Anxiety, dependence on family, medical terms, uncertainty',
      '—',
      'She disclosed context she had all along',
    ],
  },
  {
    hl: true,
    cells: [
      '4',
      '“Separate what the elderly user does from what the caregiver does.”',
      '“Now this is actually useful.”',
      'The fix was structural: two actors',
    ],
  },
]

const CHANGES = [
  ['UI designers leave design-system rules unsaid', 'P07 gave his grid and spacing rules only on turn three', 'Confirmed', false],
  ['Visual intent is tacit, refined by contrast', 'P06: not eco, then not cold, then warmer', 'Confirmed', false],
  ['UX intent hides in the workflow stage', 'P05 matched; P08 only adjacent', 'Partly confirmed', false],
  ['AI asks when a request is vague', 'It did in my audit, never on real work', 'Changed my model', true],
  ['Ask or guess', 'A third behaviour appeared: refuse', 'Changed my model', true],
  ['“Intent evolves over a conversation”', 'No goal changed in eight sessions. Retired.', 'Changed my model', true],
]

const CODES = [
  ['intent expression', [1, 1, 1, 1, 1, 1, 1, 1], 8, false],
  ['context addition', [0, 1, 0, 0, 1, 0, 1, 2], 5, false],
  ['constraint addition', [1, 1, 1, 2, 2, 3, 3, 2], 15, true],
  ['rephrasing', [0, 0, 0, 0, 0, 1, 0, 0], 1, false],
  ['correction', [1, 0, 0, 0, 1, 2, 2, 2], 8, false],
  ['example giving', [0, 1, 0, 0, 0, 0, 0, 0], 1, false],
  ['clarification (AI asked)', [0, 0, 0, 0, 0, 0, 0, 0], 0, true],
  ['AI assumption', [0, 0, 0, 0, 1, 1, 1, 1], 4, false],
  ['intent change', [0, 0, 0, 0, 0, 0, 0, 0], 0, true],
  ['prompt abandonment', [0, 0, 0, 0, 0, 0, 0, 0], 0, false],
  ['convergence', [1, 1, 1, 1, 1, 1, 1, 1], 8, false],
]

const EPISODES = [
  { cells: [<b key="a">Actual intent</b>, '“I already had a visual direction in my head.”', 'A structure that fits an existing design system', 'The experience of booking, not just the steps'] },
  { cells: [<b key="b">AI read</b>, 'Muted greens, beige, botanical photos', 'Four big cards, a chart: institutionally blind', '“Elderly” as an accessibility problem'] },
  { hl: true, cells: [<b key="c">Repair</b>, 'Adjectives became contrast', 'A sentence became a specification', 'Content became structure'] },
  {
    cells: [
      <b key="d">Done when</b>,
      '“The descriptions started matching the feeling I had in mind.”',
      '“I could imagine implementing it without redesigning it.”',
      '“It started showing why the user behaves that way.”',
    ],
  },
]

const BREAKDOWNS = [
  { cells: ['Incomplete intent', 'P04: thin, and invisible to him', 'One scoping question'] },
  { cells: ['Implicit intent', 'P05: the stage hidden in “opportunities”', 'Ask which stage'] },
  { cells: ['Missing context', 'P07: design system unstated', 'A statable-once profile'] },
  { cells: ['AI assumption', 'P06: silent eco default', 'Show it as a choice'] },
  { cells: ['Difficult repair', 'P08: four turns, the last one structural', 'A restructure action'] },
  { cells: ['Excessive effort', 'P06, P07, P08 re-explaining', 'Images and remembered context'] },
  { dim: true, cells: ['Wrong interpretation', 'None: a checked null', '—'] },
  { dim: true, cells: ['Evolving intent', 'None: a checked null', '—'] },
]

const JOURNEY = {
  stages: ['First prompt', 'AI reads', 'Evaluate', 'Name it', 'Repair'],
  does: ['Type one front-loaded ask', 'Get a fluent, plausible answer', 'Know at once it’s wrong', 'Search for why', 'Add, contrast or restructure'],
  hurts: ['The frame feels too obvious to say', 'A silent default fills the gap', '“It looks like every eco brand”', 'Words lag behind knowing', 'Re-explaining from scratch'],
  responses: ['Scope check', 'Show the guess', 'Not this, like this', 'Image as input', 'Remember this'],
}

const PRINCIPLES = [
  ['Support intent before demanding precision', 'P04 couldn’t see his own vagueness while typing; the AI asked 0 of 8 times.'],
  ['Let context arrive in pieces', 'Reactive disclosure in 6 of 8: context came only when an answer exposed its absence.'],
  ['Make consequential assumptions visible', '4 of 8 silent professional defaults.'],
  ['Match the repair tool to the repair', 'P08 had to describe a structure in prose.'],
  ['Let images carry felt judgements', 'P06: a reference or moodboard “would be much easier”.'],
  ['Remember what was said once', 'P07 and P08 asked for it, unprompted.'],
  ['Teach through the designer’s own gap', 'P04: refining in the chat wasn’t a move he knew.'],
]

const CONCEPTS_VISIBLE = [
  [
    concept01,
    '01 · Scope check before a full answer',
    'On a broad, short prompt, offer one quick scoping step instead of surveying everything.',
    'P04 couldn’t see his own vagueness while typing; the AI asked 0 of 8 times.',
    'a scope check vs today’s answer-first default',
    'Pencil sketch: Scope check before a full answer',
  ],
  [
    concept02,
    '02 · “Still missing” — add context in pieces',
    'A small strip under each answer lists what’s still missing; tap to add just that piece.',
    'Reactive constraint disclosure, 6 of 8: context arrived only when an answer exposed its absence.',
    'fewer full-prompt rewrites per task?',
    'Pencil sketch: “Still missing” — add context in pieces',
  ],
  [
    concept03,
    '03 · “Reading it as…” — make the guess visible',
    'A dismissible chip names the AI’s reading before it answers, with other directions one tap away.',
    '4 of 8 silent professional defaults (P05–P08), and 0 clarifying questions.',
    'A/B against the silent default on design and research tasks',
    'Pencil sketch: “Reading it as…” — make the guess visible',
  ],
  [
    concept04,
    '04 · “Not that — more like this”',
    'Tap the phrase or block that’s wrong; two buttons appear right there. No new paragraph.',
    'Every real repair was already contrastive: “not obviously eco”, “don’t introduce new component types”.',
    'repair turns vs typed corrections',
    'Pencil sketch: “Not that — more like this”',
  ],
]

const CONCEPTS_CHEAP = [
  [
    concept05,
    '05 · “Split it” — structural repair by hand',
    'Drag a generated block into two, the way you’d ungroup sticky notes.',
    'P08’s decisive fix was structural: “separate what the elderly user does from what the caregiver does” — typed as prose.',
    'on journey and layout tasks, where structure is the fix',
    'Pencil sketch: “Split it” — structural repair by hand',
  ],
  [
    concept06,
    '06 · “Show, don’t tell” — images as input',
    'A dropped reference image carries the same weight as a typed sentence.',
    'P06: “Showing it a reference or moodboard would be much easier than trying to explain the feeling.”',
    'reference images vs verbal contrastive repair, on visual tasks',
    'Pencil sketch: “Show, don’t tell” — images as input',
  ],
  [
    concept07,
    '07 · “Remember this?” — context that persists',
    'When a correction sounds like a standing rule, one tap keeps it for next time.',
    'P07 and P08 each asked for it unprompted: the component library, the persona “once”.',
    'does it cut first-turn assumption errors?',
    'Pencil sketch: “Remember this?” — context that persists',
  ],
  [
    concept08,
    '08 · “What got you there” — learn from your own fix',
    'After a multi-turn fix, a small recap shows first vs final message, the difference underlined.',
    'P04 named “a lack of knowledge in how to prompt” — he edits output in email instead of refining in chat.',
    'does in-chat refinement increase over sessions?',
    'Pencil sketch: “What got you there” — learn from your own fix',
  ],
]

const SOON = [
  ['Prototype', '4 · Workspace and flows', 'Information architecture, wireframes and UI for the strongest concepts.'],
  [
    'Test',
    '5 · Does showing the guess help?',
    'Visible assumptions against today’s silent default, measured by first-turn errors and repair turns.',
  ],
  ['Implement', '6 · Refine and hand off', 'What survives testing, and how it would ship.'],
]

function Row({ left, children, stack = false }) {
  if (stack) {
    return (
      <div className="pa-row pa-row--stack">
        <div className="pa-row__r">
          {left}
          {children}
        </div>
      </div>
    )
  }
  return (
    <div className="pa-row">
      <div className="pa-row__l">{left}</div>
      <div className="pa-row__r">{children}</div>
    </div>
  )
}

function Head({ phase, title }) {
  return (
    <div>
      <p className="pa-ph">{phase}</p>
      <h2 className="pa-h2">{title}</h2>
    </div>
  )
}

function Block({ children }) {
  return (
    <div className="pa-block pa-reveal">
      <div className="pa-flow">{children}</div>
    </div>
  )
}

function Table({ head, rows, center = [], className = '' }) {
  const isC = (i) => center.includes(i)
  return (
    <div className="pa-tw">
      <table className={`pa-table ${className}`.trim()}>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={`${h}-${i}`} className={isC(i) ? 'is-c' : undefined}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className={row.hl ? 'is-hl' : row.dim ? 'is-dim' : undefined}>
              {row.cells.map((cell, c) => (
                <td key={c} className={isC(c) ? 'is-c' : undefined}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Bands({ items, tone = '' }) {
  return (
    <section className={`pa-band${tone ? ` pa-band--${tone}` : ''} pa-reveal`}>
      <div className="pa-stats">
        {items.map((s) => (
          <div key={s.l}>
            <p className="pa-stat__n">{s.n}</p>
            <p className="pa-stat__l">{s.l}</p>
            <p className="pa-stat__s">{s.s}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Quote({ children, who, small = false }) {
  return (
    <div className="pa-quote">
      <p className={`pa-quote__text${small ? ' pa-quote__text--sm' : ''}`}>{children}</p>
      <p className="pa-quote__who">{who}</p>
    </div>
  )
}

function Concept({ item }) {
  const [img, title, what, evidence, tests, alt] = item
  return (
    <div className="pa-concept">
      <div className="pa-concept__img">
        <img src={img} alt={alt} loading="lazy" decoding="async" />
      </div>
      <h3>{title}</h3>
      <p>{what}</p>
      <p className="pa-concept__k">Evidence</p>
      <p>{evidence}</p>
      <p className="pa-concept__k pa-concept__k--t">SP2 tests</p>
      <p>{tests}</p>
    </div>
  )
}

function ProjectPromptsArentEnough() {
  const containerRef = useRef(null)
  useScrollReveal(containerRef, '.pa-reveal')

  return (
    <div className="pa-page" ref={containerRef}>
      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="Portfolio" />
      </div>
      <ProjectSectionNav sections={SECTIONS} />

      <header id="overview" className="pa-hero">
        <div className="pa-hero__inner">
          <p className="pa-hero__tags">UX Research, Synthesis, Conversational UX, Concept design</p>
          <h1 className="pa-hero__title">When AI understands what you mean</h1>
          <p className="pa-hero__sub">
            Understanding human intent in AI conversations, toward an intent-aware workspace for UX designers
          </p>
          <p className="pa-hero__meta">
            <span>Timeline</span>
            10-week research project &middot; SP1, M.Des Interaction Design &middot; Guide: Prof. Ankita Roy
          </p>

          <div className="pa-hero__art" role="img" aria-label="Diagram: what a designer types is only the tip of what they mean">
            <svg viewBox="0 0 900 330" aria-hidden="true">
              <line x1="20" y1="118" x2="880" y2="118" stroke="#8F86B0" strokeWidth="1.5" strokeDasharray="2 5" />
              <text x="20" y="108" fontFamily="Syne Mono, monospace" fontSize="10" letterSpacing="1.5" fill="#5B4E8C">
                WHAT YOU TYPE
              </text>
              <text x="20" y="140" fontFamily="Syne Mono, monospace" fontSize="10" letterSpacing="1.5" fill="#5B4E8C">
                WHAT YOU MEAN
              </text>
              <rect x="300" y="44" width="300" height="52" rx="14" fill="#FFFFFF" stroke="#5B4E8C" strokeWidth="1.5" />
              <text x="450" y="76" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="15" fill="#2B2740">
                “premium sustainable skincare look”
              </text>
              <line x1="450" y1="96" x2="450" y2="160" stroke="#C2577A" strokeWidth="1.5" />
              <circle cx="450" cy="168" r="8" fill="#C2577A" />
              <circle cx="450" cy="168" r="16" fill="none" stroke="#C2577A" strokeDasharray="3 3" />
              <g fontFamily="Jost, sans-serif" fontSize="13" fill="#2B2740">
                <rect x="120" y="170" width="170" height="34" rx="17" fill="#FCEDEF" />
                <text x="205" y="192" textAnchor="middle">not obviously eco</text>
                <rect x="610" y="170" width="170" height="34" rx="17" fill="#E2F3EB" />
                <text x="695" y="192" textAnchor="middle">warmth, imperfection</text>
                <rect x="200" y="226" width="190" height="34" rx="17" fill="#E8F2FB" />
                <text x="295" y="248" textAnchor="middle">our 8-pt grid, no new parts</text>
                <rect x="510" y="226" width="190" height="34" rx="17" fill="#FBF4DC" />
                <text x="605" y="248" textAnchor="middle">patient and caregiver</text>
                <rect x="355" y="270" width="190" height="34" rx="17" fill="#FDEFE5" />
                <text x="450" y="292" textAnchor="middle">the “obvious” part</text>
              </g>
              <g stroke="#B3ABC9" strokeWidth="1">
                <line x1="438" y1="174" x2="290" y2="187" />
                <line x1="462" y1="174" x2="610" y2="187" />
                <line x1="444" y1="182" x2="360" y2="226" />
                <line x1="456" y1="182" x2="540" y2="226" />
                <line x1="450" y1="184" x2="450" y2="270" />
              </g>
              <text x="880" y="108" textAnchor="end" fontFamily="Jost, sans-serif" fontSize="12" fill="#6E6884">
                the AI reads only this
              </text>
              <text x="880" y="322" textAnchor="end" fontFamily="Jost, sans-serif" fontSize="12" fill="#6E6884">
                and fills the rest with a reasonable default
              </text>
            </svg>
          </div>
          <p className="pa-mono pa-hero__label">Specialization project 01</p>
          <p className="pa-mono pa-hero__diary">Research diary &middot; 18 Jul &ndash; 27 Sep 2026</p>
        </div>
      </header>

      <Bands items={STATS_ONE} />

      <div className="pa-wrap pa-process pa-reveal" aria-label="Process">
        <div className="pa-phases">
          <div className="pa-phase"><span className="pa-mono">Understand</span></div>
          <div className="pa-phase"><span className="pa-mono">Explore</span></div>
          <div className="pa-phase"><span className="pa-mono">Materialize</span></div>
        </div>
        <div className="pa-steps">
          {STEPS.map(([num, name, soon]) => (
            <div key={num} className={`pa-step${soon ? ' pa-step--soon' : ''}`}>
              <div className="pa-step__num">{num}</div>
              <div className="pa-step__nm">
                {name}
                {soon && <span className="pa-step__soon">Case soon</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="pa-methods">
          <span className="pa-mono">Methods</span>
          <div>Research diary<br />10 papers<br />Tool audit</div>
          <div>Coding<br />Affinity map<br />Journey, POV</div>
          <div>Principles<br />8 concept<br />sketches</div>
          <div className="pa-cut">SP1 ends at ideation. Prototype, test and implement come in SP2.</div>
        </div>
      </div>

      <main>
        {/* ---------------- Empathize ---------------- */}
        <section id="empathize" className="pa-wrap pa-section">
          <Block>
            <Row left={<Head phase="Empathize" title="1:1 Problem" />}>
              <div className="pa-body">
                <p>
                  Designers use AI every day for briefs, research, layouts and copy. They usually know exactly what
                  they want, yet it often takes three tries before the answer fits. The AI reads the words that were
                  typed. What the designer means also includes the audience, the tone, the team’s rules and the things
                  that feel too obvious to say.
                </p>
                <p>
                  Most research looks at how the AI should behave. Very little watches the person: how they express
                  what they want, notice a mismatch and repair it, during real work.
                </p>
              </div>
            </Row>
            <Row left={<span className="pa-tag"><b>Design</b> goal</span>}>
              <p className="pa-body">
                Build an evidence-based account of how designers express intent to conversational AI, where it breaks
                down and how they repair it, so that the design work in SP2 rests on evidence, not intuition.
              </p>
            </Row>
            <Row left={<p className="pa-note">Five research questions, one per stage of the conversation</p>}>
              <div className="pa-box">
                <ol>
                  <li>How do designers express intent to conversational AI?</li>
                  <li>What shapes how that intent is interpreted?</li>
                  <li>
                    What mismatches actually happen? <span className="pa-muted">(the hinge)</span>
                  </li>
                  <li>How do people notice and repair them?</li>
                  <li>What does this suggest for design?</li>
                </ol>
              </div>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:2 It started in my own diary" />}>
              <p className="pa-body">
                Before there was a topic, there was a friction I kept writing about. I kept a research diary every day
                for ten weeks, 140 pages, with one rule: nothing made up. Where the data is weak, this page says so.
              </p>
            </Row>
            <Row
              left={
                <>
                  <p className="pa-note">Three small moments, 18 July</p>
                  <p className="pa-cap" style={{ marginTop: 6 }}>from my diary</p>
                </>
              }
            >
              <div className="pa-box">
                <ul>
                  <li>I asked for a shorter email. It got shorter and the whole tone changed.</li>
                  <li>A brainstorm stayed generic until I added “casual, budget-friendly, introverts”.</li>
                  <li>A friend kept typing more words into an image tool. It never once asked what was missing.</li>
                  <li>I wrote underneath: why didn’t it just ask me that upfront?</li>
                </ul>
              </div>
            </Row>
            <Row left={null}>
              <Quote who="My research diary, 18 July 2026">
                “I know exactly what I want, but by the time the AI gets it, I’ve had to explain it three different
                ways.”
              </Quote>
            </Row>
            <div className="pa-photos">
              <figure className="pa-fig">
                <img src={diaryCover} alt="Cover of the handwritten research diary" loading="lazy" decoding="async" />
                <figcaption>The research diary, kept day by day</figcaption>
              </figure>
              <figure className="pa-fig">
                <img src={diaryEntry} alt="Handwritten diary entry from 18 July" loading="lazy" decoding="async" />
                <figcaption>The 18 July entry, as written</figcaption>
              </figure>
              <figure className="pa-fig">
                <img src={diaryChecklist} alt="Handwritten checklist of the project phases" loading="lazy" decoding="async" />
                <figcaption>The phase checklist I ticked off</figcaption>
              </figure>
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:3 A prompt is not the intent behind it" />}>
              <div className="pa-body">
                <p>
                  Everyone, me included, used “prompt” and “intent” as one word. Separating them shaped the whole
                  study. The prompt is the tip: what you typed. Intent is everything underneath.
                </p>
                <p>
                  I also protected one distinction from day one: changing your prompt is not the same as changing your
                  goal. I coded the two separately, and it became a key finding.
                </p>
              </div>
            </Row>
            <Row left={<p className="pa-note pa-note--sky">Working definitions, 22 July</p>}>
              <Table
                head={['Term', 'Definition']}
                rows={[
                  { cells: [<b key="p">Prompt</b>, 'The literal, observable input: words, structure, examples, constraints'] },
                  {
                    cells: [
                      <b key="i">Intent</b>,
                      'The underlying goal, fully formed or still forming. What is said only partly captures it.',
                    ],
                  },
                ]}
              />
            </Row>
            <div className="pa-photos pa-photos--sketch">
              <figure className="pa-fig pa-sketch">
                <img src={sketchIceberg} alt="Pencil sketch of an iceberg: the prompt is the tip, intent is the mass below" loading="lazy" decoding="async" />
                <figcaption>The iceberg I drew to separate the two words</figcaption>
              </figure>
              <figure className="pa-fig pa-sketch">
                <img src={sketchLoop} alt="Pencil loop: goal, intent formulation, prompt, AI interpretation, response, user evaluation, mismatch, repair, refined intent" loading="lazy" decoding="async" />
                <figcaption>Intent communication as a loop, held as a hypothesis to test</figcaption>
              </figure>
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:4 What research already knew" />}>
              <p className="pa-body">
                I read ten papers in full rather than skimming twenty, across human–AI interaction, conversational UX,
                clarifying questions, prompting and mental models. Two areas, cognitive load and trust, stayed thin,
                and I named them as gaps.
              </p>
            </Row>
            <Row left={<p className="pa-note">The research gap: nobody combined all three</p>}>
              <Table
                head={['Research strand', 'Designers?', 'Intent expression?', 'Observed behaviour?']}
                rows={LIT_ROWS}
              />
            </Row>
            <div className="pa-cards">
              <div className="pa-card">
                <h3>Why Johnny Can’t Prompt</h3>
                <p className="pa-muted">CHI ’23</p>
                <p style={{ marginTop: 8 }}>
                  Non-experts treat AI like a human listener and avoid examples. One said giving examples “feels like
                  cheating”.
                </p>
              </div>
              <div className="pa-card">
                <h3>Amershi et al. and follow-up</h3>
                <p className="pa-muted">2019, 2022</p>
                <p style={{ marginTop: 8 }}>
                  Eighteen guidelines tested on 1,000+ people, all about the system’s side.
                </p>
              </div>
              <div className="pa-card">
                <h3>Mental models</h3>
                <p className="pa-muted">188 dialogs</p>
                <p style={{ marginTop: 8 }}>
                  An agent that adapted to how people talked succeeded in 77% of dialogs, against 57% and 44%.
                </p>
              </div>
            </div>
            <Row left={null}>
              <Quote who="Synthesis matrix, 21 August">
                Not ten small gaps. One gap wearing ten costumes: the system’s side is studied, the person’s side
                isn’t.
              </Quote>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:5 Testing the tools first" />}>
              <p className="pa-body">
                The reading left one question open: when a request is unclear, does a general assistant ask, or
                guess? I wrote eight locked prompts, from clear (“make this paragraph concise”) to vague (“Can you
                help me with this presentation?”), and ran exactly the same eight on every tool, logging each run by
                hand.
              </p>
            </Row>
          </Block>
        </section>

        <Bands items={STATS_TWO} tone="peach" />

        <section className="pa-wrap pa-section" style={{ paddingTop: 48 }}>
          <Block>
            <Row left={<p className="pa-note">Extended to eight tools, evidence labelled on every row</p>}>
              <Table head={['Tool', 'How I tested', 'On an unclear request']} rows={TOOL_ROWS} />
            </Row>
            <figure className="pa-fig">
              <img src={trackingCard} alt="Handwritten audit tracking card for ChatGPT with eight scenarios" loading="lazy" decoding="async" />
              <figcaption>The ChatGPT tracking card, logged by hand before it went into the diary</figcaption>
            </figure>
            <Row left={<p className="pa-note pa-note--sky">A sharper hypothesis, 24 August</p>}>
              <p className="pa-body">
                With nothing to work from, the AI asked. With some content but no tone stated, it quietly assumed. So
                it isn’t simply ask or guess: it depends on what is missing.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:6 Eight designers, their own real work" />}>
              <div className="pa-body">
                <p>
                  Then the people. Each designer did a real task of their own, on the tool they already use, thinking
                  aloud. Afterwards I asked seven questions, starting with “What were you actually trying to
                  achieve?”, so I never had to guess anyone’s intent.
                </p>
                <p>
                  Four sessions were in person and four by phone. On calls the rule was: do it live, narrate, share a
                  screenshot, and never ask “did it understand you?” mid-task, because that plants the answer.
                </p>
              </div>
            </Row>
            <Table
              className="pa-table--num"
              head={['P', 'Setting', 'Their own task', 'Turns', 'Evidence']}
              center={[3]}
              rows={PARTICIPANTS}
            />
            <Row left={<p className="pa-note">Read with care</p>}>
              <div className="pa-box">
                <ul>
                  <li>All eight happened to use ChatGPT, so “the AI never asked” may partly be a ChatGPT finding.</li>
                  <li>
                    Eight sessions are not eight equally strong data points: one is recalled from memory, three are
                    call notes.
                  </li>
                  <li>People appear only as codes. My consent script promised names stay in my notes.</li>
                </ul>
              </div>
            </Row>
            <figure className="pa-fig">
              <img src={p01Sheet} alt="P01’s handwritten session sheet, name covered" loading="lazy" decoding="async" />
              <figcaption>P01’s own session sheet, filled in by hand during the session · name covered</figcaption>
            </figure>
            <div className="pa-photos pa-photos--four">
              <figure className="pa-fig">
                <img src={p02Prompt} alt="P02’s long thesis prompt on a phone screen" style={{ objectPosition: 'top' }} loading="lazy" decoding="async" />
                <figcaption>P02 · one detailed prompt, typos kept</figcaption>
              </figure>
              <figure className="pa-fig">
                <img src={p03Reply} alt="P03’s prompt and the reply beginning “Bro, yes”" style={{ objectPosition: 'top' }} loading="lazy" decoding="async" />
                <figcaption>P03 · the reply opens “Bro, yes.”</figcaption>
              </figure>
              <figure className="pa-fig">
                <img src={p03Sheet} alt="P03 filling the session sheet by hand" loading="lazy" decoding="async" />
                <figcaption>P03 · “To get the existing solutions”</figcaption>
              </figure>
              <figure className="pa-fig">
                <img src={p04Table} alt="P04’s third prompt, “I need it in tabular format”, and the table" style={{ objectPosition: 'top' }} loading="lazy" decoding="async" />
                <figcaption>P04 · turn 3: “I need it in tabular format”</figcaption>
              </figure>
            </div>
            <div>
              <p className="pa-ttl">From the session recordings</p>
              <p className="pa-muted">Stills from the screen-and-hands videos. Faces are left out.</p>
            </div>
            <div className="pa-photos">
              <figure className="pa-fig">
                <img src={stillP01} alt="P01’s hands holding a phone with the generated email" loading="lazy" decoding="async" />
                <figcaption>P01 reading the first, longer email</figcaption>
              </figure>
              <figure className="pa-fig">
                <img src={stillP03Typing} alt="P03 typing his prompt" loading="lazy" decoding="async" />
                <figcaption>P03 typing his one prompt</figcaption>
              </figure>
              <figure className="pa-fig">
                <img src={stillP03Reading} alt="P03 reading the answer" loading="lazy" decoding="async" />
                <figcaption>P03 reading an answer that already knew his project</figcaption>
              </figure>
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:7 What they actually typed" />}>
              <p className="pa-body">
                Three in-person sessions, word for word from the exported chats and screenshots. Spelling is kept as
                typed.
              </p>
            </Row>
            <div>
              <p className="pa-ttl" style={{ marginBottom: 12 }}>P01 · a formal email to the HOD · 2 turns</p>
              <Table head={['Turn', 'What he typed', 'What came back', 'What it tells me']} center={[0]} rows={TURNS_P01} />
            </div>
            <div>
              <p className="pa-ttl" style={{ marginBottom: 12 }}>P03 · existing solutions for wildlife–train collisions · 1 turn</p>
              <Table head={['Turn', 'What he typed', 'What came back', 'What it tells me']} center={[0]} rows={TURNS_P03} />
            </div>
            <div>
              <p className="pa-ttl" style={{ marginBottom: 12 }}>P04 · market scan for an emergency app · 3 turns</p>
              <Table head={['Turn', 'What he typed', 'What came back', 'What it tells me']} center={[0]} rows={TURNS_P04} />
            </div>
            <Row left={<p className="pa-note pa-note--sky">A detail in the exports</p>}>
              <Quote small who="P04’s exported chat, turns 1–3">
                Every one of P04’s answers ended with an offer: “If you describe your exact feature list… I can map
                each feature to existing apps.” The AI asked after answering, never before.
              </Quote>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:8 Three critical incidents" />}>
              <p className="pa-body">
                The four phone sessions were craft tasks. Each one ended with the same question: tell me about a time
                it got you wrong.
              </p>
            </Row>
            <div className="pa-quotes">
              <Quote small who="P06, visual designer">
                “Sometimes I know immediately that an image is wrong, but explaining why takes much longer than just
                knowing it is wrong.”
              </Quote>
              <Quote small who="P07, UI designer">
                “A perfectly reasonable component that you can’t use because it doesn’t belong to your system.”
              </Quote>
              <Quote small who="P08, UX designer">
                “A very clean user journey that looked great in a presentation but didn’t reflect the actual
                complexity of the user’s life.”
              </Quote>
            </div>
            <div>
              <p className="pa-ttl">One session, turn by turn</p>
              <p className="pa-muted">P08 · an elderly patient’s hospital-booking journey · from call notes</p>
            </div>
            <Table head={['Turn', 'Her prompt', 'Her reaction', 'What it tells me']} center={[0]} rows={TURNS_P08} />
          </Block>

          <Block>
            <Row left={<p className="pa-note">What the study changed or confirmed</p>}>
              <p className="pa-body">
                I wrote predictions before the phone calls and let them be wrong. Some held. Others changed my own
                model.
              </p>
            </Row>
            <div className="pa-changes">
              {CHANGES.map(([title, sub, chip, changed]) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p className="pa-muted">{sub}</p>
                  <span className={`pa-chip${changed ? ' pa-chip--chg' : ''}`}>{chip}</span>
                </div>
              ))}
            </div>
          </Block>
        </section>

        {/* ---------------- Define ---------------- */}
        <section id="define" className="pa-wrap pa-section">
          <Block>
            <Row left={<Head phase="Define" title="2:1 Eleven codes, eight sessions" />}>
              <p className="pa-body">
                Every session was coded on the same eleven codes. Three rows tell most of the story: adding a
                constraint was the most common move, the AI asking a question never happened, and no goal ever
                changed.
              </p>
            </Row>
            <Table
              className="pa-table--num pa-table--codes"
              head={['Code', 'P01', 'P02', 'P03', 'P04', 'P05', 'P06', 'P07', 'P08', 'Total']}
              center={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              rows={CODES.map(([code, counts, total, hl]) => ({
                hl,
                cells: [code, ...counts, <b key="t">{total}</b>],
              }))}
            />
            <p className="pa-cap">
              P01–P04 from recordings and exports · P05 from recall · P06–P08 from call notes · one coder
            </p>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:2 Two patterns, one rejected" />}>
              <p className="pa-body">
                My bar for a pattern was at least three of eight sessions with a shared cause. I set that bar after I
                had seen the data, and I say so.
              </p>
            </Row>
            <div className="pa-cards">
              <div className="pa-card">
                <p className="pa-card__i">6 of 8</p>
                <h3>Reactive constraint disclosure</h3>
                <p style={{ marginTop: 6 }}>
                  The constraint that decides success only becomes sayable once a plausible-but-wrong answer shows it
                  is missing.
                </p>
              </div>
              <div className="pa-card">
                <p className="pa-card__i">4 of 8</p>
                <h3>Professional assumption gap</h3>
                <p style={{ marginTop: 6 }}>
                  Only in the four craft tasks (P05–P08), never in the four informational ones.
                </p>
              </div>
              <div className="pa-card pa-card--retired">
                <p className="pa-card__i">Rejected</p>
                <h3>“First-try success”</h3>
                <p style={{ marginTop: 6 }}>
                  P02 and P03 both got it first time, for unrelated reasons: a detailed, example-anchored prompt
                  versus months of personalisation.
                </p>
              </div>
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:3 Point of view and How might we" />}>
              <p className="pa-body">
                On real work, the AI never asked and the goals never changed. Each breakdown was a reasonable answer
                missing a frame nobody said out loud.
              </p>
            </Row>
            <div className="pa-pov">
              <p className="pa-mono">Point of view</p>
              <p>
                A designer working with AI needs a way to bring the unsaid frame into the conversation without first
                putting tacit knowledge into words, because the AI fills every gap with a reasonable default and the
                mismatch only shows up after a wrong answer.
              </p>
            </div>
            <div>
              <p className="pa-mono pa-hmw__label">How might we…</p>
              <ol className="pa-hmw" style={{ marginTop: 16 }}>
                {[
                  '…show the AI’s guess before it answers?',
                  '…let context be added in pieces, not full rewrites?',
                  '…let designers say “not this, more like that” without retyping?',
                  '…let an image carry a feeling that words can’t?',
                  '…fix structure by hand, not by describing it in prose?',
                  '…remember a standing rule after it is said once?',
                ].map((text, i) => (
                  <li key={text}>
                    <span className="pa-hmw__n">{i + 1}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ol>
              <p className="pa-cap" style={{ marginTop: 14 }}>
                Each one traces back to a pattern or a quote from the sessions.
              </p>
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:4 Intent never changed. Expression did." />}>
              <p className="pa-body">
                P08’s four turns look like a change of mind. Her own answer shows the same goal from the first message
                to the last, revealed in stages. Across three close-up episodes, refining didn’t make prompts longer.
                It changed their kind.
              </p>
            </Row>
            <Table
              head={['', 'P06 · visual · tacit', 'P07 · UI · codified', 'P08 · UX · relational']}
              rows={EPISODES}
            />
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:5 Breakdowns, filled only from real sessions" />}>
              <p className="pa-body">
                Every row comes from a session. Two types I expected never happened, and I report them as checked
                nulls instead of stretching the table.
              </p>
            </Row>
            <Table head={['Type', 'Real instance', 'Opportunity it points to']} rows={BREAKDOWNS} />
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:6 Where friction peaks" />}>
              <p className="pa-body">
                Friction peaks at one moment: when a designer knows the answer is wrong but has to put why into words.
                Tacit knowledge is forced into language for the first time. The curve is drawn qualitatively, not
                measured.
              </p>
            </Row>
            <div className="pa-journey">
              <div className="pa-jgrid">
                <span />
                {JOURNEY.stages.map((s) => (
                  <div key={s} className="pa-jgrid__stg">{s}</div>
                ))}
                <span className="pa-jgrid__lab">What they do</span>
                {JOURNEY.does.map((s) => (
                  <div key={s} className="pa-jgrid__do">{s}</div>
                ))}
                <span className="pa-jgrid__lab">Friction</span>
                <div className="pa-jgrid__curve">
                  <svg viewBox="0 0 500 90" role="img" aria-label="Friction curve rising to a peak at naming the mismatch">
                    <line x1="0" y1="82" x2="500" y2="82" stroke="#D9D4E3" strokeWidth="1" />
                    <text x="2" y="12" fontFamily="Jost, sans-serif" fontSize="9" fill="#6E6884">high</text>
                    <polyline points="50,74 150,64 250,40 350,10 450,34" fill="none" stroke="#C2577A" strokeWidth="2" />
                    <g fill="#FFFFFF" stroke="#C2577A" strokeWidth="2">
                      <circle cx="50" cy="74" r="4" />
                      <circle cx="150" cy="64" r="4" />
                      <circle cx="250" cy="40" r="4" />
                      <circle cx="350" cy="10" r="5" fill="#C2577A" />
                      <circle cx="450" cy="34" r="4" />
                    </g>
                  </svg>
                </div>
                <span className="pa-jgrid__lab">What hurts</span>
                {JOURNEY.hurts.map((s) => (
                  <div key={s} className="pa-jgrid__hurt">{s}</div>
                ))}
                <span className="pa-jgrid__lab">Design response</span>
                {JOURNEY.responses.map((s) => (
                  <div key={s} className="pa-jgrid__resp">{s}</div>
                ))}
              </div>
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:7 Insights to design principles" />}>
              <p className="pa-body">
                Each principle traces back to a quote or a pattern. The last three came only from the data; I hadn’t
                imagined them.
              </p>
            </Row>
            <div className="pa-cards pa-cards--four">
              {PRINCIPLES.map(([title, because], i) => (
                <div className="pa-card" key={title}>
                  <p className="pa-card__i">{i + 1}</p>
                  <h3>{title}</h3>
                  <p className="pa-card__k">Because</p>
                  <p>{because}</p>
                </div>
              ))}
              <div className="pa-card pa-card--retired">
                <p className="pa-card__i">Retired</p>
                <h3>“Intent can evolve”</h3>
                <p className="pa-card__k">Because</p>
                <p>
                  No goal changed in eight sessions. Rewritten: design for refining expression, not changing goals.
                </p>
              </div>
            </div>
          </Block>
        </section>

        {/* ---------------- Ideate ---------------- */}
        <section id="ideate" className="pa-wrap pa-section">
          <Block>
            <Row left={<Head phase="Ideate" title="3:1 Eight concepts, each tied to evidence" />}>
              <p className="pa-body">
                I sketched eight design opportunities. These are concepts for SP2 to prototype and test, not validated
                solutions. They come down to two ideas: make the AI’s guess visible, and make context cheap to give.
              </p>
            </Row>
            <p className="pa-group">Make the AI’s guess visible</p>
            <div className="pa-concepts">
              {CONCEPTS_VISIBLE.map((c) => (
                <Concept key={c[1]} item={c} />
              ))}
            </div>
            <p className="pa-group">Make context cheap to give</p>
            <div className="pa-concepts">
              {CONCEPTS_CHEAP.map((c) => (
                <Concept key={c[1]} item={c} />
              ))}
            </div>
            <Row left={null}>
              <Quote who="SP1 synthesis">
                Not one breakdown was the AI misreading English. Each was a reasonable answer missing a frame nobody
                said out loud. That makes it a design problem.
              </Quote>
            </Row>
            <Row left={<p className="pa-note">Limitations, stated plainly</p>}>
              <div className="pa-box">
                <ul>
                  <li>Eight people from my own network, all on ChatGPT.</li>
                  <li>P05 recalled from memory; P06–P08 from call notes only.</li>
                  <li>Three of eight tools assessed from documentation only.</li>
                  <li>A single coder, and the pattern threshold was set after seeing the data.</li>
                  <li>Every goal was already formed before the task began.</li>
                </ul>
              </div>
            </Row>
          </Block>
        </section>

        {/* ---------------- SP2 / case soon ---------------- */}
        <section id="next" className="pa-wrap pa-section">
          <Block>
            <Row left={<Head phase="Prototype · Test · Implement" title="4:0 The intent-aware workspace" />}>
              <p className="pa-body">
                SP2 turns these concepts into an intent-aware workspace for UX designers, and tests it with more
                people and more tools.
              </p>
            </Row>
            <div className="pa-soon-grid">
              {SOON.map(([phase, title, text]) => (
                <div className="pa-soon" key={title}>
                  <p className="pa-ph">{phase}</p>
                  <h3>{title}</h3>
                  <p className="pa-soon__text">{text}</p>
                  <span className="pa-soon__pill">Case soon</span>
                </div>
              ))}
            </div>
          </Block>
        </section>

        {/* ---------------- Learning ---------------- */}
        <section id="reflection" className="pa-wrap pa-reflection pa-reveal">
          <p className="pa-reflection__label">Learning</p>
          <div className="pa-reflection__box">
            <p>
              Watching eight designers showed me the gap was never that people don’t know what they want. It was a
              frame nobody said out loud, and that is something design can fix.
            </p>
          </div>
          <hr className="pa-reflection__rule" />
          <p className="pa-reflection__signoff">Hyderabad, India</p>
          <p className="pa-reflection__signoff">2026</p>
        </section>
      </main>

      <div className="site-fixed-footer site-fixed-footer--transparent">
        <SiteFooter />
      </div>
      <SiteMascot />
      <FloatingPortfolioCTA />
    </div>
  )
}

export default ProjectPromptsArentEnough
