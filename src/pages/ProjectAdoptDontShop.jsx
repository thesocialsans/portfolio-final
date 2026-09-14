import { useRef } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
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
  { id: 'reflection', label: 'Reflection' },
]

function ProjectAdoptDontShop() {
  const containerRef = useRef(null)
  useScrollReveal(containerRef)

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
          <img className="ad-overview__visual" src={heroPhonesGrid} alt="AdoreMate app screens: home, adopt, and shelter" />
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

          <h3 className="ad-italic-head">Issues</h3>
          <p>
            AdoreMate will address the following issues by providing a platform for adopters to search, learn, and
            apply for adoption online. It can also speed up the process by linking adopters with shelters.
          </p>
          <div className="ad-three-col">
            <div>
              <h4>Overcrowding of pets</h4>
              <p>India has a significant stray animal population, with millions of animals ending up in shelters.</p>
            </div>
            <div>
              <h4>Lack of awareness</h4>
              <p>Many people in India are not aware of the benefits of adopting pets from shelters.</p>
            </div>
            <div>
              <h4>Stressful adoption process for animals</h4>
              <p>Shelter animals can experience stress during the adoption process.</p>
            </div>
          </div>

          <h3 className="ad-italic-head">Business Opportunities</h3>
          <p>
            AdoreMate has a number of business opportunities that could make it a successful venture. By carefully
            considering all of the factors involved, AdoreMate can position itself to be a leader in the pet
            adoption space.
          </p>
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
          <div className="ad-branding">
            <img className="ad-branding__logo" src={logoAdoreMate} alt="AdoreMate app logo" />
            <div className="ad-branding__details">
              <p className="ad-label">Colors</p>
              <div className="ad-swatches">
                <div className="ad-swatch">
                  <span className="ad-swatch__chip" style={{ background: '#070707' }} />
                  Deep Brown &middot; #070707
                </div>
                <div className="ad-swatch">
                  <span className="ad-swatch__chip" style={{ background: '#a87000' }} />
                  Brown &middot; #A87000
                </div>
                <div className="ad-swatch">
                  <span className="ad-swatch__chip ad-swatch__chip--bordered" style={{ background: '#f7f7f7' }} />
                  White / Lilac &middot; #F7F7F7
                </div>
              </div>
              <p className="ad-label">Typography</p>
              <p className="ad-branding__type">Manrope</p>
            </div>
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

          <h3 className="ad-italic-head">Concise Data</h3>
          <div className="ad-stats">
            <div className="ad-stat">
              <p className="ad-stat__num">20%</p>
              <p>
                <strong>Adoption Rates:</strong> Only 1 in 5 have adopted pets from animal shelters, indicating a
                relatively low adoption rate in India.
              </p>
            </div>
            <div className="ad-stat">
              <p className="ad-stat__num">45%</p>
              <p>
                <strong>Awareness about Shelters:</strong> 2 participants weren&rsquo;t aware of the animal shelters
                in their locality, highlighting a lack of awareness about the available resources for stray and
                abandoned animals.
              </p>
            </div>
            <div className="ad-stat">
              <p className="ad-stat__num">20%</p>
              <p>Only 1 participant was aware of overcrowding issues faced by animal shelters.</p>
            </div>
            <div className="ad-stat">
              <p className="ad-stat__num">60%</p>
              <p>
                <strong>Funding constraints:</strong> 3 participants raised concern about the funding constraints
                faced by animal shelters, making it difficult for them to provide adequate care and facilities.
              </p>
            </div>
            <div className="ad-stat">
              <p className="ad-stat__num">20%</p>
              <p>
                <strong>Volunteer engagement:</strong> Only 1 participant reported volunteering at animal shelters,
                suggesting a need for increased efforts to engage the community in supporting these organizations.
              </p>
            </div>
            <div className="ad-stat">
              <p className="ad-stat__num">45%</p>
              <p>
                <strong>Adoption Barriers:</strong> Among the 5 interviewed individuals, 2 cited complex adoption
                processes and concerns about compatibility as barriers preventing them from adopting pets from
                shelters.
              </p>
            </div>
          </div>
          <p className="ad-callout">
            These statistics highlight the limited awareness, adoption rates, and engagement in animal welfare
            activities among individuals in Chennai, India. The data underscores the need for initiatives like the
            Lollypaws app to address these challenges and promote responsible pet ownership, adoption, and community
            involvement.
          </p>
        </section>

        <section id="affinity" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Affinity Mapping</h2>
          <div className="ad-three-col">
            <div>
              <h4>Awareness &amp; Knowledge</h4>
              <ul>
                <li>Limited awareness of overcrowding issues at animal shelters.</li>
                <li>Limited knowledge of volunteer opportunities at shelters.</li>
                <li>Lack of understanding about the adoption process.</li>
                <li>Low attendance at community events related to animal welfare.</li>
              </ul>
            </div>
            <div>
              <h4>Technology &amp; Digital Engagement</h4>
              <ul>
                <li>Low familiarity with mobile apps or online platforms for pet adoption.</li>
                <li>Limited access to information about available pets for adoption through digital channels.</li>
                <li>Low engagement in social media communities related to animal shelters or pet adoption.</li>
                <li>Low adoption rate from shelters even after advertisements published.</li>
              </ul>
            </div>
            <div>
              <h4>Adoption Barriers &amp; Limited Resources</h4>
              <ul>
                <li>Many rental and apartment housing communities have restrictions on pet ownership.</li>
                <li>Owning a pet requires time, effort, and a long-term commitment.</li>
                <li>Some people think pet ownership is expensive.</li>
                <li>Animal shelters often struggle with limited space and resources.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="challenges" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Design Challenges</h2>
          <ol className="ad-challenges">
            <li>Collaboration &amp; Networking</li>
            <li>Overcrowding and limited resources</li>
            <li>Adoption Barriers</li>
            <li>Lack of awareness</li>
            <li>Volunteering &amp; community engagement</li>
          </ol>

          <h3 className="ad-italic-head">Pain Points</h3>
          <div className="ad-two-col">
            <div>
              <h4>Long Process</h4>
              <p>This can create a hassle for new pet parents and those who want to board their pets.</p>
            </div>
            <div>
              <h4>Unverified Shelters</h4>
              <p>Many pet shelter websites &amp; apps are outdated and confusing.</p>
            </div>
            <div>
              <h4>No Centralised Platform</h4>
              <p>This can lead to confusion and lack of awareness.</p>
            </div>
            <div>
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

          <h2 className="ad-eyebrow ad-eyebrow--spaced">High-Fi Wireframes &mdash; Conceptualisation</h2>
          <img className="ad-full-image" src={wireframesHifi} alt="High-fidelity grayscale wireframes for the home, shelter, and adopt screens" />
        </section>

        <section id="visual-design" className="ad-section ad-reveal">
          <h2 className="ad-eyebrow">Visual Design</h2>

          <article className="ad-screen">
            <img className="ad-screen__main" src={screenHome} alt="AdoreMate home screen" />
            <h3 className="ad-screen__title">Home Screen</h3>
            <ul className="ad-annotations">
              <li>Side menu bar is provided.</li>
              <li>Profile, wishlist, and notification icons are provided.</li>
              <li>Greeting message is provided.</li>
              <li>Search bar with voice assistance is provided.</li>
              <li>Services are displayed in tag buttons.</li>
              <li>Banners are designed in brutalistic style.</li>
              <li>Services and products of Lollypaws are described, with a text narrator introduced with the help of voice assistance.</li>
              <li>Minimalistic icons have been used in the tab bar.</li>
            </ul>
          </article>

          <article className="ad-screen">
            <img className="ad-screen__main" src={screenShelter} alt="AdoreMate shelter screen" />
            <h3 className="ad-screen__title">Shelter Screen</h3>
            <ul className="ad-annotations">
              <li>Banners are brutalistic, reflecting the latest trend.</li>
              <li>Minimalistic category session for searching the nearby location and categorizations.</li>
              <li>Locations are displayed in tag buttons.</li>
              <li>Popular shelters are displayed, with a CTA for booking and checking availability.</li>
              <li>Shelters near the given locations/landmarks are displayed.</li>
              <li>The images of the shelters, and their information, are displayed in cards.</li>
            </ul>
          </article>

          <article className="ad-screen">
            <img className="ad-screen__main" src={screenAdopt} alt="AdoreMate adopt screen" />
            <h3 className="ad-screen__title">Adopt Screen</h3>
            <ul className="ad-annotations">
              <li>Search and select up to 3 locations/landmarks is given to get a more accurate result.</li>
              <li>Selected locations are displayed in tag buttons.</li>
              <li>A donation banner with a clear CTA leads to the donation screen.</li>
              <li>Animal categories are displayed in a horizontal scroll.</li>
              <li>Adoption ads are displayed in cards with location.</li>
              <li>A swipe bar is provided to view the details of adoption.</li>
            </ul>
          </article>
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
        </section>
      </main>

      <div className="site-fixed-footer site-fixed-footer--transparent">
        <SiteFooter />
      </div>
    </div>
  )
}

export default ProjectAdoptDontShop
