import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ProjectPlaceholder from './pages/ProjectPlaceholder'
import ProjectAiRecruitment from './pages/ProjectAiRecruitment'
import ProjectAdoptDontShop from './pages/ProjectAdoptDontShop'
import ProjectWhoAreYouWhenYouVote from './pages/ProjectWhoAreYouWhenYouVote'
import ProjectFindingYourWay from './pages/ProjectFindingYourWay'
import ProjectCoverMitra from './pages/ProjectCoverMitra'
import BackgroundMusic from './components/BackgroundMusic'

function App() {
  return (
    <>
      <BackgroundMusic />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects/ai-recruitment-screening" element={<ProjectAiRecruitment />} />
        <Route path="/projects/pet-adoption" element={<ProjectAdoptDontShop />} />
        <Route path="/projects/who-are-you-when-you-vote" element={<ProjectWhoAreYouWhenYouVote />} />
        <Route path="/projects/covermitra" element={<ProjectCoverMitra />} />
        <Route path="/projects/tnstc" element={<ProjectFindingYourWay />} />
      </Routes>
    </>
  )
}

export default App
