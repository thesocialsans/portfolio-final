import { useEffect, useRef, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SiteMascot from '../components/SiteMascot'
import FloatingPortfolioCTA from '../components/FloatingPortfolioCTA'
import ProjectSectionNav from '../components/ProjectSectionNav'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/siteFrame.css'
import heroBusPlan from '../assets/images/conductor/hero-bus-plan.png'
import diagramRail from '../assets/images/conductor/diagram-rail.png'
import diagramMindmap from '../assets/images/conductor/diagram-mindmap.png'
import diagramReceipt from '../assets/images/conductor/diagram-receipt.png'
import diagramQuestions from '../assets/images/conductor/diagram-questions.png'
import diagramFaretree from '../assets/images/conductor/diagram-faretree.png'
import diagramCognitive from '../assets/images/conductor/diagram-cognitive.png'
import diagramJourney from '../assets/images/conductor/diagram-journey.png'
import diagramKit from '../assets/images/conductor/diagram-kitdiagram.png'
import diagramReach from '../assets/images/conductor/diagram-reachmap.png'
import diagramUserFlow from '../assets/images/conductor/diagram-userflow.png'
import diagramSwimlane from '../assets/images/conductor/diagram-swimlane.png'
import diagramMeasures from '../assets/images/conductor/diagram-fivemeasures.png'
import diagramContrast from '../assets/images/conductor/diagram-contrast.png'
import diagramPalette from '../assets/images/conductor/diagram-palette.png'
import diagramComponents from '../assets/images/conductor/diagram-components.png'
import diagramBrand from '../assets/images/conductor/diagram-brand.png'
import diagramHaptics from '../assets/images/conductor/diagram-haptics.png'
import conceptJoystick from '../assets/images/conductor/concept-joystick.png'
import conceptCardTap from '../assets/images/conductor/concept-card-tap.png'
import conceptKiosk from '../assets/images/conductor/concept-kiosk.png'
import conceptApp from '../assets/images/conductor/concept-app.png'
import conceptVoice from '../assets/images/conductor/concept-voice.png'
import conceptRing from '../assets/images/conductor/concept-ring.png'
import productSketch from '../assets/images/conductor/product-sketch.png'
import wireframesA from '../assets/images/conductor/wireframes-idle-composed-error.png'
import wireframesB from '../assets/images/conductor/wireframes-start-mixed-digital.png'
import wireframesC from '../assets/images/conductor/wireframes-issued-unconfirmed-close.png'
import coinChangerFront from '../assets/images/conductor/coin-changer-front.png'
import coinPlanFlow from '../assets/images/conductor/coin-plan-flow.png'
import dayNight from '../assets/images/conductor/day-night.png'
import typicalVsSunlight from '../assets/images/conductor/typical-vs-sunlight.png'
import kitOnConductor from '../assets/images/conductor/kit-on-conductor.png'
import busInterior from '../assets/images/conductor/bus-interior.webp'
import busAisle from '../assets/images/conductor/bus-aisle.webp'
import beltPrinterPhoto from '../assets/images/conductor/belt-printer-photo.png'
import coinChangerPhoto from '../assets/images/conductor/coin-changer-photo.png'
import './ProjectConductorCompanion.css'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'understand', label: 'Understand' },
  { id: 'define', label: 'Define' },
  { id: 'ideate', label: 'Ideate' },
  { id: 'prototype', label: 'Prototype' },
  { id: 'test', label: 'Test' },
  { id: 'implement', label: 'Implement' },
  { id: 'reflection', label: 'Learning' },
]

const STATS_ONE = [
  { n: '4', t: 'Questions before my ticket printed', s: 'Field ride' },
  { n: '7', t: 'Jobs the conductor holds at once', s: 'Conductor talk + ride' },
  { n: '5', t: 'Touches for 3 passenger, one screen', s: 'The design' },
]

const STATS_TWO = [
  { n: '4', t: 'Questions before my ticket printed', s: 'Field ride' },
  { n: '4', t: 'Fare types he tracks at once', s: 'Conductor talk' },
  { n: '₹25', t: 'My fare, Marathahalli → Hebbal', s: 'Field ride' },
  { n: '1 + 1', t: 'Conductor talk + ride', s: 'Direction, not proof' },
]

const RIDE_STEPS = [
  ['Boards', 'Marathahalli', 'Conductor points me to the front seats reserved for women', 'He manages seating and safety, not just tickets'],
  ['Says the stop', '“Hebbal”', 'He comes to my seat to ask; I don’t go to him', 'The device must work wherever he stands in the aisle'],
  ['Shakti check', 'Karnataka Aadhaar?', 'I don’t have one, so I pay the full fare', 'Free travel is an ID judgement, not just a button press'],
  ['How many?', 'One', 'Group size is asked as its own question', 'Count is separate from the stop: a counter, not a menu'],
  ['Fare', '₹25, said aloud', 'He types on the ETM keypad, then tells me the amount', 'The amount is spoken: it should be the biggest thing on screen'],
  ['Cash or UPI?', 'I say GPay', 'Payment mode is asked every time', '4 questions before anything prints: the screen should follow them'],
  ['Pays', 'QR on his device', 'I scan, pay in my app and wait; then the ticket is generated', 'Digital adds a wait: printing should follow payment by itself'],
  ['During the ride', 'to Hebbal', 'In the rush, requests and money pass hand to hand; people shout; some ask where to get off', 'He can’t see who is paying, and he is also the stop announcer'],
]

const CHANGES = [
  ['Each ticket is a 4-question conversation', 'Screen order follows it: stop → passenger types (Shakti) → count → payment', false],
  ['Shakti needs a Karnataka ID check', 'Shakti stays one tap; the ID judgement stays with the conductor, no extra screen', true],
  ['The fare is said aloud', 'The total is the largest number on screen', false],
  ['The ETM is familiar but slow', 'Keep numbers visible and positions fixed (familiar); remove keypad typing with predicted stops', false],
  ['Payment mode is asked every time; QR shown on the device', 'One digital screen for QR and tap; the ticket prints by itself when paid', true],
  ['He walks to each passenger; requests and money are relayed in the crowd', 'One printed slip per group, a total he can call out, a screen that can face the passenger', false],
  ['Passengers ask where to get off', 'The next stop is the largest item on the glance bar, which also helps him announce it', true],
  ['Whistling and shouting', 'Feedback by haptics, not sound', false],
  ['Safety and the driver are also his job', 'Every second on the device is taken from safety: the reason for the 5-touch target', false],
]

const PHYSICAL = [
  ['One hand on a pole, cash or change; phone in the other', 'Every action reachable by the thumb of the phone hand. No two-hand gestures.'],
  ['Bus brakes, sways, gets crushed', 'Big targets, spacing between them, no accidental commits.'],
  ['Glare through windows, sweat on the screen', 'High contrast, large numerals, few elements. Wet-finger tolerant controls.'],
  ['Eyes are on the passenger and the money, not the device', 'Feedback by feel (haptics) and position, not only by reading.'],
  ['Noise from engine and traffic', 'Sound cannot be the main feedback.'],
  ['Long shifts, many hundreds of tickets', 'Small savings per ticket add up. Fatigue raises errors late in the shift.'],
  ['Conductor pays for cash shortfalls', 'Every ticket, void and payment must be traceable. Trust in the totals matters more than speed.'],
]

const ASSUMPTIONS = [
  ['A1', 'Hardware: a mid-range Android phone (6–6.5") plus a small Bluetooth thermal printer clipped to the conductor’s bag', 'Print is a separate, irreversible step; app must handle printer states', 'Ask BMTC ops; check current pilot devices'],
  ['A2', 'Most conductors hold the phone in the right hand, but not all', 'Layout mirrors for left hand (one setting at shift start)', 'Observe 10+ conductors'],
  ['A3', 'Fare depends on number of stages travelled; direction is fixed per trip', 'Only stages ahead of the bus are selectable', 'Fare chart review'],
  ['A4', 'A few destinations account for most tickets from any stage', 'Show predicted top destinations first', 'Waybill data analysis'],
  ['A5', 'Passenger types: full, child, Shakti (free for eligible women on non-AC buses), concession pass holders', 'Category counters, with Shakti as a first-class button', 'Shakti rules; depot interview'],
  ['A6', 'Conductors read Kannada and numerals fastest; many are not fluent in English', 'Stage names in Kannada with English below; numerals large', 'Ask conductors; A/B label test'],
  ['A7', 'Network is unreliable on some stretches', 'Cash and tickets work fully offline; UPI needs network and is handled honestly', 'Signal map along a route'],
  ['A8', 'Ticket still needs to be printed (audit, checking squad)', 'Keep printing; offer e-ticket QR as an option, not a replacement', 'Confirm with BMTC audit rules'],
]

const PAIN_POINTS = [
  ['Too many passengers while doing several jobs at once', 'Ticketing, passenger safety and the driver’s conduct; first responsible for everything on the bus', 'c', 'Need almost no attention: fixed positions, no menus'],
  ['Too many fare types to track', 'Passes, tickets, Shakti with a Karnataka ID check, half tickets for children, full for adults', 'cr', 'Each fare type one tap; Shakti fastest'],
  ['Change exchange', 'Named as a top frustration', 'c', 'Change shown as coins; change owed printed on the ticket'],
  ['The ETM is slow in a rush', 'All numbers and buttons; familiar, but four seconds is hard', 'c', 'Keep muscle memory: buttons never move'],
  ['Noise', 'Constant whistling, people shouting', 'cr', 'Confirm by buzz and print, not by sound'],
  ['Each ticket is a multi-step conversation', '4 questions before my ticket printed', 'r', 'Cut questions: predict the stop, one screen for every payment'],
  ['Communication relayed through the crowd', 'Requests and money passed hand to hand', 'r', 'The total stays large so it can be called out'],
  ['Passengers unsure of their stop', 'The conductor tells them where to get off', 'r', 'Next stop is the largest item on the glance bar'],
  ['Digital payment adds a wait', 'QR shown on the device; the passenger opens their app, scans and waits for confirmation', 'r', 'Tap as a faster option; prints itself on “paid”'],
]

const HMW = [
  ['…make choosing the stop a confirmation, not a calculation?', true],
  ['…let the conductor work with one thumb while the other hand holds on?', false],
  ['…make change easier without making the conductor do maths?', true],
  ['…make every rupee traceable, so the conductor is never blamed for a gap?', true],
  ['…keep the screen readable at a glance in direct sun?', false],
  ['…handle a payment that can’t be confirmed, without a fight?', false],
  ['…make free Shakti tickets the fastest thing to issue?', false],
  ['…keep the feel of physical keys on a touchscreen?', false],
]

