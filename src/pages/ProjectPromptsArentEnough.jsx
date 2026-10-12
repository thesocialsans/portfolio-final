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
import diaryOriginal from '../assets/images/prompts/diary-original-entry.jpg'
import sketchMentalMap from '../assets/images/prompts/sketch-mental-map.png'
import correctionNote from '../assets/images/prompts/correction-note.jpg'
import synthesisMatrix from '../assets/images/prompts/synthesis-matrix.jpg'
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
  {
    cells: [
      'ChatGPT',
      'Live, twice',
      <>Asked 1 of 8, weeks later 3–4 of 8<small>not stable over time: both runs kept, dated</small></>,
    ],
  },
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
      '',
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
  { dim: true, cells: ['Wrong interpretation', 'None: a checked null', ''] },
  { dim: true, cells: ['Evolving intent', 'None: a checked null', ''] },
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
    '02 · “Still missing”: add context in pieces',
    'A small strip under each answer lists what’s still missing; tap to add just that piece.',
    'Reactive constraint disclosure, 6 of 8: context arrived only when an answer exposed its absence.',
    'fewer full-prompt rewrites per task?',
    'Pencil sketch of “Still missing”: add context in pieces',
  ],
  [
    concept03,
    '03 · “Reading it as…”: make the guess visible',
    'A dismissible chip names the AI’s reading before it answers, with other directions one tap away.',
    '4 of 8 silent professional defaults (P05–P08), and 0 clarifying questions.',
    'A/B against the silent default on design and research tasks',
    'Pencil sketch of “Reading it as…”: make the guess visible',
  ],
  [
    concept04,
    '04 · “Not that, more like this”',
    'Tap the phrase or block that’s wrong; two buttons appear right there. No new paragraph.',
    'Every real repair was already contrastive: “not obviously eco”, “don’t introduce new component types”.',
    'repair turns vs typed corrections',
    'Pencil sketch of “Not that, more like this”',
  ],
]

