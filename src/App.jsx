import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ProjectPlaceholder from './pages/ProjectPlaceholder'
import ProjectAiRecruitment from './pages/ProjectAiRecruitment'
import ProjectAdoptDontShop from './pages/ProjectAdoptDontShop'
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
        <Route
          path="/projects/who-are-you-when-you-vote"
          element={
            <ProjectPlaceholder
              title="Who are you, when you vote?"
              category="Editorial & Interaction Design | 2025"
            />
          }
        />
        <Route
          path="/projects/covermitra"
          element={<ProjectPlaceholder title="Before you need it." category="Insurance & Service Design | 2023" />}
        />
        <Route
          path="/projects/tnstc"
          element={<ProjectPlaceholder title="Finding your way." category="Public Service UX | 2022" />}
        />
      </Routes>
    </>
  )
}

export default App