const WIDER_PAIN = [
  ['Cash shortfall at settlement', 'End of shift, feared all day', 'Paid from own salary', 'Manual counting, unrecorded voids, rounding of change'],
  ['No change for large notes', 'Every peak', 'Conflict, delay, small losses', 'Coin shortage, cash-heavy riders'],
  ['Finding the stop and fare', 'Every ticket', 'Slow, wrong-stage tickets', 'Landmarks shouted; fare table held in memory'],
  ['One hand for device, money and balance', 'Every ticket on a moving bus', 'Mis-presses, near-falls', 'Body fully occupied'],
  ['Unreadable screen, worn keys', 'Every ticket', 'Slow, errors', 'Ageing hardware, glare'],
  ['UPI “paid but no ticket”', 'Weak-signal stretches', 'Argument, possible loss', 'Payment confirmation needs network'],
  ['Shakti zero-value tickets', 'Ordinary buses', 'Time and paper per rider', 'Each free rider still needs a recorded ticket'],
  ['Paper runs out', 'Unpredictable', 'Ticketing stops mid-trip', 'No early warning'],
]

const PRINCIPLES = [
  ['Predict, then confirm', 'Destination choice is the slowest, most error-prone step, not the passenger count', 'Top 3 likely destinations from the current stage sit nearest the thumb'],
  ['Fixed positions, one screen', 'ETM speed comes from muscle memory, not from looking', 'Core loop never navigates. Buttons never move or reflow.'],
  ['Glance, don’t read', 'Eyes are on people and money', 'Only 3 things are large: next stage, destination, total to collect'],
  ['Deliberate commit, cheap undo', 'A printed ticket can’t be taken back, and wrong tickets cost the conductor', 'Slide to print; review strip before it; void-last with reason after'],
  ['Make free tickets fastest', 'Shakti trips are frequent and zero-value but still need a record', 'One Shakti button; mixed groups print on one slip'],
]

const CONCEPTS = [
  [conceptJoystick, 'Haptic joystick, like a PS5 controller', 'Overshoots on bumps; physical one wears out like ETM keys', 'Selecting by feel: haptic ticks, fixed positions', 'Sketch of a game controller with a thumbstick and haptic grips, marked as rejected because it overshoots on bumps'],
  [conceptCardTap, 'NETS-style card tap (as in Singapore)', 'Needs readers and cards everyone owns; ignores cash and Shakti riders', 'Card tap as one payment option, not the system', 'Sketch of a card reader on every pole, marked as rejected because it raises the question of who owns a card'],
  [conceptKiosk, 'Ticket kiosk inside the bus', 'Once the door shuts, riders queue at one machine while the bus lurches; Shakti riders still need a human', 'The amount shown to the passenger, screen facing them', 'Sketch of a ticket kiosk inside a bus with a queue forming, marked as rejected'],
  [conceptApp, 'Passenger app (like Chennai One)', 'Assumes a smartphone, data and time; the brief is the conductor’s tool', 'E-ticket QR as a fallback when the printer fails', 'Sketch of a passenger smartphone app that needs data, marked as rejected'],
  [conceptVoice, 'Voice kiosk inside the bus', 'Engine noise, horns and mixed languages; the same queue as the kiosk', 'Nothing; noted why', 'Sketch of a voice kiosk drowned out by engine and horn noise, marked as rejected'],
  [conceptRing, 'Ring with a tiny display', 'Too small to read, extra cost, one more thing to charge', 'Physical buttons matter: the phone’s volume keys', 'Sketch of a ring with a tiny display on a finger, marked as rejected'],
]

const DEVICE_ROWS = [
  ['In the hand', 'Light', 'Light', 'Heavy, like today’s ETM'],
  ['Feel without looking', 'Haptics only', 'Haptics + volume keys', 'Physical keys'],
  ['Cost and repair', 'Lowest, but still needs a printer', 'Low; off-the-shelf parts swap separately', 'Custom hardware; fails as a unit'],
  ['Verdict', 'Not enough', 'Chosen', 'Rebuilds the ETM’s problems'],
]

const TAP_ERRORS = [
  ['Card lifted too fast', '“Hold the card until the tick”', 'A partial read is the most common tap failure'],
  ['Low balance or declined', '“Card declined: use QR or cash”', 'Next action stays in the thumb zone'],
  ['Bank card, but no signal', '“Needs network: use the transit card, QR or cash”', 'Only stored-value cards work offline; say so honestly'],
  ['Tapped twice', 'Second tap ignored; “Already paid”', 'Never charge a passenger twice'],
  ['Wrong ticket after a tap', 'Void with reason; refund flagged for the depot', 'Money and ticket stay traceable'],
]

const CHANGE_TOKEN = [
  ['BMTC change token (₹5 or ₹10, valid only as fare)', 'Parked', 'Minting cost, fakes, can’t act as cash, audit; needs a legal check'],
  ['“Change due ₹X” printed on the ticket', 'Now', 'Formalises today’s “give later”; on record for both'],
  ['Credit QR on the ticket, redeemed on the next ride', 'Future pilot', 'Needs a backend; may never be redeemed'],
]

const ZONES = [
  ['Glance bar', 'Top ~20%', 'Next stage, route + direction, shift cash total, printer/network status', 'No (read only, so a hand covering it costs nothing)'],
  ['Destination', 'Middle ~35%', 'Top 3 predicted stops as big rows + scrollable list of remaining stages ahead, each with its fare', 'Yes, thumb reach'],
  ['Passengers', '~25%', 'Counters: Full · Shakti · Child · Pass. Tap = +1, minus sits on the left of each', 'Yes, easy reach'],
  ['Commit', 'Bottom ~20%', 'Total to collect, then slide to print (cash) or UPI', 'Yes, easiest reach'],
]

const REDESIGN = [
  ['“Where to?” – I said Hebbal', 'Still asked; one tap on a predicted stop, no keypad', 'Faster', ''],
  ['“Karnataka Aadhaar?” – no', 'Still his judgement; Shakti is one tap when it applies', 'Stays', 'stays'],
  ['“How many?” – one', 'Counters: Full · Shakti · Child · Pass, tap = +1', 'Faster', ''],
  ['Types the stage, says “₹25” aloud', 'Fare sits on every stop row; the total is the biggest number', 'Gone', 'gone'],
  ['“Cash or UPI?”', 'One screen offers cash, QR and tap; the passenger picks', 'Gone', 'gone'],
  ['Shows QR, I scan and wait', 'Prints itself on “paid”; a transit card tap works offline', 'Faster', ''],
]

const S2_SPECS = [
  ['Glance bar', 'Top 20%, no touch targets', 'Updates by GPS; long-press opens menu', 'Thumb can’t reach it comfortably, so it only informs'],
  ['Destination row', '72 dp tall, full width', 'Tap selects; tap again deselects', 'Biggest target for the slowest decision'],
  ['Prediction order', 'Fixed for the current stage', 'Re-ranks only when stage changes, never while looking', 'Rows that move under the thumb cause mis-taps'],
  ['Counter', '80 × 64 dp; minus 48 dp on the outer side', 'Tap = +1 with tick; minus = −1', 'Minus kept away from the thumb’s natural landing spot'],
  ['Commit bar', 'Bottom 20%, 72 dp track', 'Disabled until stop + count > 0', 'No empty or zero tickets'],
]

const TYPE_SPEC = [
  ['Total to collect', '50 sp, Black (900), tabular', 'Said aloud; must be found in one glance, even washed out'],
  ['Next stop', '29 sp Kannada Bold + 16 sp English', 'Top zone; he also calls it out to riders'],
  ['Destination', '23 sp Kannada Bold + 15 sp English', 'Read by the script he knows best'],
  ['Fare per row', '26 sp, Black, right-aligned', 'Numbers scan as a column'],
  ['Counter value', '30 sp, Black', 'Readable without focusing'],
  ['Smallest text in the loop', '14 sp, weight 600+', 'Thin strokes vanish first in glare'],
  ['Targets', '≥ 64 dp tall, 12 dp gaps', 'Motion and wet fingers'],
]

const VOICE = [
  ['Printer drops', 'Printer off · Reconnect', 'Error 0x12: device not found'],
  ['UPI not confirmed', 'Payment not confirmed · Wait · Take cash', 'Transaction failed!'],
  ['No change', 'Change due ₹5 (printed)', 'Balance pending'],
  ['Ticket done', 'Printed ✓ 0418 (and a double pulse)', 'Success! Your ticket has been generated'],
  ['Shift close', 'Cash expected in bag: ₹3,840', 'Reconciliation summary'],
]

const BRAND_CARDS = [
  ['C', 'Calm', 'The bus is already loud: whistles, shouting, an engine.', 'One strong signal at a time. Black and white everywhere else; yellow only when he must act.'],
  ['P', 'Plain', 'He reads Kannada and numbers fastest, at a glance.', 'Kannada first, words not codes, numbers big. No jargon on any screen.'],
  ['F', 'Fair', 'Money disputes and blame fall on him.', 'Every rupee on record, for him and the passenger: change due, voids, “not confirmed”.'],
]

const DECISIONS = [
  ['One screen, no navigation in the ticket loop', 'Tabs or step-by-step wizard', 'Muscle memory needs fixed positions', 'Less room; rare actions hide behind a long-press'],
  ['Predict top 3 stops', 'Full alphabetical list', 'Stop choice is the slowest step', 'Wrong predictions cost one scroll; needs waybill data to tune'],
  ['Slide to print', 'Tap to print; hold-to-cancel delay', 'Bumps can’t finish a slide; no wait on every ticket', 'Slide is slower than a tap by a fraction'],
  ['Void last with a reason', 'Silent cancel', 'Voids stay traceable and protect the conductor', 'One extra step when a mistake happens'],
  ['Light theme by day, dark by night', 'Always-dark high-contrast theme', 'Dark screens reflect in sun', 'Two themes to design and test'],
  ['Phone + belt printer + coin changer', 'Phone only, or an all-in-one cradle', 'Light hand, cheap swappable parts', 'More items to issue, pair and maintain'],
  ['Volume keys as physical +/−', 'Custom Bluetooth buttons', 'Free, already on every phone', 'Behaviour varies by phone model'],
  ['Print “change due” on ticket', 'Change token or credit QR', 'Formalises today’s practice; zero new infra', 'Passenger still waits for the coin'],
  ['Honest “payment not confirmed” state', 'Claiming offline UPI works', 'Bank confirmation needs network', 'Occasional wait or switch to cash'],
  ['Kannada first, English second', 'English only', 'Speed of reading for conductors', 'Longer labels to fit'],
]