const CONCEPTS_CHEAP = [
  [
    concept05,
    '05 · “Split it”: structural repair by hand',
    'Drag a generated block into two, the way you’d ungroup sticky notes.',
    'P08’s decisive fix was structural, typed as prose: “separate what the elderly user does from what the caregiver does”.',
    'on journey and layout tasks, where structure is the fix',
    'Pencil sketch of “Split it”: structural repair by hand',
  ],
  [
    concept06,
    '06 · “Show, don’t tell”: images as input',
    'A dropped reference image carries the same weight as a typed sentence.',
    'P06: “Showing it a reference or moodboard would be much easier than trying to explain the feeling.”',
    'reference images vs verbal contrastive repair, on visual tasks',
    'Pencil sketch of “Show, don’t tell”: images as input',
  ],
  [
    concept07,
    '07 · “Remember this?”: context that persists',
    'When a correction sounds like a standing rule, one tap keeps it for next time.',
    'P07 and P08 each asked for it unprompted: the component library, the persona “once”.',
    'does it cut first-turn assumption errors?',
    'Pencil sketch of “Remember this?”: context that persists',
  ],
  [
    concept08,
    '08 · “What got you there”: learn from your own fix',
    'After a multi-turn fix, a small recap shows first vs final message, the difference underlined.',
    'P04 named “a lack of knowledge in how to prompt”; he edits output in email instead of refining in chat.',
    'does in-chat refinement increase over sessions?',
    'Pencil sketch of “What got you there”: learn from your own fix',
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

const SCOPE_ROWS = [
  { cells: ['UX and product designers, mixed AI experience', 'Designing a new AI product (that’s SP2)'] },
  { cells: ['Real, professional tasks', 'Voice and multimodal (text only)'] },
  { cells: ['General-purpose chat assistants', 'Model internals'] },
  { cells: ['The full multi-turn conversation', 'Claims about “designers in general”'] },
]

const METHOD_PHASES = [
  'Frame the problem',
  'Literature review',
  'Conceptual framework',
  'Product audit',
  'Research design',
  'Task study',
  'Post-task interviews',
  'Raw dataset',
  'First-order coding',
  'Affinity map',
  'Intent–expression gap',
  'Breakdown framework',
  'Interaction journey',
  'Synthesis',
  'Design opportunities',
]

const DEFINITION_CARDS = [
  ['23 July', 'How does it end?', 'In convergence, or in abandonment. Giving up and doing it yourself is a real ending too.'],
  [
    '26 July',
    'Convergence is not repair',
    'You can repair five times and never converge, so the interview asked “how did you know it was done?” on its own.',
  ],
  [
    '23 July',
    'Intent-aware interaction',
    'A property of the interaction, not the model alone. A strong model behind an interface that hides its guesses still fails, so a designer can help.',
  ],
]

const PAPERS = [
  { cells: ['Amershi et al., Guidelines for Human-AI Interaction', 'CHI', '18 system-side guidelines'] },
  { cells: ['Li, Vorvoreanu, DeBellis, Amershi, factorial surveys', 'Microsoft / Purdue', '1,000+ participants test them'] },
  { cells: ['Bertao & Joo, “Hey Alexa, would you create a color palette?”', 'Survey, 123 designers', 'Familiarity lowers resistance'] },
  { cells: ['Li et al., UX professionals’ perceptions of GenAI', 'CHI ’24', 'Careers, not mechanics'] },
  { cells: ['Chatterji et al., How People Use ChatGPT', 'NBER, 2025', 'Writing dominates work use'] },
  { cells: ['Wang et al., zero-shot clarifying question generation', 'WWW ’23', 'Asking, in search only'] },
  { cells: ['Bi, Ai & Croft, clarifying questions from negative feedback', 'ICTIR ’21', 'After “no”, ask differently'] },
  { hl: true, cells: ['Zamfirescu-Pereira et al., Why Johnny Can’t Prompt', 'CHI ’23', 'Closest to my premise'] },
  { cells: ['Schulhoff et al., The Prompt Report', 'Survey', 'A glossary, not evidence'] },
  { cells: ['Vanderlyn, Väth & Vu, mental models, adaptive agent', 'Stuttgart', 'Contradictory beliefs'] },
]

const INTENT_STATES = [
  { cells: ['Latent', 'Anchored: expectations exist before use'] },
  { cells: ['Expressed', 'Anchored: matches the Prompt Report'] },
  { cells: ['AI-interpreted', 'Anchored: “don’t say X” ignored (Johnny)'] },
  { hl: true, cells: ['Evaluated', 'A gap: no paper isolates the noticing moment'] },
  { cells: ['Negotiated', 'Hypothesis only'] },
  { cells: ['Converged', 'My own concept'] },
]

const LOCKED_PROMPTS = [
  { cells: ['1 Explicit', '“Rewrite this paragraph to be more concise: [text]”'] },
  { hl: true, cells: ['2 Ambiguous', '“Can you help me with this presentation?”'] },
  { cells: ['3 Implicit', '“Make this email sound better”'] },
  { cells: ['4 Context', 'Audience set early, then a dependent ask'] },
  { cells: ['5 Evolving', 'Goal pivoted mid-conversation'] },
  { cells: ['6 Misread', 'Vague, with a plausible wrong reading'] },
  { cells: ['7 Correction', '“That’s not what I meant”, nothing more'] },
  { cells: ['8 Multi-turn', 'A task needing 3–4 exchanges'] },
]

const ROUND_ONE = [
  { hl: true, cells: ['ChatGPT', '1', '5 yes · 2 partial · 1 no'] },
  { cells: ['Gemini', '6', '3 yes · 4 open · 1 in progress'] },
  { cells: ['Claude', '3', 'Mostly yes or tentative'] },
  { cells: ['Copilot', '4', '3 yes · 3 not yet · 1 tentative · 1 gradual'] },
]

const WHO_TOOK_PART = [
  { cells: ['8 designers from my network', 'A convenience sample, stated plainly'] },
  { cells: ['Spread of seniority', 'Juniors and seniors differ (UX professionals’ perceptions)'] },
  { cells: ['Spread of AI familiarity', 'Habits shape comfort (Bertao & Joo)'] },
  { cells: ['Verbal consent script', 'A small pilot, not a formal IRB process'] },
]

const SESSION_STEPS = [
  { cells: ['Consent and framing', '2'] },
  { cells: ['Task with think-aloud', 'The rest of the session'] },
  { cells: ['Post-task questions', '8'] },
  { cells: ['Close', '2'] },
]

const POST_TASK_QUESTIONS = [
  'What were you actually trying to achieve?',
  'What did you expect the AI to understand?',
  'When did you realise it had misunderstood you?',
  'Why did you change your prompt at that point?',
  'What did you add that wasn’t in your first attempt?',
  'How did you know it was done, or good enough?',
  'What would have made this easier?',
]

const SHEET_FIELDS = [
  'Actual goal',
  'Initial prompt',
  'AI interpretation',
  'AI response',
  'User reaction',
  'Mismatch',
  'Repair',
  'Final intent',
  'Convergence',
]

const ACCOUNTS = [
  [
    'P01 · design student',
    'What he wrote on his sheet',
    'Goal: “To write an effective mail.” Response: “The first one is longer (unnecessary). The second and final one is good to go.” Mismatch: “The initial response was longer than expected.” Repair: “Successfully.” Final intent: “Achieved.”',
  ],
  [
    'P02',
    'A useful negative case',
    'One long prompt with a car-buying analogy, one long answer, no repair. He uses AI for research only, never for designing, and has no ChatGPT account of his own.',
  ],
  [
    'P03',
    'Why it worked first time',
    'He uses ChatGPT Pro, personalised over months to his own thinking and design process. An outlier caused by personalisation, not a baseline.',
  ],
  [
    'P04',
    'Re-prompting wasn’t in his toolkit',
    'He saw his first prompt was vague only after reading the answer. Usually he edits the output in email instead of refining in the chat. He named “a lack of knowledge in how to prompt”.',
  ],
]

const TURNS_P05 = [
  { cells: ['1', 'Asked for pain points and opportunities; got themes, then features straight away'] },
  { cells: ['2', '“No solutions yet”: a problem and cause table'] },
  { cells: ['3', 'Separate what users said from the AI’s interpretation: usable'] },
]

const TURNS_P06 = [
  { cells: ['1', '“…premium sustainable skincare brand… natural, sophisticated and modern.”', '“It looks like every sustainable skincare brand.”'] },
  { cells: ['2', '“I don’t want it to look obviously eco-friendly…”', '“Better, but it’s becoming too cold.”'] },
  { hl: true, cells: ['3', '“…add warmth and some imperfection.”', '“This is much closer.”'] },
]

const TURNS_P07 = [
  { cells: ['1', '“Design a dashboard for a finance app…”', '“This wouldn’t fit our product.”'] },
  { cells: ['2', '“Make it more enterprise… not every section a separate card.”', ''] },
  {
    hl: true,
    cells: [
      '3',
      '“Use an 8 point grid, 4px spacing increments, 8px corner radius… Don’t introduce new component types.”',
      '“Closer to something I could actually take into Figma.”',
    ],
  },
]

const AFFINITY = [
  { cells: ['Intent formulation', 'Every goal existed before the first word'] },
  { cells: ['Prompt expression', 'Vagueness is invisible while typing'] },
  { cells: ['Context', 'Supplied on demand, when an answer exposed its absence'] },
  { cells: ['Ambiguity', 'Each misreading was a reasonable majority reading'] },
  { cells: ['AI assumptions', 'Fired once, on the first prompt, never recurred'] },
  { cells: ['Mismatch', 'A fit problem, not an accuracy problem'] },
  { cells: ['Repair', 'Format-only and substance-redirecting repairs differ'] },
  { cells: ['Convergence', 'A statable checklist, or a felt match'] },
  { cells: ['Intent evolution', 'Honest null: the goal never changed'] },
  { cells: ['Cognitive effort', 'Honest null: nothing measured, three complaints'] },
]

const CANDIDATES = [
  { cells: ['P01', 'Too long → shortened', 'No: never touched intent'] },
  { cells: ['P04', 'Table only → reformatted', 'No: content never wrong'] },
  { cells: ['P05', 'Solutions too early → problems', 'Same shape as P07, and recalled'] },
  { hl: true, cells: ['P06', 'Eco cliché → contrast', 'Selected'] },
  { hl: true, cells: ['P07', 'Off-system → spec list', 'Selected'] },
  { hl: true, cells: ['P08', 'Accessibility only → two actors', 'Selected'] },
]

const SYNTHESIS = [
  { cells: ['How is intent expressed?', 'One front-loaded ask, rarely with the criteria that decide success'] },
  { cells: ['How much is implicit?', 'Norms, stage, aesthetic, relationships: it depends on the task'] },
  { hl: true, cells: ['How does intent change?', 'It doesn’t. It is disclosed in stages.'] },
  { cells: ['Why refine?', 'A plausible-but-wrong answer makes the gap nameable'] },
  { cells: ['How is a miss detected?', 'Immediately, before they can say why'] },
  { cells: ['How do people repair?', 'Format-only · substance-redirecting · structural'] },
  { cells: ['What do assumptions cost?', 'Notice → diagnose → state: three steps forced on the user'] },
  { cells: ['When do users feel understood?', 'A checklist (P01–P04) or a felt match (P05–P08)'] },
  { cells: ['What effort is unnecessary?', 'Re-explaining, with language as the only channel'] },
]

const FRAMEWORK = [
  { cells: ['P01', 'Explicit', 'Near-complete', 'Stable', 'Low (1)'] },
  { cells: ['P02', 'Explicit', 'Complete', 'Stable', 'None (0)'] },
  { cells: ['P03', 'Explicit', 'Complete', 'Stable', 'None (0)'] },
  { cells: ['P04', 'Implicit', 'Incomplete', 'Stable', 'Low–medium (2)'] },
  { cells: ['P05', 'Implicit', 'Incomplete', 'Stable', 'Medium (2)'] },
  { cells: ['P06', 'Implicit', 'Incomplete', 'Stable', 'Medium (2)'] },
  { cells: ['P07', 'Implicit', 'Incomplete', 'Stable', 'Medium (2)'] },
  { cells: ['P08', 'Implicit', 'Incomplete', 'Stable', 'High (3 + structural)'] },
]

const CONTRIBUTION = [
  { cells: ['HCI research', 'The missing half: how people express, notice and repair'] },
  { cells: ['AI product teams', 'Fit, not accuracy: surfacing the frame is a design lever'] },
  { cells: ['Designers', 'Names what we leave unsaid because it feels obvious'] },
  { cells: ['Method', 'Predictions written in advance, sources labelled, nulls reported'] },
]

const SP2_PLAN = [
  { cells: ['Assumption chip vs silent default', 'A real repair-effort measure'] },
  { cells: ['Persistent context profile', 'More people, more tools'] },
  { cells: ['Reference-image input', 'Exploratory tasks'] },
  { cells: ['A restructure action', 'A row for “silent refusal”'] },
]

const REFERENCES = [
  'Amershi et al. Guidelines for Human-AI Interaction. CHI.',
  'Li, Vorvoreanu, DeBellis, Amershi. Assessing Human-AI Interaction Early through Factorial Surveys.',
  'Bertao, Joo. “Hey Alexa, Would You Create a Color Palette?”',
  'Li et al. UX Professionals’ Perceptions of GenAI. CHI ’24.',
  'Chatterji et al. How People Use ChatGPT. NBER, 2025.',
  'Schulhoff et al. The Prompt Report.',
  'Wang et al. Zero-shot Clarifying Question Generation. WWW ’23.',
  'Bi, Ai, Croft. Asking Clarifying Questions Based on Negative Feedback. ICTIR ’21.',
  'Zamfirescu-Pereira et al. Why Johnny Can’t Prompt. CHI ’23.',
  'Vanderlyn, Väth, Vu. Users’ mental models and an adaptive dialog agent.',
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
      {who && <p className="pa-quote__who">{who}</p>}
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
            <Row left={<p className="pa-note pa-note--sky">Cut from the first draft</p>}>
              <p className="pa-body">
                “Is there a type of person who’s better at this?” I had no honest method to answer it, so it went.
              </p>
            </Row>
            <Row left={<p className="pa-note">Scope, 27 July</p>}>
              <div className="pa-flow">
                <Table head={['In scope', 'Deliberately out']} rows={SCOPE_ROWS} />
                <p className="pa-cap">Writing the negative space clarified more than the scope did.</p>
              </div>
            </Row>
            <Row left={<p className="pa-note">Method: fifteen phases, one rule</p>}>
              <div className="pa-box">
                <ol className="pa-method">
                  {METHOD_PHASES.map((phase) => (
                    <li key={phase}>{phase}</li>
                  ))}
                </ol>
                <p className="pa-method__rule">One rule across all fifteen: no fabricated data.</p>
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
            <Row left={<Head phase="Empathize" title="1:3 The question underneath" />}>
              <p className="pa-body">
                “Is the AI misunderstanding me, or am I just bad at saying what I actually want? Or is that gap
                itself the interesting thing to study?” I chose to study the gap.
              </p>
            </Row>
            <div className="pa-photos pa-photos--map">
              <figure className="pa-fig pa-sketch">
                <img
                  src={sketchMentalMap}
                  alt="Pencil flow: me, a goal in my head; try to put it in words; prompt; the AI reads it literally; leaves stuff out because it felt obvious and fills gaps with its own assumptions; both lead to a mismatch"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  My first mental map, redrawn in pencil: then, “ugh, not what I meant”. Try again, but how?
                </figcaption>
              </figure>
              <figure className="pa-fig">
                <img
                  src={diaryOriginal}
                  alt="The original handwritten diary entry of 18 July: a flow from a goal to a prompt to a mismatch, ending: try again, but how?"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>The original entry, 18 July</figcaption>
              </figure>
            </div>
            <Row left={<p className="pa-note">A bias I named early, 19 July</p>}>
              <p className="pa-body">
                I kept taking the user’s side. So I wrote it down: the point is to study the gap, not to build a case
                against the AI.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:4 A prompt is not the intent behind it" />}>
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
            <div className="pa-cards">
              {DEFINITION_CARDS.map(([date, title, text]) => (
                <div className="pa-card" key={title}>
                  <p className="pa-card__i">{date}</p>
                  <h3>{title}</h3>
                  <p style={{ marginTop: 6 }}>{text}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:5 What research already knew" />}>
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
                <h3>Zero-shot clarifying questions</h3>
                <p className="pa-muted">WWW ’23, ICTIR ’21</p>
                <p style={{ marginTop: 8 }}>
                  Systems can ask good clarifying questions, but only studied in search, from the system’s side.
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
            <Row left={<p className="pa-note">The ten papers, 30 July – 21 August</p>}>
              <Table head={['Paper', 'Venue', 'What it gave me']} rows={PAPERS} />
            </Row>
            <Row left={<p className="pa-note pa-note--sky">Depth over count</p>}>
              <p className="pa-body">
                Ten papers read fully, not fifteen to twenty padded ones. Two were scanned PDFs, read page by page as
                images. Cognitive load stayed empty and trust only partly filled: named as gaps, not filled with weak
                papers.
              </p>
            </Row>
            <div className="pa-photos pa-photos--synth">
              <figure className="pa-fig">
                <img
                  src={correctionNote}
                  alt="Handwritten reading note: a paper first rated High relevance, crossed out and downgraded to Medium, with a research problem boxed"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  A correction I made, 19 August: rated “High” from its title, downgraded to “Medium” once read. Never
                  rate relevance off a title.
                </figcaption>
              </figure>
              <figure className="pa-fig">
                <img
                  src={synthesisMatrix}
                  alt="The handwritten synthesis matrix of the ten papers with highlighted cells"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>The synthesis matrix, 21 August</figcaption>
              </figure>
              <div className="pa-box pa-box--side">
                <p className="pa-mono">Johnny, Amershi, mental models</p>
                <ul>
                  <li>Non-experts generalise from one try and avoid examples.</li>
                  <li>Stating capability alone can inflate expectations unless paired with its limits.</li>
                  <li>Users disagree on the “right” way to talk to a system (188 dialogs).</li>
                </ul>
              </div>
            </div>
            <Row left={<p className="pa-note">Conceptual framework, 22 August: each intent state checked against the reading</p>}>
              <Table head={['Intent state', 'Evidence status']} rows={INTENT_STATES} />
            </Row>
            <Row left={<p className="pa-note pa-note--sky">The open fork, 22 August</p>}>
              <p className="pa-body">
                Does a general-purpose assistant ask, or guess? The literature couldn’t say, so the product audit had
                to test it.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:6 Testing the tools first" />}>
              <p className="pa-body">
                The reading left one question open: when a request is unclear, does a general assistant ask, or
                guess? I wrote eight locked prompts, from clear (“make this paragraph concise”) to vague (“Can you
                help me with this presentation?”), and ran exactly the same eight on every tool, logging each run by
                hand.
              </p>
            </Row>
            <Row left={<p className="pa-note">Eight locked prompts, the same for every tool, 23 August</p>}>
              <Table head={['Scenario', 'Locked test prompt']} rows={LOCKED_PROMPTS} />
            </Row>
            <Row left={<p className="pa-note">Round one: 32 runs, real counts</p>}>
              <Table head={['Tool', 'Asked (of 8)', 'Converged']} rows={ROUND_ONE} />
            </Row>
            <Row left={<p className="pa-note pa-note--sky">Scenario 2, “Can you help me with this presentation?”</p>}>
              <p className="pa-body">
                ChatGPT guessed a kind of help and never converged. Gemini and Copilot asked what help was needed.
                Claude was self-tested in a chat that carried the project’s history, so its row is not a zero-context
                test.
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
            <Row left={<Head phase="Empathize" title="1:7 Eight designers, their own real work" />}>
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
            <Row left={<p className="pa-note">Who took part, 25–29 August</p>}>
              <Table head={['Decision', 'Why']} rows={WHO_TOOK_PART} />
            </Row>
            <Row left={<p className="pa-note">The session, about 27 minutes</p>}>
              <div className="pa-flow">
                <Table head={['Step', 'Minutes']} rows={SESSION_STEPS} />
                <p className="pa-cap">
                  The invite promised 20–25 minutes, so I trimmed questions rather than run over.
                </p>
              </div>
            </Row>
            <div className="pa-cards">
              <div className="pa-card">
                <h3>Seven post-task questions</h3>
                <ol className="pa-card__list">
                  {POST_TASK_QUESTIONS.map((q, i) => (
                    <li key={q}>{i === 0 ? <b>{q}</b> : q}</li>
                  ))}
                </ol>
              </div>
              <div className="pa-card">
                <h3>The sheet each person filled</h3>
                <p className="pa-muted">Phase 08 · raw dataset template</p>
                <ol className="pa-card__list">
                  {SHEET_FIELDS.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ol>
              </div>
              <div className="pa-card">
                <h3>Predictions, written before the calls</h3>
                <p style={{ marginTop: 8 }}>UX (P05, P08): a workflow-stage gap. P05 matched, P08 adjacent.</p>
                <p style={{ marginTop: 8 }}>Visual (P06): tacit aesthetic, refined by contrast. Matched.</p>
                <p style={{ marginTop: 8 }}>UI (P07): unstated design-system rules. Matched.</p>
                <p style={{ marginTop: 10, fontWeight: 600 }}>
                  Three hits with nuance out of four, not a clean sweep.
                </p>
              </div>
            </div>
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
            <Row left={<Head phase="Empathize" title="1:8 What they actually typed" />}>
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
            <Row left={<Head phase="Empathize" title="1:9 In their own account" />}>
              <p className="pa-body">
                What each in-person participant told me afterwards changed how I read their session.
              </p>
            </Row>
            <div className="pa-cards pa-cards--four">
              {ACCOUNTS.map(([who, title, text]) => (
                <div className="pa-card" key={who}>
                  <p className="pa-card__i">{who}</p>
                  <h3>{title}</h3>
                  <p style={{ marginTop: 6 }}>{text}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:10 Three critical incidents" />}>
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
            <div>
              <p className="pa-ttl">P05 · UX designer · phone, 7 Sep · recalled from memory</p>
              <p className="pa-muted">Synthesis of 8 user interviews · paraphrased, the weakest data in the set</p>
            </div>
            <Table head={['Turn', 'What happened']} center={[0]} rows={TURNS_P05} />
            <div>
              <p className="pa-ttl">P06 · visual designer · phone, 9 Sep · call notes</p>
              <p className="pa-muted">Premium sustainable skincare</p>
            </div>
            <Table head={['Turn', 'Her prompt', 'Her reaction']} center={[0]} rows={TURNS_P06} />
            <div>
              <p className="pa-ttl">P07 · UI designer · phone, 11 Sep · call notes</p>
              <p className="pa-muted">Enterprise finance dashboard</p>
            </div>
            <Table head={['Turn', 'His prompt', 'His reaction']} center={[0]} rows={TURNS_P07} />
            <Row left={<p className="pa-note">P05 and P08: two UX designers, same probes</p>}>
              <p className="pa-body">
                Both distrust AI synthesis without checking the source. Both saw it narrow the problem too early.
              </p>
            </Row>
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
            <div className="pa-cards pa-cards--two">
              <div className="pa-card">
                <p className="pa-card__i pa-card__i--rose">The finding that surprised me most</p>
                <h3>0 of 8 on real work</h3>
                <p style={{ marginTop: 6 }}>
                  On real work the AI never once asked. Yet on the audit’s deliberately ambiguous prompts, tools asked
                  on up to 6 of 8.
                </p>
              </div>
              <div className="pa-card">
                <p className="pa-card__i">Why the two disagree</p>
                <h3>Real tasks carry context</h3>
                <p style={{ marginTop: 6 }}>
                  Real tasks arrive with enough context that the model always has something plausible to run with.
                  Ambiguity designed for testing is not ambiguity as it shows up in work.
                </p>
              </div>
            </div>
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
            <Row left={<Head phase="Define" title="2:3 Affinity mapping" />}>
              <p className="pa-body">
                Clustering every note and code showed what each part of the conversation revealed, including two
                honest nulls.
              </p>
            </Row>
            <Table head={['Cluster', 'What it revealed']} rows={AFFINITY} />
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:4 Point of view and How might we" />}>
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
            <Row left={<Head phase="Define" title="2:5 Six candidates, three written up" />}>
              <p className="pa-body">
                Six sessions had a real mismatch and repair. I wrote up three, each a different kind of hidden intent.
              </p>
            </Row>
            <Table head={['Session', 'Mismatch → repair', 'Decision']} rows={CANDIDATES} />
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:6 Intent never changed. Expression did." />}>
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
            <Row left={<p className="pa-note pa-note--sky">P06, the hidden layer</p>}>
              <Quote who="P06, visual designer">
                “I’m thinking in images, composition and texture, but I have to convert all of that into adjectives.”
              </Quote>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:7 Breakdowns, filled only from real sessions" />}>
              <p className="pa-body">
                Every row comes from a session. Two types I expected never happened, and I report them as checked
                nulls instead of stretching the table.
              </p>
            </Row>
            <Table head={['Type', 'Real instance', 'Opportunity it points to']} rows={BREAKDOWNS} />
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:8 Where friction peaks" />}>
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
            <Row left={<Head phase="Define" title="2:9 Synthesis, answered from evidence" />}>
              <p className="pa-body">Each research question, answered only from what the sessions showed.</p>
            </Row>
            <Table head={['Question', 'What the data shows']} rows={SYNTHESIS} />
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:10 Testing my own framework" />}>
              <p className="pa-body">
                Four axes went in; two survived. Stability never varied, and explicitness and completeness moved
                together.
              </p>
            </Row>
            <Table
              head={['P', 'Explicitness', 'Completeness', 'Stability', 'Repair effort']}
              rows={FRAMEWORK}
            />
            <Row left={<p className="pa-note">The revision</p>}>
              <p className="pa-body">
                Two real axes: <b>upfront specification</b>, and <b>repair effort and type</b>. Stability split into
                goal stability, which never moved, and expression stability, which moved a lot. The data corrected my
                own model.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:11 Insights to design principles" />}>
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

          <Block>
            <Row left={<Head phase="Contribution" title="Why this matters" />}>
              <p className="pa-body">What SP1 adds, for whom.</p>
            </Row>
            <Table head={['For', 'Value']} rows={CONTRIBUTION} />
            <Row left={<p className="pa-note">It changed my own starting model</p>}>
              <div className="pa-flow">
                <p className="pa-body">
                  “Evolving intent” retired · four axes became two · a third audit mode (refuse) · a new repair type
                  (structural).
                </p>
                <Quote who="">
                  A smaller, fully honest study that survives scrutiny is worth more than a bigger one that doesn’t.
                </Quote>
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
            <Row left={<p className="pa-note">The SP2 plan</p>}>
              <Table head={['Prototype and test', 'Strengthen the evidence']} rows={SP2_PLAN} />
            </Row>
          </Block>
        </section>

        {/* ---------------- References ---------------- */}
        <section className="pa-wrap pa-section">
          <Block>
            <Row left={<Head phase="References" title="Primary sources" />}>
              <ul className="pa-refs">
                {REFERENCES.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Row>
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
