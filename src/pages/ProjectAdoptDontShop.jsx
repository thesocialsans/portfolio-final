import { useRef } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SiteMascot from '../components/SiteMascot'
import FloatingPortfolioCTA from '../components/FloatingPortfolioCTA'
import ProjectSectionNav from '../components/ProjectSectionNav'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/siteFrame.css'
import heroPhonesGrid from '../assets/images/adopt-dont-shop/hero-phones-grid.png'
import heroAdoptPhone from '../assets/images/adopt-dont-shop/hero-adopt-phone.png'
import logoAdoreMate from '../assets/images/adopt-dont-shop/logo-adoremate.png'
import designProcess from '../assets/images/adopt-dont-shop/design-process.png'
import collaborationIcons from '../assets/images/adopt-dont-shop/collaboration-icons.png'
import personas from '../assets/images/adopt-dont-shop/personas.png'
import userJourney from '../assets/images/adopt-dont-shop/user-journey.png'
import iaHomePages from '../assets/images/adopt-dont-shop/ia-home-pages.png'
import iaFeatures from '../assets/images/adopt-dont-shop/ia-features.png'
import userFlow from '../assets/images/adopt-dont-shop/user-flow.png'
import wireframesPaper from '../assets/images/adopt-dont-shop/wireframes-paper.png'
import wireframesHifi from '../assets/images/adopt-dont-shop/wireframes-hifi.png'
import screenHome from '../assets/images/adopt-dont-shop/screen-home.png'
import screenShelter from '../assets/images/adopt-dont-shop/screen-shelter.png'
import screenAdopt from '../assets/images/adopt-dont-shop/screen-adopt.png'
import './ProjectAdoptDontShop.css'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'process', label: 'Process' },
  { id: 'hypothesis', label: 'Hypothesis' },
  { id: 'branding', label: 'Branding' },
  { id: 'research', label: 'Research' },
  { id: 'affinity', label: 'Affinity map' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'personas', label: 'Personas' },
  { id: 'journey', label: 'User journey' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'flow', label: 'User flow' },
  { id: 'wireframes', label: 'Wireframes' },
  { id: 'visual-design', label: 'Visual design' },
  { id: 'mockups', label: 'Mockups' },
  { id: 'reflection', label: 'Reflection' },
]