const HEURISTICS = [
  ['Visibility of system status', 'Glance bar shows printer, signal, paper and cash tally; payment shows waiting → paid', 'Small icons wash out in glare: pair every warning icon with a word on yellow'],
  ['Match with the real world', 'Stops in route order, only those ahead; fares per stop; Kannada names; “change due” in plain words', 'Riders say landmarks, not stops: add landmark aliases to search'],
  ['User control and freedom', 'Tap again to deselect; minus on every counter; void last within 10 s, with a reason', '10 s may be too short mid-rush: test it'],
  ['Consistency and standards', 'Buttons never move; “done” feels the same for printed and paid', 'Volume-key behaviour differs across phone models'],
  ['Error prevention', 'Stops behind the bus never shown; slide to print; commit disabled until stop + count; double tap never charges twice', 'Predictions could anchor a wrong choice: keep the full list one tap away'],
  ['Recognition over recall', 'Fares on screen, predicted stops, change shown as coins', 'None found yet; confirm with conductors'],
  ['Flexibility and efficiency', 'Volume keys as +/−; mixed groups on one slip; one digital screen for QR and tap', 'Experts may want to type a stage number: consider later'],
  ['Aesthetic and minimalist design', 'Only three large values; route map, clock and history removed from the loop', 'Kannada + English labels add length: test truncation'],
  ['Recognise, diagnose, recover', 'Every error states what happened, the money state and one next action, in the thumb zone', 'UTR route is complex: keep it last and flagged'],
  ['Help and documentation', 'Practice mode at the depot that prints nothing; no help screens in the loop', 'Training time must be planned with the depot'],
]

const STRESS = [
  ['Wrong destination tapped', 'Tap another row; selection moves. Nothing printed yet.', 'Errors before print should cost one tap'],
  ['Wrong count', '− button beside each counter; long-press counter to zero', 'Fix without starting over'],
  ['Wrong ticket already printed', 'Void last (10 s chip) or Void from history; reason required; void logged', 'Printed paper can’t be undone, but the ledger can be honest'],
  ['Destination behind the bus', 'Not shown at all (only stages ahead)', 'Prevent, don’t warn'],
  ['Printer disconnected', 'Yellow banner with a black edge: Printer off — Reconnect. Ticket is held, not lost. Option: show e-ticket QR.', 'Passenger keeps moving; record is safe'],
  ['Paper out mid-print', 'Paper out — load roll, then Reprint. Reprint marked DUPLICATE.', 'Prevents double counting'],
  ['Low paper (~10%)', 'Yellow icon with a word in glance bar', 'Warn before peak, not during'],
  ['No network', 'Glance-bar icon only. Cash and Shakti tickets work fully offline and sync later.', 'Most of the work should never depend on signal'],
  ['UPI pending > 30 s / no network', 'Payment not confirmed. Options: Wait · Take cash · Record UTR & issue (flagged for depot check)', 'Honest about what isn’t confirmed; protects conductor with a record'],
  ['Passenger says “paid but no ticket”', 'Search recent UPI payments by amount/time; issue if found', 'Most disputes are timing, not fraud'],
  ['No change for a large note', 'Suggest UPI; else note “change owed ₹X” printed on ticket', 'Fits current practice instead of inventing a voucher system'],
  ['Phone battery low (≤ 15%)', 'Yellow warning with a word in the glance bar; all data saved continuously', 'Nothing is lost if the phone dies'],
  ['App crash / phone dropped', 'Reopens to the same screen and selection', 'State is written on every change'],
]

const DEPENDENCIES = [
  ['BMTC fare and stage data', 'Fares and stop lists on screen', 'Wrong fares, lost trust on day one'],
  ['Waybill history', 'Tunes the top-3 predictions', 'Predictions miss; more scrolling'],
  ['UPI acquirer / bank integration', 'Dynamic QR and payment confirmation', 'No UPI; cash only'],
  ['Depot settlement system', 'Accepts the settlement QR', 'Manual settlement continues'],
  ['Device and printer procurement, repair', 'Kit must be cheap and swappable', 'Broken kit = conductor stuck'],
  ['Union and staff buy-in', 'Conductors must trust the totals', 'Low adoption, workarounds'],
]

function Block({ children }) {
  return (
    <div className="cd-block cd-reveal">
      <div className="cd-flow">{children}</div>
    </div>
  )
}

function Row({ left, children, stack = false }) {
  if (stack) {
    return (
      <div className="cd-row cd-row--stack">
        <div className="cd-row__r">
          {left}
          {children}
        </div>
      </div>
    )
  }
  return (
    <div className="cd-row">
      <div className="cd-row__l">{left}</div>
      <div className="cd-row__r">{children}</div>
    </div>
  )
}

function Head({ phase, title }) {
  return (
    <div>
      <p className="cd-phase">{phase}</p>
      <h3 className="cd-h3">{title}</h3>
    </div>
  )
}

function Tag({ children, caps = false }) {
  return <p className={`cd-tag${caps ? ' cd-tag--caps' : ''}`}>{children}</p>
}

function Fig({ title, sub, src, alt, source, maxWidth, scroll = false }) {
  return (
    <figure className="cd-fig">
      {title && <p className="cd-fig__title">{title}</p>}
      {sub && <p className="cd-fig__sub">{sub}</p>}
      <div className={scroll ? 'cd-scroll' : undefined}>
        <img
          className="cd-fig__img"
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={maxWidth ? { maxWidth } : undefined}
        />
      </div>
      {source && <p className="cd-fig__src">{source}</p>}
    </figure>
  )
}

function Table({ head, rows, className = '' }) {
  return (
    <div className="cd-table-wrap">
      <table className={`cd-table ${className}`.trim()}>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StatsBand({ items }) {
  return (
    <section className="cd-stats cd-reveal" style={{ '--cd-stat-cols': items.length }}>
      <div className="cd-stats__inner">
        {items.map((s) => (
          <div key={s.t}>
            <p className="cd-stat__num">{s.n}</p>
            <p className="cd-stat__text">{s.t}</p>
            <p className="cd-stat__src">{s.s}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectConductorCompanion() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const [overHero, setOverHero] = useState(true)
  const [overHeroAtBottom, setOverHeroAtBottom] = useState(true)
  useScrollReveal(containerRef, '.cd-reveal')

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
    <div className="cd-page" ref={containerRef}>
      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="Portfolio" onDark={overHero} />
      </div>
      <ProjectSectionNav sections={SECTIONS} />

      <header id="overview" className="cd-hero" ref={heroRef}>
        <div className="cd-hero__inner">
          <p className="cd-hero__role">UX Research, Synthesis, UX Design, Prototyping</p>
          <h1 className="cd-hero__title">Understanding the work behind every ticket</h1>
          <p className="cd-hero__subtitle">
            Designing a digital companion around the conductor&rsquo;s real-world constraints
          </p>
          <div className="cd-hero__timeline">
            <p>Timeline</p>
            <p>3-day design assignment &middot; Nielsen</p>
          </div>
          <img
            className="cd-hero__plan"
            src={heroBusPlan}
            alt="Top-down plan of a BMTC bus showing seats, doors, women's seats, the driver and the conductor's path along the aisle on a Marathahalli to Hebbal field ride, fare ₹25, paid by UPI"
          />
          <p className="cd-hero__task">Nielsen&rsquo;s design task</p>
        </div>
      </header>

      <StatsBand items={STATS_ONE} />

      <main className="cd-wrap">
        {/* ---------------- Process ---------------- */}
        <section className="cd-phase-section cd-reveal">
          <Fig
            src={diagramRail}
            alt="Design process in six steps grouped into Understand, Explore and Materialize: 01 Empathize, 02 Define, 03 Ideate, 04 Prototype, 05 Test, 06 Implement, with the methods used at each step. A loop shows test findings redefining the problem or sending the work back to ideas."
          />
        </section>

        {/* ---------------- 1 Understand ---------------- */}
        <section id="understand" className="cd-phase-section">
          <Block>
            <Row left={<Head phase="Empathize" title="1:1 Problem" />}>
              <p className="cd-text">
                A conductor on a moving, crowded bus must issue the right ticket, take the right money and keep a
                clean waybill, using one thumb, in a few seconds, in glare. Today&rsquo;s ETM has worn keys and a dim
                screen. A phone app must beat it without losing what the ETM does well.
              </p>
            </Row>
            <Row left={<Tag caps><strong>Design</strong> <span className="cd-tag__dim">goal</span></Tag>}>
              <p className="cd-text">
                Select a destination and issue a ticket for 3 passengers in under 4 seconds, one-handed, readable at a
                glance.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:2 Field study" />}>
              <p className="cd-text">
                I spoke to a BMTC conductor and rode from Marathahalli to Hebbal as a paying passenger. It is a small
                study (one conductor, one ride), so I treat it as direction, not proof, but it confirmed most of my
                assumptions and changed three decisions.
              </p>
            </Row>
            <Row
              left={
                <>
                  <Tag>Conversation with a BMTC conductor</Tag>
                  <p className="cd-note" style={{ paddingLeft: 14 }}>
                    (Sridhar, on weekday duty in Bengaluru)
                  </p>
                </>
              }
            >
              <div className="cd-callout">
                <ul>
                  <li>
                    What frustrates him most is the sheer number of passengers, together with the constant whistling
                    and the change exchange.
                  </li>
                  <li>
                    He has to keep track of many ticket types at once: pass holders, ticket buyers, women travelling
                    free under Shakti, children on half tickets, adults on full.
                  </li>
                  <li>
                    The ETM is all numbers and buttons. Conductors are used to it now, but it is slow, and doing a
                    ticket in four seconds in a rush is hard.
                  </li>
                  <li>
                    Ticketing is only one of his jobs. He also watches passengers&rsquo; safety and the driver&rsquo;s
                    conduct, and whatever happens on the bus is his responsibility first.
                  </li>
                </ul>
              </div>
            </Row>

            <Fig
              title="Ticketing is one of seven jobs he holds at once"
              sub="What Sridhar listed as his work on a single trip, plus one job I watched him do on my ride."
              src={diagramMindmap}
              alt="Mind map with the conductor at the centre and seven jobs around him: issue tickets (the brief's focus), tell people their stop, track fare types, watch the driver, make change, passenger safety, and whistle constantly. Most were told by Sridhar; telling people their stop was seen on my ride."
              source="Source: conversation with a BMTC conductor; my ride, Marathahalli → Hebbal"
            />

            <Row left={null}>
              <div className="cd-quote">
                <p className="cd-quote__text">Whatever happens on the bus is his responsibility first.</p>
                <p className="cd-quote__src">Sridhar, BMTC conductor &mdash; paraphrased from my notes</p>
              </div>
            </Row>

            <Row left={<Tag>The ride: Marathahalli → Hebbal</Tag>}>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 313px) minmax(0, 1fr)', gap: 20 }}>
                <img
                  src={diagramReceipt}
                  alt="Redrawn BMTC ticket from Marathahalli to Hebbal: Adult 1 × ₹25, total ₹25 (UPI)"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <p className="cd-text" style={{ fontSize: 13.5 }}>
                  My Marathahalli to Hebbal ticket, redrawn from my notes: one adult, ₹25, paid by UPI. Only what I
                  noted is shown; depot, ticket number and time are left out.
                </p>
              </div>
            </Row>

            <figure className="cd-photo">
              <img
                src={busInterior}
                alt="Inside a BMTC bus with yellow grab rails overhead, blue seats and a UPI QR sticker on a window pillar"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Inside a BMTC bus: grab rails overhead and UPI QR stickers on the window pillars, where riders already
                expect to pay.
              </figcaption>
            </figure>

            <div>
              <p className="cd-fig__title">One ride, four questions before a ticket prints</p>
              <p className="cd-fig__sub">Ride journey &middot; Marathahalli → Hebbal, 8 steps</p>
              <div style={{ marginTop: 18 }}>
                <p className="cd-ride__caption">
                  Marathahalli → Hebbal, BMTC, as a paying passenger (my own ride)
                </p>
                <div className="cd-scroll">
                  <div style={{ minWidth: 600 }}>
                    <div className="cd-ride__head">
                      <span>Step</span>
                      <span>What happened</span>
                      <span>What it tells me</span>
                    </div>
                    <div className="cd-ride__rows">
                      {RIDE_STEPS.map(([step, sub, what, tells], i) => (
                        <div className="cd-ride__row" key={step}>
                          <span className="cd-ride__n">{i + 1}</span>
                          <span className="cd-ride__step">
                            <strong>{step}</strong>
                            <span>{sub}</span>
                          </span>
                          <span className="cd-ride__what">{what}</span>
                          <span className="cd-ride__tells">{tells}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="cd-note" style={{ marginTop: 14 }}>
                One ride, seen from one seat. Timings weren&rsquo;t recorded, so none are claimed.
              </p>
            </div>

            <Fig
              title="One ticket, four questions"
              sub="Everything that had to happen between the conductor and me before my ticket existed"
              src={diagramQuestions}
              alt="Flow of one ticket across two lanes. The conductor asks four questions (Q1 Where to?, Q2 Karnataka Aadhaar?, Q3 How many?, Q4 Cash or UPI?) and I answer Hebbal, No (so no Shakti), One, UPI; he types on the ETM and says ₹25, then shows a QR on his device, I scan with GPay and wait, and the ticket prints. Four questions and two hand-offs before one ticket."
              source="Source: my field notes from the ride"
              scroll
            />
          </Block>
        </section>

        <StatsBand items={STATS_TWO} />

        <section className="cd-phase-section">
          <Block>
            <Row left={<Tag>What it changed or confirmed in the design</Tag>} stack>
              <div className="cd-changes">
                {CHANGES.map(([title, body, changed]) => (
                  <div key={title}>
                    <p className="cd-change__title">{title}</p>
                    <p className="cd-change__body">&rarr;{body}</p>
                    <span className={`cd-pill${changed ? ' cd-pill--changed' : ''}`}>
                      {changed ? 'Changed the design' : 'Confirmed'}
                    </span>
                  </div>
                ))}
              </div>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:3 Context: the job, the body, the bus" />}>{null}</Row>
            <Row left={<Tag>The ticket loop (one passenger group)</Tag>}>
              <div className="cd-callout">
                <ol>
                  <li>Hear the destination, often shouted, often a landmark not a stop name.</li>
                  <li>Work out the stage and fare in their head.</li>
                  <li>Enter it, count passengers, print.</li>
                  <li>Take money, give change, hand over ticket.</li>
                  <li>Move to the next person while holding on.</li>
                </ol>
              </div>
            </Row>

            <figure className="cd-photo">
              <img
                src={busAisle}
                alt="A BMTC conductor standing in the aisle with his ticket machine on a lanyard, surrounded by seated and standing passengers"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                A BMTC conductor working the aisle with his machine on a lanyard, riders seated and standing around
                him: the space every design decision has to fit.
              </figcaption>
            </figure>

            <Fig
              title="Four fare types, decided by eye, per passenger"
              sub="The judgement the conductor makes before he can even start a ticket. My own branch is marked."
              src={diagramFaretree}
              alt="Decision tree for who is boarding: a pass holder is checked by eye with no fare taken; a woman is asked for a Karnataka ID, yes gives a free Shakti ticket that is still printed, no (that was me) pays full fare of ₹25; a child gets a half ticket; an adult gets a full ticket."
              source="Source: conversation with Sridhar; my ride. Shakti rules: Government of Karnataka"
              scroll
            />

            <Row left={<Tag>Physical realities and what each forces</Tag>} stack>
              <Table head={['On the bus', 'So the design must']} rows={PHYSICAL} />
            </Row>

            <Row left={<Tag>What the old ETM does well (and a phone must not lose)</Tag>}>
              <p className="cd-text">
                Physical keys you can find without looking, and fixed positions learned by muscle memory over years. A
                touchscreen has neither by default. This shaped the core strategy: fixed positions, no menus in the
                main loop, and haptics to give back the feel of a key.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Empathize" title="1:4 Assumptions to verify" />}>
              <p className="cd-text">
                The brief asks for assumptions to be stated. Each one below changed a design decision, so each has a
                way to check it.
              </p>
            </Row>
            <div className="cd-assume">
              {ASSUMPTIONS.map(([id, text, drives, verify]) => (
                <div key={id}>
                  <p className="cd-assume__id">{id}</p>
                  <p className="cd-assume__text">{text}</p>
                  <dl className="cd-kv">
                    <dt>Drives</dt>
                    <dd>{drives}</dd>
                    <dt>Verify</dt>
                    <dd>{verify}</dd>
                  </dl>
                </div>
              ))}
            </div>
            <Row left={<Tag>Top open questions I&rsquo;d take to a conductor</Tag>}>
              <p className="cd-text">
                Where do you lose the most time? Which mistake costs you money? How do you remember fares today?
              </p>
            </Row>
          </Block>
        </section>

        {/* ---------------- 2 Define ---------------- */}
        <section id="define" className="cd-phase-section">
          <Block>
            <Row left={<Head phase="Define" title="2:1 Pain points from my study" />}>{null}</Row>
            <div className="cd-table-wrap">
              <table className="cd-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Pain point and evidence</th>
                    <th>C</th>
                    <th>R</th>
                    <th>So the design must</th>
                  </tr>
                </thead>
                <tbody>
                  {PAIN_POINTS.map(([title, evidence, who, must], i) => (
                    <tr key={title}>
                      <td className="is-num">{i + 1}</td>
                      <td>
                        {title}
                        <small>{evidence}</small>
                      </td>
                      <td>
                        <span className={`cd-dot${who.includes('c') ? ' cd-dot--c' : ''}`} />
                      </td>
                      <td>
                        <span className={`cd-dot${who.includes('r') ? ' cd-dot--r' : ''}`} />
                      </td>
                      <td className="is-teal">{must}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cd-legend">
              <span>
                <i className="cd-dot cd-dot--c" /> C = Sridhar said it
              </span>
              <span>
                <i className="cd-dot cd-dot--r" /> R = I saw it on my ride &middot; ordered by how strongly it came up
              </span>
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:2 Point of view and How Might We" />} stack>{null}</Row>
            <div className="cd-pov">
              <p className="cd-pov__label">Point of view</p>
              <p className="cd-pov__text">
                A conductor on a crowded, moving bus needs to issue the right ticket with one thumb and no mental
                maths, because he is doing six other jobs at the same time, and every wrong ticket or cash gap is his
                to answer for.
              </p>
            </div>
            <div>
              <p className="cd-hmw__label">How might we&hellip;</p>
              <ol className="cd-hmw">
                {HMW.map(([text, top], i) => (
                  <li key={text} className={top ? 'is-top' : undefined}>
                    <span>{i + 1}</span>
                    {text}
                  </li>
                ))}
              </ol>
              <p className="cd-note" style={{ marginTop: 18 }}>
                Highlighted: the three I prioritised by dot-voting on impact for the conductor (time, change, blame).
                Every principle that follows answers at least one.
              </p>
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:3 Wider pain points and cognitive load" />}>
              <p className="cd-text">
                The biggest burden is not the screen. It is memory and maths done under physical stress, with the
                conductor&rsquo;s own money at stake.
              </p>
              <p className="cd-text">
                <strong>
                  Pain points, ranked by what they cost the conductor (money, conflict, stress), not by how easy they
                  are to fix:
                </strong>
              </p>
            </Row>
            <Table head={['Pain point', 'When it hits', 'Cost to the conductor', 'Root cause']} rows={WIDER_PAIN} />
            <Row left={<Tag>Cognitive load: what moves from the conductor&rsquo;s head into the system</Tag>} stack>
              {null}
            </Row>
            <Fig
              title="The conductor confirms; the phone remembers and calculates"
              sub="Cognitive load · what moves from the head to the phone"
              src={diagramCognitive}
              alt="Two columns. In the conductor's head today: fare for every stage, current stage, how many in the group, fare times count, change from big notes, which stage a landmark is in. Taken over by the phone: fare shown on each stop, stage moved by GPS, counters hold the group, total computed, change shown as coins, top-3 predicted stops. Still human, by design: who has paid, Shakti ID check, counting coins out, holding on, the conversation."
              scroll
            />
            <Row left={null}>
              <p className="cd-text">
                Principle that came out of this:{' '}
                <strong>the system remembers and calculates; the conductor confirms.</strong>
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:4 Current-state journey of a shift" />} stack>{null}</Row>
            <Fig
              title="Stress peaks at the rushes and at settlement; that is where the design aims"
              sub="Journey map · one shift, 5 stages"
              src={diagramJourney}
              alt="Journey map of one shift across five stages: depot start, morning peak, midday lull, evening peak and settlement. For each: what they do, how it feels today versus with the Companion, what hurts, the design response and the touchpoint. Stress is highest at the rushes and at settlement."
              scroll
            />
            <Row left={null}>
              <p className="cd-text">
                Stress peaks at the two rushes and at settlement; those are the moments every feature above is aimed
                at.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Define" title="2:5 Insights → design principles" />} stack>{null}</Row>
            <div className="cd-cards">
              {PRINCIPLES.map(([title, because, onScreen], i) => (
                <div className="cd-card" key={title}>
                  <p className="cd-card__n">{i + 1}</p>
                  <p className="cd-card__title">{title}</p>
                  <dl>
                    <dt>Because</dt>
                    <dd>{because}</dd>
                    <dt>On screen</dt>
                    <dd>{onScreen}</dd>
                  </dl>
                </div>
              ))}
            </div>
            <Row left={<Tag>One rejected idea, and why</Tag>}>
              <p className="cd-text">
                A hold-to-cancel delay before every print. It prevents errors, but it slows down every ticket to
                protect against a few mistakes, and eats into the 4-second goal. A deliberate slide plus a visible
                summary prevents most of the same errors without making anyone wait.
              </p>
            </Row>
          </Block>
        </section>

        {/* ---------------- 3 Ideate ---------------- */}
        <section id="ideate" className="cd-phase-section">
          <Block>
            <Row left={<Head phase="Ideate" title="3:1 Concepts explored, and the kit I chose" />} stack>{null}</Row>
            <div className="cd-concepts">
              {CONCEPTS.map(([img, name, why, kept, alt]) => (
                <div key={name}>
                  <img className="cd-concept__img" src={img} alt={alt} loading="lazy" decoding="async" />
                  <p className="cd-concept__name">{name}</p>
                  <p className="cd-concept__k cd-concept__k--no">Why it didn&rsquo;t work</p>
                  <p className="cd-concept__v">{why}</p>
                  <p className="cd-concept__k">Kept</p>
                  <p className="cd-concept__v">{kept}</p>
                </div>
              ))}
            </div>
            <Row left={null}>
              <div className="cd-quote">
                <p className="cd-quote__text">
                  Three of the six tried to remove the conductor. That was the turning point: design for the
                  conductor, not around them.
                </p>
                <p className="cd-quote__src">Ideation notes, Oct 9</p>
              </div>
            </Row>

            <Row left={<Tag caps>Device <span className="cd-tag__dim">concepts</span></Tag>} stack>{null}</Row>
            <div className="cd-table-wrap">
              <table className="cd-table">
                <thead>
                  <tr>
                    <th />
                    <th>A. Phone only</th>
                    <th className="is-hi">B. Phone + body kit</th>
                    <th>C. All-in-one cradle</th>
                  </tr>
                </thead>
                <tbody>
                  {DEVICE_ROWS.map(([k, a, b, c]) => (
                    <tr key={k}>
                      <td>{k}</td>
                      <td>{a}</td>
                      <td className="is-hi">{b}</td>
                      <td>{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Fig
              title="The hand stays light; heavy parts live on the body"
              sub="Phygital kit · phone + belt printer + coin changer"
              src={diagramKit}
              alt="Kit diagram. In the hand: the phone with a thumb-zone ticket app, volume keys for +1/−1, wrist loop and breakaway lanyard. On the body (belt and bag): a Bluetooth belt printer, a mechanical coin changer and a note pouch. The phone prints over Bluetooth and shows the coin split; the passenger sees the total or a UPI QR and gets a printed ticket plus coins."
              scroll
            />

            <Row left={null}>
              <figure className="cd-photo">
                <img
                  src={beltPrinterPhoto}
                  alt="A thermal label printer in a belt holster on a worker's hip, with a printed label emerging"
                  loading="lazy"
                  decoding="async"
                  style={{ maxWidth: 586 }}
                />
                <figcaption>
                  Reference: an off-the-shelf thermal printer in a belt holster. The kit uses parts like this instead
                  of custom hardware, so a broken printer is swapped alone.
                </figcaption>
              </figure>
              <p className="cd-text">
                <strong>Coin change. A belt-mounted coin changer with spring tubes (₹1, ₹2, ₹5, ₹10),</strong> one
                thumb press per coin. It&rsquo;s mechanical, needs no battery, and is used by feel. As an optional
                step, the conductor taps the note received and the screen shows the change as coins (₹25 → 10 + 10 +
                5). That removes the maths without adding a touch to the main loop. Trade-offs: weight on the hip,
                jams from bent coins, and a refill at the depot each shift.
              </p>
            </Row>

            <Fig
              title="Printer and coins sit on the belt, where the free hand already goes"
              sub="Product sketch · belt printer and coin changer"
              src={productSketch}
              alt="Product sketch. A belt printer (Bluetooth, 57 mm) with a paper window and a ticket exiting upward, and a mechanical coin changer with four spring tubes for ₹1, ₹2, ₹5 and ₹10 with a thumb lever under each, both clipped to a belt or bag strap. Rough proportions only."
              maxWidth={870}
              scroll
            />

            <Row left={null}>
              <p className="cd-text">
                <strong>Tap to pay (card or phone). The passenger taps a transit card (NCMC), a</strong> contactless
                bank card or a phone wallet on the back of the conductor&rsquo;s phone, where its NFC reader sits. The
                amount is on screen first, facing the passenger. Paid → two quick pulses → the ticket prints by
                itself.
              </p>
              <p className="cd-text">Why it matters:</p>
              <div className="cd-callout">
                <ul>
                  <li>
                    <strong>Fastest digital payment.</strong> No camera, no app to open, no typing: one tap.
                  </li>
                  <li>
                    <strong>Works in dead zones.</strong> A stored-value transit card carries its balance on the card,
                    so it can be charged without network. It&rsquo;s the one digital payment that survives the
                    stretches where UPI can&rsquo;t be confirmed.
                  </li>
                  <li>
                    <strong>Cuts cash and change.</strong> Every tap is one less note to break.
                  </li>
                </ul>
              </div>
              <p className="cd-text">
                <strong>Design decision: tap shares one screen with QR. The conductor taps digital</strong> once; the
                screen shows the QR and a tap zone together, and the passenger picks. I rejected a separate
                &ldquo;Card&rdquo; button, because it adds a decision for the conductor about something only the
                passenger knows.
              </p>
            </Row>

            <Table head={['What can go wrong', 'What the screen says', 'Why']} rows={TAP_ERRORS} />

            <Row left={<Tag>Assumption A9 (to verify)</Tag>}>
              <p className="cd-text">
                Conductors&rsquo; phones have NFC; BMTC&rsquo;s bank can certify the phone to accept taps; and enough
                riders carry transit cards for this to matter on a given route. Without those, the tap zone stays
                hidden and the screen is QR only.
              </p>
            </Row>

            <Row left={<Tag>Change token: considered, not chosen for now.</Tag>} stack>{null}</Row>
            <Table head={['Option', 'Decision', 'Why']} rows={CHANGE_TOKEN} />

            <Row left={null}>
              <p className="cd-text">
                Critique of my own kit: volume-key capture depends on the phone and only works while the app is on
                screen; the lanyard needs a breakaway clasp; the printer adds a pairing step at shift start.
              </p>
            </Row>
          </Block>
        </section>

        {/* ---------------- 4 Prototype ---------------- */}
        <section id="prototype" className="cd-phase-section">
          <Block>
            <Row left={<Head phase="Prototype" title="4:1 Navigation and reachability strategy" />} stack>{null}</Row>
            <Fig
              title="Every action sits where the thumb already is; the top only informs"
              sub="Gesture and reach map · 4 zones, 1 screen"
              src={diagramReach}
              alt="Phone outline split into four zones with callouts: Glance bar is read only; Destination is tap, with easy reach below the line; Counters are tap or volume keys; Commit is slide, the only irreversible step. A dashed arc marks comfortable right-thumb reach. Not used anywhere: double-tap, pinch, edge swipe."
              scroll
            />
            <Row left={<Tag>Screen zones (6.3&quot; phone, right-hand default, mirrored for left)</Tag>} stack>
              {null}
            </Row>
            <Table head={['Zone', 'Height', 'Role', 'Interactive?']} rows={ZONES} />
            <Row left={null}>
              <p className="cd-text">
                Why this order: the hardest decision (destination) is in reach but not in the bottom corner where
                palms brush. The most frequent and most consequential action (print) is where the thumb rests
                naturally. Read-only content goes where the thumb can&rsquo;t reach comfortably anyway.
              </p>
            </Row>
            <Row left={<Tag>Reach rules I held myself to</Tag>}>
              <div className="cd-callout">
                <ul>
                  <li>No tappable element in the top 20% during the ticket loop.</li>
                  <li>
                    Primary targets ≥ 64 dp tall; ≥ 12 dp gap between neighbours (larger than the 48 dp guideline
                    because of motion).
                  </li>
                  <li>No swipe-to-go-back or edge gestures that a palm can trigger.</li>
                  <li>
                    Menus (shift, settings, reports) live behind one long-press on the glance bar, out of the main
                    loop.
                  </li>
                </ul>
              </div>
            </Row>

            <div>
              <p className="cd-fig__title">What the redesign takes out of my ride&rsquo;s ticket</p>
              <p className="cd-fig__sub">
                Two steps disappear, three get faster, and one stays with the conductor on purpose.
              </p>
              <div className="cd-table-wrap" style={{ marginTop: 18 }}>
                <table className="cd-table cd-table--compare">
                  <thead>
                    <tr>
                      <th>On my ride, today</th>
                      <th />
                      <th className="is-teal">With the companion</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {REDESIGN.map(([today, now, status, kind]) => (
                      <tr key={today}>
                        <td>{today}</td>
                        <td>&rarr;</td>
                        <td style={{ color: 'var(--cd-ink)' }}>{now}</td>
                        <td>
                          <span className={`cd-status${kind ? ` cd-status--${kind}` : ''}`}>{status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="cd-note" style={{ marginTop: 14 }}>
                Left: my field notes. Right: the design in §4.1–4.4. Not yet tested with conductors.
              </p>
            </div>

            <Row left={<Tag>The 4-second task, counted in touches</Tag>} stack>{null}</Row>
            <Table
              head={['Scenario', 'Touches', 'Screens']}
              rows={[
                ['3 Full to a predicted stop, cash', <>1 stop + 3 Full + 1 slide = <strong>5</strong></>, '1'],
                ['Same, stop not predicted', '1 scroll + the same 5', '1'],
                ['Today’s ETM (for comparison)', 'Stage keys + count + print, with looking', '1 (small screen)'],
              ]}
            />
            <Row left={null}>
              <p className="cd-text">
                Touch count is a design measure; seconds are a test result. Fewer touches, no typing, no screen
                changes and no waiting is what makes under 4 seconds possible on a moving bus.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Prototype" title="4:2 User flow and interaction flow" />}>
              <p className="cd-text">
                One boarding, from the moment a passenger gets on to the moment the conductor turns to the next one.
                Every decision is a diamond; no path ends without a ticket on record or a clear next step.
              </p>
            </Row>
            <Row left={<Tag>User flow: one boarding, every case</Tag>} stack>{null}</Row>
            <Fig
              title="Every path ends in a recorded ticket or a clear next step"
              sub="User flow · one boarding, start to stop, every decision"
              src={diagramUserFlow}
              alt="Flowchart of one boarding. Passenger boards, hears stop or landmark, is the stop in the top 3 (no: scroll list and tap stop), taps the stop, taps counters. Pass only? yes logs the pass with no ticket and moves to the next passenger. Total is ₹0? yes slides a free Shakti ticket. Cash or digital? Cash: optional tap note shows change as coins, then slide to print. Digital: show amount QR plus tap; paid in time? yes prints automatically, no asks cash instead or records UTR and issues, flagged for the depot. Ticket saved, printing with two quick pulses; printer OK? no holds the ticket and retries. Change due? yes: coins available? press coin levers or print change due on the ticket. Hand over ticket plus change. Mistake noticed? yes voids last with a reason and re-tickets; no goes to the next passenger."
              scroll
            />
            <Row left={null}>
              <p className="cd-text">
                At the shift level, this loop sits between shift start (S1) and shift close (S7).
              </p>
              <p className="cd-text">
                <strong>Interaction flow across devices. Who does what, on which device, in what order.</strong>
                <br />
                <span className="cd-soft">The design covers the whole kit and the passenger, not just a screen.</span>
              </p>
            </Row>
            <Fig
              title="A 3-passenger cash ticket takes 5 touches, all with one thumb"
              sub="Interaction flow · 3 passengers, cash, across 5 lanes"
              src={diagramSwimlane}
              alt="Swimlane diagram across five lanes: passenger, conductor's thumb, phone, belt printer and coin changer, in eight steps. Passenger says Hebbal, three; thumb taps Hebbal and Full ×3 or volume-up ×3; phone shows ₹75 big, faces up; optional tap on ₹100 gives change ₹25 = 10 + 10 + 5; thumb slides to print; phone double-pulses and the belt printer prints one ticket for 3; thumb presses 3 coin levers and the coin changer drops 10, 10, 5; passenger gets the ticket plus ₹25 and the phone resets."
              scroll
            />
            <Row left={null}>
              <p className="cd-text">
                Only the slide to print is irreversible, so it is the only deliberate gesture. The ₹100 tap is
                optional and outside the 5-touch count.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Prototype" title="4:3 Screens: what each one is for" />}>
              <p className="cd-text">
                Seven frames cover the full flow. Build each in Figma at 360×800 dp; annotate the
                &ldquo;why&rdquo; on each.
              </p>
              <p className="cd-text">
                <strong>S1 &middot; Shift start (once a shift) Scan depot QR or enter waybill no. → route and</strong>{' '}
                direction auto-load → choose hand (L/R) → printer pairs. Why: everything slow happens here, so the
                ticket loop stays fast.
              </p>
              <p className="cd-text">
                <strong>S2 &middot; Ticket screen, idle (the core screen)</strong>
              </p>
              <div className="cd-callout">
                <ul>
                  <li>Glance bar: Next: Mahadevapura · 500D ↑ Hebbal · ₹1,840 · printer and signal icons.</li>
                  <li>
                    Top 3 predicted destinations as large rows: stop name (Kannada, English below) + fare on the
                    right.
                  </li>
                  <li>&ldquo;More stops&rdquo; list below them, only stages ahead.</li>
                  <li>Counters: Full · Shakti · Child · Pass, all at 0.</li>
                  <li>Commit bar disabled until a destination and count exist.</li>
                </ul>
              </div>
              <p className="cd-text">
                <strong>S3 &middot; Ticket composed (3 Full to Hebbal) Selected destination highlighted;</strong>{' '}
                summary strip: Hebbal · 3 Full · ₹75. Commit bar becomes active:{' '}
                <span className="cd-soft">Slide to print</span> ₹75 + <span className="cd-soft">UPI</span> button.
                Why: the summary is the error check before an irreversible step.
              </p>
              <p className="cd-text">
                <strong>S4 &middot; Mixed group (2 Shakti + 1 Full) Same screen, counters show 2 and 1; total</strong>{' '}
                ₹25. Prints one slip listing both lines. Why: fewer taps, less paper, one audit record.
              </p>
              <p className="cd-text">
                <strong>S5 &middot; Digital pay (QR or tap) One digital-pay screen turned toward the</strong>{' '}
                passenger: a dynamic QR with the exact amount, plus a tap zone for a card or phone (NFC on the back of
                the conductor&rsquo;s phone). Status: <span className="cd-soft">Waiting…</span> →{' '}
                <span className="cd-soft">Paid ✓</span> (auto-prints on confirmation). Fallback buttons:{' '}
                <span className="cd-soft">Take cash instead</span> &middot; <span className="cd-soft">Cancel</span>.
                Why: amount-locked QR prevents wrong-amount and swapped-sticker problems.
              </p>
              <p className="cd-text">
                <strong>S6 &middot; Ticket issued Brief confirmation: ticket number, ₹, double haptic. Screen</strong>{' '}
                resets to S2 with destination predictions refreshed. A small <span className="cd-soft">Void last</span>{' '}
                chip stays for 10 s (requires a reason: wrong stop / wrong count / passenger left). Why: undo stays
                possible without slowing the next ticket.
              </p>
              <p className="cd-text">
                <strong>S7 &middot; Shift close Totals by payment type and passenger type, voids listed,</strong>{' '}
                expected cash in bag. <span className="cd-soft">Print waybill summary</span> +{' '}
                <span className="cd-soft">Show settlement QR</span> for the depot. Why: the conductor sees exactly
                what they owe before the cashier does.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Prototype" title="4:4 Annotated wireframes and frame specs" />}>{null}</Row>
            <Row left={<Tag caps><strong>Sample</strong> <span className="cd-tag__dim">data (illustrative)</span></Tag>}>
              <p className="cd-text">
                Route 500D, direction Silk Board → Hebbal. Bus is at Marathahalli. Stages ahead and fares from here:
                Mahadevapura ₹10 · KR Puram ₹15 · Nagawara ₹20 · Hebbal ₹25. Stops behind the bus never appear.
              </p>
            </Row>
            <Fig
              title="One screen, three states, every element placed for the thumb"
              sub="Annotated wireframes · S2, S3, E1"
              src={wireframesA}
              alt="Three annotated phone wireframes: S2 idle with next-stop glance bar, three predicted stops with fares, a more-stops list, four passenger counters and a disabled commit area; S3 with three Full to Hebbal selected, summary strip of ₹75 and an active Slide to print button; E1 with the printer off and the ticket held, with a Reconnect button."
              maxWidth={895}
              scroll
            />
            <Row left={null}>
              <p className="cd-text">
                The screens differ only where the state changes; every button stays in the same place across all
                three.
              </p>
            </Row>
            <Fig
              title="Setup once; then every payment uses the same places"
              sub="Annotated wireframes · S1, S4, S5"
              src={wireframesB}
              alt="Three annotated phone wireframes: S1 shift start with waybill scanned, route, right-hand choice, printer paired, paper and coins checked, and a big Start trip button; S4 mixed group of 2 Shakti and 1 Full to KR Puram, total ₹15; S5 digital pay with a QR code, a tap card or phone zone, Take cash instead and Cancel."
              maxWidth={895}
              scroll
            />
            <Fig
              title="After the ticket: confirmation, honest failure, fair settlement"
              sub="Annotated wireframes · S6, E3, S7"
              src={wireframesC}
              alt="Three annotated phone wireframes: S6 ticket issued with a printed confirmation and a Void last chip for 10 seconds; E3 UPI not confirmed with QR expired and the options Wait a little longer, Take cash and Record UTR and issue; S7 shift close with tickets, cash expected, UPI, Shakti riders, voids and a settlement QR."
              maxWidth={895}
              scroll
            />

            <Row left={<Tag>S2 &middot; Ticket screen, idle</Tag>} stack>{null}</Row>
            <Table head={['Element', 'Size / position', 'Behaviour', 'Why']} rows={S2_SPECS} />

            <Row left={<Tag>S3 &middot; Composed: 3 Full to Hebbal (the brief&rsquo;s 4 s task)</Tag>}>
              <p className="cd-text">
                Selected state uses a thick border and a check mark, not colour alone. The ₹75 is the largest number
                on screen because the conductor says it aloud to collect.
              </p>
            </Row>
            <Row left={<Tag>S4 &middot; Mixed group: 2 Shakti + 1 Full to KR Puram</Tag>}>
              <p className="cd-text">
                Summary strip: KR Puram · 2 Shakti ₹0 · 1 Full ₹15 = ₹15. One slip prints both lines. If only Shakti
                is selected (total ₹0), the commit bar reads <span className="cd-soft">Slide to print free ticket</span>{' '}
                and UPI is hidden.
              </p>
            </Row>
            <Row left={<Tag>S5 &middot; Digital pay: QR or tap</Tag>}>
              <p className="cd-text">
                On confirmation: <span className="cd-soft">Paid ✓</span>, double pulse, ticket prints automatically.
                After 30 s unconfirmed, the options in §5.2 appear.
              </p>
            </Row>
            <Row left={<Tag>S6 &middot; Issued + printed ticket</Tag>}>
              <p className="cd-text">
                Short confirmation toast: Ticket 0418 · ₹75 · Printed. Screen resets to S2 with stop and counters
                cleared. <span className="cd-soft">Void last</span> chip shows in the commit bar for 10 s.
              </p>
              <p className="cd-text">Printed slip (57 mm):</p>
              <p className="cd-slip">
                {'BMTC 500D Bus KA-01-F-1234\nMarathahalli → Hebbal\nFull ×3 @ ₹25   ₹75\nCash 08:42 12-10-26\nTkt 0418 Cond ID 4471'}
              </p>
            </Row>

            <Row left={<Tag>S7 &middot; Shift close</Tag>} stack>{null}</Row>
            <Table
              head={['Line', 'Example']}
              rows={[
                ['Tickets issued', '312'],
                ['Cash expected in bag', '₹3,840'],
                ['UPI collected', '₹1,620'],
                ['Shakti passengers', '142'],
                ['Voids (with reasons)', '3'],
              ]}
            />
            <Row left={null}>
              <p className="cd-text">
                Buttons: <span className="cd-soft">Print waybill summary</span> &middot;{' '}
                <span className="cd-soft">Show settlement QR</span>. The conductor sees expected cash before the
                cashier counts it.
              </p>
            </Row>

            <Row left={<Tag>Error frames to include</Tag>}>
              <div className="cd-callout">
                <ul>
                  <li>
                    <strong>E1 Printer off:</strong> yellow banner with a black edge above commit bar,{' '}
                    <span className="cd-soft">Reconnect</span> button; composed ticket stays held.
                  </li>
                  <li>
                    <strong>E2 Paper out mid-print:</strong> black-and-yellow hazard banner,{' '}
                    <span className="cd-soft">Load roll</span>, then <span className="cd-soft">Reprint</span>; reprint
                    carries DUPLICATE.
                  </li>
                  <li>
                    <strong>E3 UPI not confirmed:</strong> <span className="cd-soft">Wait</span> &middot;{' '}
                    <span className="cd-soft">Take cash</span> &middot;{' '}
                    <span className="cd-soft">Record UTR &amp; issue</span> (flagged for depot check).
                  </li>
                </ul>
              </div>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Prototype" title="4:5 The coin change system" />}>
              <p className="cd-text">
                Change exchange was one of the things Sridhar named as most frustrating, and on my ride I watched
                money pass from hand to hand through the crowd. The coin system takes the maths out of his head and
                the coins out of his fist, without adding a battery or a touch to every ticket.
              </p>
              <figure className="cd-photo">
                <img
                  src={coinChangerPhoto}
                  alt="A hand holding a belt-worn metal coin changer with spring tubes, dropping a coin into the palm"
                  loading="lazy"
                  decoding="async"
                  style={{ maxWidth: 586 }}
                />
                <figcaption>
                  Reference: an existing belt-worn coin changer. Thumb levers drop one coin at a time into the palm;
                  the design builds on this.
                </figcaption>
              </figure>
            </Row>

            <Fig
              title="A coin changer worn on the belt"
              sub="Front view. Purely mechanical: four tubes, four thumb levers, a window to see what is left."
              src={coinChangerFront}
              alt="Front view of the belt coin changer with a refill cap on top, four spring tubes for ₹1, ₹2, ₹5 and ₹10, a window slot showing how many coins are left, a thumb lever with one to four ridges under each tube, a belt clip front-left opposite the printer, and coins dropping into the palm."
              maxWidth={809}
              scroll
            />
            <Fig
              title="The screen plans the coins; the thumb follows"
              sub="After a cash slide, an optional step. Example: ₹100 handed over for a ₹75 ticket."
              src={coinPlanFlow}
              alt="Five-step flow: passenger hands ₹100 for ₹75, he taps ₹100 (optional, after the slide), the screen plans it as give ₹25: 10 + 10 + 5, the thumb follows with two ₹10 presses and one ₹5, coins and ticket handed over together. A phone screen shows the note buttons ₹50, ₹100, ₹200, ₹500 and the change to give. Notes explain what the app knows, what it does not know, why the tap is optional and what happens when he can't give change."
              maxWidth={890}
              scroll
            />

            <Row left={<Tag caps><strong>Decisions,</strong> <span className="cd-tag__dim">and why</span></Tag>}>
              <div className="cd-callout">
                <ul>
                  <li>
                    <strong>Mechanical, not smart.</strong> Nothing to charge, pair or crash, and it keeps working
                    when everything else fails. The price: the app cannot count the coins.
                  </li>
                  <li>
                    <strong>One order everywhere.</strong> ₹1 ₹2 ₹5 ₹10 left to right on the belt and on the screen,
                    so the plan on screen maps straight to the levers.
                  </li>
                  <li>
                    <strong>Ridges for feel.</strong> One to four ridges on the levers, so his thumb finds ₹10
                    without looking, the way it finds ETM keys today.
                  </li>
                  <li>
                    <strong>Short of coins is a normal case.</strong> One tap prints CHANGE DUE ₹X in reverse on the
                    ticket, so today&rsquo;s &ldquo;give later&rdquo; is on record for both of them.
                  </li>
                  <li>
                    <strong>Shift start records the coin float.</strong> The opening coins are entered in S1, so the
                    cash expected at shift close already includes them.
                  </li>
                </ul>
              </div>
            </Row>
            <Row left={<Tag>What could break it</Tag>}>
              <div className="cd-callout">
                <ul>
                  <li>
                    <strong>Coin series.</strong> Coins of the same value circulate in more than one size. A tube cut
                    for one series may jam on another. Test with a real day&rsquo;s coins before anything else.
                  </li>
                  <li>
                    <strong>Weight.</strong> A full changer sits on the hip all shift. Test how full it needs to be.
                  </li>
                  <li>
                    <strong>Notes.</strong> The changer does nothing for notes; they go to the sorted pouch, and
                    large notes still push riders toward QR or tap.
                  </li>
                </ul>
              </div>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Prototype" title="4:6 Visual system and UI in glare" />}>{null}</Row>
            <Row left={<Tag>Layer 1 &middot; Practical measures before any colour</Tag>} stack>{null}</Row>
            <Fig
              title="Five things that help more than a palette"
              sub="Hardware and behaviour first. None of these needs a new device."
              src={diagramMeasures}
              alt="Five practical measures: Brightness lock (full brightness when the light sensor reads sun), Matte screen film (breaks mirror reflections into a soft haze), Phone spec (buy for outdoor peak brightness), Tilt to recover (big heavy type stays legible at an angle) and Eyes not needed (a double pulse and the printed ticket confirm every sale). Trade-off: full brightness costs battery."
              scroll
            />
            <Row left={<Tag>Layer 2 &middot; Colours chosen by what survives</Tag>}>
              <p className="cd-text">
                Reflected light adds the same brightness to every pixel. That flattens light-versus-dark differences
                and drains colour, so hue is the first thing to go. Mid-tone colours (green, red, magenta, grey,
                pastel tints) end up looking alike. Only pairs that are far apart in lightness stay readable. I
                tested each candidate pair the same way and kept only those.
              </p>
            </Row>
            <Fig
              title="Only light-versus-dark survives the sun"
              sub="Each pair indoors, then under the same simulated reflection. Green, red, grey and tints are dropped."
              src={diagramContrast}
              alt="Table of colour pairs indoors and in simulated sun with contrast ratios and a verdict. Keep: black on white (21.0 to 2.6:1), white on black (21.0 to 2.6:1), black on yellow as a big fill (14.7 to 2.1:1). Drop: white on green, red on white, grey label on white, and a pale tint as selected."
              scroll
            />
            <Fig
              title="Three colours, one meaning each"
              sub="Black, white and signal yellow. Every key pair is far above 7:1 indoors and keeps the most in sun."
              src={diagramPalette}
              alt="The whole palette: Black #000000 for all text by day and selected and active blocks, White #FFFFFF for the background by day, Signal Yellow #FFD400 for act-now fills. Key pairs computed: black on white 21.0:1, white on black 21.0:1, black on yellow 14.7:1."
              scroll
            />
            <Row left={<Tag>Layer 3 &middot; The screen, redesigned for sun</Tag>} stack>{null}</Row>
            <Fig
              title="The ticket screen in the sunlight palette"
              sub="S3, the brief’s task: three Full to Hebbal. By night the same layout inverts; positions never move."
              src={dayNight}
              alt="Two phone screens side by side, day with a sunlight palette and night with the same layout inverted, annotated: next stop at the top in heavy Kannada with a 4 dp black rule; selected stop as a solid block; active counter inverts the same way, Shakti says FREE ₹0 in words; the total at 50 sp Black weight; slide track black with a yellow knob. Three colours only: black, white, signal yellow."
              maxWidth={859}
              scroll
            />
            <Fig
              title="Same sun, two screens"
              sub="A typical calm app beside the sunlight palette, both under the same simulated reflection and hot spot."
              src={typicalVsSunlight}
              alt="A typical pastel app in simulated sun, mostly washed out, beside the sunlight palette screen which stays readable, with a table of what is still readable in the sun: next stop, which stop is selected, fares, passenger count, total to collect and print button are faint in the typical app and readable or obvious in the sunlight palette."
              maxWidth={874}
              scroll
            />
            <p className="cd-note">
              Simulation: a 35% white veil plus a hot-spot band. A judgement aid, not a measurement; the outdoor test
              checks it.
            </p>
            <Fig
              title="Components: state by area, shape and words"
              sub="Selection is inversion; status is shape and words; yellow is a fill, never thin text."
              src={diagramComponents}
              alt="Components: a destination row default with a 2 dp black border and selected with inverted black fill and a tick; commit and status states: disabled dashed outline, ready black with a yellow knob, done with a big tick, word and pulse; banners: a yellow printer-off reconnect banner and a black-and-yellow hazard-striped paper-out banner. Status is carried by shape, words and haptics, not green or red."
              scroll
            />
            <Row left={<Tag caps><strong>Type,</strong> <span className="cd-tag__dim">specified</span></Tag>} stack>
              {null}
            </Row>
            <Table head={['Element', 'Spec', 'Why']} rows={TYPE_SPEC} />
            <Row left={null}>
              <p className="cd-text">
                <strong>Day and night. The light sensor switches between the two; he can override it.</strong> By day
                the screen is white, because a white screen gives out the most light and hides reflections; a black
                screen in the sun works like a mirror for the windows behind him. By night the same layout inverts, so
                it does not dazzle in a dark bus.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Prototype" title="4:7 Brand and identity" />}>
              <p className="cd-text">
                The brand has one job: make a tool for a loud, tiring job feel calm and trustworthy, to the conductor
                first and the passenger second. It is the product&rsquo;s identity, not the operator&rsquo;s:
                BMTC&rsquo;s own name stays on the ticket, and no operator logo is used here.
              </p>
            </Row>
            <div className="cd-cards">
              {BRAND_CARDS.map(([letter, name, because, so]) => (
                <div className="cd-card cd-card--brand" key={name}>
                  <p className="cd-card__n">{letter}</p>
                  <p className="cd-card__title">{name}</p>
                  <dl>
                    <dt>Because</dt>
                    <dd>{because}</dd>
                    <dt>So</dt>
                    <dd>{so}</dd>
                  </dl>
                </div>
              ))}
            </div>
            <Fig
              title="A ticket that carries a route"
              sub="Mark, palette, app icon, and the brand where most people will actually meet it: the printed ticket."
              src={diagramBrand}
              alt="Conductor Companion mark and wordmark in English and Kannada: a ticket stub carrying a route with two stops passed and the destination in signal yellow; app icon variants that read at 44 px on a cheap phone launcher; brand palette of Black, White, Signal Yellow and Depot Navy #0B2545; and the printed 57 mm thermal ticket in one colour, a normal ticket and a change-due ticket printed in reverse."
              scroll
            />
            <Row left={<Tag>Voice: how the product talks</Tag>} stack>{null}</Row>
            <Table head={['Moment', 'Says', 'Never says']} rows={VOICE} />
          </Block>

          <Block>
            <Row left={<Head phase="Prototype" title="4:8 Interaction, haptics and gestures" />} stack>{null}</Row>
            <Fig
              title="Four patterns, each with one meaning, learnable by feel"
              sub="Haptics map · 4 patterns, 4 meanings"
              src={diagramHaptics}
              alt="Haptics map: stop tapped or +1 passenger is a short pulse meaning registered, like a key click; minus 1 passenger is a longer soft pulse meaning removed, like a soft thud; ticket printed or UPI paid is a double pulse meaning done, move on, like a double knock; error or action blocked is three long pulses meaning look at screen, like a phone alarm."
              scroll
            />
            <Row left={null}>
              <p className="cd-text">
                Rules: adding and removing must feel different; &ldquo;done&rdquo; means the same everywhere; error is
                the only strong pattern, so it never becomes background noise.
              </p>
            </Row>
            <Row left={<Tag caps><strong>Gestures</strong> <span className="cd-tag__dim">and why</span></Tag>}>
              <div className="cd-callout">
                <ul>
                  <li>
                    <strong>Tap</strong> for everything frequent (destination, counters). Fastest, most reliable
                    while moving.
                  </li>
                  <li>
                    <strong>Slide to print</strong> for the one irreversible action. A brush or bump can&rsquo;t
                    complete a slide.
                  </li>
                  <li>
                    <strong>Long-press</strong> only for rare actions (menu, reset counters). Keeps them out of
                    accidental reach.
                  </li>
                  <li>No double-taps, pinches or multi-finger gestures.</li>
                </ul>
              </div>
            </Row>
            <Row left={<Tag caps><strong>Motion</strong></Tag>}>
              <p className="cd-text">
                Short and functional. The printed ticket slides up out of the commit bar, then the screen resets.
                Motion confirms <span className="cd-soft">what happened</span>; it never delays the next ticket.
              </p>
            </Row>
            <Row left={<Tag>Motion-aware input (stretch idea)</Tag>}>
              <p className="cd-text">
                If the accelerometer detects a sharp jolt, ignore touches for a moment. Flagged as needing testing
                &mdash; it could also block real taps.
              </p>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Prototype" title="4:9 Decision log" />} stack>{null}</Row>
            <div className="cd-pairs">
              {DECISIONS.map(([title, not, why, cost]) => (
                <div key={title}>
                  <p className="cd-pair__title">{title}</p>
                  <dl className="cd-kv">
                    <dt>Not</dt>
                    <dd>{not}</dd>
                    <dt>Why</dt>
                    <dd>{why}</dd>
                    <dt className="is-cost">Cost</dt>
                    <dd className="is-cost">{cost}</dd>
                  </dl>
                </div>
              ))}
            </div>
          </Block>
        </section>

        {/* ---------------- 5 Test ---------------- */}
        <section id="test" className="cd-phase-section">
          <Block>
            <Row left={<Head phase="Test" title="5:1 Heuristic self-review" />}>
              <p className="cd-text">
                Before testing with conductors, I reviewed the design against NN/g&rsquo;s 10 usability heuristics. A
                self-review finds obvious problems cheaply; it does not replace testing with real users.
              </p>
            </Row>
            <div className="cd-pairs">
              {HEURISTICS.map(([title, body, risk], i) => (
                <div key={title}>
                  <p className="cd-pair__n">{String(i + 1).padStart(2, '0')}</p>
                  <p className="cd-pair__title">{title}</p>
                  <p className="cd-pair__body">{body}</p>
                  <dl className="cd-kv" style={{ marginTop: 8 }}>
                    <dt className="is-risk">Risk</dt>
                    <dd className="is-risk">{risk}</dd>
                  </dl>
                </div>
              ))}
            </div>
          </Block>

          <Block>
            <Row left={<Head phase="Test" title="5:2 Stress test: edge cases and error states" />} stack>{null}</Row>
            <Table head={['Situation', 'What the conductor sees', 'Why this way']} rows={STRESS} />
          </Block>

          <Block>
            <Row left={<Head phase="Test" title="5:3 Usability test plan and success metrics" />} stack>{null}</Row>
            <Row left={<Tag>Test plan (first round)</Tag>}>
              <div className="cd-callout">
                <ol>
                  <li>5 conductors, clickable prototype on a real phone.</li>
                  <li>Tasks: 3 full to a predicted stop; 2 Shakti + 1 full to an unlisted stop; UPI payment; void a wrong ticket.</li>
                  <li>Conditions: seated, then standing while walking and holding a bag (simulated sway), then outdoors in sun.</li>
                  <li>Measure: time per ticket, mis-taps, wrong tickets, where eyes go (observed), and &ldquo;what would you change?&rdquo;.</li>
                </ol>
              </div>
            </Row>
            <Row left={<Tag caps><strong>Success</strong> <span className="cd-tag__dim">metrics</span></Tag>} stack>
              {null}
            </Row>
            <div className="cd-metrics">
              {[
                ['≤ 4 s for 90% of attempts', '3-passenger ticket, predicted stop'],
                ['Fewer than on current ETM (baseline to measure)', 'Wrong tickets printed'],
                ['To set after waybill analysis', 'Prediction hit rate (top 3)'],
                ['Down vs current baseline', 'Shift settlement mismatches'],
              ].map(([v, k]) => (
                <div key={k}>
                  <p className="cd-metric__v">{v}</p>
                  <p className="cd-metric__k">{k}</p>
                </div>
              ))}
            </div>
            <Row left={<Tag caps>Limitations</Tag>}>
              <p className="cd-text">
                Only one conductor conversation and one ride; prediction logic and fare rules assumed; printer
                hardware not tested; I have not checked BMTC&rsquo;s current UPI and audit rules in detail.
              </p>
            </Row>
            <Row left={<Tag caps>Next</Tag>}>
              <p className="cd-text">
                Interview 3–5 conductors at a depot, get one week of waybill data to tune predictions, test haptic
                patterns on low-cost phones, and verify Kannada labels with native readers.
              </p>
            </Row>
          </Block>
        </section>

        {/* ---------------- 6 Implement ---------------- */}
        <section id="implement" className="cd-phase-section">
          <Block>
            <Row left={<Head phase="Implement" title="6:1 Pilot, feasibility and risks" />}>
              <div className="cd-callout">
                <ol>
                  <li>
                    <strong>Pilot:</strong> one depot, one route, a handful of conductors who volunteer, running the
                    kit beside the old ETM for a few weeks.
                  </li>
                  <li>
                    <strong>Train at the depot:</strong> one short session, plus a practice mode on the phone that
                    prints nothing.
                  </li>
                  <li>
                    <strong>Measure against today:</strong> voids, settlement mismatches, conductor confidence, time
                    per ticket from logs.
                  </li>
                  <li>
                    <strong>Iterate, then widen</strong> to a second route with different riders (more cash, more
                    Shakti, weaker signal).
                  </li>
                </ol>
              </div>
            </Row>
            <div className="cd-deps">
              {DEPENDENCIES.map(([title, body, risk]) => (
                <div key={title}>
                  <p className="cd-dep__title">{title}</p>
                  <p className="cd-dep__body">{body}</p>
                  <p className="cd-dep__risk">If missing: {risk}</p>
                </div>
              ))}
            </div>
            <Row left={null}>
              <div className="cd-quote">
                <p className="cd-quote__text">Biggest risk: a new device that ever shows the wrong total.</p>
                <p className="cd-quote__src">So the pilot runs alongside the old ETM until totals match, day after day</p>
              </div>
            </Row>
          </Block>

          <Block>
            <Row left={<Head phase="Implement" title="6:2 The whole kit, on one conductor" />}>
              <p className="cd-text">
                Everything above, on one person. One hand holds on. The other holds a light phone and does five
                touches. The printer, the coins and the notes live on the body, where they can be reached by feel.
              </p>
            </Row>
            <Fig
              title="The kit, on one conductor"
              sub="Sketch of the full solution on a moving bus."
              src={kitOnConductor}
              alt="Sketch of a smiling conductor on a moving bus with one hand on the overhead rail and a light phone on a lanyard in the other. Annotations: other hand stays on the rail, 5 touches on one screen, phone with one thumb on a breakaway lanyard, Bluetooth so the phone tells the printer what to print, belt printer with the ticket at the hip, coin changer with thumb levers read by feel, note pouch with notes sorted by value. What he no longer carries: the ETM, a fist of loose coins, a fare table in his head."
              maxWidth={860}
            />
          </Block>
        </section>

        {/* ---------------- Learning ---------------- */}
        <section id="reflection" className="cd-reflection cd-reveal">
          <hr className="cd-reflection__rule" />
          <p className="cd-reflection__label">Learning</p>
          <div className="cd-reflection__box">
            <p>
              Riding the bus showed me the conductor&rsquo;s real limits: one free hand, constant motion and fare
              decisions made by eye. Designing for him, not around him, turned rejected ideas into a usable kit.
            </p>
          </div>
          <hr className="cd-reflection__end" />
          <p className="cd-reflection__signoff">Hyderabad, India</p>
          <p className="cd-reflection__signoff">2026</p>
        </section>
      </main>

      <div className="site-fixed-footer site-fixed-footer--transparent">
        <SiteFooter onDark={overHeroAtBottom} />
      </div>
      <SiteMascot />
      <FloatingPortfolioCTA />
    </div>
  )
}

export default ProjectConductorCompanion