function ProjectAdoptDontShop() {
  const containerRef = useRef(null)
  useScrollReveal(containerRef, '.ad-reveal')

  return (
    <div className="ad-page" ref={containerRef}>
      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="Portfolio" />
      </div>
      <ProjectSectionNav sections={SECTIONS} />

      <header className="ad-hero">
        <img className="ad-hero__image" src={heroAdoptPhone} alt="Designing a better way to adopt pets — reducing friction in pet adoption journeys. UX Design, Research, Synthesis, Prototyping. Timeline: 1 week design case study." />
      </header>

      <main>
        <section id="overview" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Overview</h2>
          <dl className="ad-overview__facts">
            <dt>Role</dt>
            <dd>UX Design, Research, Synthesis, Prototyping</dd>
            <dt>Timeline</dt>
            <dd>1 week design case study</dd>
            <dt>The Why?</dt>
            <dd>
              The adoption of pets from shelters is increasing, but the process is still difficult and
              time-consuming. A pet adoption app can simplify the process, increase adoption rates, and discourage
              pet purchases.
            </dd>
            <dt>Problem statement</dt>
            <dd>
              We attempted to understand this app to identify the problem areas and find relevant opportunities for
              design interventions.
            </dd>
          </dl>
        </section>

        <section id="process" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">My Design Process</h2>
          <p className="ad-section__intro">Process: Modified double diamond &mdash; from chaos to creation.</p>
          <img className="ad-process-image" src={designProcess} alt="Modified double diamond process: Discover, Define, Dream, Design, User Interface design, Development Hand-Off" />
        </section>

        <section id="hypothesis" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">&ldquo;The Why?&rdquo;</h2>
          <p>
            AdoreMate, a pet adoption app, aims to connect potential pet parents with shelters, making it easier to
            choose a fit furry companion. I predict a rise in successful and fulfilling adoptions as a result of
            taking into account many viewpoints and critical elements, encouraging happier homes for both pets and
            adopters.
          </p>

          <div className="ad-section-header">
            <h3 className="ad-section-header__title">Issues</h3>
            <p className="ad-section-header__intro">
              AdoreMate will address the following issues by providing a platform for adopters to search, learn,
              and apply for adoption online. It can also speed up the process by linking adopters with shelters.
            </p>
          </div>
          <div className="ad-three-col">
            <div className="ad-pain-card">
              <span className="ad-pain-card__dash" />
              <h4>Overcrowding of pets</h4>
              <p>India has a significant stray animal population, with millions of animals ending up in shelters.</p>
            </div>
            <div className="ad-pain-card">
              <span className="ad-pain-card__dash" />
              <h4>Lack of awareness</h4>
              <p>Many people in India are not aware of the benefits of adopting pets from shelters.</p>
            </div>
            <div className="ad-pain-card">
              <span className="ad-pain-card__dash" />
              <h4>Stressful adoption process for animals</h4>
              <p>Shelter animals can experience stress during the adoption process.</p>
            </div>
          </div>

          <div className="ad-section-header ad-section-header--spaced">
            <h3 className="ad-section-header__title">Business Opportunities</h3>
            <p className="ad-section-header__intro">
              AdoreMate has a number of business opportunities that could make it a successful venture. By
              carefully considering all of the factors involved, AdoreMate can position itself to be a leader in
              the pet adoption space.
            </p>
          </div>
          <div className="ad-two-col">
            <div>
              <h4>Advertising</h4>
              <p>AdoreMate can generate revenue from businesses that want to advertise to potential pet adopters.</p>
            </div>
            <div>
              <h4>Subscription</h4>
              <p>AdoreMate can charge users a subscription fee for premium features.</p>
            </div>
            <div>
              <h4>Donations</h4>
              <p>AdoreMate can solicit donations from users to support its mission of helping pets find homes.</p>
            </div>
            <div>
              <h4>Partnerships</h4>
              <p>AdoreMate can partner with businesses and organizations to promote pet adoption.</p>
            </div>
          </div>

          <h3 className="ad-italic-head">Potential Collaborations</h3>
          <img className="ad-icons-image" src={collaborationIcons} alt="Potential collaborations: pet grooming, pet toys, pet medicines, pet food, pet training, pet transport" />
        </section>

        <section id="branding" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">&ldquo;The Who?&rdquo; &mdash; Branding</h2>

          <p className="ad-label">App Logo</p>
          <img className="ad-branding__logo" src={logoAdoreMate} alt="AdoreMate app logo" />

          <p className="ad-label ad-label--spaced">Colors</p>
          <div className="ad-swatches">
            <div className="ad-swatch" style={{ background: '#070707' }}>
              <span className="ad-swatch__name">Deep Brown</span>
              <span className="ad-swatch__hex">#070707</span>
            </div>
            <div className="ad-swatch" style={{ background: '#a87000' }}>
              <span className="ad-swatch__name">Brown</span>
              <span className="ad-swatch__hex">#A87000</span>
            </div>
            <div className="ad-swatch ad-swatch--bordered" style={{ background: '#f7f7f7', color: '#070707' }}>
              <span className="ad-swatch__name">White Lilac</span>
              <span className="ad-swatch__hex">#F7F7F7</span>
            </div>
          </div>

          <p className="ad-label ad-label--spaced">Typography</p>
          <div className="ad-typography">
            <span className="ad-typography__pill">Manrope</span>
            <span className="ad-typography__plain">Manrope</span>
          </div>

          <p className="ad-label ad-label--spaced">Iconography</p>
          <div className="ad-icon-row">
            <span className="ad-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v9a1 1 0 0 0 1 1H9v-5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V20h2.5a1 1 0 0 0 1-1v-9" /></svg>
            </span>
            <span className="ad-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="8" cy="7" r="2.2" /><circle cx="16" cy="7" r="2.2" /><circle cx="4.5" cy="12.5" r="2" /><circle cx="19.5" cy="12.5" r="2" /><path d="M12 12c-3 0-5.5 2.4-5.5 5.4 0 1.6 1.3 2.6 2.9 2.1.9-.3 1.7-.3 2.6 0 1.6.5 2.9-.5 2.9-2.1C15.5 14.4 15 12 12 12z" /></svg>
            </span>
            <span className="ad-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 4c-6 0-10 4-10 10 0 2 .4 3.6 1 5 4-.5 9-3 9-9 0-2 0-4-1-6 1 0 1 0 1 0Z" /><path d="M11 14 5 20" /></svg>
            </span>
            <span className="ad-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 5h16v10H9l-4 4V5Z" /><circle cx="8.5" cy="10" r="0.8" fill="currentColor" stroke="none" /><circle cx="12" cy="10" r="0.8" fill="currentColor" stroke="none" /><circle cx="15.5" cy="10" r="0.8" fill="currentColor" stroke="none" /></svg>
            </span>
            <span className="ad-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" strokeLinecap="round" /><circle cx="9" cy="9.5" r="0.9" fill="currentColor" stroke="none" /><circle cx="15" cy="9.5" r="0.9" fill="currentColor" stroke="none" /></svg>
            </span>
            <span className="ad-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.4" /></svg>
            </span>
            <span className="ad-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" /><circle cx="12" cy="10.5" r="1.3" fill="currentColor" stroke="none" /></svg>
            </span>
            <span className="ad-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3a5 5 0 0 0-5 5v3c0 1-1.5 3-2 3.5h14c-.5-.5-2-2.5-2-3.5V8a5 5 0 0 0-5-5Z" /><path d="M10 19a2 2 0 0 0 4 0" strokeLinecap="round" /></svg>
            </span>
          </div>
        </section>

        <section id="research" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Secondary Research</h2>
          <p className="ad-section__intro">
            Challenge | Data | Interviews | Personas | Pain points | Journey Map
          </p>
          <p>
            We started off this research by looking into the various data on animal shelters with its co-relation
            to stray pets in the city, followed by interviewing 5 pet-lovers in the city to get a better idea of
            the experiences faced by people and understand the issues in hand.
          </p>

          <h3 className="ad-italic-head ad-italic-head--center">Concise Data</h3>
          <ol className="ad-stats">
            <li className="ad-stat">
              <p className="ad-stat__text">
                <strong>Adoption Rates:</strong> Only 1 have adopted pets from animal shelters, indicating a
                relatively low adoption rate in India.
              </p>
              <div className="ad-stat__bar">
                <div className="ad-stat__bar-fill" style={{ width: '20%' }}>20%</div>
              </div>
            </li>
            <li className="ad-stat">
              <p className="ad-stat__text">
                <strong>Awareness about Shelters:</strong> 2 participants weren&rsquo;t aware of the animal shelters
                in their locality, highlighting a lack of awareness about the available resources for stray and
                abandoned animals.
              </p>
              <div className="ad-stat__bar">
                <div className="ad-stat__bar-fill" style={{ width: '45%' }}>45%</div>
              </div>
            </li>
            <li className="ad-stat">
              <p className="ad-stat__text">Only 1 participants were aware of over crowding issues faced by animal shelters.</p>
              <div className="ad-stat__bar">
                <div className="ad-stat__bar-fill" style={{ width: '20%' }}>20%</div>
              </div>
            </li>
            <li className="ad-stat">
              <p className="ad-stat__text">
                <strong>Funding constraints:</strong> 3 participants concern about the funding constraints faced by
                animal shelters, making it difficult for them to provide adequate care and facilities.
              </p>
              <div className="ad-stat__bar">
                <div className="ad-stat__bar-fill" style={{ width: '60%' }}>60%</div>
              </div>
            </li>
            <li className="ad-stat">
              <p className="ad-stat__text">
                <strong>Volunteer engagement:</strong> Only 1 participants reported volunteering at animal shelters,
                suggesting a need for increased efforts to engage the community in supporting these organizations.
              </p>
              <div className="ad-stat__bar">
                <div className="ad-stat__bar-fill" style={{ width: '20%' }}>20%</div>
              </div>
            </li>
            <li className="ad-stat">
              <p className="ad-stat__text">
                <strong>Adoption Barriers:</strong> Among the 5 interviewed individuals, 2 cited complex adoption
                processes and concerns about compatibility as barriers preventing them from adopting pets from
                shelters.
              </p>
              <div className="ad-stat__bar">
                <div className="ad-stat__bar-fill" style={{ width: '45%' }}>45%</div>
              </div>
            </li>
          </ol>
          <p className="ad-callout">
            These statistics highlight the limited awareness, adoption rates, and engagement in animal welfare
            activities among individuals in Chennai, India. The data underscores the need for initiatives like the
            Lollypaws app to address these challenges and promote responsible pet ownership, adoption, and community
            involvement.
          </p>
        </section>

        <section id="affinity" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow ad-eyebrow--center">Affinity Mapping</h2>
          <div className="ad-browser-card">
            <div className="ad-browser-card__bar">
              <span className="ad-browser-card__dot" style={{ background: '#ff5f57' }} />
              <span className="ad-browser-card__dot" style={{ background: '#febc2e' }} />
              <span className="ad-browser-card__dot" style={{ background: '#28c840' }} />
            </div>
            <div className="ad-affinity">
              <div className="ad-affinity__col ad-affinity__col--orange">
                <h4>Awareness &amp; Knowledge</h4>
                <div className="ad-affinity__note">Limited awareness of overcrowding issues at animal shelters.</div>
                <div className="ad-affinity__note">Limited knowledge of volunteer opportunities at shelters.</div>
                <div className="ad-affinity__note">Lack of understanding about the adoption process.</div>
                <div className="ad-affinity__note">Low attendance at community events related to animal welfare.</div>
              </div>
              <div className="ad-affinity__col ad-affinity__col--green">
                <h4>Technology &amp; Digital Engagement</h4>
                <div className="ad-affinity__note">Low familiarity with mobile apps or online platforms for pet adoption.</div>
                <div className="ad-affinity__note">Limited access to information about available pets for adoption through digital channels.</div>
                <div className="ad-affinity__note">Low engagement in social media communities related to animal shelters or pet adoption.</div>
                <div className="ad-affinity__note">Low adoption rate from shelters even after advertisements published.</div>
              </div>
              <div className="ad-affinity__col ad-affinity__col--blue">
                <h4>Adoption Barriers &amp; Limited Resources</h4>
                <div className="ad-affinity__note">Many rental and apartment housing communities have restrictions on pet ownership.</div>
                <div className="ad-affinity__note">Owning a pet requires time, effort, and a long-term commitment.</div>
                <div className="ad-affinity__note">Some people think pet ownership is expensive.</div>
                <div className="ad-affinity__note">Animal shelters often struggle with limited space and resources.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="challenges" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Design Challenges</h2>
          <ol className="ad-challenges">
            <li>
              <span className="ad-challenges__num">01</span>
              <span>Collaboration &amp; Networking</span>
            </li>
            <li>
              <span className="ad-challenges__num">02</span>
              <span>Overcrowding and limited resources</span>
            </li>
            <li>
              <span className="ad-challenges__num">03</span>
              <span>Adoption Barriers</span>
            </li>
            <li>
              <span className="ad-challenges__num">04</span>
              <span>Lack of awareness</span>
            </li>
            <li>
              <span className="ad-challenges__num">05</span>
              <span>Volunteering &amp; community engagement</span>
            </li>
          </ol>

          <h3 className="ad-italic-head">Pain Points</h3>
          <div className="ad-two-col">
            <div className="ad-pain-card">
              <span className="ad-pain-card__dash" />
              <h4>Long Process</h4>
              <p>Many pet shelter websites &amp; apps are outdated and confusing.</p>
            </div>
            <div className="ad-pain-card">
              <span className="ad-pain-card__dash" />
              <h4>Unverified Shelters</h4>
              <p>This can create a hassle for new pet parents and those who want to board their pets.</p>
            </div>
            <div className="ad-pain-card">
              <span className="ad-pain-card__dash" />
              <h4>No Centralised Platform</h4>
              <p>This can lead to confusion and lack of awareness.</p>
            </div>
            <div className="ad-pain-card">
              <span className="ad-pain-card__dash" />
              <h4>Lack of Information</h4>
              <p>In need of a platform where all the information is provided.</p>
            </div>
          </div>
        </section>

        <section id="personas" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Qualitative Research &mdash; Personas</h2>
          <img className="ad-full-image" src={personas} alt="Persona A, Varun Aric, Architect, age 25; Persona B, Nagashree, Dancer, age 25" />
        </section>

        <section id="journey" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">User Journey</h2>
          <img className="ad-full-image" src={userJourney} alt="User journey map showing connectivity between typical users and animal shelters" />
        </section>

        <section id="architecture" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Information Architecture</h2>
          <h3 className="ad-italic-head">Pages</h3>
          <img className="ad-ia-image" src={iaHomePages} alt="Home page information architecture tree" />
          <h3 className="ad-italic-head">Features</h3>
          <img className="ad-ia-image" src={iaFeatures} alt="Features information architecture tree" />
        </section>

        <section id="flow" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">User Flow &mdash; App Structure</h2>
          <img className="ad-full-image" src={userFlow} alt="User flow from splash screen through onboarding, login, and the five main app sections" />
        </section>

        <section id="wireframes" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Paper Wireframes &mdash; Ideation</h2>
          <img className="ad-full-image" src={wireframesPaper} alt="Hand-drawn paper wireframes for the home, adopt, and shelter screens" />
          <div className="ad-screen-captions">
            <p><span className="ad-screen-captions__num">Screen 01 -</span> <span className="ad-screen-captions__name">Home</span></p>
            <p><span className="ad-screen-captions__num">Screen 02 -</span> <span className="ad-screen-captions__name">Adopt screen</span></p>
            <p><span className="ad-screen-captions__num">Screen 03 -</span> <span className="ad-screen-captions__name">Shelter screen</span></p>
          </div>

          <h2 className="ad-eyebrow ad-eyebrow--spaced">High-Fi Wireframes &mdash; Conceptualisation</h2>
          <img className="ad-full-image" src={wireframesHifi} alt="High-fidelity grayscale wireframes for the home, shelter, and adopt screens" />
          <div className="ad-screen-captions">
            <p><span className="ad-screen-captions__num">Screen 01 -</span> <span className="ad-screen-captions__name">Home</span></p>
            <p><span className="ad-screen-captions__num">Screen 02 -</span> <span className="ad-screen-captions__name">Adopt screen</span></p>
            <p><span className="ad-screen-captions__num">Screen 03 -</span> <span className="ad-screen-captions__name">Shelter screen</span></p>
          </div>
        </section>

        <section id="visual-design" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Visual Design</h2>

          <article className="ad-screen">
            <h3 className="ad-screen__title">Home Screen</h3>
            <div className="ad-annotated">
              <ul className="ad-annotations ad-annotations--left">
                <li>Side menu bar is provided.</li>
                <li>Greeting message is provided.</li>
                <li>Services are displayed in tag buttons.</li>
                <li>Services and products of Lollypaws are described.</li>
              </ul>
              <img className="ad-screen__main" src={screenHome} alt="AdoreMate home screen" />
              <ul className="ad-annotations ad-annotations--right">
                <li>Profile, wishlist, and notification icons are provided.</li>
                <li>Search bar with voice assistance is provided.</li>
                <li>Banners are designed in brutalistic style.</li>
                <li>Text narrator is introduced with the help of voice assistance.</li>
                <li>Minimalistic icons have been used in the tab bar.</li>
              </ul>
            </div>
          </article>

          <article className="ad-screen">
            <h3 className="ad-screen__title">Shelter Screen</h3>
            <div className="ad-annotated">
              <ul className="ad-annotations ad-annotations--left">
                <li>Minimalistic category session for searching the nearby location and categorizations.</li>
                <li>Popular shelters are displayed.</li>
                <li>Shelters near the given locations/landmarks are displayed.</li>
              </ul>
              <img className="ad-screen__main" src={screenShelter} alt="AdoreMate shelter screen" />
              <ul className="ad-annotations ad-annotations--right">
                <li>Banners are brutalistic, reflecting the latest trend.</li>
                <li>Locations are displayed in tag buttons.</li>
                <li>CTA for booking and checking the availability is provided.</li>
                <li>The images of the shelters, and their information, are displayed in cards.</li>
              </ul>
            </div>
          </article>

          <article className="ad-screen">
            <h3 className="ad-screen__title">Adopt Screen</h3>
            <div className="ad-annotated">
              <ul className="ad-annotations ad-annotations--left">
                <li>Selected locations are displayed in tag buttons.</li>
                <li>Donation banner with a clear CTA is provided.</li>
                <li>Adoption ads are displayed in cards with location.</li>
              </ul>
              <img className="ad-screen__main" src={screenAdopt} alt="AdoreMate adopt screen" />
              <ul className="ad-annotations ad-annotations--right">
                <li>Search and select up to 3 locations/landmarks is given to get a more accurate result.</li>
                <li>This will lead to the donation screen.</li>
                <li>Animal categories are displayed in a horizontal scroll.</li>
                <li>A swipe bar is provided to view the details of adoption.</li>
              </ul>
            </div>
          </article>
        </section>

        <section id="mockups" className="ad-section ad-reveal">
          <img className="ad-full-image" src={heroPhonesGrid} alt="AdoreMate app screens: home, adopt, and shelter, shown as a phone mockup collage" />
        </section>

        <section id="reflection" className="ad-section ad-reflection ad-reveal">
          <p className="ad-reflection__label">Learning</p>
          <div className="ad-reflection__box">
            <p>
              The good adoption design is about building trust, not just enabling discovery. I learned to balance
              emotional decisions with responsible matching, making the experience work for both adopters and
              animals.
            </p>
          </div>
          <hr className="ad-reflection__rule" />
          <p className="ad-reflection__signoff">Hyderabad, India</p>
          <p className="ad-reflection__signoff">2026</p>
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

export default ProjectAdoptDontShop
